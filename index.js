let dos = 15000;
let tres = 18000;
let week = 20000;
let ocho = "Profesor Pablo Diaz";
let diez = "Profesor Adrian Lopez";
let dieciseis = "Profesora Sofia Garcia";

let membrecia 
let dias;
let horario;
let nombreApellido;
let fechasDisponibles;

while (true) {
    membrecia = prompt(`
    Ingrese sus datos y preferencias para comenzar membrecia:
    1. Elija cuantos días semanales comenzará
    2. Elija horario de disponibilidad
    3. Ingresar nombre y apellido
    4. Fechas disponibles
    5. Terminar inscripción
    0. Salir
    `);

    if (membrecia == '1') {
        dias = prompt("Elija cuantos días a la semana asistirá:\n1. 2 días ($15000)\n2. 3 días ($18000)\n3. Toda la semana ($20000)");
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
        } else if (horario == '2') {
            alert("Has elegido el horario de 10 AM con el Profesor Adrian Lopez.");
        } else if (horario == '3') {
            alert("Has elegido el horario de 4 PM con la Profesora Sofia Garcia.");
        } else {
            alert("Opción invalida");
        }
    } 
    else if (membrecia == '3') {
        nombreApellido = prompt("Ingrese su nombre y apellido:");
        alert(`Nombre y apellido ingresados: ${nombreApellido}`);
    } 
    else if (membrecia == '4') {
        fechasDisponibles = prompt("Ingrese la fecha en la que desea comenzar:\n1. 3 de junio\n2. 10 de junio\n3. 17 de junio\n4. 24 de");
        if (fechasDisponibles == '1'){
            alert(`Comenzaras el dia: 3 de junio`);
        }
        else if (fechasDisponibles == '2'){
            alert('Comenzaras el dia: 10 de junio')
        }
        else if (fechasDisponibles == '3'){
            alert('Comenzaras el dia: 17 de junio')
        }
        else if (fechasDisponibles == '4'){
            alert('Comenzaras el dia: 24 de junio')
        }
        else {
            alert('Opcion invalida')
        }
    }
    else if (membrecia == '5') {
        alert("Inscripción completa.");
        break;
    } 
    else if (membrecia == '0') {
        alert("Saliendo del sistema.");
        break;
    } else {
        alert("Opción no válida.");
    }
}
