/*
Santolin Nahuel DIV E
Tp3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//declaro variables
	var farenheit;
	var centigrados;

	//guardo valor en variable
	farenheit = document.getElementById("txtIdTemperatura").value;

	//parsear el valor
	farenheit = parseFloat(farenheit);

	//realizo conversion
	centigrados = (farenheit - 32) / 1.8;

	//muestro resultado en pantalla
	alert(farenheit + " °F son " + centigrados + " °C");

}

//txtIdTemperatura

function CentigradosFahrenheit () 
{
    //declaro variables
    var centigrados;
    var farenheit;

    //guardo valor en variable
    centigrados = document.getElementById("txtIdTemperatura").value;

    //parsear el valor
    centigrados = parseFloat(centigrados);

    //realizo conversion
    farenheit = (centigrados * 1.8) + 32;

    //muestro resultado en pantalla
    alert(centigrados + " °C son " + farenheit + " °F");

}

//txtIdTemperatura

/*

declaro variables

entrada:
-id

proceso:
-operacion aritmetica

salida:
-alert

*/
