// set the dimensions and margins of the graph
var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");
// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
// define the line
var valueline = d3.line().x(function(d) {
    return x(d.date);
}).y(function(d) {
    return y(d.close);
});
// append the lineSvg obgect to the body of the page
// appends a 'group' element to 'lineSvg'
// moves the 'group' element to the top left margin
var lineSvg = d3.select(".graphs").append("div").attr('class', 'line-graph').append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).attr('viewBox', '0 0 2500 1500').attr('preserveAspectRatio', 'none').append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
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
    lineSvg.append("path").data([data]).attr("class", "line").attr("d", valueline);
});