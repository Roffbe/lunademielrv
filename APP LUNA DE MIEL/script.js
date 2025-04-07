// script.js

// Función para actualizar la hora
function updateClock(city, offset) {
    const timeElement = document.getElementById(`time-${city}`);
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    // Obtenemos el tiempo UTC y le sumamos el offset
    const now = new Date();
    
    // Ajuste para la hora de Madrid en horario de verano (restar 1 hora)
    let localTime = new Date(now.getTime() + (offset * 60 * 60 * 1000));
    if (city === 'madrid') {
        localTime = new Date(localTime.getTime() - (1 * 60 * 60 * 1000)); // Restamos una hora
    }
    
    // Mostramos la hora formateada
    timeElement.textContent = localTime.toLocaleTimeString('es-ES', options);
}

// Función que actualiza todas las ciudades
function updateClocks() {
    // Madrid (UTC +1 pero ajustado al horario de verano -1)
    updateClock('madrid', 1);
    // New York (UTC -4)
    updateClock('new-york', -4);
    // Las Vegas (UTC -7)
    updateClock('las-vegas', -7);
    // Cancún (UTC -5)
    updateClock('cancun', -5);
}

// Actualizamos las horas cada segundo
setInterval(updateClocks, 1000);

// Llamamos a la función inmediatamente para mostrar las horas al cargar la página
updateClocks();
