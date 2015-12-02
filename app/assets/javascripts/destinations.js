$(document).ready(function (){
	function initialize() {
		var myLatLng = new google.maps.LatLng(43.653606, -79.377379)
		var mapOptions = {
			center: myLatLng,
			zoom: 8, 
			scrollwheel: false
		};

		var map = new google.maps.Map(document.getElementById('other-map'), mapOptions);

		  var marker = new google.maps.Marker({
    		position: myLatLng,
  		  	map: map,
  		 });

    	var contentString = '<h2>' + address + '</h2>' + '</p>' + description + '</p>';

    	var infowindow = new google.mpas.InfoWindow({
    		content: contentString
    	});
    }

	google.maps.event.addDomListener(window, 'load', initialize);

	});
