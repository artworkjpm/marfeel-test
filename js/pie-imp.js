var lightBlue = '#7ad0e8', darkBlue = '#386174';
var dataImp = [{
    type: "IMPRESSIONS",
    name: 'Smartphone',
    percent: 60,
    color: darkBlue,
    Total: 30000000
}, {
    name: 'Tablet',
    percent: 40,
    color: lightBlue,
    Total: 20000000
}];
var total = dataImp[0].Total + dataImp[1].Total;

var svg2 = d3.select('.pie-chart2').append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
d3.select('svg').attr('class', 'svg-x');
var g2 = svg2.selectAll(".arc").data(pie(dataImp)).enter().append("g").attr('class', 'inner-circle-imp');
g2.append("path").attr("d", arc).style("fill", function(d, i) {
    console.log("d.color" + d.data);
    return d.data.color;
});
d3.select('.inner-circle-imp').append("text").attr('class', 'inner-circle2').attr("text-anchor", "middle").attr('y', -50).text(dataImp[0].type);
d3.select('.inner-circle-imp').append("text").attr('class', 'inner-circle3').attr("text-anchor", "middle").attr('y', 20).text(addDot(total));
//add text
const bottomText2 = `
<div class="bottom-text row">
  <div class="column column-left" style="color: ${dataImp[1].color}">${dataImp[1].name}
    <p>${dataImp[1].percent}%<span>${addDot(dataImp[1].Total)}</span></p>
  </div>
  <div class="column column-right" style="color: ${dataImp[0].color}">${dataImp[0].name}
  <p>${dataImp[0].percent}%<span>${addDot(dataImp[0].Total)}</span></p>
  </div>
</div>
<hr>
`;
document.getElementById("piechart2").insertAdjacentHTML("beforeend", bottomText2);
