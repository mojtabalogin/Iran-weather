$(document).ready(function(){
    
    // define parameters
    let city = 'tehran';
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=63505ecc5c4c1e7ee7013642484f8280';
    let weatherButton = document.getElementById('weatherButton');
    let cityInputValue = document.getElementById('cityInputContent');



        //attach enter keyup to weather input
        cityInputValue.addEventListener('keyup', function(event){
            if(event.keyCode == 13){
                event.preventDefault();

            }
        });
        // end attach enter keyup to weather input

    
           
    




        //event for weather button 
        weatherButton.addEventListener('click', function(){

            let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputValue.value + '&appid=63505ecc5c4c1e7ee7013642484f8280';

            //fetch weather data
            fetch(weatherUrl)
                .then(function(res1){
                    return res1.json();
                })
                .then(function(res2){
                    
                    if(res2['sys']['country'] == 'IR'){
                        $('#weatherContentFather').css('display','block');
                        let resultTemp = res2['main']['temp'] - 273.15 ;
                        resultTemp = resultTemp.toFixed(1);
                        document.getElementById('name').textContent = res2['name']; 
                        document.getElementById('temp').textContent = resultTemp ;
                        document.getElementById('skyDesc').textContent = res2['weather'][0]['description'] ;
                        document.getElementById('humidity').textContent = res2['main']['humidity'] ;
                        document.getElementById('wind').textContent = res2['wind']['speed'] ;
                    }else{
                        alert('entered city not in Iran');
                    }

                    
                    
                })
                .catch(function(error){
                    alert('entered city name is incorrect!');
                });
        });
   

        //attach enter keyup to weather input
        cityInputValue.addEventListener('keyup', function(event){
            if(event.keyCode == 13){
                event.preventDefault();
                weatherButton.click();
            }
        });
        // end attach enter keyup to weather input

});
