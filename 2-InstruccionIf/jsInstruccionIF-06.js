/*
Santolin Nahuel DIV E
If ej6
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años)
*/


function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es mayor de edad");
	}	
	else if(edad < 12)
	{
		alert("Usted es un niño")
    }
	
	else
	{
		alert("Usted es adolescente");
	}

}//FIN DE LA FUNCIÓN

//txtIdEdad