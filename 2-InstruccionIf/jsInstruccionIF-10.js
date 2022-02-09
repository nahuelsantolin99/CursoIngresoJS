/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var aleatorio = Math.random();
	var enteroAleatorio;

	enteroAleatorio = Math.floor(aleatorio * (10 - 1 + 1) + 1);
	
 	console.log(enteroAleatorio);

	if(enteroAleatorio > 8)
	{
		alert("EXCELENTE");
	}
	else if(enteroAleatorio > 3)
	{
		alert("APROBO");
	}
	else
	{
		alert("VAMOS, LA PROXIMA SE PUEDE");
	}
}//FIN DE LA FUNCIÓN