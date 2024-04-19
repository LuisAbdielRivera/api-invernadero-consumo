function getAllInvernaderos(done) {
    fetch("http://localhost:8080/api/usuario")
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
        <div class="card">
            <div class="card-header">
                Id: ${invernadero.id}
            </div>
            <div class="card-body">
                <p class="card-text">Nombre: ${invernadero.nombre}</p>
                <p class="card-text">Observación: ${invernadero.apellido_paterno}</p>
                <p class="card-text">Fecha: ${invernadero.apellido_materno}</p>
                <p class="card-text">Hora: ${invernadero.tipo}</p>
            </div>
        </div>
        `;
        invernaderosDiv.appendChild(invernaderoDiv);
    });
}

getAllInvernaderos(mostrarInvernaderos);