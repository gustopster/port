//Validar Campos
const form = document.getElementById("form-contato");

if (form.addEventListener) {
	form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {
	form.attachEvent("onsubmit", validaCadastro);
};

function validaCadastro(evt) {
	let nome = document.getElementById('nome');
	let email = document.getElementById('email');
	let WhatsApp = document.getElementById('WhatsApp');
	let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	let fWhatsApp = /\d\d\d\d\d\d\d\d\d\d\d\d\d/;
	let contErro = 0;


	/* Validação do campo nome */
	caixa_nome = document.querySelector('.msg-nome');
	if (nome.value == "") {
		caixa_nome.innerHTML = "Por Favor! preencha o Nome";
		caixa_nome.style.display = 'block';
		contErro += 1;
	} else {
		caixa_nome.style.display = 'none';
	}

	/* Validação do campo email */
	caixa_email = document.querySelector('.msg-email');
	if (email.value == "") {
		caixa_email.innerHTML = "Por Favor! preencha o E-mail";
		caixa_email.style.display = 'block';
		contErro += 1;
	} else if (filtro.test(email.value)) {
		caixa_email.style.display = 'none';
	} else {
		caixa_email.innerHTML = "Formato do E-mail inválido";
		caixa_email.style.display = 'block';
		contErro += 1;
	}

	/* Validação do campo WhatsApp */
	caixa_WhatsApp = document.querySelector('.msg-WhatsApp');
	if (WhatsApp.value == "") {
		caixa_WhatsApp.innerHTML = "Por Favor! Informar seu WhatsApp";
		caixa_WhatsApp.style.display = 'block';
		contErro += 1;
	} else if (fWhatsApp.test(WhatsApp.value)) {
		caixa_WhatsApp.style.display = mandarWhatsApp();
	} else {
		caixa_WhatsApp.innerHTML = "Formato do WhatsApp inválido. Verifique se informou o 55 e o DDD";
		caixa_WhatsApp.style.display = 'block';
		contErro += 1;
	}

	if (contErro > 0) {
		evt.preventDefault();
	}
};
// Enviar Mensagem ao WhatsApp do Prestador
function mandarWhatsApp() {

	// Informações do Usuário INICIO \\
	let nome = document.getElementById("nome").value;
	let email = document.getElementById("email").value;
	let WhatsApp = document.getElementById("WhatsApp").value;
	// Informações do Usuário FINAL \\

	// Mensagem do WhatsApp Para o Cliente INICIO \\
	let abrirWhats = window.open(`https://wa.me/5515991180605?text=Ol%C3%A1%2C%20me%20chamo(${nome})%20e%20visualizei%20seu%20Portf%C3%B3lio.%20Podemos%20marcar%20uma%20reuni%C3%A3o%3F%20(esse%20%C3%A9%20meu%20whats%20${WhatsApp}%20e%20email%20${email}%20para%20retorno).%20Obrigado(a)!`, '_blank');
	// Mensagem do WhatsApp Para o Cliente FINAL \\
};
const ingles = document.getElementById("en");
//Traduzir para o Inglês INICIO
ingles.addEventListener("click", function(){
    let traduzir = document.getElementById("geralSite");
    traduzir.innerHTML = `
    <body id="geralSite" class="text-light">
    <nav class="navbar navbar-expand-sm">
        <button id="botaoToggler" class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
            aria-label="Alterna navegação"><b>MENU</b>
        </button>
        <a href="index.html"><img src="css/Logo-tipo.gif" class="navbar-brand" width="140" height="130"></a>
        <div id="navbarTogglerDemo03" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
                <li class="nav-item">
                    <a class="text-light nav-link " href="#perfilImg">
                        <h3>About</h3>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="text-light nav-link " href="#gifUmProjeto">
                        <h3>Projects</h3>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="text-light nav-link " href="#agradecimentos">
                        <h3>Acknowledgments</h3>
                    </a>
                </li>
                <!--Contato INICIO-->
                <button id="botaoContatoCabeçalho" type="button" class="btn" data-toggle="modal"
                    data-target="#modalExemplo">
                    <b>Contact</b>
                </button>
            </ul>
            <!-- Modal -->
            <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-body">
                                <div class='container row-md text-right'>
                                    <!--BOTÃO FECHAR MODAL INICIO-->
                                    <button type="button" class="btn btn-lg bg-danger text-center text-light p-2 mb-2"
                                        data-dismiss="modal" aria-label="Close">X
                                    </button>
                                    <!--BOTÃO FECHAR MODAL FINAL-->
                                    <h5 class="text-center">Please enter your contact information</h5>
                                    <form action="index.html" method="get" id="form-contato"
                                        class="shadow-lg p-5 mb-5 border border-dark text-left">
                                        <div class="form-group">
                                            <label for="nome" class="text-light">Name</label>
                                            <input type="text" class="form-control" id="nome" name="nome"
                                                placeholder="Type your Name">
                                            <span class='msg-erro msg-nome'></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="text-light">E-mail</label>
                                            <input type="email" class="form-control" id="email" name="email"
                                                placeholder="Type your E-mail">
                                            <span class='msg-erro msg-email'></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="text" class="text-light">Phone (WhatsApp)</label>
                                            <input type="number" placeholder="1+DDD+Number" class="form-control"
                                                id="WhatsApp" name="WhatsApp" oninput="javascript: 
                                        if (this.value.length > this.maxLength)
                                        this.value = this.value.slice(0, this.maxLength);" type="number" minlength="11"
                                                maxlength="13">
                                            <span class='msg-erro msg-WhatsApp'></span>
                                        </div>
                                        <button id="botaoEnviar" type="submit"
                                            class="btn-tarefa btn btn-lg btn-block text-dark enviarModal">
                                            Send
                                        </button>
                                    </form>
                                </div>
                                <!--Footer INICIO MODAL-->
                                <footer id="footer" class="footer bg-transparent">
                                    <div class="row">
                                        <div class="col-md text-center">
                                            <h6 class="text-center text-light">&copy <a
                                                    href="https://www.linkedin.com/in/gustavo-gomes-ggs/"
                                                    target="_blank" class="footerGeral">gustopster</a> all rights
                                                    reserved
                                            </h6>
                                        </div>
                                </footer>
                                <!--Footer FINAL MODAL-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <section class="mb-5">
        <div class="text-right mr-2 p-1">
        <a href="index.html" class="btn btn-sm text-light"><img src="css/ptbr.png" width="25"> PT </a>
        </div>
        <div class="container text-center">
            <div class="row">
                <div class="p-1">
                    <img id="perfilImg" src="css/Perfil.jpg">
                    <h2 class=""><b>Gustavo "Gustopster" Gomes</b></h2>
                    <article class="p-3 text-center">From a simple customer service, to the creation of a complex application (That's me lol).
                        When I started in the area I never imagined that I could learn so much and apply it in any
                        situation. For this reason I chose
                        to specify everything I know in my portfolio. I left the two areas that I work (Infrastructure and
                        Development). I have aptitude in both and I love
                        and I love each one. So if there is any interest check out my CVs below:
                    </article>
                    <a class="btn embrevezaum text-dark mb-3" href="pdf/CV GGS Desenvolvedor Front End.pdf"
                        target="_blank"><b>Front End Developer</b></a>
                    <a class="btn bg-transparent btn-outline-light mb-3 analistaGTI"
                        href="pdf/CV GGS Gestão em GOV TI.pdf" target="_blank"><b>IT Management Analyst</b></a>
                    <article class="p-3 text-center">Now if you are not a recruiter and need a technical help in your enterprise. Click <a href="https://api.whatsapp.com/send?phone=5515991180605&text=Visualizei%20seu%20Portf%C3%B3lio.%20Posso%20solicitar%20um%20or%C3%A7amento%3F" target="_blank" class="text-transparent consultoria"><b>HERE</b></a> to schedule a Consulting.</article>
                </div>
            </div>
        </div>
        </div>
    </section>
    <section class="my-5">
        <div class="container text-center ">
            <h1 id="gifUmProjeto" class="text-light"><b>Projects</b></h1>
            <p class="text-light">From the creation of a Landing Page, to Apps with functions integrated into the page.</p>
        </div>
        <!-- slider banner	INICIO -->
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="info">
                        <h1 class="text-center">Javascript</h1>
                        <p class="text-center">I have created a site where I post all my study about programming logic. A language I chose was Javascript, so there will be Apps there for you to test and evaluate.
                        </p>
                        <a class="btn embrevezaum text-dark" href="https://gustopster.github.io/projetosJavascript/"
                            target="_blank"><b>Check out</b></a>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="info">
                        <h1 class="text-center">Real Estate Agency App</h1>
                        <p class="text-center">In this project I had the idea to create a real estate image in slider format.
                            I made some CSS settings, so that the image would be responsive on any
                            on any device.
                        </p>
                        <a class="btn embrevezaum text-dark" href="https://gustopster.github.io/PROJETO-IMOBILIARIA/"
                            target="_blank"><b>Check out</b></a>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- slider banner	FINAL -->
    <!--Botão Voltar para o TOPO INICIO -->
    <div class="text-center">
        <a href="#geralSite" class="btn embrevezaum text-dark"><b>&uarr;</b></a>
    </div>
    <!--Botão Voltar para o TOPO FINAL -->
    <!--Seções de Conteúdo FINAL-->
    <!--Footer INICIO-->
    <section>
        <footer class="container py-5">
            <div class="row">
                <div class="col-6 col-md text-center">
                    <h5>Sources | Help</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-light" href="https://getbootstrap.com.br/" target="_blank">BootsTrap</a></li>
                        <li><a class="text-light" href="https://github.com/CodeByZach/pace" target="_blank">Hubspot |
                                CodeByZach</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md text-center">
                    <h5>Where to Find Me</h5>
                    <ul class="list-unstyled text-small">
                        <li>
                            <a class="text-light" href="https://www.linkedin.com/in/gustavo-gomes-ggs/"
                                target="_blank">Linkedin</a>
                        </li>
                        <li>
                            <a class="text-light"
                                href="https://api.whatsapp.com/send?phone=5515991180605"
                                target="_blank">WhatsApp</a>
                        </li>
                        <li>
                            <a class="text-light" href="https://github.com/gustopster" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md text-center">
                    <h5>Thanks to</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-light"
                                href="https://www.linkedin.com/in/matheus-henrique-carvalho-2a6007202/"
                                target="_blank">Matheus Carvalho</a></li>
                        <li><a class="text-light" href="https://www.linkedin.com/in/leticia-gomes-a2a902236/"
                                target="_blank">Leticia Gomes</a></li>
                    </ul>
                </div>
            </div>
            <div id="agradecimentos" class="col-12 col-md text-center ml-auto">
                <small class="text-light">&copy <a href="https://www.linkedin.com/in/gustavo-gomes-ggs/" target="_blank"
                        class="footerGeral">gustopster</a> all rights
                        reserved</small>
            </div>
        </footer>
    </section>
    <!--Footer FINAL-->
    <!--Scripts Personalizados Inicio-->
    <script src="js/pace.js"></script>
    <script src="js/app.js"></script>
    <script type="text/javascript" src="js/verificadorCamps.js"></script>
    <!--Scripts Personalizados FINAL-->
    <!--Scripts BootsTrap Inicio-->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <!--Scripts BootsTrap Final-->
</body>`;
});
//Traduzir para o Inglês FINAL
