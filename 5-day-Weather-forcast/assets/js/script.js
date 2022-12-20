  // API KEY
  const api = "64a7ed0bf219b44a408a1729da0a4fc2";

  /*added api with api key */
  const base =`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&` +
        `lon=${lon}&appid=`64a7ed0bf219b44a408a1729da0a4fc2;
  
 /* added values for main and search */
  const main = document.getElementById('main');
  
  const search = document.getElementById('search');
  
  // variables
  let humidity = document.querySelector(".humidity");
  let wind =  document.querySelector(".wind");
  let temp = document.querySelector(".temp");
  let location = document.querySelector(".location");
  /* need to add location function navigator.geolocation.getCurrentPosition(); */
  /* tried to make get weather function */
  function addEventListener(getWeather);{
    document.getElementById("temp").HTML = 'Temperature: ' + data.main.temp + ' Celsius';
    document.getElementById("wind").HTML = 'Wind: ' + data.wind.speed + ' m/s';
    document.getElementById("humidity").HTML = 'Humidity: ' + data.main.humidity + '%';
}
  /* added function for parsing bc api wasnt working */
  function parseQuery(queryString) {
      var query = {};
      var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
      for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
          return query;
      }
  // Retreving API
  /* added fetch get request server api from openweathermap*/
  var fetchButton = document.getElementById('fetch-button');
    fetch(requestUrl)
    .then(function (response) {
      console.log('error: Status Code: ' +
       response.status);
        return response.json();
      })
      /* added then statement callback function */
      .then(function (data) {
        console.log(data)
         response.json().then(function(data) {
      });   
  });
  
  