function searchWeather(){
    var cityName = document.getElementById("search-city").value
    console.log(cityName);


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=703f2c77429f4f6d784fba7d5d6c8675')
    .then(res => {
       return res.json();
        
    })
    .then(data => {


        var cite = data.name
        document.getElementById("city-name").innerHTML = cite
    
        var weatherCondition = data.weather[0].description
        document.getElementById("weather-type").innerHTML = weatherCondition
  
         var temperature = data.main.temp
         document.getElementById("Temp").innerHTML = temperature
         
         var minTemp = data.main.temp_min
         document.getElementById("Min-temp").innerHTML = minTemp

         var maxTem = data.main.temp_max
         document.getElementById("Max-temp").innerHTML = maxTem
  
  
    })
}

