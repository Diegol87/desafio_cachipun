
//Acá vamos colocando todas las variables para el ingreso de la cantidad de partidas y la selección de tijera, piedra o papel
let partidas = prompt("¿Cuántas veces quieres jugar?");
let i = 1;

//Aquí dejamos la función para poder realizar el juego iniciando con una selección automática y random de un valor absoluto que va de cero a dos
function jugar() {
    let jugada = prompt("Por favor escriba su jugada: tijera, papel o piedra, debe estar todo con minúscula: ");
    let tijera = 0;
    let papel = 1;
    let piedra = 2;
    
    let maquina = Math.floor(Math.random()*3)

   //Acá colocamos los tres casos de selección del usuario (tijera, piedra o papel), para cada selección existen 3 posibles casos de acuerdo al resultado de la máquina y de la cual entregará una respuesta según el resultado
    if(jugada === "tijera"){
        if(maquina === 0){
            console.log("¡Empate!, máquina: tijera y tú: tijera");
        } else{
            if(maquina === 1){
                console.log("¡Felicidades, ganaste!, máquina: papel y tú: tijera");
            } else{
                if(maquina === 2){
                    console.log("¡Que lástima, perdiste!, máquina: piedra y tú: tijera");
                }
            }
        }
    }

    if(jugada === "papel"){
        if(maquina === 0){
            console.log("¡Que lástima, perdiste!, máquina: tijera y tú: papel");
        } else{
            if(maquina === 1){
                console.log("¡Empate!, máquina: papel y tú: papel");
            } else{
                if(maquina === 2){
                    console.log("¡Felicidades, ganaste!, máquina: piedra y tú: papel");
                }
            }
        }
    } 

    if(jugada === "piedra"){
        if(maquina === 0){
            console.log("¡Felicidades, ganaste!, máquina: tijera y tú: piedra");
        } else{
            if(maquina === 1){
                console.log("¡Que lástima, perdiste!, máquina: papel y tú: piedra");
            } else{
                if(maquina === 2){
                    console.log("¡Empate!, máquina: piedra y tú: piedra");
                }
            }
        }
    }
}

while(i <= partidas){
    jugar()
    i++;
}