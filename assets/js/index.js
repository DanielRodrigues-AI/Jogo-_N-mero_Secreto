let numerosecreto = Math.floor(Math.random() * 100) + 1;
const numero = document.getElementById('numero');
const chute = document.querySelector('.chute');
const tentativas = document.querySelector('.tentativas');
const resultado = document.querySelector('.resultado');
const botaoVerificar = document.getElementById('botao-verificar');
const botaoReiniciar = document.getElementById('botao-novo');
let tentativasCount = 0;
botaoReiniciar.disabled = true;
botaoVerificar.disabled = true;
numero.addEventListener("input", () => {
    botaoVerificar.disabled = numero.value.trim() === "";
});
function verificar() {
    tentativasCount++;
    if (numero.value == numerosecreto) {
        chute.textContent = `Acertou! o numero era ${numero.value}`;
        botaoVerificar.disabled = true;
        botaoReiniciar.disabled = false;
        tentativas.textContent = `Voce acertou em ${tentativasCount} tentativas`;
        resultado.textContent = "Parabéns! Você acertou!";
    } else if (numero.value > numerosecreto) {
        resultado.textContent = "Tente um número menor!";
        chute.textContent = `Voce escolheu o número ${numero.value}, o número secreto é menor`;
    } else {
        resultado.textContent = "Tente um número maior!";
        chute.textContent = `Voce escolheu o número ${numero.value}, o número secreto é maior`;
    }
    numero.value = "";
    tentativas.textContent = `tentativas: ${tentativasCount}`;
}
function novoJogo() {
    numerosecreto = Math.floor(Math.random() * 100) + 1;
    numero.value = "";
    chute.textContent = "chutes:";
    tentativas.textContent = `tentativas:`;
    resultado.textContent = "resultado:";
    botaoVerificar.disabled = false;
    botaoReiniciar.disabled = true;
    tentativasCount = 0;
}