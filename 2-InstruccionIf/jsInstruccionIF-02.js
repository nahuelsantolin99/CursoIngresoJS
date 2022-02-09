/* 
Santolin Nahuel DIV E
If ej2
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	//declaro variable
	var edad;

	//tomo dato por id
	
	edad = document.getElementById("txtIdEdad").value;
	
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es mayor de edad");

	}	

}//FIN DE LA FUNCIÓN

//txtIdEdad