  do{  
    let tipoConversion1 = prompt("Convertidor de unidades \nTipo de unidad: Yarda, Metro, Centimetro y Pie").toLowerCase();
    let tipoConversion2 = prompt("¿A qué lo desea convetir?: \nYarda, Metro, Centimetro y Pie").toLowerCase();
    let cantidad= prompt("Cantidad: ");
    
    let resultado;

    switch (tipoConversion1) {
        case "metro":
            if (tipoConversion2 === "centimetro") {
                resultado = cantidad * 100;
            } else if (tipoConversion2 === "yarda") {
                resultado = cantidad *1.09361;
            } else if (tipoConversion2 === "pie") {
                resultado = cantidad / 3.28084;
            }
            break;
        case "yarda":
            if (tipoConversion2 === "metro") {
                resultado = cantidad * 0.9144;
            } else if (tipoConversion2 === "centimetro") {
                resultado = cantidad * 91.44;
            } else if (tipoConversion2 === "pie") {
                resultado = cantidad * 3;
            }
            break;
        case "centimetro":    
        if (tipoConversion2 === "metro") {
            resultado = cantidad / 100;
        } else if (tipoConversion2 === "yarda") {
            resultado = cantidad / 91.44;
        } else if (tipoConversion2 === "pie") {
            resultado = cantidad / 30.48;
        }
            break;
        case "pie":
            if (tipoConversion2 === "metro") {
                resultado = cantidad * 0.3048;
            } else if (tipoConversion2 === "centimetro") {
                resultado = cantidad * 30.48;
            } else if (tipoConversion2 === "yarda") {
                resultado = cantidad * 0.33333;
            }
            break;  
        default:
            resultado="Unidad no válida";      
    }
   var seguir= window.confirm("Se realizo la conversion de "+tipoConversion1 +" a "+ tipoConversion2+ "\nEl resultado fue: "+ resultado +"\n¿Desea hacer otra conversión?");

}while(seguir==true)