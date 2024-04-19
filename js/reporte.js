function getAllInvernaderos(done) {
    fetch("http://localhost:8080/api/reporte")
        .then(response => response.json())
        .then(data => {
            done(data);
            console.log(data)
        })
        .catch(error => console.error('Error al obtener los invernaderos:', error));
}

function mostrarInvernaderos(data) {
    const invernaderosDiv = document.getElementById('invernaderos');

    data.forEach(invernadero => {
        const invernaderoDiv = document.createElement('div');
        invernaderoDiv.innerHTML = `
            <h2>${invernadero.nombre}</h2>
            <p>Ubicación: ${invernadero.fecha}</p>
            <p>Capacidad: ${invernadero.hora}</p>
        `;
        invernaderosDiv.appendChild(invernaderoDiv);
    });
}

getAllInvernaderos(mostrarInvernaderos);