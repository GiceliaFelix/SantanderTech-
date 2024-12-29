const nomeDeUsuarios = ["Ramon", "Renan", "Camilly", "Junior"]
let indiceDoUsuario = 0
const indiceAtual = nomeDeUsuarios.length
console.log({indiceAtual})

while (indiceDoUsuario < indiceAtual) {
    console.log("Olá", nomeDeUsuarios [indiceDoUsuario])
    indiceDoUsuario = indiceDoUsuario + 1
}