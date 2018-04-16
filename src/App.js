import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const OPEN_MAP_API_KEY="1e5221203dc6017f0aa44e9629c944a0"


class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (!city && !country){
      this.setState({
        error: "Please enter city and country."
      })
      return;
    }
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${OPEN_MAP_API_KEY}`);
    const data = await weatherResponse.json();
    console.log(data);
    if (data.cod === "404"){
      this.setState({
        error: data.message
      })
      return;
    }
    this.setState({
      temperature: data.main.temp,
      humidity: data.main.humidity,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      error: undefined,
    })
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
