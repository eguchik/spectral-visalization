
   d3.json('https://raw.githubusercontent.com/plotly/datasets/master/custom_heatmap_colorscale.json', function(figure) {
var data = [{
    z: figure.z,
    colorscale: 'Jet',
    type: 'scatter'
  }
];
var layout = {title: 'Jet'};
Plotly.newPlot('myDiv', data, layout);
});