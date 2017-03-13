// YOUR SCRIPTS GO HERE

// http://simpleweatherjs.com/

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

$.simpleWeather({
  location: 99004,
  
  unit: 'f',
  
  success: function(weather){
    // Check for weather
    console.log(weather);
    
    // Display Weather
    $('.temp').text(weather.temp);
    $('.city').text(weather.city)
    $('.state').text(weather.region)
    $('.image img').attr('src', weather.image);
    
    
  },
  
  error: function(error) {
    console.log('Mira afuera.');
  }
});