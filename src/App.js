import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherList from './WeatherList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      weather: []
    };
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Lodz,pl&units=metric&APPID=74eeac59e42aa3269df5b01cff748475')
      .then((response) => response.json().then(data => this.setState({ loading: false, weather: data.list })
      ));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather</h1>
        </header>
        <div>
          {this.state.loading &&
            <h2>
              Loading...
            </h2>
          }
          {!this.state.loading &&
            <h2>
              Days
            </h2>
          }
          <WeatherList elements={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;
