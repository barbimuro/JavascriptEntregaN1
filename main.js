alert("Bienvendos a GUCCI tienda de moda");

let eleccion = prompt("Elije que quieres comprar:\n1. Billetera GUCCI - 550USD \n2. Zapatillas GUCCI - 1700USD \n3. Zapatos GUCCI - 2200USD \n4. Cartera GUCCI - 3000USD ").toLocaleLowerCase();

let precioFinal = 0;

let esMiembro = prompt("¿Ya eres parte de nuestro club de membresia VIP de GUCCI para que te brindemos un 10% de descuento?").toLocaleLowerCase();
if (esMiembro =="sí" || esMiembro =="si") {
    if (eleccion=="1"||eleccion=="billetera"){
        precioFinal = 550 * 0.9
    } else if (eleccion=="2" || eleccion=="zapatillas"){
        precioFinal= 1700*0.9
    } else if (eleccion=="3" || eleccion=="zapatos"){
        precioFinal = 2200*0.9
    } else if (eleccion=="4"||eleccion=="cartera"){
        precioFinal = 3000*0.9
    } else {
        alert ("no disponemos de ese producto, por favor elija uno de la lista")
    }
} else if (esMiembro=="no"){
    let noEsMiembro = prompt ("¿Quieres convertirte en miembro? Responde si o no").toLocaleLowerCase();
    if (noEsMiembro=="sí"||noEsMiembro=="si"){
        alert ("¡Felicitaciones, te regalamos un 15% de descuento!")
        if (eleccion=="1"||eleccion=="billetera"){
            precioFinal = 550 * 0.85
        } else if (eleccion=="2" || eleccion=="zapatillas"){
            precioFinal= 1700*0.85
        } else if (eleccion=="3" || eleccion=="zapatos"){
            precioFinal = 2200*0.85
        } else if (eleccion=="4"||eleccion=="cartera"){
            precioFinal = 3000*0.85
        } else {
            alert ("no disponemos de ese producto, por favor elija uno de la lista")
        }
    } else if (noEsMiembro=="no"){
        alert("¡Consideralo más tarde!")
    } else {
        alert("Seleccione una respuesta valida")
    }
} 
let precioConIVA = precioFinal*1.21 
alert("Tu importe final con IVA incluido seria $"+precioConIVA.toFixed(2))
