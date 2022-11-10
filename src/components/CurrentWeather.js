import React from "react";

const CurrentWeather = (props) => {
    
    return(
        <div className="CurrentWeather">
            <div className="CurrentWeather__img-contianer img-container">
                <img src={'/logo192.png'} alt="weather" />
            </div>
            <div className="retro-lingo">Rad!</div>
            <div className="CurrentWeather__temp"><span className="temp">72º</span><div className="temp-measurement">F</div></div>
        </div>
    )
}

export default CurrentWeather

