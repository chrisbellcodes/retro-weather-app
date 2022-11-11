import { useState } from "react";

export const setWeatherImage = (code) => {
    let image, climate, altText;

        switch (code) {
            // Clear Sky Image
            case 0:
                image = './clear-sky.jpg'
                climate = 'Clear Skies'
                altText = 'Clear Skies'
                break;
            // Partly cloudy
            case 1:
            case 2:
                image = './partly-cloudy.jpg'
                climate = 'Partly cloudy'
                altText = 'Partly cloudy'
                break;
            // Cloudy Image
            case  3:// Mainly clear, partly cloudy, and overcast
            case 45:
            case 48:	// Fog and depositing rime fog
                image = './cloudy-foggy.jpg'
                climate = 'Cloudy'
                altText = 'Cloudy'
                break;
            // Rain image
            case 51:
            case 53:
            case 55:	// Drizzle: Light, moderate, and dense intensity
            case 56:
            case 57:	// Freezing Drizzle: Light and dense intensity
            case 61:
            case 63:
            case 65:	// Rain: Slight, moderate and heavy intensity
            case 66:
            case 67:	// Freezing Rain: Light and heavy intensity
            case 80:
            case 81: // Rain showers: Slight, moderate, and violent
                image = 'rain.jpg'
                climate = 'Rain'
                altText = 'Rain'
                break;

            // Thunderstorm
            case 82:
            case 95:	// Thunderstorm: Slight or moderate
            case 96:
            case 99:    // Thunderstorm with slight and heavy hail
                image =	'thunderstorm.jpg'
                climate = 'Thunderstorms'
                altText = 'Thunderstorms'
                break;
            // Snow Image
            case 71:
            case 73:
            case 75:	// Snow fall: Slight, moderate, and heavy intensity
            case 77:	// Snow grains
            case 85:
            case 86:	// Snow showers slight and heavy
                image = './snow.png'
                climate = 'Snow'
                altText = 'Snow'
                break;
            default:
                image = './clear-sky.jpg'
                climate = ''
                altText = ''
                break;
        }
    
        return {image, climate, altText}
}







