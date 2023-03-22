const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));


//  rewrite the code to retrieve the details only from the Vandenberg Air Force Base
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

    d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// SKILL DRILL: 
// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
d3.json(url).then(receivedData => {
    const coordinates = receivedData.map(launchpad => ({
      latitude: launchpad.location.latitude,
      longitude: launchpad.location.longitude
    }));
    console.log(coordinates);
  });


 