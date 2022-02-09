/*
Santolin Nahuel DIV E
If ej9
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	var aleatorio = Math.random();
	var enteroAleatorio;

	//Math.floor(aleatorio * (10 - 1 + 1) + 1);

	enteroAleatorio = Math.floor(aleatorio * (10 - 1 + 1) + 1);

	alert(enteroAleatorio);
}//FIN DE LA FUNCIÓN

//Math.floor redondea el numero para abajo