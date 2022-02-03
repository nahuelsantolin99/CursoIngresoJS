/*
Santolin Nahuel DIV E
E/S ej8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declarar las variables
	var dividendo;
	var divisor;
	var resto;
	
	
	//Traemos los valores por id
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	//los transformo a enteros
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	//resultado = dividendo / divisor;
    
    resto = dividendo % divisor;

    alert("El resto de la division es " + resto);

}

//txtIdNumeroDividendo
//txtIdNumeroDivisor

/*

declaro variables

entrada:
-id

proceso:
opero el resto

salida:
-alert

*/