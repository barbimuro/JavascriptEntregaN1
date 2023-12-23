alert("Bienvenidos a GUCCI tienda de moda");

let productos = [
    { codigo: "1", nombre: "Billetera GUCCI", precio: 550 },
    { codigo: "2", nombre: "Zapatillas GUCCI", precio: 1700 },
    { codigo: "3", nombre: "Zapatos GUCCI", precio: 2200 },
    { codigo: "4", nombre: "Cartera GUCCI", precio: 3000 }
];

let eleccion = "";

while (!productos.some(producto => producto.codigo === eleccion || producto.nombre.toLowerCase() === eleccion)) {
    eleccion = prompt("Elige qué quieres comprar:\n1. Billetera GUCCI - 550USD \n2. Zapatillas GUCCI - 1700USD \n3. Zapatos GUCCI - 2200USD \n4. Cartera GUCCI - 3000USD").toLowerCase();

    if (!productos.some(producto => producto.codigo === eleccion || producto.nombre.toLowerCase() === eleccion)) {
        alert("No disponemos de ese producto en la lista, por favor elija uno de la lista");
    }
}

let precioFinal = 0;

let esMiembro = prompt("¿Ya eres parte de nuestro club de membresía VIP de GUCCI para que te brindemos un 10% de descuento?").toLowerCase();
if (esMiembro === "sí" || esMiembro === "si") {
    let productoElegido = productos.find(producto => producto.codigo === eleccion || producto.nombre.toLowerCase() === eleccion);
    precioFinal = productoElegido.precio * 0.9;
} else if (esMiembro === "no") {
    let noEsMiembro = prompt("¿Quieres convertirte en miembro? Responde si o no").toLowerCase();
    if (noEsMiembro === "sí" || noEsMiembro === "si") {
        alert("¡Felicitaciones, te regalamos un 15% de descuento!")
        let productoElegido = productos.find(producto => producto.codigo === eleccion || producto.nombre.toLowerCase() === eleccion);
        precioFinal = productoElegido.precio * 0.85;
    } else if (noEsMiembro === "no") {
        alert("¡Consideralo más tarde!")
        let productoElegido = productos.find(producto => producto.codigo === eleccion || producto.nombre.toLowerCase() === eleccion);
        precioFinal = productoElegido.precio;
    } else {
        alert("Seleccione una respuesta válida")
    }
}
let precioConIVA = precioFinal * 1.21;
alert("Tu importe final con IVA incluido sería $" + precioConIVA.toFixed(2));

