function getAllInvernaderos(done) {
            fetch("http://localhost:8080/api/control")
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
                    <p class="card-text">Humedad: ${invernadero.sen_humedad}</p>
                    <p class="card-text">Temperatura: ${invernadero.sen_temp}</p>
                    <p class="card-text">Ventilación: ${invernadero.ventilacion}</p>
                    <p class="card-text">Fecha: ${invernadero.fecha}</p>
                    <p class="card-text">Hora: ${invernadero.hora}</p>
                </div>
                </div>
                `;
                invernaderosDiv.appendChild(invernaderoDiv);
            });
        }

        getAllInvernaderos(mostrarInvernaderos);