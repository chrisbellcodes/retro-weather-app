import React from "react";
import { setWeatherImage } from "../custom_hooks/useWeatherCode";


const Day = ({date, high, low, weathercode}) => {
    
    const getDayOfWeek = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        const newDate = new Date(year, month-1, day)
        return newDate.toLocaleDateString('en-US', {weekday: 'long'})
    }

    const {image, altText, climate} = setWeatherImage(weathercode)

    return(
        <div className="Day">
            <p className="Day__text">{getDayOfWeek(date)}</p>
            <div className="Day__img-contianer img-container">
                <img className="Day__img" src={image} alt={altText}/>
                <div className="climate-text">{climate}</div>
            </div>
            <div className="Day__temp-container">
                <p className="Day__temp-text">H: {Math.round(high)}</p>
                <p className="Day__temp-text">L: {Math.round(low)}</p>
            </div>

        </div>
    )
}

export default Day