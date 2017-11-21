const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiamFjcXVlbHlud2F4IiwiYSI6ImNqYTl0cDc5aDBsdjkycXE5dHRnNHo4engifQ.034FQN2Pdvo-d51kc2Yb6Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 15, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
})

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("Restaurant", [-74.009, 40.705]);
console.log(marker);
marker.addTo(map);
