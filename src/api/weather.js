//id = ea343469580e26d20eae0a046e9e91d4
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
export async function getCountry(city){
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ea343469580e26d20eae0a046e9e91d4&lang=pt_br`
    const response = await fetch(api)
    const data = await response.json();
    console.log(data)
    return data
}