const botaoEnviar = document.getElementById("btn-enviar")
const mensagemDoUsuario = document.querySelector("textarea")
const campoObrigatorioMensagem = document.querySelector("#mensagem-usuario")
const formulario = document.querySelectorAll("div[class = 'validacao-usuario']")


function verificarCampoNaoPreenchido(campo, mensagemCampo, itemPercorrido ) {  

    valorCampo = campo.value
    if (valorCampo == "") {
        campo.classList.add("campo-vazio")
        itemPercorrido.classList.add("alterar-espacamento")
        mensagemCampo.innerHTML = "campo obrigátorio"
    } else {
        campo.classList.remove("campo-vazio")
        itemPercorrido.classList.remove("alterar-espacamento")
        mensagemCampo.innerHTML = ""
    }
    
}

function verificarCampoPreenchido(campo, mensagemCampo, itemPercorrido) {
    valorCampo = campo.value
    if (valorCampo !== "") {
        campo.classList.remove("campo-vazio")
        itemPercorrido.classList.remove("alterar-espacamento")
        campo.classList.add("campo-preenchido")
        mensagemCampo.innerHTML = ""
    } else {
        campo.classList.remove("campo-preenchido")
    }
}

botaoEnviar.addEventListener('click', function () {
    formulario.forEach(function(item){

        verificarCampoNaoPreenchido(mensagemDoUsuario, campoObrigatorioMensagem, item)

        let campoFormulario = item.querySelector("input")
        let campoObrigatorio = item.querySelector("p")
        
        
        verificarCampoNaoPreenchido(campoFormulario, campoObrigatorio, item)
    })

})


formulario.forEach(function(item){
    
    item.addEventListener('change', function() {

        verificarCampoPreenchido(mensagemDoUsuario, campoObrigatorioMensagem, item)

        let campoFormulario = item.querySelector("input")
        let campoObrigatorio = item.querySelector("p")

        verificarCampoPreenchido(campoFormulario, campoObrigatorio, item)
    })
})