import React from 'react';

class WeatherForm extends React.Component {
  // constructor method that takes `this.props` as args
  constructor(props){
    super(props);
    // state variable for handling state changes
    this.state = {};
    // form submit handler binding to component
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // handles form submission
  onFormSubmit(e){
    e.preventDefault();

    // gets location value
    let location = this.refs.location.value;

    if(location.length > 0){ // if !empty->form
      this.refs.location.value = ''; // reset input
      this.props.onSearch(location); // insert location to onSearch function
    }
  }

  // component render method
  render(){
    // ref === name but for react
    return (
      <form className="weatherform" onSubmit={this.onFormSubmit} >
        <input className="align-center" type="text" ref="location" placeholder="Enter City" />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default WeatherForm;
