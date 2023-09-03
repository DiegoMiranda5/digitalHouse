/*
Para llevar un control automatizado en la venta de boletos para ingresar a un
partido de fútbol, el Tech Leader de tu equipo te asigna la responsabilidad de crear y
asignar valor a un conjunto de variables. Recordá tener presente el tipo de dato que
contienen.

A continuación te dejamos algunos ejemplos de variables que puedes crear: Nombre -
Apellido - Edad - Número de Teléfono - Socio (Valor booleano) - Fecha del partido -
Hora del partido - Número de silla - Precio del boleto (con valores decimales).
*/

let nombre;
let apellido;
let edad;
let tel;
let isSocio;
let fechaDePartido;
let horaDelPartido;
let numSilla;
let precioDelBoleto;

nombre = "Paquita";
apellido = "Gomez";
edad = 23;
tel = 385_538_9883;
isSocio = false;
fechaDePartido = "07/10/2023";
horaDelPartido = "10:30";
numSilla = 56;
precioDelBoleto = 7500.56;

console.log(
    `Nombre y apellido: ${nombre}, ${apellido}\n`+
    `Edad: ${edad}\n` +
    `Telefono: ${tel}\n` +
    `Es Socio: ${isSocio ? "si" : "no"}\n` +
    `Numero de silla: ${numSilla}\n` +
    `Fecha del partido: ${fechaDePartido} a las ${horaDelPartido}\n` +
    `Precio del boleto: ${precioDelBoleto}\n`);

console.log(
    `-`.repeat(60) + "\n" + 
    `Variable`.padEnd(20)          + " | " + `Datos`.padEnd(20)              + " | " + `Tipo\n` +
    `-`.repeat(60) + "\n" + 
    `Nombre`.padEnd(20)            + " | " + `${nombre}`.padEnd(20)          + " | " + `${typeof(nombre)}\n`+
    `Apellido`.padEnd(20)          + " | " + `${apellido}`.padEnd(20)        + " | " + `${typeof(apellido)}\n`+
    `Edad`.padEnd(20)              + " | " + `${edad}`.padEnd(20)            + " | " + `${typeof(edad)}\n` +
    `Telefono`.padEnd(20)          + " | " + `${tel}`.padEnd(20)             + " | " + `${typeof(tel)}\n` +
    `Es socio`.padEnd(20)          + " | " + `${isSocio}`.padEnd(20)         + " | " + `${typeof(isSocio)}\n` +
    `Numero de silla`.padEnd(20)   + " | " + `${numSilla}`.padEnd(20)        + " | " + `${typeof(numSilla)}\n` +
    `Fecha del patido`.padEnd(20)  + " | " + `${fechaDePartido}`.padEnd(20)  + " | " + `${typeof(fechaDePartido)}\n` +
    `Hora del partido`.padEnd(20)  + " | " + `${horaDelPartido}`.padEnd(20)  + " | " + `${typeof(horaDelPartido)}\n` +
    `Precio del boleto`.padEnd(20) + " | " + `${precioDelBoleto}`.padEnd(20) + " | " + `${typeof(precioDelBoleto)}`
);