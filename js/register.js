const emailValue = document.querySelector('#email');
const passwordValue = document.querySelector('#password');
const btn = document.querySelector('#btn-login');
const cepValue = document.getElementById('cep');
// API VIA CEP//
const limparFormulario = (endereco) =>{
    document.getElementById('estado').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('rua').value = "";
}
const preencherFormulario = (endereco) => {
    
    document.getElementById('estado').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('rua').value = endereco.logradouro;




}
const pesquisarCep = async () => {
    limparFormulario();
    const cep = cepValue.value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    // Para resgatar os dados tipo json é necessário utilizar uma ferramenta nativa do JS que é o Fetch
    // retorna uma promessa ou promise * algo que pode acontecer ou não.* É um retorno assíncrono. 
    //NEcessário utilizar métodos para acessar os dados de retorno *método then*
    const validaNumero = (numero) => /^[0-9]+$/.test(numero);

    const cepValido = (cep) => cep.length == 8 && validaNumero(cep) ; //expressão regular para dizer que vai ter numeros de 0  a 9 e que vai iniciar e terminar com um ou mais numero.
    if(cepValido(cep)){
        const dados = await fetch(url)
        //utilizar o async e o await nesse caso para contornar o status pendente.
        const endereco = await dados.json(); //aqui o método json() também é uma promessa 
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('cep').value = 'CEP não encontrado'
            limparFormulario();
        }else{
            preencherFormulario(endereco)   
        }
    }else{
        document.getElementById('cep').value = 'CEP incorreto'
        limparFormulario();
    }
    // try {
    //     if (!endereco.hasOwnProperty('erro')){
    //         preencherFormulario(endereco)
    //     }else{
    //         alert('VOCÊ DIGITOU UM CEP INVALIDO OU AINDA NÃO TEMOS NO NOSSO BANCO DE DADOS')
    //     }
            
            
    // }catch(e) {
    //    alert(e);
    // }
}


document.getElementById('campo-numero').removeAttribute("disabled")

    // if(){

    // }else{

    // }


    //Exemplo:

    // fetch(url).then(teste => teste.json().then(console.log))
    //Este método (then???) trabalha muito com callback/promessas o que gera bastante confusão. Porém para trabalhar em uma forma mais síncrona para facilitar o entendimento, dá para utilziar duas ferramentas  async e o await. Se não 
    



cepValue.addEventListener('focusout', pesquisarCep)





btn.addEventListener("click", function (e) {


    console.log(emailValue.value);
    console.log(passwordValue.value);

    e.preventDefault();
});


