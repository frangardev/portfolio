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
        icon: "fab fa-html5"
    },
    CSS:{
        name: "CSS",
        icon: "fab fa-css3-alt"
    },
    JavaScript:{
        name: "JavaScript",
        icon: "fab fa-js"
    },
    React:{
        name: "React",
        icon: "fab fa-react"
    }
}

const Data = [
    {
        name: "Todo React App",
        image: "https://i.ibb.co/9c14pGP/To-Do-React-App.png",
        url: "https://frangardev.github.io/todo-react-app/",
        repository: "https://github.com/frangardev/todo-react-app",
        description: {
            isList: true,
            text: [
                'Aplicación web hecha en React.',
                'Guardado de tareas en local utilizando local storage.',
                'Diseño responsivo.'
            ]
        },
        tech: [technologies.CSS, technologies.React],
    },
    {
        name: "Lazy Foxy",
        image: "https://i.ibb.co/x865zyx/lazy-foxy.png",
        url: "https://frangardev.github.io/lazy-foxy/",
        repository: "https://github.com/frangardev/lazy-foxy",
        description: {
            isList: true,
            text: [
                'Página que muestra imágenes de zorros traídas de una API de manera aleatoria.',
                'Las imágenes se descargan usando lazy loading.',
                'Diseño tipo Pinterest.',
                'El código está hecho usando programación orientada a objetos, POO.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS, technologies.JavaScript],
    },
    {
        name: 'Proyecto del Curso Profesional de JavaScript',
        image: "https://i.ibb.co/MD3q7fz/proyecto-del-curso-profesional-de-javascript.png",
        url: "https://frangardev.github.io/profesional-javascript/",
        repository: "https://github.com/frangardev/profesional-javascript",
        description: {
            isList: true,
            text: [
                'Proyecto del curso profesional de JavaScript.',
                'Manipulación del DOM.',
                'El video se pausa cuando no está en la pestaña o el video no está en visión.',
                'Cuenta con servis worker.',
                'Está hecho usando POO.'
            ]
        },
        tech: [technologies.HTML,technologies.CSS,technologies.JavaScript],
    },
    {
        name: "Batabit",
        image: "https://i.ibb.co/4mnBZ20/batabit.png",
        url: "https://frangardev.github.io/bata-bit/",
        repository: "https://github.com/frangardev/bata-bit",
        description: {
            isList: true,
            text:[
                'Landing page hecha con HTML y CSS.',
                'Diseño Mobile First.'
            ]
        },
        tech: [technologies.HTML,technologies.CSS],
    },
    {
        name: "Cate de mi Corazón",
        image: "https://i.ibb.co/Z8H2h9y/cate-de-mi-corazon.png",
        url: "https://frangardev.github.io/cate-de-mi-corazon/",
        repository: "https://github.com/frangardev/cate-de-mi-corazon",
        description: {
            isList: false,
            text:[
                'Página que muestra las imágenes de aguacates de una API.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS,technologies.JavaScript],
    },
    {
        name: "Clon de Google",
        image: "https://i.ibb.co/LYf3ZLQ/clon-de-google.png",
        url: "https://frangardev.github.io/Clon-de-Google/",
        repository: "https://github.com/frangardev/Clon-de-Google",
        description: {
            isList: true,
            text:[
                'Clon dela página de Google.',
                'Cuenta con Dark Mode.'
            ]
        },
        tech: [technologies.HTML,technologies.CSS],
    },
    {
        name: "Mis redes",
        image: "https://i.ibb.co/NK7kB9c/mis-redes.png",
        url: "https://frangardev.github.io/redes/",
        repository: "https://github.com/frangardev/redes",
        description: {
            isList: true,
            text:[
                'Página con los enlaces de mis redes sociales.',
                'Animación del username con efecto Glish.',
            ]
        },
        tech: [technologies.HTML,technologies.CSS,technologies.JavaScript],
    },
    {
        name: "Tarea de la universidad - Mi primera página web",
        image: "https://i.ibb.co/xhFpLGk/tarea-de-la-universidad.png",
        url: "https://frangardev.github.io/Tarea-Universidad/",
        repository: "https://github.com/frangardev/Tarea-Universidad",
        description: {
            isList: false,
            text:[
                'Tarea de la universidad. Mi primera página web. En ella subí mis tareas.'
            ]
        },
        tech: [technologies.HTML,technologies.CSS],
    },
    {
        name: "Calculadora de Figuras Geométricas",
        image: "https://i.ibb.co/xMngcpk/calculadora-de-figuras-geom-tricas.png",
        url: "https://frangardev.github.io/ejercicios-javascript/figuras/index.html",
        repository: "https://github.com/frangardev/ejercicios-javascript/tree/main/figuras",
        description: {
            isList: true,
            text:[
                'Calculadora de figuras geométricas, cuadrado, triángulo y círculo.',
                'Navbar que indica donde estás en la página.',
                'No tiene imágenes, todo está hecho con código.'
            ]
        },
        tech: [technologies.HTML,technologies.CSS,technologies.JavaScript],
    },
    {
        name: "Dibujo de Pokeball con CSS",
        image: "https://i.ibb.co/DLhvVfy/css-pokeball.png",
        url: "https://frangardev.github.io/CSS-PokeBall/",
        repository: "https://github.com/frangardev/CSS-PokeBall",
        description: {
            isList: false,
            text:[
                'Mi primer dibujo utlizando CSS.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS],
    },


    // superCAt={
    //     name: "Súper Cat",
    //     image: "../assets/image/",
    //     url: "https//frangardev.github.io/",
    //     repository: "fa",
    //     description: {
        //     isList: false,
        //     text:[
        //         ''
        //     ]
        // },
    //     tech: [technologies.HTML,technologies.CSS],
    // },


    {
        name: "Grid Gallery",
        image: "https://i.ibb.co/ygRKzqf/grid-gallery.png",
        url: "https://frangardev.github.io/Grid-Gallery/",
        repository: "https://github.com/frangardev/Grid-Gallery",
        description: {
            isList: true,
            text:[
                'Galería inspirada en una pared con cuadros.',
                'Página responsiva usando CSS Grid.'
            ]
        },
        tech: [technologies.HTML,technologies.CSS]
    },


    {
        name: "SPA Marvel",
        image: ["https://i.ibb.co/wLJnQFJ/spa-marvel-home.png", "https://i.ibb.co/Qcpm7QK/spa-marvel-character.png"],
        url: "https://frangardev.github.io/SPA-Marvel/",
        repository: "https://github.com/frangardev/SPA-Marvel",
        description:{
            isList: true,
            text:[
                'Aplicación hecha en JavaScript vainilla.',
                'Conexión a la API de Marvel.',
                'Manejo de rutas sin librerías.',
                'Diseño responsivo.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS,technologies.JavaScript]
    },
]
    
    export { Data }
    
    