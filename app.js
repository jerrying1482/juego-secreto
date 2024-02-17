let numeroSecreto = 0;
let intentos =1;
console.log(numeroSecreto);
let listaNumerosSorteados =[];
let numeroMaximo =10;





/*let titulo = document.querySelector("h1");
titulo.innerHTML = "juego del número secreto";
let parrafo = document.querySelector("p");
parrafo.innerHTML ="Indica un número del 1 al 10";*/

function verificarIntento() {
    let numeroDeUsuario = parseInt ((document.getElementById("valorUsuario").value));
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    if (numeroDeUsuario===numeroSecreto) {
        asignarTexto("P",`Acertaste el número en ${(intentos)} ${(intentos === 1) ? "vez" : "veces" }`);
    document.getElementById("reiniciar").removeAttribute("disabled");
    }
       
    
    else{

   
            if (numeroDeUsuario > numeroSecreto)
            {
                asignarTexto("P","el numero secreto es menor");
            } else {
                asignarTexto("P","el numero secreto es mayor");
            }
            intentos++;
            limpiarCaja();
    }
return
};

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}

function asignarTexto (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
};

function condicionesIniciales() {
asignarTexto("h1", "Juego del número secreto!!!");
asignarTexto("p", `indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos =1;

};

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length==numeroMaximo) {

        asignarTexto("p", "ya se jugaron todos los números posibles")
        
    } else {
        
    
    if (listaNumerosSorteados.includes(numeroGenerado) ) {
        return generarNumeroSecreto();
       
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
    
};

function reiniciarJuego() {
    //limpiar la caja

    limpiarCaja();

    //indicar mensaje del número


    //reiniciar el número aleatorio
  
    //deshabilitar botón nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled","true");
    //inicializar número de intentos
    condicionesIniciales();


}



condicionesIniciales();
