function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
     
  })}
  
  init();


  //---------
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  // declare the first of these functions: buildMetadata()
//   function buildMetadata(sample) {
//     d3.json("samples.json").then((data) => {
//       var metadata = data.metadata;
//       var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//       var result = resultArray[0];
//       var PANEL = d3.select("#sample-metadata");
  
//       PANEL.html("");
//       PANEL.append("h6").text(result.location);
//     });
//   }

  // SKILL DRILL:
  // modify the buildMetadata() function to populate the Demographic Info panel with the rest of the demographic data when a menu option is selected:
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }
  