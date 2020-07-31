from bcrypt import hashpw, checkpw, gensalt
from re import search

def pss_hash(pssword):#encriptar a senha
    hash = hashpw(pssword.encode('utf8'), gensalt()) #hashpw recebe a senha, encripta e aplica um salt
    return hash #retorna a senha já como hash

def pss_check(pssword, hashed): #recebe a senha e a senha com hash e checa se elas são compatíveis
    if checkpw(pssword, hashed):
        return True #se sim retorna true
    else:
        return False

def validate_pss(pssword, pssword_check):
    if len(pssword) < 8 or len(pssword) > 30:
        return 'A sua senha deve ter entre 8 e 30 caracteres'
    elif search(r"[0-9]", pssword) == None:
        return 'A senha deve conter letras e números e não pode ter espaços'
    elif search(r"[a-z]", pssword) == None and search(r"[A-Z]", pssword) is None:
        return 'A senha deve conter letras e números e não pode ter espaços'
    elif search(" ", pssword) != None:
        return 'A senha deve conter letras e números e não pode ter espaços'
    elif (pssword_check != pssword):
        return 'As senhas devem ser iguais'
    else:
        return True
