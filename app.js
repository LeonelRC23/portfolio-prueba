let habilidadesFronted = ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "TailwindCSS"];
let habilidadesBackend = ["PHP", "Laravel", "MySQL", "Node.js", "Express", "MongoDB"];
let habilidadesOtros = ["Git", "GitHub", "Docker", "Linux", "Windows", "Mantenimiento de PC", "Armado de PC"];

const idPresentacion = document.getElementById("presentacion");
idPresentacion.textContent = "Prueba";

const idContenedorHabilidadesFrontend = document.getElementById('contenedor-habilidades-fronted');
for (let i = 0; i < habilidadesFronted.length; i++) {
    idContenedorHabilidadesFrontend.innerHTML += `
        <p class="mx-1 p-2 tec">${habilidadesFronted[i]}</p>
    `
}

const idContenedorHabilidadesBackend = document.getElementById('contenedor-habilidades-backend');
for (let i = 0; i < habilidadesBackend.length; i++) {
    idContenedorHabilidadesBackend.innerHTML += `
        <p class="mx-1 p-2 tec">${habilidadesBackend[i]}</p>
    `
}

const idContenedorHabilidadesOtros = document.getElementById('contenedor-habilidades-otros');
for (let i = 0; i < habilidadesOtros.length; i++) {
    idContenedorHabilidadesOtros.innerHTML += `
        <p class="mx-1 p-2 tec">${habilidadesOtros[i]}</p>
    `
}
