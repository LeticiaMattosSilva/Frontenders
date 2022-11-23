const form = document.getElementById('#formulario');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*form.addEventListener('submit', (event) => {
	event.preventDefault();
	nameValidate();
	emailValidate();
	mainPasswordValidate();
	comparePassword();
});*/

function setError(index) {
	campos[index].style.border = '2px solid #e63636';
	spans[index].style.display = 'block';
}
function removeError(index) {
	campos[index].style.border = '';
	spans[index].style.display = 'none';
}

function nameValidate() {
	if (campos[0].value.length < 3) {

	} else {

	}
}

/* Validação do email da página de login */
function emailValidate() {
	if(!emailRegex.test(campos[0].value)){
		setError(0);
	}else{
		removeError(0);
	}
}

/* Vadlidação do email da página de redefinição de senha */
function emailRecoverValidate(){
	if(!emailRegex.test(campos[2].value)){
		setError(2);
	}else{
		removeError(2);
	}
}

/* Validação do email da página de cadastro */
function emailRegister(){
	if(!emailRegex.test(campos[3].value)){
		setError(3);
	}else{
		removeError(3);
	}
}

/* Validação da senha da página de login */
function mainPasswordValidate(){
	if(campos[1].value.length < 8){
		setError(1);
	}else{
		removeError(1);
	}
}

/* Validação da senha da página de cadastro */
function passwordRegister(){
	if(campos[4].value.length < 8){
		setError(4);
	}else{
		removeError(4);
		comparePassword();
	}
}

/* Validação da confirmação de senha da página de cadastro */
function comparePassword(){
	if(campos[4].value == campos[5].value && campos[5].value.length >= 8){
		removeError(5);
	}else{
		setError(5);
	}
}
