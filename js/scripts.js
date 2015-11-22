//Map
// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([-8.06227, -34.87069], 16);
var Hydda_Full = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

// add an OpenStreetMap tile layer
map.addLayer(layer);

L.Routing.control({
    router: L.Routing.graphHopper('9c9f28c0-b355-4635-818f-c57d9dc6cc77'),
    waypoints: [
    L.latLng(-8.0579, -34.8794),
    L.latLng(-8.05119, -34.94728),
    L.latLng(-8.0579, -34.8794)

  ]
}).addTo(map);