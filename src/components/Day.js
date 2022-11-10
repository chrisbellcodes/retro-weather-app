import React from "react";


const Day = (props) => {
    

    return(
        <div className="Day">
            <div className="Day__img-contianer img-container">
                <img className="Day__img" src={'/logo192.png'} alt="weather"/>
            </div>
            <div className="Day__temp-container">
                <p className="Day__temp-text">H</p>
                <p className="Day__temp-text">L</p>
            </div>

        </div>
    )
}

export default Day