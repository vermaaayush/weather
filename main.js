const api={
	key:"913750ab6b88536749a9e6f0255e2e73",
	base:"https://api.openweathermap.org/data/2.5/"
}
   
  function getinput()
  {
     const searchbox=document.querySelector('.searchbar').value;
  	 //call getresult function 
  	 getResults(searchbox);
  }

  document.querySelector('.search_btn').addEventListener('click',getinput);
  document.addEventListener('keypress',setQuery);

 function setQuery(evt){
 	if (evt.keyCode==13) 
 	{
 		getinput();
 	}
 }
 

 function getResults(query)
 {
 	fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
 	.then(weather =>{
 		return weather.json();
 	}).then(displayResults);
 }

function displayResults(weather)
{
	console.log(weather);
	let city=document.querySelector('.location .city_name');
	city.innerText=`${weather.name},${weather.sys.country}`;

	let now =new Date();
	let date=document.querySelector('.location .city_date');
	date.innerText=datebuilder(now);

	let temp=document.querySelector('.current .current_temp');
	temp.innerHTML=`${Math.round(weather.main.temp)}<span>°C</span>`;

	let weather_el=document.querySelector('.current .weather_condition');
	weather_el.innerText=weather.weather[0].main;

	let hilow= document.querySelector('.current .hi_low');
	hilow.innerText=`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}
 
 function datebuilder(d)
 {
 	let months=["January","February","Marh","April","May","June","July","August","September","October","November","December"];

    let days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];


 let day=days[d.getDay()];
 let date=d.getDate();
 let month=months[d.getMonth()];
 let year=d.getFullYear();

  return  `${day} ${date} ${month} ${year}`;
}
