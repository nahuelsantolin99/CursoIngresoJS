/*
Santolin Nahuel DIV E
E/S ej6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos variables
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseint para convertir el valor text a un valor numerico
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

    //muestro el resultado
    resultado = numUno + numDos;

    alert("La suma es " + resultado);

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