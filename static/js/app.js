//Homework 14
// from data.js
var tableData = data;
// display UFO's
function tableDisplay(ufoSightings){
    var tableBody = d3.select("tbody");
    ufoSightings.forEach((ufoInstance) => {
        var row = tableBody.append("tr");
        Object.entries(ufoInstance).forEach(([key,vale])=>{
            var cell = row.append("td");
            cell.html(vale);
        });
    });
};
//delete table data
function deleteTableBody(){
    d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};
// display tableDisplay function
tableDisplay(tableData);
// select filter button
var filterButton = d3.select("#filter-btn");
//filter the database
filterButton.on("click", function(event){
    d3.event.preventDefault();
    deleteTableBody();

    var filteredData = tableData;
    var inputId = document.getElementsByClassName("form-control");
    
    // for loop to run through inputID and setting field variable value of idName
    for (var i = 0; i< inputId.length; i++){
        var idName = inputId[i].id;
        var field = d3.select("#" + idName).property("value");
        // dealing with uppercase chars
        if (field.trim() !==""){
            var filteredData = filteredData.filter(ufoSighting => ufoSighting[idName].toUpperCase().trim() === field.toUpperCase().trim());
        };
    };
//if no results, show "No Records Found"
if(filteredData.length == 0){
    d3.select("tbody")
    .append("tr")
    .append("td")
    .attr("colspan",7)
    .html("<h3>No Records Found</h3>")
};
//displays filtered data in console
console.log(filteredData);
// shows filteredData using the tableDisplay function
tableDisplay(filteredData);
});