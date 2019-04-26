var darkGreen = '#009100', lightGreen = '#9ee660';
var data = [{
    name: 'Smartphone',
    count: 40,
    percentage: 10,
    color: darkGreen,
    Total: 80000,
}, {
    name: 'Tablet',
    count: 60,
    percentage: 80,
    color: lightGreen,
    Total: 120000
}];

var total = data[0].Total + data[1].Total + "€";
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
var width = 600,
    height = 600,
    radius = 200;

var arc = d3.arc().outerRadius(radius - 10).innerRadius(170);
var pie = d3.pie().sort(null).value(function(d) {
    return d.count;
});
var svg1 = d3.select('.pie-chart').append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
var g = svg1.selectAll(".arc").data(pie(data)).enter().append("g").attr('class', 'inner-circle');
g.append("path").attr("d", arc).style("fill", function(d, i) {
    return d.data.color;
});
/* g.append("text").attr("transform", function(d) {
    var _d = arc.centroid(d);
    _d[0] *= 1.5; //multiply by a constant factor
    _d[1] *= 1.5; //multiply by a constant factor
    return "translate(" + _d + ")";
}).attr("dy", ".50em").style("text-anchor", "middle").text(function(d) {
    if (d.datadata.percentage < 8) {
        return '';
    }
    return d.datadata.name + ' ' + d.datadata.percentage + '%';
}); */
d3.select('.inner-circle').append("text").attr('class', 'inner-circle2').attr("text-anchor", "middle").attr('y', -50).text("data");
d3.select('.inner-circle').append("text").attr('class', 'inner-circle3').attr("text-anchor", "middle").attr('y', 20).text(numberWithCommas(total));
//add text
const bottomText = `
 <div class="bottom-text">
  <div class="bottom-left">
  <div class="title">test</div>
  </div>
 </div>`;
 $(".pie-chart").append(bottomText);
for (let i = 0; i < data; i++){
    $(".pie-chart").append("test2");
}