---
author: Carlos Caballero
title: Less

---
# LESS
![alt text](http://localhost:9000/img/logo.jpg "LESS")

---
# Introducción
Less es un pre-procesador, lo que significa que extiende el lenguaje CSS,
agregando caracteristicas como variables, *mixins*, funciones y muchas otras
tecnicas que permiten hacer a las hojas de estilo (CSS) mas mantenibles, y
extensibles.

---
Less se ejecuta dentro de Node.js, en el navegador, y dentro de Rhino. Tambien
existen muchas herramientas que permiten compilar los archivos less y visualizar
los cambios.

---
# Historia
Less fue creada en 2009 por Alexis Sellier (@cloudhead), originalmente fue
escrito en Ruby, y luego portado a JavaScript.

En Mayo del 2012, Alexis cedio el control y desarrollo a un equipo central de
colaboradores que ahora administran, reparan, y extienden el lenguaje.

---
# Referencia del Lenguaje
## Variables

    @color: #4D926F;
    @background: #3d3d3d;

    #header {
        color: @color;
        background: @background;
    }

---
# Referencia del lenguaje
## Mixins

    .rounded-corners (@radius: 5px) {
        -webkit-border-radius: @radius;
        -moz-border-radius: @radius;
        border-radius: @radius;
    }

    #header {
        .rounded-corners;
    }
    #footer {
        .rounded-corners(10px);
    }

---
# Referencia del lenguaje
## Anidamiento

    #header {
        h1 {
            font-size: 26px;
            font-weight: bold;
        }
        p { 
            font-size: 12px;
            a { 
                text-decoration: none;
                &:hover { 
                    border-width: 1px;
                }
            }
        }
    }

---
# Referencia del lenguaje
## Media Queries

    .screencolor {
        @media screen {
            color: green;
            @media (min-width:768px) {
                color: red;
            }
        }
        @media tv {
            color: black;
        }
    }

---
# Referencia del lenguaje
## Operaciones

    @base: 5%;
    @filler: @base * 2;
    @other: @base + @filler;

    color: #888 / 4;
    background-color: @base-color + #111;
    height: 100% / 2 + @filler;

---
# Referencia del lenguaje
## Funciones

    @base: #f04615;
    @width: 0.5;

    .class {
        width: percentage(@width); // returns `50%`
        color: saturate(@base, 5%);
        background-color: spin(lighten(@base, 25%), 8);
    }

---
# Referencias
- http://lesscss.org/
- http://en.wikipedia.org/wiki/Less_(stylesheet_language)

