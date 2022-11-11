import React from "react";
import { setWeatherImage } from "../custom_hooks/useWeatherCode";

const CurrentWeather = ({ temperature, weathercode }) => {
    
    const {image, altText, climate} = setWeatherImage(weathercode)
    return(
        <div className="CurrentWeather">
            <div className="CurrentWeather__img-contianer img-container">
                <img className="CurrentWeather" src={image} alt={altText} />
                <div className="climate-text">{climate}</div>
            </div>
            <div className="retro-lingo">Rad!</div>
            <h1 className="temp-text">
                <div className="CurrentWeather__temp">
                    {Math.round(temperature)}º F
                </div>
                <div className="CurrentWeather__temp">
                    {Math.round(temperature)}º F
                </div>
            </h1>
        </div>
    )
}

export default CurrentWeather

