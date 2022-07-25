//ESCREVENDO STRING E ALTERANDO EXIBIÇÃO
console.log("ESCREVENDO STRING E ALTERANDO EXIBIÇÃO");

let nome = prompt("Qual seu nome?")
let cor = prompt("Qual sua cor favorita?")
let citação = prompt("Qual sua citação favorita?")

//templeta concatenação: precisa colocar os espaços!
let mensagem1 = "A cor favorita de " + nome + " é " + cor
console.log(mensagem1);

//template string: só da pa usa se usar crase!
let mensagem2 = `A cor favorita de ${nome} é ${cor}`
console.log(mensagem2);

mensagem1 = `${mensagem1}, e a citação favorita é "${citação}"`
console.log(mensagem1);
//ou \"\" pra colocar entre aspas

mensagem2 = 
`Nome: ${nome}
Cor favorita: ${cor}`
console.log(mensagem2);
//ou \n pra quebrar a linha

//MANIPULANDO STRING
console.log("MANIPULANDO STRING - Módulos e propriedades");

console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres.`);
console.log(`Esse nome possui a letra A? ${nome.includes("a")}`);