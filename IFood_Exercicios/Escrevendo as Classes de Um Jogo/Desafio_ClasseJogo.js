class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() { 
    
     let ataque="";

     if (this.tipo == "guerreiro") {
         ataque = 'espada';

     } else if (this.tipo == "mago") {
         ataque = "magia"
          
     } else if (this.tipo == "monge") {
        ataque = 'artes marciais';
          
      } else{
          ataque = 'shuriken';
     }
  
      console.log (`O ${this.tipo} ${this.nome}, ${this.idade} anos, atacou usando ${ataque}`)
    }
    }  
 
  const heroi1 = new Heroi('Rubio Hagrid', 45 , 'mago');
  const heroi2 = new Heroi('He-Man', 22, 'guerreiro');
  const heroi3 = new Heroi('Obadiah', 17, 'monge');
  const heroi4 = new Heroi('Jiraiya',  3, 'ninja');
  
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
    