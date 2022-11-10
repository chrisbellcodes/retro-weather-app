import React from "react";
import Day from "./Day";

const DailyWeather = ({time, weathercode, temperature_2m_max, temperature_2m_min}) => {
    
    const renderDays = time.map((date, i) => {
        return (<Day 
            key={i}
            date={date} 
            weathercode={weathercode[i]}
            high={temperature_2m_max[i]}
            low={temperature_2m_min[i]}
        />)
    })

    return(
        <div className="DailyWeather">
            {renderDays}
        </div>
    )
}

export default DailyWeather
