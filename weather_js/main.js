function getCoords(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = [pos.coords.longitude, pos.coords.latitude];
            callback(coords);
        });
    }
}

getCoords((coords) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords[1]}&longitude=${coords[0]}&current=apparent_temperature,is_day,rain,snowfall,surface_pressure,wind_speed_10m,wind_direction_10m&timezone=auto&past_days=1`;
    // Now you can use the URL to fetch weather data or do whatever you need with it
    fetch(url)
.then((data) => {
    return data.json()
}) 
.then((data) => {
    document.getElementById("temp").innerHTML = data.current.apparent_temperature+data.current_units.apparent_temperature
    document.getElementById("don").innerHTML = data.current.isçday == 0 ? 'day' : "night"
    document.getElementById("rain").innerHTML = data.current.rain+data.current_units.rain
    document.getElementById("snowfall").innerHTML = data.current.snowfall+data.current_units.snowfall
    document.getElementById("ws").innerHTML = data.current.wind_speed_10m+data.current_units.wind_speed_10m
    document.getElementById("wd").innerHTML = data.current.wind_direction_10m+data.current_units.wind_direction_10m
    document.getElementById("sp").innerHTML = data.current.surface_pressure+data.current_units.surface_pressure
})
.catch((error) => {
    console.error(error)
})
});

