function calculadora() {
    const operacao = prompt('Escolha uma operação \n  1- soma (+)\n 2- subtraçao(-)\n 3- multiplicação(*)\n 4- Divisão(/)\n 5- Divisão inteira(%)\n 6- Potenciação(**) ');
    
let n1 = Number(prompt('insira o primeiro valor:'));
let n2 = Number(prompt('insira o segundo calor:'));
let resultado;

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
}
function subtração(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
}
function subtração(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
}

if(operacao ==1){
    soma();
}else if(operacao==2){
    subtração();
}else if(operacao==3){
    multiplicaão();
}else if(operacao==4){
    divisaReal();
}else if(operacao==5){
    divisaoInteira();
}else if(operacao==6){
    potenciação();
}
}

calculadora();