// YOUR SCRIPTS GO HERE

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// $(window).on('load', function() {
//    $("#cover").fadeOut(200);
//});

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

    $('.geo').show();

} else {

    $('.geo').hide();
    $('.geo').prepend('<p>Geolocation Not Supported</p>');

}
        


// Call Simple Weather
var getWeather = function (location) {
    $.simpleWeather({
        location: location,
        unit: 'f',
        success: function (weather) {

            // Entire weather object
            console.log(weather);

            // Display Data

            $('.geo').text(weather.city);
            $('.temp').text(weather.temp);

            // Icon Var
            var iconCode = 'wi wi-yahoo-' + weather.code;
            $('i').attr('class', iconCode);

            // Change Icon w/ Condition code & Diplay Data
            $('i').attr('class', iconCode);
    



            //Condition C0D3

            if (weather.code === 9 || weather.code === 18 || weather.code === 35 || weather.code === 45 || weather.code === 47 || weather.code <= 5 && weather.code >= 7 || weather.code <= 11 && weather.code >= 12 || weather.code <= 37 && weather.code >= 40) {
                console.log('SAH DU');

                $('body').addClass('rainy');
                $('.cusswerds').text('When the frick frack did it start raining?!');
            }

            if (weather.code === 8 || weather.code === 10 || weather.code === 37) {
                $('body').addClass('snow');
                $('.cusswerds').text('Oh look. Its the devils DANDRUFF');
            }
            
            
            if (weather.code === 21 || weather.code === 23 || weather.code === 24) {
                $('body').addClass('wind');
                $('.cusswerds').text('Windy? Shut the front door.');
            }
            
            if (weather.code >= 26 && weather.code <= 30 || weather.code == 33) {
                $('body').addClass('cloudydark');
                $('.cusswerds').text('erhmehgerd erts derk.');
            }
            
        },
                error: function (error) {
            // Show if weather cannot be retreived
            alert("For crying out loud. Just look outside, dodge ram-it");
        }
        
    });
};

// Get and store Geo Location lat/long coordinates
navigator.geolocation.getCurrentPosition(

    function (position) {

        // wait a few seconds to receive location

        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log(lat, long);

        // Send to SimpleWeather
        getWeather(lat + ',' + long);

    });
