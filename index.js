//async await

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor nao pode ser negativo")
    let res = 1
    for(let i = 2; i < n; i++) {
        res *= i
    }
    return Promise.resolve(res)
}

function chamadaComThenCatch() {
    fatorial(10)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))

    fatorial(-10)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
}

async function chamadaComAsyncAwait() {
    try {
        const f1 = await fatorial(10)
        console.log(f1)
        const f2 = await fatorial(-10)
        console.log(f2)
    } catch(e) {
        console.log(e)
    }
}

chamadaComAsyncAwait()

// function hello (nome) {
//     return new Promise(function(resolve, reject) {
//         resolve(`Hello ${nome}`)
//     })
// }
// const resultado = hello("Pedro")
// resultado.then(res => console.log(res))

// function hello (nome) {
//     return `Hello, ${nome}`
// }

// const resultado = hello('João')
// console.log(resultado)

//-------------------------------------------------------------------

// require('dotenv').config()
// const axios = require('axios')

// const { TOKEN, PROTOCOL, BASE_URL, UNITS, LANGUAGE, CNT, Q } = process.env

// const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${TOKEN}&lang=${LANGUAGE}&units=${UNITS}&cnt=${CNT}`

// axios.get(url)
//     .then(res => {
//         res.data.list.forEach(x => {
//             console.log(new Date(+(x.dt) * 1000).toLocaleString());
//             console.log('min: ', x.main.temp_min);
//             console.log('max: ', x.main.temp_max);
//             console.log('min: ', x.weather[0].description, '\n');
//         });
//     });