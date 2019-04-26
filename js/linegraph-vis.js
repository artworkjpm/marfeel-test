
var lineSvg3 = d3.select(".graphs3").append("div").attr('class', 'line-graph').append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).attr('viewBox', '0 0 2500 1500').attr('preserveAspectRatio', 'none').append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//d3.select(".line-graph").select("svg")
// Get the data 
d3.csv("./data/data.csv", function(error, data) {
if (error) throw error;
// format the data
data.forEach(function(d) {
    d.date = parseTime(d.date);
    d.close = +d.close;
});
// Scale the range of the data
x.domain(d3.extent(data, function(d) {
    return d.date;
}));
y.domain([0, d3.max(data, function(d) {
    return d.close;
})]);
// Add the valueline path.
lineSvg3.append("path").data([data]).attr("class", "line3").attr("d", valueline);
});