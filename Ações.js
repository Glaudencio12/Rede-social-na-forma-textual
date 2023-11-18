var dados = []
var postagens = []

function cadastrar() {
    var nome = document.getElementById("nome").value
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (nome === "" || login === "" || senha === "") {
        window.alert("Erro: Todos os campos devem ser preenchidos!")
        return
    }

    for (var i = 0; i < dados.length; i++) {
        if (dados[i].login === login) {
            window.alert("Erro: Login já existente!")
            return
        }
    }

    var usuario = {
        nome: nome,
        login: login,
        senha: senha
    };

    dados.push(usuario)
    
    var nome = document.getElementById("nome").value = ""
    var login = document.getElementById("login").value = ""
    var senha = document.getElementById("senha").value = ""

}

function ir_tela_login() {
    document.getElementById("cad").style.display = "none"
    document.getElementById("cadastroForm").style.display = "none"
    document.getElementById("log").style.display = "block"
    document.getElementById("loginForm").style.display = "block"
}

function voltar_tela_cadastro() {
    document.getElementById("cad").style.display = "block"
    document.getElementById("cadastroForm").style.display = "block"
    document.getElementById("log").style.display = "none"
    document.getElementById("loginForm").style.display = "none"
}

function entrar() {
    var login = document.getElementById("loginEntrar").value
    var senha = document.getElementById("senhaEntrar").value
    
    if (login === "" || senha === "") {
        window.alert("Erro: Todos os campos devem ser preenchidos!")
        return
    }
    
    for (var i = 0; i < dados.length; i++) {
        if (dados[i].login === login && dados[i].senha === senha) {
            window.alert("Bem vindo, " + dados[i].nome + "!")
            var login = document.getElementById("loginEntrar").value = ""
            var senha = document.getElementById("senhaEntrar").value = ""

            document.getElementById("log").style.display = "none"
            document.getElementById("loginForm").style.display = "none"
            document.getElementById("menu").style.display = "block"
            document.getElementById("menuForm").style.display = "block"
            return;
        }
    }

    window.alert("Erro: Login ou senha incorretos")
}

function sair_menu_user() {
    document.getElementById("menu").style.display = "none"
    document.getElementById("menuForm").style.display = "none"
    document.getElementById("log").style.display = "block"
    document.getElementById("loginForm").style.display = "block"
}
function Executar_acao() {
    if (document.getElementById("post").checked) {

        document.getElementById("menu").style.display = "none"
        document.getElementById("menuForm").style.display = "none"
        document.getElementById("posti").style.display = "block"
        document.getElementById("field").style.display = "block"
        document.getElementById("post_voltar_menu").style.display = "block"
    }
    else if (document.getElementById("timeline").checked) {

        document.getElementById("menu").style.display = "none"
        document.getElementById("menuForm").style.display = "none"
        document.getElementById("time_post").style.display = "block"
        document.getElementById("exibir_time").style.display = "block"
        document.getElementById("time_voltar_menu").style.display = "block"
        document.getElementById("ver_historico").style.display = "block"
    }
}

function voltar_menu_user() {
    var voltar_time = document.getElementById("time_voltar_menu")
    var voltar_post = document.getElementById("post_voltar_menu")

    voltar_post.addEventListener("click", function() {
        document.getElementById("menu").style.display = "block"
        document.getElementById("menuForm").style.display = "block"
        document.getElementById("posti").style.display = "none"
        document.getElementById("field").style.display = "none"
    })

    voltar_time.addEventListener("click", function() {
        document.getElementById("menu").style.display = "block"
        document.getElementById("menuForm").style.display = "block"
        document.getElementById("time_post").style.display = "none"
        document.getElementById("exibir_time").style.display = "none"
        document.getElementById("time_voltar_menu").style.display = "none"
        document.getElementById("ver_historico").style.display = "none"
    })
}
function Publicar_post() {
    var conteudo_text = document.getElementById("textpost").value

    if (conteudo_text == "") {
        window.alert("Preencha o campo se quiser postar!")
        return
    }
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    var conteudo = {
        conteudo_text: conteudo_text,
        data: data,
        hora: hora,
        minuto: minuto
    }
    postagens.push(conteudo)

    var conteudo_text = document.getElementById("textpost").value = ""
}

function ver_timeline() {
    var campo_exibicao = document.getElementById("exibir_time")

    var todas_postagens = ""

    for (let i = 0; i < postagens.length; i++) {
        var postagem = postagens[i];
        todas_postagens += postagem.conteudo_text + " " + "às" + postagem.hora + "h" + ":" + postagem.minuto + "min" + "<br>"
    }

    campo_exibicao.innerHTML = todas_postagens
}

