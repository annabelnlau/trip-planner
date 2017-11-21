const mapboxgl = require('mapbox-gl');

var buildMarker = function (type, coordinatesArray) {
  let typeURL;
  if (type === 'Activity') {
    typeUrl = http://i.imgur.com/WbMOfMl.png;
  } else if (type === 'Hotel') {
    typeUrl = http://i.imgur.com/D9574Cu.png;
  } else if (type === 'Restaurant') {
    typeUrl = http://i.imgur.com/cqR6pUI.png;
  }

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url(typeURL)"; // set type and pass in correct backgroundImage
  console.log(markerDomEl);
  new mapboxgl.Marker(markerDomEl).setLngLat(coordinatesArray);
}

module.exports = buildMarker;
