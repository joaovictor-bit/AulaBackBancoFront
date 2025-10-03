function log(etapa){
    return console.log(etapa + new Date().toLocaleTimeString())
}
log("iniciando projeto ")

function requisicaoSimulada(nome, tempoMs = 1500, deveFalhar = false){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(deveFalhar){
                reject(new Error(`Falhar em ${nome}`))
            }else{
                resolve(`${nome} concluída em ${tempoMs}ms`)
            }
        },tempoMs)
    })
}

function exemploThenCatch(){
    log("1. Inicio (sem await)")

    requisicaoSimulada("Buscar Usuario", 2000)
        .then((resultado)=>{ 
            log(`3. Then ${resultado}`)
        })
        .catch((erro)=>{
            console.log("Erro capturado com .catch" + erro.message)
        })
    log("2. Continuou o fluxo sem esperar a promise")
}

//exemploThenCatch()

async function exemploTryCatch(){
    log("1. Etapa com  Async Await")
    try {
        const resultado = await requisicaoSimulada("Buscar Usuario", 5000)
        log("2. Resultado obtido com await " + resultado)
    } catch (error) {
        console.error(error)
    }
    log("3. Só roda depois do Await ")
}

exemploTryCatch()

