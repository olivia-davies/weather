// YOUR SCRIPTS GO HERE

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js



$.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function (weather) {
        // Entire weather object
        console.log(weather);


        // Change Icon w/ Condition code
        var iconCode = 'wi-' + weather.currently;

        //$('i').attr('class', iconCode);

        // Display Data

        $('.geo').text(weather.city);
        $('.temp').text(weather.temp);
        $('iconCode').addClass(weather.currently);

    },
    error: function (error) {
        // Show if weather cannot be retreived
        console.log('Look outside.');
    }

});


// Get and store Geo Location lat/long coordinates
navigator.geolocation.getCurrentPosition(

    function (position) {

        // wait a few seconds to receive location
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log(lat, long);


    });




