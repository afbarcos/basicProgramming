// PIEDRA, PAPEL O TIJERA

function aleatorio(maximo, minimo){
	var numero = Math.floor(Math.random() * (maximo-minimo +1) + minimo);
	return numero;
}

var piedra = 0,
	papel = 1,
	tijera = 2,
	opcionMaquina = aleatorio(0, 2),
	opcionUsuario,
	opciones;

opciones = ["Piedra", "Papel", "Tijera"];
opcionUsuario = prompt("¿Qué eliges \n Piedra: 0\n Papel: 1\n Tijera: 2", 0);

alert ("Elegiste " + opciones[opcionUsuario]);
alert ("Javascript  eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra){
	if(opcionMaquina == piedra){
		alert("Empate");
	}
	else if(opcionMaquina == papel){
		alert("Perdiste :(");
	}else if(opcionMaquina == tijera){
		alert("Ganaste ;)");
	}
}else if (opcionUsuario == papel){
	if(opcionMaquina == piedra){
		alert("Ganaste ;)");
	}
	else if(opcionMaquina == papel){
		alert("Empate");
	}else if(opcionMaquina == tijera){
		alert("Perdiste :(");
	}
}else if (opcionUsuario == tijera){
	if(opcionMaquina == piedra){
		alert("Perdiste :(");
	}
	else if(opcionMaquina == papel){
		alert("Ganaste ;)");
	}else if(opcionMaquina == tijera){
		alert("Empate");
	}
}




