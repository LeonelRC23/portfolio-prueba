let formacion = [
    {
        nombre: "Tecnicatura Superior en Programacion",
        institucion: "Universidad Tecnologica Nacional (UTN)",
        fecha: "2024 - 2025",
        descripcion: "Formación intensiva en desarrollo de software, algoritmos, estructuras de datos y bases de datos relacionales."
    },

    {
        nombre: "Ingles Nivel A2",
        institucion: "ATICANA",
        fecha: "2025 - 2026",
        descripcion: "Curso de inglés nivel A2, enfocado en la comunicación básica y comprensión de textos tecnicos."
    },

    {
        nombre: "Rolling Code School - Full Stack Developer",
        institucion: "Rolling Code School",
        fecha: "2023 - 2024",
        descripcion: "Programa de formación intensiva en desarrollo web full stack, abarcando tecnologías como HTML, CSS, JavaScript, React, Node.js y bases de datos no relacionales."
    }
];

const idContenedorFormacion = document.getElementById('contenedor-formacion');
for (let i = 0; i < formacion.length; i++) {
    idContenedorFormacion.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <h3 class="card-title">${formacion[i].nombre}</h3>
                    <div class="d-flex">
                        <p class="card-text institucion">${formacion[i].institucion}</p>
                                <p class="card-text mx-3 institucion">
                                    <i class="bi bi-calendar-fill"></i>
                                    ${formacion[i].fecha}
                                </p>
                            </div>
                <p class="card-text">${formacion[i].descripcion}</p>
            </div>
        </div>
    `
}