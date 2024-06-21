const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather img");

        // const apiKey = "9c53eeb8e22094b2f09cfd0917112622";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=9c53eeb8e22094b2f09cfd0917112622&units=metric&q="
        async function checkWeather(city){
            const response = await fetch(apiUrl+city );

            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }else{
                var data = await response.json();
            

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                if(data.weather[0].main=="clouds"){
                    weatherIcon.src="images/rain.png";
                }
                else if(data.weather[0].main=="Clear"){
                    weatherIcon.src="images/clear.png";
                }   
                else if(data.weather[0].main=="Rain"){
                    weatherIcon.src="images/rain.png";
                }
                else if(data.weather[0].main=="Drizzle"){
                    weatherIcon.src="images/drizzle.png";
                }
                else if(data.weather[0].main=="Mist"){
                    weatherIcon.src="images/mist.png";
                }
                else if(data.weather[0].main=="snow"){
                    weatherIcon.src="images/snow.png";
                } 
                document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display="none";
            }

               
         }
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })
         


