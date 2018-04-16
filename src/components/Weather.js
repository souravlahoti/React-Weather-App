import React from 'react';
const Weather = (props) => (
            <div>
                { props.error == undefined && 
                <div>
                    <p className="weather__key">Location : 
                        <span className="weather__value"> {props.city}</span>
                    </p>
                    <p className="weather__key">Country : 
                        <span className="weather__value"> {props.country}</span>
                    </p>
                    <p className="weather__key">Temperature : 
                        <span className="weather__value"> {props.temperature}</span>
                    </p>
                    <p className="weather__key">Humidity : 
                        <span className="weather__value"> {props.humidity}</span>
                    </p>
                    <p className="weather__key">Description : 
                        <span className="weather__value"> {props.description}</span>
                    </p>
                </div>
                }
                {
                    props.error != undefined && <div>
                        <p className="weather__key">{props.error}</p>
                    </div>
                }
            </div>
        );

export default Weather;