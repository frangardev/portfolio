// Datos que necesta el proyecto:
// 1. Nombre del proyecto.
// 2. Imagen o gif del proyecto | en baja y alta calidad  
// 3. url al proyecto
// 4. url del repositorio
// 5. Descripción 
// 6. Las tecnologias que utilice para construir ese proyecto.

//     const  technologies ={
const technologies = {
    HTML: {
        name: "HTML",
        icon: "fab fa-html5"
    },
    CSS: {
        name: "CSS",
        icon: "fab fa-css3-alt"
    },
    JavaScript: {
        name: "JavaScript",
        icon: "fab fa-js"
    },
    React: {
        name: "React",
        icon: "fab fa-react"
    },
    React: {
        name: "React",
        icon: "fab fa-react"
    },
    Sass: {
        name: "SASS",
        icon: "fa-brands fa-sass"
    },
    WordPress: {
        name: "WordPress",
        icon: "fa-brands fa-wordpress"
    },
}

const Data = [
    {
        name: "Todo React App",
        image: ["https://i.ibb.co/ydd38XW/todo-react-app.png"],
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
        image: ["https://i.ibb.co/2KLB90H/lazy-foxy.png"],
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
        name: "PAP Monterrey",
        image: ["https://i.ibb.co/x1cCNhD/pap-monterrey.png"],
        url: "https://pap-monterrey.com/",
        // repository: "https://github.com/frangardev/lazy-foxy",
        description: {
            isList: false,
            text: [
                'Sitio hecho en WordPress para P.AP. Monterrey.'
            ]
        },
        tech: [technologies.WordPress],
    },
    {
        name: "Rick and Morty",
        image: ["https://i.ibb.co/qChpKL5/rick-and-morty-black.png", "https://i.ibb.co/FKJWMGh/rick-and-morty-light.png"],
        url: "https://frangardev.github.io/rick-and-morty/",
        repository: "https://github.com/frangardev/rick-and-morty",
        description: {
            isList: true,
            text: [
                'Aplicación hecha en Riact.',
                'Conexión a la API de Rick and Morty.',
                'Dark Mode automático.',
                'Diseño responsivo.'
            ]
        },
        tech: [technologies.React]
    },
    {
        name: 'Proyecto del Curso Profesional de JavaScript',
        image: ["https://i.ibb.co/fSkGV9r/proyecto-del-curso-profesional-de-javascript.png"],
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
        tech: [technologies.HTML, technologies.CSS, technologies.JavaScript],
    },
    {
        name: "Batabit",
        image: ["https://i.ibb.co/1f0wvph/batabit.png"],
        url: "https://frangardev.github.io/bata-bit/",
        repository: "https://github.com/frangardev/bata-bit",
        description: {
            isList: true,
            text: [
                'Landing page hecha con HTML y CSS.',
                'Diseño Mobile First.',
                'Slider.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS, technologies.JavaScript],
    },
    {
        name: "Cate de mi Corazón",
        image: ["https://i.ibb.co/hsk08TZ/cate-de-mi-corazon.png"],
        url: "https://frangardev.github.io/cate-de-mi-corazon/",
        repository: "https://github.com/frangardev/cate-de-mi-corazon",
        description: {
            isList: false,
            text: [
                'Página que muestra imágenes de aguacates traidas desde una API.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS, technologies.JavaScript],
    },
    {
        name: "Mis redes",
        image: ["https://i.ibb.co/r7MkQP3/mis-redes.png"],
        url: "https://frangardev.github.io/redes/",
        repository: "https://github.com/frangardev/redes",
        description: {
            isList: true,
            text: [
                'Página con los enlaces de mis redes sociales.',
                'Animación del username con efecto Glish.',
            ]
        },
        tech: [technologies.HTML, technologies.CSS, technologies.JavaScript],
    },
    {
        name: "Tarea de la universidad - Mi primera página web",
        image: ["https://i.ibb.co/br6mJr6/tarea-de-la-universidad.png"],
        url: "https://frangardev.github.io/Tarea-Universidad/",
        repository: "https://github.com/frangardev/Tarea-Universidad",
        description: {
            isList: false,
            text: [
                'Tarea de la universidad. Mi primera página web. En ella subí mis tareas.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS],
    },
    {
        name: "Dibujo de Pokeball con CSS",
        image: ["https://i.ibb.co/xXdR7CM/css-pokeball.png"],
        url: "https://frangardev.github.io/CSS-PokeBall/",
        repository: "https://github.com/frangardev/CSS-PokeBall",
        description: {
            isList: false,
            text: [
                'Mi primer dibujo utlizando CSS.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS],
    },
    {
        name: "Clon de Google",
        image: ["https://i.ibb.co/rGFfnBx/clon-de-google-white.png", "https://i.ibb.co/h8dKf0Q/clon-de-google-black.png"],
        url: "https://frangardev.github.io/Clon-de-Google/",
        repository: "https://github.com/frangardev/Clon-de-Google",
        description: {
            isList: true,
            text: [
                'Clon dela página de Google.',
                'Cuenta con Dark Mode.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS],
    },
    {
        name: "Calculadora de Figuras Geométricas",
        image: ["https://i.ibb.co/jLXkgCN/calculadora-de-figuras-geometricas.png"],
        url: "https://frangardev.github.io/ejercicios-javascript/figuras/index.html",
        repository: "https://github.com/frangardev/ejercicios-javascript/tree/main/figuras",
        description: {
            isList: true,
            text: [
                'Calculadora de figuras geométricas, cuadrado, triángulo y círculo.',
                'Navbar que indica donde estás en la página.',
                'No tiene imágenes, todo está hecho con código.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS, technologies.JavaScript],
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
        image: ["https://i.ibb.co/023Frxz/grid-gallery.png"],
        url: "https://frangardev.github.io/Grid-Gallery/",
        repository: "https://github.com/frangardev/Grid-Gallery",
        description: {
            isList: true,
            text: [
                'Galería inspirada en una pared con cuadros.',
                'Página responsiva usando CSS Grid.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS]
    },


    {
        name: "SPA Marvel",
        image: ["https://i.ibb.co/qrQb0y6/spa-marvel-frond.png", "https://i.ibb.co/wRdgNZN/spa-marvel-2.png"],
        url: "https://frangardev.github.io/SPA-Marvel/",
        repository: "https://github.com/frangardev/SPA-Marvel",
        description: {
            isList: true,
            text: [
                'Aplicación hecha en JavaScript vainilla.',
                'Conexión a la API de Marvel.',
                'Manejo de rutas sin librerías.',
                'Diseño responsivo.'
            ]
        },
        tech: [technologies.HTML, technologies.CSS, technologies.JavaScript]
    },
]

export { Data }

