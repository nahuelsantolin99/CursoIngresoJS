/*1.	
Santolin Nahuel DIV E
Tp1
    Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//declaro variables
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	//guardo los valores en las variables
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	//parsear los valores
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	//realizo la operacion
	resultado = precioUno + precioDos + precioTres;

	//muestro el resultado en pantalla
	alert("La suma es " + resultado);

}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres

function Promedio () 
{
	//declaro variables
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	//guardo los valores en las variables
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	//parsear los valores
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	//realizo la operacion
	resultado = (precioUno + precioDos + precioTres) / 3

	//muestro el resultado en pantalla
	alert("El promedio es " + resultado);

}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres

function PrecioFinal () 
{
	//declaro variables
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var valorIvaGravado;
	var precioFinal;

	//guardo los valores en las variables
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	//parsear los valores
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	//realizo la operacion
	resultado = precioUno + precioDos + precioTres;
	valorIvaGravado = resultado * 0.21;
	precioFinal = resultado + valorIvaGravado;


	//muestro el resultado en pantalla
	alert("El precio final es " + precioFinal);

}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres

/*

declaro variables

entrada:
-id

proceso:
-operaciones aritmeticas

salida:
-alert

*/