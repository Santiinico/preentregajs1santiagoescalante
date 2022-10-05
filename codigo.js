//solicito que instrumento quiere comprar y le digo el precio sin IVA
let instrumento=prompt("Ingrese que instrumento desea comprar y te dire el precio sin IVA (salir para finalizar consulta)")
while (instrumento != "salir") {
    switch (instrumento){
        case"bateria":
            alert("El precio de la bateria sin IVA es de: $80000")
            break;
        case "guitarra":
        case "bajo":
            alert("El precio tanto de la guitarra y el bajo sin IVA es de: $40000")
            break;
        case "violin":
            alert("el precio del violin sin IVA es de: $60000")
            break;
        case"saxo":
            alert("El precio del Saxo sin IVA es de: $100000")
            break;
        default:
            alert("instrumento seleccionado sin stock")
            break;    
    }
    instrumento=prompt("ingrese que instrumento desea comprar y te dire el precio sin IVA (salir para finalizar consulta)")
}
//Calcular el precio correspondiente mas IVA del instrumento elegido 

let precioProd=parseFloat(prompt("Ingresa el precio del instrumento a elección para calcular el IVA"));

function calcularIva(precio){
    return precio * 0.21;
}
let iva = calcularIva(precioProd);
console.log("EL valor del IVA es de: $"+iva);

function mostrarPrecioFinal(precioIngresado,ivaCalculado){
    alert("El precio con iva incluido es de: $"+ (precioIngresado+ivaCalculado));
}

mostrarPrecioFinal(precioProd,iva);

