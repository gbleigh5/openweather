import React from 'react';
import WeatherForm from './WeatherForm.js';
import WeatherMessage from './WeatherMessage.js';
import OWM from '../api/OpenWeatherMap.js'

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      location: '',
      temp: 0
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  // function that handles the search term from WeatherForm
  handleSearch(location ){
    // alert(location);

    /*
     keyword that triggers a pause in execution
     variables can be accessed from console
    */
    // debugger;

    this.setState({isLoading: true});

    var that = this;
    OWM.getTemp(location).then((temp)=>{
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }).catch((err)=>{
      //console.log(err);
      that.setState({
        isLoading: false
      });
      alert(err);
    });
  }

  /*
  onSearch is a WeatherForm prop that takes a function as arg
  */
  render(){
    let {isLoading, location, temp} = this.state;
    // const location = this.state.location;
    // const temp = this.state.temp;

    function renderMsg(){
      if(isLoading){
        return <p className="loadingtext margin-auto align-center">Fetching weather... </p>;
      } else if(temp && location){
        return <WeatherMessage loc={location} temp={temp} />;
      }
    }

    return (
      <div className="comp-wrap">
        <h3 className="title align-center">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMsg()}
      </div>
    );
  }
}

export default Weather;
