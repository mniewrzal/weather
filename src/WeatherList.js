import React, { Component } from 'react';

class WeatherList extends Component {

    showForecast(index) {
        console.log("test:" + index);
    }

    render() {
        const days = this.props.elements.map((w, index) => (
            <div key={index} onClick={(e) => this.showForecast(index, e)}>
                <div>Date - {w.dt_txt}</div>
                <div>Temerature: {w.main.temp} °C</div>
                <div>Min Temerature: {w.main.temp_min} °C</div>
                <div>Max Temerature: {w.main.temp_max}°C</div>
                <img src={'http://openweathermap.org/img/w/' + w.weather[0].icon + '.png'} />
            </div>
        ));
        return (
            <div>
                {days}
            </div>
        );
    }
}

export default WeatherList;