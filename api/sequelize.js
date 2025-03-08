const { Sequelize } = require('sequelize')

const DB = process.env.DB
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const HOST = process.env.HOST

const instance = new Sequelize(DB, USER, PASSWORD, {
    dialect: 'mssql',
    host: HOST,
    schema: 'APC',
    dialectOptions: {
    options: {
      encrypt: true, // Azure exige conexões criptografadas
      enableArithAbort: true,
    },
  },
    logging: process.env.NODE_ENV === 'develop'
})

module.exports = instance