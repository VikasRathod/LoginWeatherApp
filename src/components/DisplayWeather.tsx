import React from 'react'

function DisplayWeather(props: any) {
    const { data } = props;
    return (
        <div>
            {
                data.cod != 404 ?
                    <>
                        <div>
                            {data.name}, {data.sys.country}. Weather
                        </div>
                        <div>
                            As of {new Date().toLocaleTimeString()}
                        </div>
                        <div>
                           <span> Current Temp: {Math.floor(data.main.temp - 273.15)}</span>
                        </div>
                        <div>
                            Humidity: {data.main.humidity}%
                        </div>
                        <div>
                            Pressure: {data.main.pressure}%
                        </div>
                    </>
                    : <div>
                        <h2>{data.message}</h2>
                    </div>
            }
        </div>
    )
}

export default DisplayWeather
