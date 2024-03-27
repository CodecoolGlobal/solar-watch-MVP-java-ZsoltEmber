import {useEffect, useState} from "react";
import SunriseSunset from "./SunriseSunset.jsx";

function Main() {
    const [cityName, setCityName] = useState("");
    const [date, setDate] = useState("");
    const [city, setCity] = useState({});

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 16);
        setDate(formattedDate);

        if (cityName) {
            fetchSunriseSunset();
        }
    }, [cityName]);

    const fetchSunriseSunset = () => {
        const isoDate = new Date(date).toISOString().split('T')[0];
        fetch(`/api/sunriseSunset?city=${cityName}&date=${isoDate}`)
            .then((res) => res.json())
            .then((data) => setCity(data))
            .catch((error) => console.error("Error fetching sunrise and sunset data:", error));
    };


    return (
        <div>
            <div>
                <div>
                    <label>CityName</label>
                    <input type={"text"} onChange={event => setCityName(event.target.value)}/>
                </div>

                <div>
                    <label>Date</label>
                    <input type={"datetime-local"} value={date}
                           onChange={event => setDate(event.target.value)}/>
                </div>

                <div>
                    <SunriseSunset city={city}/>
                </div>
            </div>
            <button onClick={() => fetchSunriseSunset()}>Submit</button>
        </div>
    )
}

export default Main