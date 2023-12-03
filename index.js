const prompt = require("prompt-sync")({ sigint: true }) //Inclui o modulo "prompt-sync" para poder ser usado no codigo.
class tipo {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    atacar(){
    let weapon = ' '
   switch(this.type){
    case 'mago':
        weapon = 'magia'
        break
    case 'guerreiro':
        weapon = 'espada'
        break
    case 'monge':
        weapon = 'artes marciais'
        break
    case 'ninja':
        weapon = 'shuriken'
        break
    default:
        weapon = 'none'
        } 
    if(weapon != 'none'){
        console.log(`O ${this.type} atacou usando ${weapon}`)//vai printar a frase com os dados
        }else{
            console.log('Não existe esse tipo de combatente')
        }
    }
}
let choice = new tipo ()
choice.name = prompt('Escolha o nome do personagem: ')
choice.age = prompt('Qual a idade do personagem: ')
choice.type = prompt('Qual a classe? (monge, ninja, guerreiro ou mago):')
choice.atacar()