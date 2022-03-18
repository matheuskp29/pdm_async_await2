require('dotenv').config()
const axios = require('axios')

const { TOKEN, PROTOCOL, BASE_URL, UNITS, LANGUAGE, CNT, Q } = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${TOKEN}&lang=${LANGUAGE}&units=${UNITS}&cnt=${CNT}`

axios.get(url)
    .then(res => {
        res.data.list.forEach(x => {
            console.log(new Date(+(x.dt) * 1000).toLocaleString())
            console.log('min: ', x.main.temp_min);
            console.log('max: ', x.main.temp_max);
            console.log('min: ', x.weather[0].description, '\n');
        });
    });


// dt: 1647658800,
// main: {
//   temp: 23.39,
//   feels_like: 23.87,
//   temp_min: 22.14,
//   temp_max: 23.39,
//   pressure: 1013,
//   sea_level: 1013,
//   grnd_level: 948,
//   humidity: 80,
//   temp_kf: 1.25
// },
// weather: [ [Object] ],
// clouds: { all: 52 },
// wind: { speed: 1.09, deg: 109, gust: 1.04 },
// visibility: 10000,
// pop: 0.4,
// rain: { '3h': 0.5 },
// sys: { pod: 'n' },
// dt_txt: '2022-03-19 03:00:00'

