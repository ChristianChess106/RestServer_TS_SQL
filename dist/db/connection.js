"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'christianM', 'Mijitaos106#', {
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
exports.default = db;
//# sourceMappingURL=connection.js.map