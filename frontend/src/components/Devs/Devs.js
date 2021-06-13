import './Devs.scss';

const Devs = () => {

    return (
        <div className="Devs-cont">
            <br></br>
            <p class="h1 ms-4">Our API</p>
            <p class="ms-5 mb-3">Welcome to our API! Here you can find some information on how to get query our data- it is incredibly simple and can be used by developers, beach lovers or anyone else!</p>
            <p class="h3 ms-5 mb-2">This is how simple it is to query our data:</p>
            <p class="ms-5 mb-3">If you simply go to our API (at <a href="https://beachfinder.tech/api/v1/beaches" target="_blank"><u>beachfinder.tech/api/v1/beaches</u></a>) beach data will be returned based on your approximate location (<a href="https://whatismyipaddress.com/geolocation" target="_blank"><u>calculated through IP geolocation</u></a>)</p>
            <p class="h3 ms-5 mb-2">Parameters you can use:</p>
            <p class="ms-5">- lng: longitude parameter, telling you to search for beaches near a specific longitude</p>
            <p class="ms-5">- lat: latitude parameter, telling you to search for beaches near a specific latitude</p>
            <p class="ms-5 mb-3">- radius: radius parameter, telling you to search for beaches within a certain radius of the latitude and longitude provided</p>
            <p class="h3 ms-5 mb-2">Examples</p>
            <p class="ms-5"><a href="https://beachfinder.tech/api/v1/beaches" target="_blank"><u>beachfinder.tech/api/v1/beaches</u></a> : no parameters: will return beaches in local area by IP geolocation</p>
            <p class="ms-5"><a href="https://beachfinder.tech/api/v1/beaches?lat=40&lng=-10&radius=100000" target="_blank"><u>beachfinder.tech/api/v1/beaches?lat=40&lng=-10&radius=100000</u></a> : latitude = 40, longitude = -10 and radius = 100000m : shows beaches near a latitude and longitude of 40, -10 (in a radius of 100km)</p>
        
        </div>
    
    )
}

export default Devs;