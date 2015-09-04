//haciendo un closure
function retornaFuncionSaludo(){
	var mensaje = "Hola Uriel...";
	return function(){
		console.log(mensaje);
	}
}
var saludar = retornaFuncionSaludo();
saludar();