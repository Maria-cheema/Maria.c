Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//   x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//      "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: 'pie'
// };
// var data = [trace];
// var layout = {
//   title: "'Pie' Chart",
// };
// Plotly.newPlot("plotArea", data, layout);


//modified code
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

   var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

//SKILL DRILL: 
// Open VS Code and use map() to add 5 to each number in the following array:
// var numbers = [0,2,4,6,8];

var numbers = [0, 2, 4, 6, 8];

var modifiedNumbers = numbers.map(function(num) {
  return num + 5;
});

console.log(modifiedNumbers); 


var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// SKILL DRILL:
// Open your text editor and browser. Modify the code in the previous example to extract the population of each city, instead of the city name.
// ---MODIFIED CODE......

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var populations = cities.map(function(city){
    return city.population;
});

console.log(populations); // Output: ["1511946", "1626078", "1341075"]

//  filter() Method
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);



//Inspect the code below. An unsorted array of the age of each person in a household is filtered to include only those who are older than five. 
// How many elements will olderThanFive contain?

var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
console.log(olderThanFive); 



// SKILL DRILL:
// You are given the following array:
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// Filter the results to include only animals whose species name starts with the letter "s."

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// The filter() method creates a new array containing only the elements of words that start with the letter "s".
var sWords = words.filter(function(word) {
  return word.charAt(0) === 's';
});

console.log(sWords); 

//-------...........................
var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);
console.log(doubled);
// -------------------------

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
//------------------------------------

//MODIFIED-----------
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

//-----------------------
// The slice() Method
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

// SKILL DRILL:
//var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// The slice() method returns a new array containing the first three elements of words.
var firstThreeWords = words.slice(0, 3);

console.log(firstThreeWords); 


// To slice to the end of an array, you can omit the second argument:
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );

