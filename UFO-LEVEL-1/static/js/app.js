// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

tableData.forEach(dataSet => {
    console.log(dataSet)
    var tr = tbody.append("tr")
    Object.entries(dataSet).forEach(([key, value]) => {
        console.log(`Key: ${key} Value: ${value}`)
        tr.append("td").text(value)
    })
});

d3.select("table").attr("class", "table table-striped");