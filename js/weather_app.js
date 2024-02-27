const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if (evt.keyCode ==13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query){
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=19682f460eba5594ac42e3ad5a7be152`)
  
    .then(weather=>{
        return weather.json();
    }).then(showResult);
    
}
function showResult(weather){
    console.log(weather);
    let city=document.querySelector('.location .city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let now = new Date();
    let date= document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    console.log(weather.main);
    let temp=document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} `+ '°F';

    console.log(weather.weather[0].main);
    let description=document.querySelector('.description');
    description.innerHTML = `${weather.weather[0].main}`;

    console.log(weather.main.humidity);
    let hum=document.querySelector('.humidity');
    hum.innerHTML = weather.main.humidity + '%';

    console.log(weather.main.temp_min);
    let low=document.querySelector('.low');
    low.innerHTML = 'low'+ ' '+ Math.round(weather.main.temp_min)+ '°F';

    console.log(weather.main.temp_max);
    let hi=document.querySelector('.hi');
    hi.innerHTML = 'hi'+ ' '+ Math.round(weather.main.temp_max) + '°F';
    
}

function dateBuilder(d){
    let months=["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let date = d.getDate();
    let month = months[d.getMonth()];

    return`${date} ${month} `;
}