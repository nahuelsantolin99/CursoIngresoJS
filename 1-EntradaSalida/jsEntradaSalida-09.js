/*
Santolin Nahuel DIV E
E/S ej9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//declaro variables
	var sueldo;
	var resultado;
	var aumento;

	//Traer los valores por id
	sueldo = document.getElementById("txtIdSueldo").value;
    //resultado = document.getElementById("txtIdResultado").value;

    //parsear el valor con int o float
    sueldo = parseFloat(sueldo);

    //calculamos el aumento y resultado
    aumento = sueldo * 0.1;
    resultado = sueldo + aumento;
    
    //mostramos el resultado
    document.getElementById("txtIdResultado").value = resultado;

}

//txtIdSueldo
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