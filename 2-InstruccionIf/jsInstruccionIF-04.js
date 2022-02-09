/*
Santolin Nahuel DIV E
If ej4
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive)
*/
function mostrar()
{
	//declaro variables
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad>12 && edad<18)
	{
		alert("Usted es adolescente");
	}


}//FIN DE LA FUNCIÓN

//txtIdEdad

/* Otra forma de hacerlo
	
	if( !(edad<13 || edad>17))
	{
		alert("Usted es adolescente");

	}

*/
