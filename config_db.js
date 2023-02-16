const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('hockeyteams1', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports = sequelize