import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { find } from 'geo-tz'

export const useLocation = () => {
    const [latitude, setLatitude] = useState(0.00)
    const [longitude, setLongitude] = useState(0.00)
    const [timezone, setTimezone] = useState('America/New_York')
    const [cityName, setCityName] = useState('')
    const [locationError, setLocationError] = useState(false)

    function success(position) {
        setTimezone(find(position.coords.latitude, position.coords.longitude)[0])
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude)
    }

    function error() {
        console.log('Error! Sorry, no position available.');
    }

    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
    };

    useEffect(() => {
        navigator.geolocation.watchPosition(success, error, options);
    },[])


    // const cityApiURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/'

    // let params = new URLSearchParams({
    //         location: `+40.7637656-73.914535`
    //     }).toString()

    // let fetchOptions = { 
    //     params,
    //     headers: {
    //     'X-RapidAPI-Key': '9682609168mshd303baa06acf495p1dd878jsn904d50703794',
    //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    // }
    // }
    // console.log(fetchOptions)
    // const {isError, isLoading, result} = useFetch(cityApiURL, fetchOptions)

    // console.log(result)

    console.log({latitude, longitude, timezone, cityName, locationError })

    return {latitude, longitude, timezone, cityName, locationError }
}