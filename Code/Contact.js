
function moveMapToBerlin(map){
    map.setCenter({lat:1.3397, lng:103.7067});
    map.setZoom(17);
  }
function addMarkersToMap(map) {
    var parisMarker = new H.map.Marker({lat:1.3397, lng:103.7067});
    map.addObject(parisMarker);
}
  var platform = new H.service.Platform({
    apikey: '9_NsUNyqXpJvgs3hbvNETASg0xyH5NQGOjhdszU_l-E',
    useHTTPS:true
  });
  var defaultLayers = platform.createDefaultLayers();

  var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
    center: {lat:50, lng:5},
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
  });
  window.addEventListener('resize', () => map.getViewPort().resize());
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  window.onload = function () {
    moveMapToBerlin(map);
    addMarkersToMap(map);
  }