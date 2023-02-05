const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name'); 
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val'); 
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide'); 


    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fb2a06c6d9dbe15c22a87aead19edbcc`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}`, `${arrData[0].sys.country}`;
        temp_real_val.innerText =arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;
        // console.log(data);
        //condition to check sunny or cloudy 
        // Agar icon lagana h to font awesome  se dekh lena
        
        datahide.classList.remove('data_hide');


        }catch{
            city_name.innerText = `Please enter the correct city name`;
        }


    }
}

submitBtn.addEventListener('click', getInfo);