/* 
id = "nome"
id = "cpf"
id = "cep"
id = "uf"
id = "rua"
id = "numero"
id = "complemento"
id = "btnCadastrar" */


// let botao = document.getElementById("btnCadastrar")

// botao.addEventListener("click",()=>{
//     let resp = document.getElementById("r")
//     let nomeDigitado = document.getElementById("nome",).value;
//     resp.innerHTML = nomeDigitado


// });
const API = "http://localhost:3000/alunos";

const formCadastro = document.getElementById("frmCadastro")
const inputNome = document.getElementById("Nome")
const inputCpf = document.getElementById("Cpf")
const inputCep = document.getElementById("Cep")
const inputUf = document.getElementById("Uf")
const inputRua = document.getElementById("Rua")
const inputNumero = document.getElementById("Numero")
const inputComplemento = document.getElementById("Complemento")


async function salvar(e){
    e.preventDefault();
    console.log("Botão funcionando");
    let nome = inputNome.value
    let cpf = inputCpf.value
    let cep = inputCep.value
    let uf = inputUf.value
    let rua = inputRua.value
    let numero = inputNumero.value
    let complemento = inputComplemento.value

    let novoAluno = {
        nome, cpf, cep, uf, rua, numero, complemento
    }
    console.log(novoAluno)
    try {
        const resposta = await fetch(API, {
            method: "POST",
            body: novoAluno,
            headers: {"Content-Type" : "application/json"}
        });
        resposta.status === 201 ? window.location.href = "index.html" : console.log("Erro ao cadastrar")
    } catch (e) {
        console.error(e)
        
    }
}

formCadastro.addEventListener("submit",salvar)
