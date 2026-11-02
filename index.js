var offset = 10;

$('#nutrition-panel').nutritionLabel({
    showLegacyVersion : false,

    showItemName : false,
    showServingsPerContainer: false,
    showIngredients: false,

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
    valueCalcium: 21,
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


nfVitamins = d3.selectAll(".nf-vitamin-column");

nfVitamins.on("mouseover", function(event, d){
    d3.select(this).node().classList.add("highlight")
        //nfLines.node().classList.add("highlight")
        //console.log("here")
})
    .on("mouseout", function(event, d){
           d3.select(this).node().classList.remove("highlight")
    });

nfCaffeine = d3.selectAll('div[class*="nf-caffeine"]');

const caffeine = ['Caffeine'];
caffeine.forEach(caffeine => {
    nfCaffeine.on("mouseover", function(event, d){
        d3.select(this).node().classList.add("highlight")
                //nfLines.node().classList.add("highlight")
                //console.log("here")
    })
        .on("mouseout", function(event, d){
                   d3.select(this).node().classList.remove("highlight")
        });
})

// nfCaffeine.on("mouseover", function(event, d){
//     d3.select(this).node().classList.add("highlight")
//             //nfLines.node().classList.add("highlight")
//             //console.log("here")
// })
//     .on("mouseout", function(event, d){
//                d3.select(this).node().classList.remove("highlight")
//     });


// Add tooltips

// var tooltip = d3.select("#frame")
//                 .append("div")
//                     .style("opacity", 0)
//                     .attr("class", "tooltip")
//                     .style("background-color", "white")
//                     .style("border", "solid")
//                     .style("border-width", "2px")
//                     .style("border-radius", "5px")
//                     .style("padding", "5px")
//                     .style("position", "absolute")
//                     .text("TESTING");


var calAmt = calorieRow.select(".nf-pr")["_groups"][0][0].innerHTML;

                
// calorieRow.on("mouseover", function(event, d){
//     return tooltip.style("opacity", "1")
//                   .text(calAmt) ;
// })
// .on("mousemove", function(event, d){
//     return tooltip.style("top", (event.pageY - offset) +"px")
//                   .style("left", (event.pageX + offset)+"px");

// })

// .on("mouseout", function (event, d){
//     return tooltip.style("opacity", 0);
// })


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


        // fact.on("mouseover", function(event){
        //     return popUp.style("opacity", "1")
        //         .text(`${label}: ${value}`);
        //         //.text(highMedLowGreen(this))
            
        // })
    
        // .on("mousemove", function(event){
        //     return popUp.style("top", (event.pageY - offset) +"px")
        //                 .style("left", (event.pageX + offset)+"px");
        
        // })
    
        // .on("mouseout", function (event){
        //     return popUp.style("opacity", 0);
        // })
            
    })

    // d3.selectAll("#nutrition-panel .nf-vitamins")
    // .each(function(){
    //     const fact = d3.select(this)
    //     const spans = fact.selectAll("span").nodes();


    //     fact.on("mouseover", function(event){
    //         const label = spans[1].innerText.trim();
    //         const value = spans[2].innerText.trim();
    //         return popUp.style("opacity", "1")
    //             .text(`${label}: ${value}`);
            
    //     })
    
    //     .on("mousemove", function(event){
    //         return popUp.style("top", (event.pageY - offset) +"px")
    //                       .style("left", (event.pageX + offset)+"px");
        
    //     })
    
    //     .on("mouseout", function (event){
    //         return popUp.style("opacity", 0);
    //     })
            
    // })



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
                .attr("class", highMedLowRed(satFatRow));


//svg for the sodium row
const sodiumRow = d3.select("#Sodium");
sodiumRow.append("svg")
            .attr("width",sqWidth) //canvas to draw the shape
            .attr("height", sqHeight)
            .append('rect')
                .attr("width", sqWidth) //drawing the actual shape
                .attr("height", sqHeight)
                .attr("class", highMedLowRed(sodiumRow));

//svg for included sugars row
const includesAddedSugarsRow = d3.selectAll('div[id*="Includes0g"][id*="AddedSugars"]'); //using a CSS attribute selecter that finds any element where the ID contains those substrings

//not sure what the div is or which name to use
includesAddedSugarsRow.append("svg")
                                .attr("width", sqWidth)
                                .attr("height",sqHeight)
                                .append("rect")
                                    .attr("width", sqWidth)
                                    .attr("height", sqHeight)
                                    .attr("class", highMedLowRed(includesAddedSugarsRow));



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
                            return highMedLowGreen(dietaryFiberRow)
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
                        return highMedLowGreen(vitaminDRow);
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
                        console.log(highMedLowGreen(calciumRow))
                        return highMedLowGreen(calciumRow);
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
                    .attr("class", highMedLowGreen(ironRow));

const potassiumRow = d3.selectAll('.nf-vitamin-column') // grabds all vitamins
.filter(function(){ // narrows it to just the one containing this specific one
    const text = d3.select(this).text();
    return text.includes("Potassium");
                        
})
potassiumRow.append("svg")
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
                    console.log(highMedLowGreen(potassiumRow))
                    return highMedLowGreen(potassiumRow);
                });


function highMedLowGreen(row){
    const spans = row.selectAll("span").nodes()
    const dv = spans[2].innerText.trim();
    console.log(spans);
    console.log(dv);
    const dvNumber = Number(dv.replace("%", ""));
    console.log(dvNumber);
    if(dvNumber > 20){
        return "highMore";
    } else if(dvNumber < 5){
        return "lowMore";
    } else{
        return "mediumMore";
    }
}

function highMedLowRed(row){
    const spans = row.selectAll("span").nodes()
    const dv = spans[4].innerText.trim();
    console.log(spans);
    console.log(dv);
    const dvNumber = Number(dv.replace("%\nDaily Value", ""));
    console.log(dvNumber);
    if(dvNumber > 20){
        return "highLess";
    } else if(dvNumber < 5){
        return "lowLess";
    } else{
        return "mediumLess";
    }
}


function extractNutritionData() {
    const limitData = [];
    const getEnoughData = [];
    
  
    function extractDailyValue(row, spanIndex, replacePattern) {
        if (row.empty()) return null;
        
        const spans = row.selectAll("span").nodes();
        if (!spans[spanIndex]) return null;
        
        const text = spans[spanIndex].innerText.trim();
        const number = Number(text.replace(replacePattern, ""));
        
        // Return null if NaN, otherwise return the valid number
        return isNaN(number) ? null : number;
    }
    
   
    // EXTRACT "LIMIT THESE" NUTRIENTS 
   
    // Saturated Fat
    const satFatDV = extractDailyValue(
        d3.select("#SaturatedFat"), 
        4, 
        "%\nDaily Value"
    );
    if (satFatDV !== null) {
        limitData.push({nutrient: "Saturated Fat", dailyValue: satFatDV});
    }
    
    // Trans Fat - Fixed: ID cannot have spaces, use #TransFat
    const transFatDV = extractDailyValue(
        d3.select("#TransFat"), 
        4, 
        "%\nDaily Value"
    );
    if (transFatDV !== null) {
        limitData.push({nutrient: "Trans Fat", dailyValue: transFatDV});
    }
    
    // Cholesterol
    const cholesterolDV = extractDailyValue(
        d3.select("#Cholesterol"), 
        4, 
        "%\nDaily Value"
    );
    if (cholesterolDV !== null) {
        limitData.push({nutrient: "Cholesterol", dailyValue: cholesterolDV});
    }
    
    // Sodium
    const sodiumDV = extractDailyValue(
        d3.select("#Sodium"), 
        4, 
        "%\nDaily Value"
    );
    if (sodiumDV !== null) {
        limitData.push({nutrient: "Sodium", dailyValue: sodiumDV});
    }
    
    // Added Sugars
    const addedSugarsDV = extractDailyValue(
        d3.selectAll('div[id*="Includes"][id*="AddedSugars"]'), 
        4, 
        "%\nDaily Value"
    );
    if (addedSugarsDV !== null) {
        limitData.push({nutrient: "Added Sugars", dailyValue: addedSugarsDV});
    }
    
    // EXTRACT "GET ENOUGH" NUTRIENTS 
    
    // Dietary Fiber
    const dietaryFiberDV = extractDailyValue(
        d3.select("#DietaryFiber"), 
        2, 
        "%"
    );
    if (dietaryFiberDV !== null) {
        getEnoughData.push({nutrient: "Dietary Fiber", dailyValue: dietaryFiberDV});
    }
    
    // Protein
    const proteinDV = extractDailyValue(
        d3.select("#Protein"), 
        2, 
        "%"
    );
    if (proteinDV !== null) {
        getEnoughData.push({nutrient: "Protein", dailyValue: proteinDV});
    }
    
    // Vitamin D
    const vitaminDRow = d3.selectAll('.nf-vitamin-column')
        .filter(function() {
            return d3.select(this).text().includes("Vitamin D");
        });
    const vitaminDDV = extractDailyValue(vitaminDRow, 2, "%");
    if (vitaminDDV !== null) {
        getEnoughData.push({nutrient: "Vitamin D", dailyValue: vitaminDDV});
    }
    
    // Calcium
    const calciumRow = d3.selectAll('.nf-vitamin-column')
        .filter(function() {
            return d3.select(this).text().includes("Calcium");
        });
    const calciumDV = extractDailyValue(calciumRow, 2, "%");
    if (calciumDV !== null) {
        getEnoughData.push({nutrient: "Calcium", dailyValue: calciumDV});
    }
    
    // Iron
    const ironRow = d3.selectAll('.nf-vitamin-column')
        .filter(function() {
            return d3.select(this).text().includes("Iron");
        });
    const ironDV = extractDailyValue(ironRow, 2, "%");
    if (ironDV !== null) {
        getEnoughData.push({nutrient: "Iron", dailyValue: ironDV});
    }
    
    // Potassium
    const potassiumRow = d3.selectAll('.nf-vitamin-column')
        .filter(function() {
            return d3.select(this).text().includes("Potassium");
        });
    const potassiumDV = extractDailyValue(potassiumRow, 2, "%");
    if (potassiumDV !== null) {
        getEnoughData.push({nutrient: "Potassium", dailyValue: potassiumDV});
    }
    
    return {limitData, getEnoughData};
}


// DIVERGING BAR CHART CREATION FUNCTION
function createDivergingBarChart() {
    const {limitData, getEnoughData} = extractNutritionData();
    
    // Combine data and add negative values for "limit" nutrients
    const data = [
        ...limitData.map(d => ({nutrient: d.nutrient, value: -d.dailyValue})), // negative for left side
        ...getEnoughData.map(d => ({nutrient: d.nutrient, value: d.dailyValue})) // positive for right side
    ];
    
    // Sort by value
    const sortedData = data.sort((a, b) => a.value - b.value);
    
    // Chart dimensions
 
  const barHeight = 25;
  const marginTop = 30;
  const marginRight = 60;
  const marginBottom = 10;
  const marginLeft = 60;
  const height = Math.ceil((data.length + 0.1) * barHeight) + marginTop + marginBottom;

    
    // Create scales
    const x = d3.scaleLinear()
        .domain(d3.extent(sortedData, d => d.value))
        .rangeRound([marginLeft, width - marginRight]);
    
    const y = d3.scaleBand()
        .domain(sortedData.map(d => d.nutrient))
        .rangeRound([marginTop, height - marginBottom])
        .padding(0.1);

    
    // Create SVG
    const svg = d3.select("#bar-chart-limit")
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");
    
    // Add bars
    svg.append("g")
        .selectAll()
        .data(sortedData)
        .join("rect")
            .attr("fill", d => d.value > 0 ? "CornflowerBlue" : "Brown") // Green for positive, red for negative
            .attr("x", d => x(Math.min(d.value, 0)))
            .attr("y", d => y(d.nutrient))
            .attr("width", d => Math.abs(x(d.value) - x(0)))
            .attr("height", y.bandwidth());
    
    // Add value labels
    svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .selectAll()
        .data(sortedData)
        .join("text")
            .attr("text-anchor", d => d.value < 0 ? "end" : "start")
            .attr("x", d => x(d.value) + Math.sign(d.value) * 4)
            .attr("y", d => y(d.nutrient) + y.bandwidth() / 2)
            .attr("dy", "0.35em")
            .text(d => Math.abs(d.value) + "%");
    
    // Add x-axis
    svg.append("g")
        .attr("transform", `translate(0,${marginTop})`)
        .call(d3.axisTop(x).ticks(width / 80).tickFormat(d => Math.abs(d) + "%"))
        .call(g => g.selectAll(".tick line").clone()
            .attr("y2", height - marginTop - marginBottom)
            .attr("stroke-opacity", 0.1))
        .call(g => g.select(".domain").remove());
    
    // Add y-axis (nutrient names)
    svg.append("g")
        .attr("transform", `translate(${x(0)},0)`)
        .call(d3.axisLeft(y).tickSize(0).tickPadding(6))
        .call(g => g.selectAll(".tick text").filter((d, i) => sortedData[i].value < 0)
            .attr("text-anchor", "start")
            .attr("x", 6));
    
    // Add center line labels
    svg.append("text")
        .attr("x", x(0) - 10)
        .attr("y", marginTop - 10)
        .attr("text-anchor", "end")
        .attr("font-weight", "bold")
        .attr("font-size", 12)
        .text("Limit These");
    
    svg.append("text")
        .attr("x", x(0) + 10)
        .attr("y", marginTop - 10)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .attr("font-size", 12)
        .text("Get Enough");
}

// Call the function
setTimeout(() => {
    createDivergingBarChart();
}, 500);



//Donut chart code
const data = [
    {name: "Saturated Fat", value: 15},
    {name: "Sodium", value: 36},
    {name: "Added Sugars", value: 0},
    {name: "Dietary Fiber", value: 0},
    {name: "Vitamin D", value: 5},
    {name: "Calcium", value: 21},
    {name: "Iron", value: 15},
    {name: "Cholesterol", value: 5}
];

const filteredData = data.filter(d => d.value > 0);

// Set dimensions
const width = 640;
const height = Math.min(width, 500);
const radius = Math.min(width, height) / 2;

// Create arc generator
const arc = d3.arc()
    .innerRadius(radius * 0.67)
    .outerRadius(radius - 1);

// Create pie generator
const pie = d3.pie()
    .padAngle(1 / radius)
    .sort((a, b) => a.value - b.value) //sort by the value of each nutrients
    .value(d => d.value);

// Create color scale
const color = d3.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3.schemePastel2);

// Create SVG
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");

// Add arcs
svg.append("g")
  .selectAll()
  .data(pie(filteredData))
  .join("path")
    .attr("fill", d => color(d.data.name))
    .attr("d", arc)
  .append("title")
    .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

// Add labels
svg.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12.5)
    .attr("text-anchor", "middle")
  .selectAll()
  .data(pie(filteredData))
  .join("text")
    .attr("transform", d => `translate(${arc.centroid(d)})`)
    .call(text => text.append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text(d => d.data.name))
    .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toLocaleString("en-US")+"%"));

// Append to page
document.getElementById("bar-chart-limit").appendChild(svg.node());