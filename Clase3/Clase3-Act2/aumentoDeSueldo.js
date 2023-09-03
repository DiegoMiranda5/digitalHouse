/*
    se desarrolla un código para calcular el nuevo sueldo a un trabajador,
    para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
    datos del trabajador:
        a. nombre
        b. apellido
        c. sueldoActual
        d. porcentajeAumento
*/

let nombre;
let apellido;
let sueldoActual;
let porcentajeAumento;
let calcularAumento;
let nuevoSueldo;

nombre = "Marta";
apellido = "Miranda";
sueldoActual = 120_000;
porcentajeAumento = 25;


calcularAumento = ((sueldoActual * porcentajeAumento) / 100);
nuevoSueldo = sueldoActual + calcularAumento;

console.log(
    `Hola, estimad@ ${nombre} ${apellido}\n` +
    `En base a su sueldo actual: $${sueldoActual}\n` +
    `Ha recibido un aumento del ${porcentajeAumento}%: $${calcularAumento}\n` +
    `y su nuevo sueldo es de: $${nuevoSueldo}`
);