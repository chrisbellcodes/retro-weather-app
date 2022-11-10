import React from "react";


const Day = ({date, high, low}) => {
    
    const getDayOfWeek = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        const newDate = new Date(year, month-1, day)
        return newDate.toLocaleDateString('en-US', {weekday: 'long'})
    }

    return(
        <div className="Day">
            <p className="Day__text">{getDayOfWeek(date)}</p>
            <div className="Day__img-contianer img-container">
                <img className="Day__img" src={'/logo192.png'} alt="weather"/>
            </div>
            <div className="Day__temp-container">
                <p className="Day__temp-text">H: {high}</p>
                <p className="Day__temp-text">L: {low}</p>
            </div>

        </div>
    )
}

export default Day