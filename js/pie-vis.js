var yellow = '#f6cb31',
    orange = '#c26723';
var dataVis = [{
    type: "VISITS",
    name: 'Smartphone',
    percent: 20,
    color: orange,
    Total: 120000000
}, {
    name: 'Tablet',
    percent: 80,
    color: yellow,
    Total: 480000000
}];
var total = dataVis[0].Total + dataVis[1].Total;

var svg3 = d3.select('.pie-chart3').append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
d3.select('svg').attr('class', 'svg-x');
var g3 = svg3.selectAll(".arc").data(pie(dataVis)).enter().append("g").attr('class', 'inner-circle-vis');
g3.append("path").attr("d", arc).style("fill", function(d, i) {
    console.log("d.color" + d.data);
    return d.data.color;
});
d3.select('.inner-circle-vis').append("text").attr('class', 'inner-circle2').attr("text-anchor", "middle").attr('y', -50).text(dataVis[0].type);
d3.select('.inner-circle-vis').append("text").attr('class', 'inner-circle3').attr("text-anchor", "middle").attr('y', 20).text(addDot(total));
//add text
const bottomText3 = `
<div class="bottom-text row">
  <div class="column column-left" style="color: ${dataVis[1].color}">${dataVis[1].name}
    <p>${dataVis[1].percent}%<span>${addDot(dataVis[1].Total)}</span></p>
  </div>
  <div class="column column-right" style="color: ${dataVis[0].color}">${dataVis[0].name}
  <p>${dataVis[0].percent}%<span>${addDot(dataVis[0].Total)}</span></p>
  </div>
</div>
<hr>
`;
document.getElementById("piechart3").insertAdjacentHTML("beforeend", bottomText3);