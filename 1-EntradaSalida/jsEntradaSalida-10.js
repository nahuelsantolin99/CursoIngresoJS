/*
Santolin Nahuel DIV E
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro variables
	var importe;
	var resultado;
	var descuento;

	//tomo el importe por id
	importe = document.getElementById("txtIdImporte").value;

	//parsear el importe
	importe = parseFloat(importe);

	//calculo descuento y resultado
	descuento = importe * 0.25;
	resultado = importe - descuento;

	//muestro el resultado
	document.getElementById("txtIdResultado").value = resultado;

}

//txtIdImporte
//txtIdResultado

/*

declaro variables

entrada:
-id

proceso:
-operaciones aritmeticas

salida:
-id

*/