function SunriseSunset({city}){

    return(
        <div>
            {city && city.sunrise && city.sunset ? (
                <div>
                    <p>Sunrise: {city.sunrise}</p>
                    <p>Sunset: {city.sunset}</p>
                </div>
            ) : (
                <p>No sunrise and sunset data available for this city.</p>
            )}
        </div>
    );
}

export default SunriseSunset