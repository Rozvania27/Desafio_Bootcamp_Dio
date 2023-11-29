nome = str(input("Digite seu nome: "))
experiencia= input("Informe a quantidade de experiencia= ")
quantidade_de_experiencia= int(experiencia)

nivel=["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal", "Radiante"]

if (quantidade_de_experiencia <= 1000): 
   print ("Ferro")
   print (f"O Herói de nome {nome} está no nível de {nivel[0]}")

elif (quantidade_de_experiencia >= 1001 and quantidade_de_experiencia <= 2000): 
    print ("Bronze")
    print (f"O Herói de nome {nome} está no nível de {nivel[1]}")

elif (quantidade_de_experiencia >= 2001 and quantidade_de_experiencia <= 5000): 
    print ("Prata")
    print (f"O Herói de nome {nome} está no nível de {nivel[2]}")

elif (quantidade_de_experiencia >= 5001 and quantidade_de_experiencia <= 7000):
    print ("Ouro")
    print (f"O Herói de nome {nome} está no nível de {nivel[3]}")

elif (quantidade_de_experiencia >= 7001 and quantidade_de_experiencia <= 8000): 
    print ("Platina")
    print (f"O Herói de nome {nome} está no nível de {nivel[4]}")

elif (quantidade_de_experiencia >= 8001 and quantidade_de_experiencia <= 9000):  
    print ("Ascendente")  
    print (f"O Herói de nome {nome} está no nível de {nivel[6]}")

elif (quantidade_de_experiencia >= 9001 and quantidade_de_experiencia <= 10000):  
    print ("Imortal")
    print (f"O Herói de nome {nome} está no nível de {nivel[7]}")

elif (quantidade_de_experiencia >= 10001 and quantidade_de_experiencia <= 11000):
    print ("Radiante")
    print (f"O Herói de nome {nome} está no nível de {nivel[8]}")
             






