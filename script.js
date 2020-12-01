let appId = "46b32d66c189c6a624b7e6a6f307c7ac";

const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }


  var d = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("date").innerHTML = months[d.getMonth()] + " " + d.getDate() + nth(d.getDate());


  let fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${appId}&units=metric`)
    .then(resp => resp.json())
    .then(data => {
       console.log(data)
       document.getElementById('loc').innerHTML = data['name']
       document.getElementById('current').innerHTML = Math.round(data['main']['temp']) + "\u00B0"
       document.getElementById('highlow').innerHTML = Math.round(data['main']['temp_max'])  + "\u00B0"
       document.getElementById('low').innerHTML = Math.round(data['main']['temp_min'])  + "\u00B0"
       document.getElementById('cloudy').innerHTML = data['weather'][0]['description']

        if( data['weather'][0]['icon'] === "01n"){
        document.getElementById('appicon').src = "http://openweathermap.org/img/wn/01n@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "01d"){
      document.getElementById('appicon').src = "http://openweathermap.org/img/wn/01d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "03n" || data['weather'][0]['icon'] === "03d"){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/03d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "02d" ){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/02d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "02n" ){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/02n@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "04n" || data['weather'][0]['icon'] === "04d"){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/04d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "09n" || data['weather'][0]['icon'] === "09d"){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/09d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "13n" || data['weather'][0]['icon'] === "13d"){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/13d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "50n" || data['weather'][0]['icon'] === "50d"){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/50d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "10d" ){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/10d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "10n" ){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/10n@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "11d" ){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/11d@2x.png"
    } else 
    if(data['weather'][0]['icon'] === "11n" ){
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/11n@2x.png"
    } else 
     document.getElementById('appicon').src = "http://openweathermap.org/img/wn/02d@2x.png"
   })
    .catch(error => console.log(error))
  }



  fetchData();

