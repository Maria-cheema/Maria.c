const url = "https://api.spacexdata.com/v2/launchpads";

d3.json("samples.json").then(function(data){
    console.log(data);
});

// extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// sort the wfreq array in descending order.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// delete null values from the sorted wfreq array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

//  Use Object.entries() to print each key-value pair inside an array
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

console.log(Object.entries(researcher1));


// print to the console each trait and corresponding property
researcher1 = [['name', 'Roza'], ['age', 34], ['hobby', 'Hiking']];
console.log('Code is being executed');
// Using a for loop
for (let i = 0; i < researcher1.length; i++) {
    console.log(researcher1[i][0] + ': ' + researcher1[i][1]);
}

// Using forEach method
researcher1.forEach(pair => console.log(pair[0] + ': ' + pair[1]));


d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});