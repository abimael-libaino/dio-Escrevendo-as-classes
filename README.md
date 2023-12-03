# Enunciado
## 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}"
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

| Tipo | Exibir no ataque |
| ----- |-----|
| mago | atacou usando magia|
| guerreiro |atacou usando espada|
| monge |atacou usando artes marciais|
| ninja | atacou usando shuriken|

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"

  ex: 
  
  - mago atacou usando magia

  - guerreiro atacou usando espada
## Instruções de utilização
Pode usar o codigo em computador com node.js instalado.
### Procedimento para utilização:
Verifique se seu computador tem o modulo ```prompt-sync ``` instalado junto com o node.js. 
Clone o repositorio em uma pasta usando o comando:
~~~
git clone https://github.com/abimael-libaino/
~~~
Se não estiver instalado, use no terminal o seguinte comamando na pasta gerada:
~~~
npm install prompt-sync
~~~
e em seguida use o seguinte comando para rodar o codigo:
~~~
node .\index.js
~~~