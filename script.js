const apiKey="8b17c30c1a5def6a14f3d6a1b29dc281";

const searchBox=document.querySelector(".search-bar input");
const searchBut=document.querySelector(".search-bar button");
const imgWeather=document.querySelector(".Weather-condition img");

async function cheakWeather(city){
   const response =await fetch (`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
   var data =await response.json();
   console.log(data);
   document.querySelector("#city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=data.main.temp +"°c";
   document.querySelector("#hum").innerHTML=data.main.humidity + "%";
   document.querySelector("#win").innerHTML=data.wind.speed+"km\h";
  if (data.weather[0].main=="Cloud"){
    imgWeather.src="assets/clouds.png";
   }
   else if (data.weather[0].main=="Clear"){
    imgWeather.src="assets/clear.png";
}
else if (data.weather[0].main=="Rain"){
    imgWeather.src="assets/rain.png";
}
else if (data.weather[0].main=="Drizzle"){
    imgWeather.src="assets/drizzle.png";
}
else if (data.weather[0].main=="Mist"){
    imgWeather.src="assets/mist.png";
}
else if (data.weather[0].main=="Smoke"){
    imgWeather.src="assets/clouds.png";
}
}
searchBut.addEventListener("click",()=>{
    cheakWeather(searchBox.value);
})


