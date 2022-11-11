import React from 'react';
import { useFetch } from "../custom_hooks/useFetch";
import CurrentWeather from "../components/CurrentWeather";
import DailyWeather from "../components/DailyWeather";
import { useLocation } from '../custom_hooks/useLocation';


const Weather = () => {

const {latitude, longitude, cityName, timezone} = useLocation()

const parmaData = {
    latitude: latitude,
    longitude:longitude,
    timezone:timezone,
    current_weather: true,
    temperature_unit: "fahrenheit"
  }
  const params = new URLSearchParams(parmaData).toString()
  const weatherURL = `https://api.open-meteo.com/v1/forecast?${params}&daily=weathercode&daily=temperature_2m_min&daily=temperature_2m_max`
  const {isError, result, isLoading} = useFetch(weatherURL)
  
  if(isLoading) {
    return (
        <p>Loading....</p>
    )
  }

  if(isError) {
    return (
        <p>ERROR!!!</p>
    )
  }


  if(result && !isError) {
    const daily = result.daily
    const current = result.current_weather
    
    return (
        <>
            <h1 className='city-name'>{cityName}</h1>
            <CurrentWeather {...current} />
            <DailyWeather {...daily}/>
        </>
    )
  }




    
}

export default Weather;