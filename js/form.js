// Transição de tipos de forms //
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
	container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});


function mensagemLogin() {
	Swal.fire(
		'Sucesso!',
		'Login realizado com sucesso!',
		'success'
	)		
	return
}

function mensagemCadastro() {
	Swal.fire(
		'Sucesso!',
		'Cadastro realizado com sucesso!',
		'success'
	)		
	return
}

/*
// Verificação login //
function verificarLogin() {
  var email = document.getElementById("email");
	var senha = document.getElementById("senha");

	if (email.value == "" || senha.value == "") {
		Swal.fire(
		  'Erro',
		  'Campo vazio ou inválido!',
		  'error'
		)	
		return
	}
	else {
		Swal.fire(
		  'Sucesso!',
		  'Login realizado com sucesso!',
		  'success'
		)		
	}
	return
}

// Verificação Cadastro //
function verificarCadastro() {
	
	var nome = document.getElementById("senha");
  var email = document.getElementById("email");
	var senha = document.getElementById("senha");

	if (nome.value == "" || email.value == "" || senha.value == "") {
		Swal.fire(
		  'Erro',
		  'Campo vazio ou inválido!',
		  'error'
		)	
		return
	}
	else {
		Swal.fire(
		  'Sucesso!',
		  'Login realizado com sucesso!',
		  'success'
		)		
	}
	return
}*/