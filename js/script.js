var svgns = 'http://www.w3.org/2000/svg';
var body = document.body;
var svg = document.createElementNS(svgns, 'svg');
body.appendChild(svg);
svg.setAttribute('width', 500);
svg.setAttribute('height', 500);
svg.setAttribute('viewbox', '0,0,500,500');

var colors = ['red', 'blue', 'orange', 'pink', 'black'];

for( var i = 0; i < 1200; i++ ){
    var circle = document.createElementNS(svgns, 'circle');
    svg.appendChild(circle)
    circle.setAttribute('cx', Math.floor( Math.random() * 500 ));
    circle.setAttribute('cy', Math.floor( Math.random() * 500 ));
    circle.setAttribute('r',  Math.floor( Math.random() * 12 + 3 ));

    var color = colors[ Math.floor( Math.random() * 5 ) ];
    circle.setAttribute('fill', color);
}