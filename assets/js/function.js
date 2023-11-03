function lanzarMoneda(){
    let moneda = Math.floor((Math.random()*2)+1) //Invoca un 1 o 2 random
    if (moneda == 1){
        moneda = "cara";
    }else{
        moneda = "cruz";
    }
    console.log(`El lanzamiento fue ${moneda}`)
    return moneda;
}

function ganar(dinero, valor){
    console.log(`Has ganado`);
    dinero = dinero + valor
    return dinero;
}

function perder(dinero, valor){
    console.log(`Has perdido`);
    dinero = dinero - valor
    return dinero;
}

function apuesta(dinero, valor, predic){
    moneda = lanzarMoneda();
    if (moneda == predic){
        dinero = ganar(dinero, valor);
    }else{
        dinero = perder(dinero, valor)
    }
    return dinero

}

let dinero = 10;
let cont = "si"
while (cont == "si"){
    let valor = parseInt(prompt("¿Cuánto quieres apostar?"))
    if (valor > dinero){
        console.log(`No tienes tanto dinero`);
        break
    }
    let predic = (prompt("¿Cara o Cruz?"))
    
    dinero = apuesta(dinero, valor, predic);
    console.log(`Tienes ${dinero}$`);
    cont = (prompt("¿Quieres seguir?"))
}
document.write(`<h1>Quedaste con ${dinero}<br></h1>`)
