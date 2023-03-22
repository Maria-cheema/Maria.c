console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
console.log(sortedCities);

var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

var topFiveCityNames = cityGrowths.map(city => city.City);
console.log(topFiveCityNames);

var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);

//Create a Bar Chart with the Arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  // SKILL DRILL:
// Use the same dataset to create a bar chart of the seven largest cities by population.
var largestCities = cityGrowths
  .sort((a, b) => b.Population_2017 - a.Population_2017)
  .slice(0, 7);

  var layout = {
    title: "Seven Largest Cities by Population",
    xaxis: { title: "City" },
    yaxis: { title: "Population (2017)" }
  };

  // Use Plotly to create the bar chart in the "bar-plot" HTML element
Plotly.newPlot("bar-plot", data, layout);
