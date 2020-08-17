/* 
 * Author: Vitor Roatti
 * Year: 2020
 * Version: 1.0
 */
var num1 , num2 = 0
var maxdigitos = 0
var resultado = 0

function limpar(){
   document.querySelector("div.tela2").innerHTML = ""
   document.querySelector("div.tela1").innerHTML = ""
   num1 , num2 = 0
   maxdigitos = 0
   op = 0
   resultado = 0
   document.getElementById('tela1').style.fontSize = '50px'
}
function lerNum(n){
   if (maxdigitos >= 25){
      document.getElementById('tela1').style.fontSize = '35px'
      limpar()
      maxdigitos = 25                   //necessario para poder parar o incremento de numeros.
      document.getElementById("tela1").innerHTML = "Sem espaço!"
      document.getElementById("tela2").innerHTML = "Clique no AC para resetar"
   }else{
      if (maxdigitos >= 22){
         document.getElementById('tela1').style.fontSize = '24px'
      }else if(maxdigitos>= 13){
         document.getElementById('tela1').style.fontSize = '30px'

      }
      
      num1 = (parseFloat(document.getElementById("tela1").innerHTML += n))    //Coloca na tela o numero clicado.
   }
   maxdigitos++      
}

function leOpBasica(n){  //op de operador
   switch (n) {
      case '+':
         op = '+'
         break;
   
      case '-':
         op = '-'
         break;

      case 'x':
         op = 'x'
         break;

      case '/':
         op = '/'
         break;

      case '%':
         op = '%'
         break;   
   }
   maxdigitos =0
   document.getElementById("tela2").innerHTML = `${num1} ${op} `
   num1 = (parseFloat(document.getElementById("tela1").innerHTML))
   num2 = num1
   document.getElementById("tela1").innerHTML = ''
}

function troca(){
  num1 = (document.getElementById("tela1").innerHTML *= -1);
} 

function addPonto(){
   num1 = (document.getElementById("tela1").innerHTML +='.' );
 } 

function valorResultado(){
   switch (op) {
      case '+':
         resultado = num1+num2
         break;

      case '-':
         resultado = num2-num1
         break;
      case 'x':
         resultado = num1 * num2
         break;
      case '/':
         console.log(num2)
         console.log(num1)
         
         if (num2==0 && num1 == 0){
            resultado = '‭Resultado indefinido‬ 😕'
            console.log(resultado)
            setTimeout(function(){
               limpar();
             }, 1000)
         }else if(num1==0){
            resultado = '‭Não é possível dividir por zero‬😕'
            setTimeout(function(){
               limpar();
             }, 1000)
         }else{
            resultado = num2 / num1
         }

         break;

      case '%':
         resultado = ((num2/100)*num1)
         break;
   }
   var tamanho = resultado.toString().length 

   if (tamanho >= 15) {
      document.getElementById('tela1').style.fontSize = '35px'
   }
   document.getElementById("tela1").innerHTML = resultado
   document.getElementById("tela2").innerHTML = ''
   num1 = resultado
   return num1
   
}
