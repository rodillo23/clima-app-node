const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion : {
            alias : 'd',
            demand : true,
            desc : "Ciudad a consultar el clima"
        }
    })
    .argv;

// lugar.getLugar(argv.direccion)
//     .then( console.log)
//     .catch(err => console.log(err));

// clima.getClima(21.879999, -102.300003).then(console.log).catch(err => {
//     console.log(err)
// })

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`
    } catch (error) {
        return `No se puede determinar el clima de ${direccion}`
    }


    // lugar.getLugar(direccion).then( resp => {
    //         return clima.getClima(resp.lat, resp.lng);
    //     })
    //     .then(clima => {
    //         console.log(`El clima en ${direccion} es :`, clima);
    //     })
    //     .catch( err => {
    //         console.log(err);
    //     })
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);