let listaProyectos = [
    {
        nombre: "Proyecto 1",
        descripcion: "Este proyecto fue desarrollado con mis colegas de la tecnicatura en programacion en el año 2023, utilizamos PHP y framework de Laravel para realizarlo",
        imagen: "../imagenes/image.png",
        link: "https://www.hpotucuman.com.ar/"
    },

    {
        nombre: "Proyecto 2",
        descripcion: "Este es otro proyecto personal que desarrollé utilizando tecnologías como react y typescript.",
        imagen: "../imagenes/imagen2.png",
        link: "https://capacitaciones.frt.utn.edu.ar/"
    }
]

const idContenedorProyectos = document.getElementById('contenedor-proyectos');
for (let i = 0; i < listaProyectos.length; i++) {
    idContenedorProyectos.innerHTML += `
        <div class="card mb-3">
            <a href="${listaProyectos[i].link}" target="_blank">
                <img src="${listaProyectos[i].imagen}" class="card-img-top imagen-experiencia" alt="...">
            </a>
            <div class="card-body">
                <h5 class="card-title">${listaProyectos[i].nombre}</h5>
                <p class="card-text">${listaProyectos[i].descripcion}</p>
            </div>
        </div>
    `
}