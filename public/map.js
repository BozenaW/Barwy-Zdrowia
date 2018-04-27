$( document ).ready( function() {

    // $('body').noisy({
    //     intensity: 0.2,
    //     size: 200,
    //     opacity: 0.28,
    //     randomColors: false, // true by default
    //     color: '#000000'
    // });

    //Google Maps JS
    //Set Map
    function initialize() {
        var tarnow = new google.maps.LatLng(50.006883, 20.974150);
        var brzesko = new google.maps.LatLng(49.964727, 20.603407);
        var zakliczyn = new google.maps.LatLng(49.855818, 20.809472);
        var tuchow = new google.maps.LatLng(49.894763, 21.054158);
        var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
        var imageCar = 'images/car-32.png';
        var mapOptions = {
            zoom: 10,
            center: tarnow,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: false
        }

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        //Callout Content
        var contentString = 'Barwy Zdrowia Tarnów ul. Dworcowa 3';

        //Set window width + content
        var infowindow = new google.maps.InfoWindow({
            content: contentString
            // maxWidth: 1000
        });

        //Add Marker
        var marker_tarnow = new google.maps.Marker({
            position: tarnow,
            map: map,
            icon: imagePath,
            animation: google.maps.Animation.DROP,
            title: 'Barwy Zdrowia'
        });

        var marker_brzesko = new google.maps.Marker({
            position: brzesko,
            map: map,
            icon: imageCar,
            animation: google.maps.Animation.DROP,
            title: 'Brzesko'
        });

        var marker_zakliczyn = new google.maps.Marker({
            position: zakliczyn,
            map: map,
            icon: imageCar,
            animation: google.maps.Animation.DROP,
            title: 'Zakliczyn'

        });

        var marker_tuchow = new google.maps.Marker({
            position: tuchow,
            map: map,
            icon: imageCar,
            animation: google.maps.Animation.DROP,
            title: 'Tuchów'
        });

        var cityCircle = new google.maps.Circle({
            strokeColor: '#26f9c6',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#22b689',
            fillOpacity: 0.25,
            map: map,
            center: {lat: 50.006883, lng: 20.974150},
            radius: 14670
        });


        google.maps.event.addListener(marker_tarnow, 'click', function() {
            infowindow.open(map,marker_tarnow);
        });

        //Resize Function
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

});