/*
Santolin Nahuel DIV E
If ej5
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(!(edad>12 && edad<18))
	{
		alert("Usted no es adolescente");
	}

}//FIN DE LA FUNCIÓN

//txtIdEdad

/*Otra forma de hacerlo. Igual al ejercicio 4, pero lo negas. Mas facil
	/*if(edad<12 || edad>17)
	{
		alert("Usted no es adolecente");
	}
*/