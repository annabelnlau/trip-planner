const mapboxgl = require('mapbox-gl');

const iconURLS = {
  activities: 'http://i.imgur.com/WbMOfMl.png',
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png'
}

var buildMarker = function (type, coordinatesArray) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${iconURLS[type]})`; // set type and pass in correct backgroundImage
  console.log(markerDomEl);
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinatesArray);
}

module.exports = buildMarker;
