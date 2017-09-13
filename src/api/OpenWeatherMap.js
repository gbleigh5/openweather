const axios = require('axios');
const OWM_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=061f24cf3cde2f60644a8240302983f2&units=metric';

let OWM = {

  getTemp: function(location){
    // encodes Location text to valid URL for browser
    let encLocation = encodeURIComponent(location);
    let url = `${OWM_URL}&q=${encLocation}`;

    // uses axios to get JSON data from API
    return axios.get(url)
    .then((res)=>{
      // debugger;
      // error checking has to be done beacuse OWM has own error message
      if(res.data.cod && res.data.message){
        //alert(res.data);
        // no res.data because it's a 404 request
        throw new Error(res);
      } else {
        return res.data.main.temp;
      }
    })
    .catch((res)=>{
      //alert(res);
      throw new Error(res);
    });
  }
}

export default OWM;
