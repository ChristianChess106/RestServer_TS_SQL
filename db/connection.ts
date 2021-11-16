import {Sequelize} from 'sequelize';

const db = new Sequelize('node','christianM','Mijitaos106#',{
    host: 'localhost',
    port: 1434,
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    // logging:false,

});

export default db;