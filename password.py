from bcrypt import hashpw, checkpw, gensalt

def pss_hash(pssword):#encriptar a senha
    hash = hashpw(pssword.encode('utf8'), gensalt()) #hashpw recebe a senha, encripta e aplica um salt
    return hash #retorna a senha já como hash

def pss_check(pssword, hashed): #recebe a senha e a senha com hash e checa se elas são compatíveis
    if checkpw(pssword, hashed):
        return True #se sim retorna true
    else:
        return False