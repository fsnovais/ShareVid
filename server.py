from flask import Flask, render_template, request, session, redirect, url_for
from password import pss_hash, pss_check, validate_pss
from validate_email import validate_email
from datetime import timedelta
import ibm_db


#conn = ibm_db.connect("database","username","password")
app = Flask(__name__)
app.secret_key = "TROCAR ESSA SENHA"
app.permanent_session_lifetime = timedelta(days=20)
conn = ibm_db.connect("Server=***;Port=50000;Hostname=**; Database=BLUDB;UID=**;PWD=**;", 'uid', 'pss')

@app.route("/")
def home():
	if 'email' in session:
		return
	else:
		return redirect(url_for("login"))


@app.route("/login/", methods=['POST', 'GET'])
def login():
	if request.method == "POST":
		email = request.args.get('email')
		password = request.args.get('password')
		sql = 'SELECT email, senha FROM usuarios WHERE email = ?'
		stmt = ibm_db.prepare(conn, sql)
		param = tuple((email, password))
		ibm_db.bind_param(stmt, 1, email)
		ibm_db.execute(stmt)
		accInfo = ibm_db.fetch_assoc(stmt)
		if pss_check(password.encode(), accInfo["SENHA"].encode()):
			password = None
			session.permanent = True
			session['email'] = email
			return redirect(url_for("home"))
		return 'senha inválida'

@app.route("/register/user/", methods=['POST', 'GET'])
def register_usr():
	if request.method == "POST":
		name = request.args.get('name')
		email = request.args.get('email')
		pss = request.args.get('password')
		psscheck = request.args.get('password2')
		if len(pss) >= 8 and pss.isalnum and validate_email(email) and len(name) <= 35 and len(name) >= 2 and validate_pss(pss, psscheck):
			pss = pss_hash(pss)
			salvar_dados = 'INSERT INTO usuarios(nome, email, senha) VALUES(?, ?, ?)'
			param = tuple((name, email, pss))
			stmt = ibm_db.prepare(conn, salvar_dados)
			ibm_db.execute(stmt, param)
			session.permanent = True
			session['email'] = email
			session['nome'] = name
			return redirect(url_for("home"))
		else:
			return 'falha no registro'
	return

@app.route("/register/estabelecimento/", methods=['POST', 'GET'])
def register_stb(): 
	if request.method == "POST":
		name = request.args.get('name')
		email = request.args.get('email')
		uf = request.args.get('uf')
		cep = str(request.args.get('cep'))
		logradouro = str(request.args.get('logradouro'))
		num = str(request.args.get('num'))
		pss = request.args.get('password')
		psscheck = request.args.get('password2')
		if validate_email(email) and len(name) <= 35 and len(name) >= 2 and len(uf) == 2 and len(cep) == 8 and len(logradouro) <= 35 and len(num) <= 5 and validate_pss(pss, psscheck):
			pss = pss_hash(pss)
			salvar_dados = 'INSERT INTO estabelecimentos(nome, email, senha, uf, cep, logradouro, numero) VALUES(?, ?, ?, ?, ?, ?, ?)'
			param = tuple((name, email, pss, uf, cep, logradouro, num))
			stmt = ibm_db.prepare(conn, salvar_dados)
			ibm_db.execute(stmt, param)
		else:
			return 'falha no registro'
	else:
		return

@app.route('/user/')
def user():
	if "email" in session:
		email = session["email"]
	else:
		return redirect(url_for("login"))

@app.route('/logout/')
def logout():
	session.pop("email", None)
	session.pop("name", None)
	return redirect(url_for("login"))

if __name__ == "__main__":
	app.run(debug=True)
