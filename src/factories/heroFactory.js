const HeroRepository = require('./../repositories/heroRepository')
const HeroService = require('./../services/heroService')

const { join } = require('path')
const filename = join(__dirname, '../../database','data.json')

const generateInstance = () => {
    const heroRepository = new HeroRepository({
        file: filename
    })
    const heroService = new HeroService({
        heroRepository
    })

    return heroRepository
}

module.exports = { generateInstance }

// generateInstance().find().then(console.log).catch(error => console.log('error',error))