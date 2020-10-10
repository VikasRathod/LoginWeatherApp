import React, { useState } from 'react';
import DisplayWeather from '../components/DisplayWeather';
import './Weather.css'

function Weather() {

    const APIKEY = '35a179ce1811943c2af3152e2841dd78';

    const [form, setForm] = useState({
        city: "",
        country: "",
    });

    const [weather, setWeather] = useState([] as any);

    const weatherData = async (e: any) => {
        e.preventDefault();
        if (form.city == '') {
            alert("Add values");
        } else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
                .then(res => res.json())
                .then(data => data);
            setWeather({ data: data });
        }
    }

    const handleChange = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'city') {
            setForm({
                ...form,
                city: value
            });
        }
        if (name === 'country') {
            setForm({
                ...form,
                country: value
            })
        }
    }

    return (
        <div className="weather">
            <div>
                <h1 className="hStyle">WEATHER APP</h1>
            </div>
            <div>
                <form>
                    <div>
                        <input
                            type="text"
                            name="city"
                            placeholder="city"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="country"
                            placeholder="country"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <button type="submit" onClick={(e) => weatherData(e)}>Get Weather</button>
                    </div>
                </form>
                <br></br>
                {
                    weather.data != undefined ? (
                        <div>
                            <DisplayWeather data={weather.data} />
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
}

export default Weather;