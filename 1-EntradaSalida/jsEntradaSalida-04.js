/* 
Santolin Nahuel DIV E
E/S ej4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable
	var nombreIngresado;
	
	//guardo el dato
	nombreIngresado=prompt("ingrese su nombre");
    
    //asigno nombre a la caja de texto
    document.getElementById("txtIdNombre").value=nombreIngresado;
}

//txtIdNombre

/*

declaro variable

entrada:
-prompt

proceso:

salida:
-id

*/