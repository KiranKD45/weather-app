// const cloud_pct = document.getElementById("clod")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd27a48df6bmshb9a11c0c2ac1cd0p100cc6jsnc3d48646bc90',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=>
    response.json())
.then(response=>{
    console.log(response)
    temp.innerHTML = response.temp
    humidity.innerHTML = response.humidity
    wind_speed.innerHTML =response.wind_speed
})
.catch("error")
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


//for bangalore//
const getWeatherOfBangalore = ()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore',options)
.then(response=>
    response.json())
.then(response=>{
    console.log(response)
    Cloud_pct1.innerHTML=response.cloud_pct
    Feels_like1.innerHTML=response.feels_like
    Humidity1.innerHTML=response.humidity
    Max_temp1.innerHTML=response.max_temp
    Min_temp1.innerHTML=response.min_temp
    Sunrise1.innerHTML=response.sunrise
    Sunset1.innerHTML=response.sunset
    Temp1.innerHTML=response.temp
    Wind_degrees1.innerHTML=response.wind_degrees
    Wind_speed1.innerHTML=response.wind_speed
})
.catch("error")
}

getWeatherOfBangalore();

//weather of mumbai

const getWeatherOfMumbai = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
    .then(response=>    response.json())
    .then(response=>{
        console.log(response)
        Cloud_pct2.innerHTML=response.cloud_pct
        Feels_like2.innerHTML=response.feels_like
        Humidity2.innerHTML=response.humidity
        Max_temp2.innerHTML=response.max_temp
        Min_temp2.innerHTML=response.min_temp
        Sunrise2.innerHTML=response.sunrise
        Sunset2.innerHTML=response.sunset
        Temp2.innerHTML=response.temp
        Wind_degrees2.innerHTML=response.wind_degrees
        Wind_speed2.innerHTML=response.wind_speed
    })
    .catch("error")
    }
    
    getWeatherOfMumbai();
    
    //weather of kolkata

    const getWeatherOfKolkata = ()=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
        .then(response=>    response.json())
        .then(response=>{
            console.log(response)
            Cloud_pct3.innerHTML=response.cloud_pct
            Feels_like3.innerHTML=response.feels_like
            Humidity3.innerHTML=response.humidity
            Max_temp3.innerHTML=response.max_temp
            Min_temp3.innerHTML=response.min_temp
            Sunrise3.innerHTML=response.sunrise
            Sunset3.innerHTML=response.sunset
            Temp3.innerHTML=response.temp
            Wind_degrees3.innerHTML=response.wind_degrees
            Wind_speed3.innerHTML=response.wind_speed
        })
        .catch("error")
        }
        
        getWeatherOfKolkata();
        