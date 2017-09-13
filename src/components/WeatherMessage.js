import React from 'react';

let WeatherMessage = (props) => {
  let {temp, loc} = props;

  return (
    <div className="resultWrap align-center margin-auto">
      <p className="result">It is <span className="temp-result">{temp}</span><sup>o</sup>C in <span className="location-result">{loc}</span> </p>
    </div>
  );

}

export default WeatherMessage;
