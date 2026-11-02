
console.log('hi');

var offset = 10; 

$('#nutrition-panel').nutritionLabel({
    showLegacyVersion : false,

    showItemName : false,
    showServingsPerContainer : true,
    showIngredients : false,

    showPolyFat : false,
    showMonoFat : false,
    showVitaminC : false,
    showCaffeine : false,

    valueServingUnitQuantity : 2/3,
    
    valueServingSizeUnit : 'cup (55g)',

    // Put in value 
    valueCalories : 230,
    valueTotalFat : 8,
    valueSatFat : 1,
    valueTransFat: 0,

    valueCholesterol : 0,
    valueSodium : 160,
    valueTotalCarb : 37,
    valueFibers: 4,
    valueSugars : 12,
    valueAddedSugars: 10,
    valueProteins : 3,

    // Put in percentage 
    valueVitaminD : 10,
    valuePotassium_2018 : 6,
    valueCalcium : 20,
    valueIron : 45,
 
});


calorieRow = d3.select(".nf-calories"); 

calorieRow.on('mouseover', function(event, d) {
            calorieRow.node().classList.add("highlight"); 
        })
        .on("mouseout", function(event, d) {
            calorieRow.node().classList.remove("highlight"); 
        }); 

nfLines = d3.selectAll(".nf-line"); 

nfLines.on('mouseover', function(event, d) {
            d3.select(this).node().classList.add("lineHighlight"); 
        })
        .on("mouseout", function(event, d) {
            d3.select(this).node().classList.remove("lineHighlight"); 
        }); 

// Add tooltips
var tooltip = d3.select("#frame")
                .append("div")
                    .style("opacity", 0)
                    .attr("class", "tooltip")
                    .style("background-color", "white")
                    .style("border", "solid")
                    .style("border-width", "2px")
                    .style("border-radius", "5px")
                    .style("padding", "5px")
                    .style("position", "absolute")
                    .text("TESTING"); 

var calAmt = calorieRow.selectAll(".nf-pr")["_groups"][0][0].innerHTML;


calorieRow.on("mouseover", function(event, d) {
                return tooltip.style("opacity", 1)
                                .text(calAmt); 
            })
            .on("mousemove", function(event, d) {
                return tooltip.style("top", (event.pageY - offset)+"px")
                                .style("left", (event.pageX + offset)+"px"); 
            })
            .on("mouseout", function(event, d) {
                return tooltip.style("opacity", 0); 
            })


















