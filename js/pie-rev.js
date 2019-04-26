var darkGreen = '#427918',
    lightGreen = '#91dc48';
var dataRev = [{
    type: "REVENUE",
    name: 'Smartphone',
    percent: 40,
    color: darkGreen,
    Total: 80000
}, {
    name: 'Tablet',
    percent: 60,
    color: lightGreen,
    Total: 120000
}];

var total = dataRev[0].Total + dataRev[1].Total + "€";

function addDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
var width = 600,
    height = 600,
    radius = 200;
var arc = d3.arc().outerRadius(radius - 10).innerRadius(170);
var pie = d3.pie().sort(null).value(function(d) {
    return d.percent;
});
var svg1 = d3.select('.pie-chart').append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
d3.select('svg').attr('class', 'svg-x');
var g = svg1.selectAll(".arc").data(pie(dataRev)).enter().append("g").attr('class', 'inner-circle');
g.append("path").attr("d", arc).style("fill", function(d, i) {
    return d.data.color;
});
d3.select('.inner-circle').append("text").attr('class', 'inner-circle2').attr("text-anchor", "middle").attr('y', -50).text(dataRev[0].type);
d3.select('.inner-circle').append("text").attr('class', 'inner-circle3').attr("text-anchor", "middle").attr('y', 20).text(addDot(total));
//add text
const bottomText = `
<div class="bottom-text row">
  <div class="column column-left" style="color: ${dataRev[1].color}">${dataRev[1].name}
    <p>${dataRev[1].percent}%<span>${addDot(dataRev[1].Total)}€</span></p>
  </div>
  <div class="column column-right" style="color: ${dataRev[0].color}">${dataRev[0].name}
  <p>${dataRev[0].percent}%<span>${addDot(dataRev[0].Total)}€</span></p>
  </div>
</div>
<hr>
`;
document.getElementById("piechart").insertAdjacentHTML("beforeend", bottomText);