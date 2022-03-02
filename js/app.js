
const apiKey = `e8f50960960bcbae1e05689db2d0a98a`
const searchBtn = document.getElementById('search-btn')
const inputField = document.getElementById('input-field')
const cityName=document.getElementById('city-name')
searchBtn.addEventListener('click', () => {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => showData(data))

    inputField.value=''
    console.log(url)
})

// set inner text 
const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
}

const showData=data=>{
    setInnerText('city-name',`${data.name}`)
    setInnerText('temp',`${data.main.temp}`)
    setInnerText('cloud',`${data.weather[0].main}`)
    const imageIcon=document.getElementById('image-icon');
    const iconUrl=`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    imageIcon.src=iconUrl;
    console.log(data)
    // cityName.innerText=`${data.name}`
}


