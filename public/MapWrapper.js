var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
   // container, settings object which defines a minimum of centre and zoom level
}

MapWrapper.prototype = {

  addMarker: function (coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    console.log(coords.lat)
    var latlngstring = coords.lat + ' ' + coords.lng
    var infowindow = new google.maps.InfoWindow({
      content: latlngstring
    })
    infowindow.open(this.googleMap, marker)
  },

  addClickEvent: function () {
    google.maps.event.addListener(this.googleMap, 'click', function (event) {
      var position
      console.log(event)
      // position = {lat: event.latLng.lat(), lng: event.latLng.lng() }
      position = event.latLng
      console.log(position)
      this.addMarker(position)
    }.bind(this))
  }
}
