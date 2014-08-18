// var menu = ["Producto", "Ventas", "Contacto"];

// document.write(menu[2]);

// var dofa = [["Fuerza", "Oportunidad"], ["Debilidades", "Amenazas"]];

// document.write(dofa[1][1]);

function ganaste(){
	document.write("<h1> Ganaste </h1>");
}
function boom(){
	alert ("BOOOM!!");
	document.write("<h1> Diste con un área minada :(</h1>");
}

var campo = [[1, 0, 0],
			 [0, 1, 0],
			 [1, 1, 1]];

var x = prompt("¿Posición en X? (entre 0 y 2)");
var y = prompt("¿Posición en Y? (entre 0 y 2)");

var posicion = campo[x][y];


alert("Estás en un campo minado \n" + 
		"¡¡ándate con cuidado!!");

if(x<3 && y<3){
	if(posicion == 1){
		boom();
	}else{
		ganaste();
	}
}else{
	alert("Te saliste del campo");
	boom();
}

