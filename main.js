
function carrito(producto) {
    switch (producto){
        case "1":
            return producto = 15000;
        case "2":
            return producto = 9000;
        case "3":
            return producto = 12000;       
        default:
            return "Ingrese un valor valido";    
    }
      
    
}
function pago(tarjeta){
    switch(tarjeta){
        case "2":
            return .25;
        case "1":
            return .80;
        default:
            return "Ingrese un valor valido";        
    }
}

const porcentaje = iva => iva * 100;

function total(precio, iva, cantidad){
    return ((precio * iva) * cantidad);
}


let producto = prompt("Ingrese nro  para seleccionr el producto:   1- Jeans  2- Remeras  3- Buzos ");
let cantidad = prompt("Ingrese la cantidad de productos:");
let tarjeta = prompt("Ingrese 1 para Tarjeta Master o 2 para  Tarjeta Visa");


const precio = carrito(producto);
alert(`Usted ingreso la prenda con un precio de: $ ${precio}`);
const iva = pago(tarjeta) ;
const recargo = porcentaje(iva);
alert(`El recargo de su tarjeta es de ${recargo}%`);
let pagoTotal = total(precio, iva, cantidad);
alert(`El pago total es de $${pagoTotal}`);












