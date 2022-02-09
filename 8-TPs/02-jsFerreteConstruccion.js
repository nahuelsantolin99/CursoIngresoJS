/*
Santolin Nahuel DIV E
Tp2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
     //declaro variables
     var largoTerreno;
     var anchoTerreno;
     var perimetro;
     var alambre;

     //guardo los valores en las variables
     largoTerreno = document.getElementById("txtIdLargo").value;
     anchoTerreno = document.getElementById("txtIdAncho").value;

     //parsear los valores
     largoTerreno = parseFloat(largoTerreno);
     anchoTerreno = parseFloat(anchoTerreno);

     //realizo operacion
     perimetro = 2 * largoTerreno + 2 * anchoTerreno;
     alambre = perimetro * 3;

     //muestro cantidad de hilos a comprar
     alert("La cantidad de alambre a comprar es " + alambre + " metros de alambre");

}

//txtIdLargo
//txtIdAncho

function Circulo () 
{
	//declaro variables
	var radioTerreno;
	var perimetro;
	var alambre;

	//guardo valor en variable
	radioTerreno = document.getElementById("txtIdRadio").value;

	//parsear valor
	radioTerreno = parseFloat(radioTerreno);

	//realizo operacion
	perimetro = radioTerreno * 3.14 * 2;
	alambre = perimetro * 3;

	//muestro cantidad de hilos a comprar
	alert("La cantidad de alambre a comprar es " + alambre);

}

//txtIdRadio

function Materiales () 
{   
	//declaro variables
	var largoTerreno;
	var anchoTerreno;
	var cemento;
	var cal;
	var superficie;

	//guardo los datos en variables
	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

	//parsear los valores
	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	//realizo las operaciones
	superficie = 2 * largoTerreno + 2 * anchoTerreno;
	cemento = superficie * 2;
	cal = superficie * 3;

	//muestro resultado en pantalla
	alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
	
}

//txtIdLargo
//txtIdAncho

/*

declaro variables

entrada:
-id

proceso:
-operaciones aritmeticas

salida:
-alert

*/