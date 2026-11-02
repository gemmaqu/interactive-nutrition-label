var offset = 10;

$('#nutrition-panel').nutritionLabel({
    showLegacyVersion : false,

    showItemName : false,
    showServingsPerContainer: false,
    showIngredients: false,

    valueServingUnitQuantity : 2/3,

    valueServingSizeUnit : 'cup (55g)',

    valueCalories: 230,
    valueTotalFat : 8,
    valueSatFat : 1,
    valueTransFat: 0,

    valueCholestrol: 0,
})


calorieRow = d3.select(".nf-calories");

calorieRow.on('mouseover', function(event, d ){
    calorieRow.node().classList.add("highlight");

    })
    .on("mouseout", function(event, d){
        calorieRow.node().classList.remove("highlight")
    })

calorieRow.on()

nfLines = d3.selectAll(".nf-line");

nfLines.on("mouseover", function(event, d){
    d3.select(this).node().classList.add("highlight")
    //nfLines.node().classList.add("highlight")
    //console.log("here")
})
    .on("mouseout", function(event, d){
       d3.select(this).node().classList.remove("highlight")
    });



// calorieRow = d3.select(".nf-calories");
// d3.selectAll(".nf-calories")
//       calorieRow.on('mouseover', function(event, d) {
//             calorieRow.attr("class", "nf-calories highlight");})
//             .on("mouseout", function(event, d){
//                 calorieRow.attr("class", "nf-calories");
//             })

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


var calAmt = calorieRow.select(".nf-pr")["_groups"][0][0].innerHTML;

                
calorieRow.on("mouseover", function(event, d){
    return tooltip.style("opacity", "1")
                  .text(calAmt) ;
})
.on("mousemove", function(event, d){
    return tooltip.style("top", (event.pageY - offset) +"px")
                  .style("left", (event.pageX + offset)+"px");

})

.on("mouseout", function (event, d){
    return tooltip.style("opacity", 0);
})


const popUp  = d3.select("body")
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
            

d3.selectAll("#nutrition-panel .nf-line")
    .each(function(){
        const fact = d3.select(this)
        const spans = fact.selectAll("span").nodes();
        if (spans.length<2) return;
        const label = spans[0].innerText.trim();
        const value = spans[1].innerText.trim();
        if (typeof spans[4] !== "undefined") {
            const dailyValue = spans[4].innerText.trim();
            console.log(dailyValue); 
        }

        const id = label.replaceAll(" ", ""); 
        fact.attr("id", id); 

        fact.on("mouseover", function(event){
            return popUp.style("opacity", "1")
                .text(`${label}: ${value}`);
            
        })
    
        .on("mousemove", function(event){
            return popUp.style("top", (event.pageY - offset) +"px")
                        .style("left", (event.pageX + offset)+"px");
        
        })
    
        .on("mouseout", function (event){
            return popUp.style("opacity", 0);
        })
            
    })

    d3.selectAll("#nutrition-panel .nf-vitamins")
    .each(function(){
        const fact = d3.select(this)
        const spans = fact.selectAll("span").nodes();


        fact.on("mouseover", function(event){
            const label = spans[1].innerText.trim();
            const value = spans[2].innerText.trim();
            return popUp.style("opacity", "1")
                .text(`${label}: ${value}`);
            
        })
    
        .on("mousemove", function(event){
            return popUp.style("top", (event.pageY - offset) +"px")
                          .style("left", (event.pageX + offset)+"px");
        
        })
    
        .on("mouseout", function (event){
            return popUp.style("opacity", 0);
        })
            
    })


// ##### ADDING SVG SHAPES 
const sqWidth = 10;
const sqHeight = 10; 

const satFatRow = d3.select("#SaturatedFat"); 
satFatRow.append('svg')
            .attr('width', sqWidth)
            .attr('height', sqHeight)
            .append('rect')
                .attr('width', sqWidth)
                .attr('height', sqHeight)
                .attr('class', () => {
                        return "highLess";
                });



















