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
let socio;
let fechaDePartido;
let horaDelPartido;
let numSilla;
let precioDelBoleto;

nombre = "Paquita";
apellido = "Gomez";
edad = 23;
tel = 385_538_9883;
socio = false;
fechaDePartido = "07/10/2023";
horaDelPartido = "10:30";
numSilla = 56;
precioDelBoleto = 7500;

console.log(`Nombre y apellido: ${nombre}, ${apellido}
edad: ${edad}
telefono: ${tel}
es Socio: ${socio ? "si" : "no"}
Numero de silla: ${numSilla}
Fecha del partido: ${fechaDePartido} a las ${horaDelPartido}
precio del boleto: ${precioDelBoleto}`);