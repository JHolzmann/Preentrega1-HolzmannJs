let dos = 15000;
let tres = 18000;
let week = 20000;
let ocho = "Profesor Pablo Diaz";
let diez = "Profesor Adrian Lopez";
let dieciseis = "Profesora Sofia Garcia";

let membrecia;
let dias;
let horario;
let nombreApellido;
let fechaInicio;
let costoTotal;

function calcularCosto(dias) {
    if (dias == '1') {
        return dos;
    } else if (dias == '2') {
        return tres;
    } else if (dias == '3') {
        return week;
    } else {
        return 0;
    }
}

function mostrarResumen(nombre, dias, horario, fecha, costo) {
    let resumen = `Resumen de Inscripción:
    Nombre: ${nombre}
    Días a la semana: ${dias}
    Horario: ${horario}
    Fecha de inicio: ${fecha}
    Costo total: $${costo}`;

    alert(resumen);
}

while (true) {
    membrecia = prompt(`
    Ingrese sus datos y preferencias para comenzar membresía:
    1. Elija cuantos días semanales comenzará
    2. Elija horario de disponibilidad
    3. Ingresar nombre y apellido
    4. Fechas disponibles
    5. Terminar inscripción
    0. Salir
    `);

    if (membrecia == '1') {
        dias = prompt("Elija cuantos días a la semana asistirá:\n1. 2 días ($15000)\n2. 3 días ($18000)\n3. Toda la semana ($20000)");
        costoTotal = calcularCosto(dias);
        if (dias == '1') {
            alert("Has elegido 2 días a la semana. Costo: $15000");
        } else if (dias == '2') {
            alert("Has elegido 3 días a la semana. Costo: $18000");
        } else if (dias == '3') {
            alert("Has elegido asistir toda la semana. Costo: $20000");
        } else {
            alert("Opción no válida.");
        }
    } 
    else if (membrecia == '2') {
        horario = prompt("Elija su horario de disponibilidad:\n1. 8 AM - Profesor Pablo Diaz\n2. 10 AM - Profesor Adrian Lopez\n3. 4 PM - Profesora Sofia Garcia");
        if (horario == '1') {
            alert("Has elegido el horario de 8 AM con el Profesor Pablo Diaz.");
            horario = "8 AM - Profesor Pablo Diaz";
        } else if (horario == '2') {
            alert("Has elegido el horario de 10 AM con el Profesor Adrian Lopez.");
            horario = "10 AM - Profesor Adrian Lopez";
        } else if (horario == '3') {
            alert("Has elegido el horario de 4 PM con la Profesora Sofia Garcia.");
            horario = "4 PM - Profesora Sofia Garcia";
        } else {
            alert("Opción inválida");
        }
    } 
    else if (membrecia == '3') {
        nombreApellido = prompt("Ingrese su nombre y apellido:");
        alert(`Nombre y apellido ingresados: ${nombreApellido}`);
    } 
    else if (membrecia == '4') {
        fechaInicio = prompt("Ingrese la fecha en la que desea comenzar:\n1. 3 de junio\n2. 10 de junio\n3. 17 de junio\n4. 24 de junio");
        if (fechaInicio == '1'){
            fechaInicio = '3 de junio';
            alert(`Comenzarás el día: ${fechaInicio}`);
        }
        else if (fechaInicio == '2'){
            fechaInicio = '10 de junio';
            alert(`Comenzarás el día: ${fechaInicio}`);
        }
        else if (fechaInicio == '3'){
            fechaInicio = '17 de junio';
            alert(`Comenzarás el día: ${fechaInicio}`);
        }
        else if (fechaInicio == '4'){
            fechaInicio = '24 de junio';
            alert(`Comenzarás el día: ${fechaInicio}`);
        }
        else {
            alert('Opción inválida');
        }
    }
    else if (membrecia == '5') {
        mostrarResumen(nombreApellido, dias, horario, fechaInicio, costoTotal);
        alert("Inscripción completa. Bienvenido!");
        break;
    } 
    else if (membrecia == '0') {
        alert("Saliendo del sistema.");
        break;
    } else {
        alert("Opción no válida.");
    }
}
