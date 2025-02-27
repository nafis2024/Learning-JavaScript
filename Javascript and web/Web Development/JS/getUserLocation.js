let button = document.getElementById('get-location')
let locationViewer = document.getElementById('location-details')

let showLocation = () => {

    const pos = (position) => {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        locationViewer.textContent = `Latitude: ${latitude}, longitude: ${longitude}`
    }

    const err = (error) => {
        locationViewer.textContent = `Unable to retrieve your location. Please allow location sharing.`
    }
   navigator.geolocation.getCurrentPosition(pos, err)
}

button.onclick = showLocation
//some keywords here like 'coords' and 'longitude' don't show up while typing. But they do exist


//I can improve this website with API which will allow coords to be turned into readable location..
//ig will do it later