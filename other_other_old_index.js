var offset = 10;

$('#nutrition-panel').nutritionLabel({
    showLegacyVersion : false,

    showItemName : false,
    showServingsPerContainer: false,
    showIngredients: false,
    showCaffeine: false,

    valueServingUnitQuantity : 2/3,

    valueServingSizeUnit : 'cup (55g)',

    valueCalories: 370,
    valueTotalFat : 12,
    valueSatFat : 3,
    valueTransFat: 0,

    valueCholesterol: 15,

    valueSodium: 860,
    valueTotalCarbohydrates: 49,

    valueDietaryFiber: 1,
    valueTotalSugars: 4,
    valueIncludesAddedSugars: 0,

    valueProtein: 13,

    valueVitaminD: 0,
    valueCalcium: 10,
    valueIron: 15,
    valuePotassium_2018: 4,
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
        if(typeof spans[4] !== "undefined"){
            const dailyValue = spans[2].innerText.trim();
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



///SVG Fixed Shapes
const sqWidth = 10;
const sqHeight = 10;
const r = 5;
// const ciX = 100;
// const ciY = 100;

//svg for the saturated fat row
const satFatRow = d3.select("#SaturatedFat");
satFatRow.append("svg")
            .attr("width",sqWidth) //canvas to draw the shape
            .attr("height", sqHeight)
            .append('rect')
                .attr("width", sqWidth) //drawing the actual shape
                .attr("height", sqHeight)
                .attr("class", () => {
                    return "mediumLess"
                });


//svg for the sodium row
const sodiumRow = d3.select("#Sodium");
sodiumRow.append("svg")
            .attr("width",sqWidth) //canvas to draw the shape
            .attr("height", sqHeight)
            .append('rect')
                .attr("width", sqWidth) //drawing the actual shape
                .attr("height", sqHeight)
                .attr("class",() => {
                    return "highLess"
                });

//svg for included sugars row
const includesAddedSugarsRow = d3.selectAll('div[id*="Includes0g"][id*="AddedSugars"]'); //using a CSS attribute selecter that finds any element where the ID contains those substrings

//not sure what the div is or which name to use
includesAddedSugarsRow.append("svg")
                                .attr("width", sqWidth)
                                .attr("height",sqHeight)
                                .append("rect")
                                    .attr("width", sqWidth)
                                    .attr("height", sqHeight)
                                    .attr("class",() => {
                                        return "lowLess"
                                    });



//svg for included dietary fiber row
const dietaryFiberRow = d3.select("#DietaryFiber"); 
dietaryFiberRow.append("svg")
                    .attr("width",sqWidth) //canvas to draw the shape
                    .attr("height", sqHeight)
                    // .attr("x-axis", ciX)
                    // .atrr("y-axis", ciY)
                    .append('circle') //drawing the actual circle
                        .attr("cx", sqWidth / 2)
                        .attr("cy", sqHeight / 2)
                        .attr("r", r)
                        // .attr("x-axis", ciX)
                        // .atrr("y-axis", ciY)
                        .attr("class",() => {
                            return "lowMore"
                        });
            

const vitaminDRow = d3.selectAll('.nf-vitamin-column') // grabds all vitamins
    .filter(function(){ // narrows it to just the one containing this specific one
        const text = d3.select(this).text();
        return text.includes("Vitamin D");
        
    })
vitaminDRow.append("svg")
                .attr("width",sqWidth) //canvas to draw the shape
                .attr("height", sqHeight)
    // .attr("x-axis", ciX)
    // .atrr("y-axis", ciY)
                .append('circle') //drawing the actual circle
                    .attr("cx", sqWidth / 2)
                    .attr("cy", sqHeight / 2)
                    .attr("r", r)
        // .attr("x-axis", ciX)
        // .atrr("y-axis", ciY)
                    .attr("class",() => {
                        return "lowMore"
                     });



const calciumRow = d3.selectAll('.nf-vitamin-column') // grabds all vitamins
    .filter(function(){ // narrows it to just the one containing this specific one
        const text = d3.select(this).text();
        return text.includes("Calcium");
                         
    })
calciumRow.append("svg")
                .attr("width",sqWidth) //canvas to draw the shape
                .attr("height", sqHeight)
                     // .attr("x-axis", ciX)
                     // .atrr("y-axis", ciY)
                .append('circle') //drawing the actual circle
                    .attr("cx", sqWidth / 2)
                    .attr("cy", sqHeight / 2)
                    .attr("r", r)
                         // .attr("x-axis", ciX)
                         // .atrr("y-axis", ciY)
                    .attr("class",() => {
                        return "mediumMore"
                    });

const ironRow = d3.selectAll('.nf-vitamin-column') // grabds all vitamins
.filter(function(){ // narrows it to just the one containing this specific one
    const text = d3.select(this).text();
    return text.includes("Iron");                   
})

//console.log(ironRow); 

ironRow.append("svg")
                .attr("width",sqWidth) //canvas to draw the shape
                .attr("height", sqHeight)
                     // .attr("x-axis", ciX)
                     // .atrr("y-axis", ciY)
                .append('circle') //drawing the actual circle
                    .attr("cx", sqWidth / 2)
                    .attr("cy", sqHeight / 2)
                    .attr("r", r)
                         // .attr("x-axis", ciX)
                         // .atrr("y-axis", ciY)
                    .attr("class", highMedLowColor(ironRow));

function highMedLowColor(row) {
    const text = row["_groups"][0][0]; //.innerHTML
    const dv = text; 
    console.log(dv); 
    return "mediumMore"; 
}
                       
        




























































// "<svg width="30" height="30" ><rect width="30" height="30" fill="blue" /></svg>"

