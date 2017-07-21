---
author: Carlos Eduardo Caballero Burgoa
title: nos atacan desde d3.js

---
![alt text](http://localhost:9000/img/d3.png "d3")
# Nos atacan desde d3.js

---
# Visualizacion de Datos

Es el proceso de búsqueda, interpretación, contrastación y comparación de datos
que permite un conocimiento en profundidad y detalle de los mismos de tal forma
que se transformen en información comprensible para el usuario.

---
# D3.js

Es una librería de JavaScript para producir, a partir de datos, infogramas
dinámicos e interactivos en navegadores web. Hace uso de tecnologías bien
sustentadas como SVG, HTML5, y CSS.

---
# Ventajas

- Buena integración y facilidad de depuración.
- Manipulación del DOM dirigida por los datos.
- Eficiente y modular (plug-ins).
- Animaciones y transiciones de última generación.
- 8a librería mejor valorada en GitHub.

---
# Desventajas

- Curva de aprendizaje elevada.
- Integración con navegadores antiguos (p.ej.SVG).

---
# Módulos

- **Core**: Selecciones, transiciones...
- **Scales**: Mapeo de entrada/salida.
- **SVG**: Generación de elementos SVG.
- **Time**: Formatos y funciones matemáticas.
- **Layouts**: Chord, cluster, force, hierarchy, etc.
- **Geography**: Proyecciones geográficas.
- **Geometry**: Voronoi, quadtree, polygon, hull...
- **Behaviour**: Drag, zoom, etc.

---
# Ejemplos de aplicación

Galería oficial:

- https://github.com/mbostock/d3/wiki/Gallery

Web del creador:

- http://bost.ocks.org/mike/
- http://bl.ocks.org/mbostock

Webs de otros desarrolladores:

- http://alignedleft.com/
- http://www.jasondavies.com/
- http://anna.ps/

---
# Plantilla de uso básica

```html
&lt;!DOCTYPE html>
&lt;html>
    &lt;head>
        &lt;title>Plantilla d3.js&lt;/title>
        &lt;script type='text/javascript'
                src='d3.min.js'>&lt;/script>
    &lt;/head>
    &lt;body>
        &lt;script type='text/javascript'>
            // Código JS que utiliza los
            // objetos de d3.
        &lt;/script>
    &lt;/body>
&lt;/html>
```

---
# Selecciones

```javascript
// Seleccionar el elemento &lt;body>
var body=d3.select('body');

// Añadir un elemento &lt;h1>
var h1=body.append('h1').text('Hola mundo!');

d3.select('table');

d3.selectAll('td');

d3.selectAll('tr').selectAll('td');
```

---
# DOM

```javascript
// Update...
var p=d3.select('body')
        .selectAll('p')
        .data([4,8,15,16,23,42])
        .text(String)

// Enter...
p.enter()
 .append('p')
 .text(String);

// Exit...
p.exit()
 .remove();
```
---
# Carga de datos externos

```javascript
// CSV:
// d3.csv('source.csv',function(source){...})
// TSV:
// d3.tsv('source.tsv',function(source){...})
// JSON:
// d3.csv('source.json',function(source){...})

var format=d3.time.format('%b %Y')

d3.csv('stocks.csv',function(stocks){
    stocks.forEach(function(d){
        d.price=+d.price;
        d.date=format.parse(d.date);
    });
});
```

---
# Escalas

- Facilita el mapeo de datos a propiedades gráficas.
- Normaliza el dominio de entrada.
- Tipos de escalas:
    - linear
    - sqrt
    - pow
    - log
    - quantize
    - quantile
    - y ordinal.

---
# Ejes

Visualiza un eje para una determinada escala

```javascript
var x=d3.scale.linear()
        .domain([20, 80])
        .range([0, 120])
        .ticks(5); // Sólo orientativo

var xAxis=d3.svg.axis()
            .scale(x)
            .orient('bottom');

svg.append('g')
   .attr('class','x axis')
   .call(xAxis);

```

---
# Interacción

- selection.on(type, function(d, i) {...});
- Tipos: click, mouseover, mouseout, submit...
- +Info: this, d3.event, d3.mouse, d3.touches

---
# Referencias

**d3.js:** Sitio oficial con el API de programación, recursos y ejemplos
  descargables.

- http:// d3js.org

**Mike Bostock:** Web del creador de d3.js.

- http:// bost.ocks.org

**Scott Murray:** Web del autor de buenos tutoriales y un libro para el
  aprendizaje de 3d.js con buena crítica.

- http://alignedleft.com
- http://www.scribd.com/doc/129910826/Interactive-Data-Visualization-for-the-Web

---
gracias ...

