/*
Santolin Nahuel DIV E
E/S ej7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaro variables
	var numUno;
	var numDos;
	var resultado;

	//Tomar los numeros por id
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para transformar a enteros
	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	//realizo la operación
	 resultado = numUno + numDos;
	
	//muestro el resultado en pantalla
	alert("La suma es " + resultado);
	
}

function restar()
{
	var numUno;
	var numDos;
	var resultado;


	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	//realizo la operación
	 resultado = numUno - numDos;
	
	//muestro el resultado en pantalla
	alert("La resta es " + resultado);
	
}

function multiplicar() 
{
	var numUno;
	var numDos;
	var resultado;


	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	//realizo la operación
	 resultado = numUno * numDos;
	
	//muestro el resultado en pantalla
	alert("La multiplicacion es " + resultado);
	
}

function dividir() 
{
	var numUno;
	var numDos;
	var resultado;


	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	//realizo la operación
	 resultado = numUno / numDos;
	
	//muestro el resultado en pantalla
	alert("La division es " + resultado);
}


//txtIdNumeroUno
//txtIdNumeroDos

/*

declaro variables

entrada:
-id

proceso:
-operacion aritmetica

salida:
-alert

*/