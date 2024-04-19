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
            <h2>Nombre: ${invernadero.nombre}</h2>
            <p>Apellido Paterno: ${invernadero.apellido_paterno}</p>
            <p>Apellido Materno: ${invernadero.apellido_materno}</p>
            <p>Tipo: ${invernadero.tipo}</p>
        `;
        invernaderosDiv.appendChild(invernaderoDiv);
    });
}

getAllInvernaderos(mostrarInvernaderos);