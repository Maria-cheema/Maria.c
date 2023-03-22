d3// Get a reference to the select element
var select = d3.select('#character');

// Add an event listener to the select element
select.on('change', function() {
  // Get the selected option
  var selectedOption = d3.select(this).property('value');
  
  // Print the selected option to the console
  console.log('Selected character:', selectedOption);
});
