/*eslint-disable*/

const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGhhcm1lbmRyYXZlcm1hIiwiYSI6ImNrY3c0NTkzbDBhaWIzMHMxNGs5MDFtd2oifQ.qnJuPDVADN0DJGC0V_pJGw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dharmendraverma/ckcw4e75912rb1imzl4j8snq9',
  scrollZoom: false,
  // center: [-118.113491, 34.111745],
  // zoom: 10,
  // interactive: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  //Create Marker
  const el = document.createElement('div');
  el.className = 'marker';

  //Add Marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  //Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}:${loc.description}</p>`)
    .addTo(map);

  //Extends map bounds to include current locations
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: { top: 200, bottom: 150, left: 100, right: 100 },
});
