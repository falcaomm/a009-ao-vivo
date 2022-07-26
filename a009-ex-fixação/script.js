//EXERCÍCIO FIXAÇÃO
console.log("EXERCÍCIO FIXAÇÃO");

const nome = prompt("Qual seu nome?");
const email = prompt("Qual seu email?");

let mensagem = 
`O email ${email} foi cadastrado com sucesso.
Bem vindo(a) ${nome}!
Seu nome possui ${nome.length} caracteres.`
console.log(mensagem);

let mensagemAlterada = mensagem.replaceAll("r","l")
console.log(mensagemAlterada);

console.log(`O email cadastrado possui @? ${email.includes("@")}`);