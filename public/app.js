var initialise = function () {
  var center = {lat: 57.2255, lng: -2.7055}
  var container = document.querySelector('#main-map')
  var mainMap = new MapWrapper(container, center, 10)
  mainMap.addMarker(center)
  mainMap.addClickEvent()
}

window.onload = initialise
