// YOUR SCRIPTS GO HERE

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('#iconWeather').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});


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
            $('i').attr('class', iconCode);
       
         // Change Icon w/ Condition code
        $('#iconWeather').addClass(weather.currently);
        
        var iconCode = 'wi wi-yahoo-' + weather.code;
        $('i').attr('class', iconCode);

            },
    error: function (error) {
        // Show if weather cannot be retreived
        console.log('Look outside.');
    }

});
}

//// Get and store Geo Location lat/long coordinates
//navigator.geolocation.getCurrentPosition(
//
//    function (position) {
//
//        // wait a few seconds to receive location
//        
//        var lat = position.coords.latitude;
//        var long = position.coords.longitude;
//
//        console.log(lat, long);
//
//
//    });
