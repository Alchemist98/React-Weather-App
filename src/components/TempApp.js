import React, {useState, useEffect} from 'react';
import './css/style.css';

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5c2ddad15d5b735a368759cfe366baeb`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                </div>

                {!city ? (
                    <p>No Data Found</p>
                ): (
                    <div className="info">
                        <h2 className="location">{search}</h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
                    </div>
                )}
                
            </div>
        </>
    );
}

export default Tempapp;
