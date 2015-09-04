var funcionSaludar = function(nombre){
	console.log("Hola %s",nombre);
};

var funcionDespide = function(nombre){
console.log("Adios %s", nombre);	
};

var mensaje = function(nombre, handler){
	handler(nombre);
};

//usando la funcion mensaje
mensaje("Uriel",funcionDespide);