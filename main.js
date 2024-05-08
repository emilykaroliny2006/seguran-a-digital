const numeroSenha = document.querySelector('.parametro-senha__textoi');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letraMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelectorAll('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');

botoes [0].onclick = diminuiTamanho;
botoes [1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        //tamanhoSenh = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha() {
    }
    function aumentaTamanho() {
        if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha+1;
            tamanhoSenha++;
        }
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }

    for (1 = 0; 1 < checkbox.length; 1++) {
        checkbox[1].onclick = geraSenha;
    }

    gerarSenha();

    function gerarSenha()  {
        let alfabeto = '';
        if (checkbox[0].checked) {
            alfabeto = alfabeto + letraMinusculas;
        }
        if (checkbox[1].checked) {
            alfabeto = alfabeto + letraMinusculas;
        }
        if (checkbox[2].checked) {
            alfabeto = alfabeto + numeros;
        }
        if (checkbox[3].checked){
            alfabeto = alfabeto + simbolos;
        }
        let senha = '';
        for (let i = 0; i < tamanhoSenha;i++){
            let numeroAleatorio = Math.random()*alfabeto.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + alfabeto[numeroAleatorio];
        }
        campoSenha.value = senha;
        classificaSenha(alfabeto.length);

    }

    function classificaSenha(tamanhoAlfabeto){
        let entopia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
        console.log(entropia);
        forcaSenha.classList.remove('fraca','media','forte');
        if (entopia > 57){
            forcaSenha.classList.add('forte');
        }else if (entopia > 35 && entopia < 57){
            forcaSenha.classList.add('media');
        } else if (entopia<= 35){
            forcaSenha.classList.add('fraca');
        }
        const valorEntropia = document.querySelector('.entropia');
        valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + "dias para descobrir essa senha. ";
    }
    


