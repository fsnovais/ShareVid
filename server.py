from flask import Flask, render_template, request
from password import pss_hash, pss_check
from validate_email import validate_email
import ibm_db

#conn = ibm_db.connect("database","username","password")
app = Flask(__name__)
conn = ibm_db.connect("Server=****;Port=50000;Hostname=****; Database=BLUDB;UID=**;PWD=senha;", 'dgq68475', 'dcfgng39q@r3jpk2')
	

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/login/", methods=['POST', 'GET'])
def login():
	email = request.args.get('email')
	password = request.args.get('password')
	#consertar: a condição é sempre falsa
	if password == None or email== None:
		return 'O email e a senha precisam ser preenchidos para efetuar o login'
	#TODO: validar email, checar senha com o banco de dados e garantir acesso
	#se o user logar direitinho
	return 'tudo correu bem'

@app.route("/register/user/", methods=['POST', 'GET'])
def register_usr():
#TODO: transferir a validação de dados para outro arquivo e importar
#p/ poupar linhas e deixar o código mais limpo
	name = request.args.get('name')
	email = request.args.get('email')
	pss = request.args.get('password')
	psscheck = request.args.get('password2')
	if psscheck != pss:
		return 'As senhas devem ser iguais'
	elif len(pss) >= 8 and pss.isalnum and validate_email(email) and len(name) <= 35 and len(name) >= 2:
		pss = pss_hash(pss) #TODO: salvar na db
		return 'conta criada'
	else:
		return 'falha no registro'

@app.route("/register/estabelecimento/", methods=['POST', 'GET'])
def register_stb(): 
	name = request.args.get('name')
	email = request.args.get('email')
	uf = request.args.get('uf')
	cep = request.args.get('cep')
	logradouro = request.args.get('logradouro')
	num = request.args.get('num')
	pss = request.args.get('password')
	psscheck = request.args.get('password2')
	if psscheck != pss:
		return 'As senhas devem ser iguais' #TODO: deixar a validação descritiva em caso de erros
	elif len(pss) >= 8 and pss.isalnum and validate_email(email) and len(name) <= 35 and len(name) >= 2 and len(uf) == 2 and len(cep) == 8 and len(logradouro) <= 35 and len(num) <= 5:
		pss = pss_hash(pss) #TODO: salvar na db
		return 'estabelecimento registrado'
	else:
		return 'falha no registro'


#@app.route("/teste/", methods=['POST', 'GET'])
#def test():
#	 ibm_db.exec_immediate(conn, 'INSERT INTO teste VALUES(\'sim\')')
#	 return 'vai olhar o banco de dados'

if __name__ == "__main__":
	app.run()
