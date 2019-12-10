const axios = require('axios');


const getClima = async (lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=b187b6ca701f1305c61b600eed8efd82&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}