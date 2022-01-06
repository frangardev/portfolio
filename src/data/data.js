// Datos que necesta el proyecto:
    // 1. Nombre del proyecto.
    // 2. Imagen o gif del proyecto | en baja y alta calidad  
    // 3. url al proyecto
    // 4. url del repositorio
    // 5. Descripción 
    // 6. Las tecnologias que utilice para construir ese proyecto.

//     const  technologies ={
const technologies = {
    HTML:{
        name: "HTML",
        icon: "url-del icono"
    },
    CSS:{
        name: "CSS",
        icon: "url-del icono"
    },
    JavaScript:{
        name: "JavaScript",
        icon: "url-del icono"
    },
    React:{
        name: "React",
        icon: "url-del icono"
    },
    webpack:{
        name: "webpack",
        icon: '../assets/icon/webpack'
    }
}

const Data = [
    {
        name: "Todo React App",
        image: "https://i.ibb.co/9c14pGP/To-Do-React-App.png",
        url: "https://frangardev.github.io/todo-react-app/",
        repository: "https://github.com/frangardev/todo-react-app",
        description: "",
        tech: [technologies.CSS, technologies.React],
    },
    {
        name: "Lazy Foxy",
        image: "https://i.ibb.co/x865zyx/lazy-foxy.png",
        url: "https://frangardev.github.io/lazy-foxy/",
        repository: "https://github.com/frangardev/lazy-foxy",
        description: "",
        tech: [technologies.CSS, technologies.JavaScript],
    },
    {
        name: 'Proyecto del Curso Profesional de JavaScript',
        image: "https://i.ibb.co/MD3q7fz/proyecto-del-curso-profesional-de-javascript.png",
        url: "https://frangardev.github.io/profesional-javascript/",
        repository: "https://github.com/frangardev/profesional-javascript",
        description: "",
        tech: [technologies.HTML,technologies.CSS,technologies.JavaScript],
    },
    {
        name: "Batabit",
        image: "https://i.ibb.co/4mnBZ20/batabit.png",
        url: "https://frangardev.github.io/bata-bit/",
        repository: "https://github.com/frangardev/bata-bit",
        description: "",
        tech: [technologies.HTML,technologies.CSS],
    },
    {
        name: "Cate de mi Corazón",
        image: "https://i.ibb.co/Z8H2h9y/cate-de-mi-corazon.png",
        url: "https://frangardev.github.io/cate-de-mi-corazon/",
        repository: "https://github.com/frangardev/cate-de-mi-corazon",
        description: "",
        tech: [technologies.CSS,technologies.JavaScript],
    },
    {
        name: "Clon de Google",
        image: "https://i.ibb.co/LYf3ZLQ/clon-de-google.png",
        url: "https://frangardev.github.io/Clon-de-Google/",
        repository: "https://github.com/frangardev/Clon-de-Google",
        description: "",
        tech: [technologies.HTML,technologies.CSS],
    },
    {
        name: "Mis redes",
        image: "https://i.ibb.co/NK7kB9c/mis-redes.png",
        url: "https://frangardev.github.io/redes/",
        repository: "https://github.com/frangardev/redes",
        description: "",
        tech: [technologies.HTML,technologies.CSS,technologies.JavaScript,technologies.webpack],
    },
    {
        name: "Tarea de la universidad - Mi primera página web",
        image: "https://i.ibb.co/xhFpLGk/tarea-de-la-universidad.png",
        url: "https://frangardev.github.io/Tarea-Universidad/",
        repository: "https://github.com/frangardev/Tarea-Universidad",
        description: "",
        tech: [technologies.HTML,technologies.CSS],
    },
    {
        name: "Calculadora de Figuras Geométricas",
        image: "https://i.ibb.co/xMngcpk/calculadora-de-figuras-geom-tricas.png",
        url: "https://frangardev.github.io/ejercicios-javascript/figuras/index.html",
        repository: "https://github.com/frangardev/ejercicios-javascript/tree/main/figuras",
        description: "",
        tech: [technologies.HTML,technologies.CSS,technologies.JavaScript],
    },
    {
        name: "Dibujo de Pokeball con CSS",
        image: "https://i.ibb.co/DLhvVfy/css-pokeball.png",
        url: "https://frangardev.github.io/CSS-PokeBall/",
        repository: "https://github.com/frangardev/CSS-PokeBall",
        description: "",
        tech: [technologies.CSS],
    },


    // superCAt={
    //     name: "Súper Cat",
    //     image: "../assets/image/",
    //     url: "https//frangardev.github.io/",
    //     repository: "fa",
    //     description: "",
    //     tech: [technologies.HTML,technologies.CSS],
    // },



    {
        name: "SPA Marvel",
        image: ["https://i.ibb.co/wLJnQFJ/spa-marvel-home.png", "https://i.ibb.co/Qcpm7QK/spa-marvel-character.png"],
        url: "https://frangardev.github.io/SPA-Marvel/",
        repository: "https://github.com/frangardev/SPA-Marvel",
        description: "SPA hecha en javscript vanila, en la cual me conecte a la api de marvel para mostrar la información.",
        tech: [technologies.CSS,technologies.JavaScript,technologies.webpack]
    },
    {
        name: "Grid Gallery",
        image: "https://i.ibb.co/ygRKzqf/grid-gallery.png",
        url: "https://frangardev.github.io/Grid-Gallery/",
        repository: "https://github.com/frangardev/Grid-Gallery",
        description: "-------------------------",
        tech: [technologies.HTML,technologies.CSS]
    }
]
    
    export { Data }
    
    