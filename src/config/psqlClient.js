require("dotenv").config();
const { Client } = require("pg");

const dbConnData = {
    host: process.env.PGHOST || '127.0.0.1',
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE || 'postgres',
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'tajne'
};

const devConfig = `postgresql://${process.env.PGUSER || 'postgres'}:${process.env.PGPASSWORD || 'tajne'}@${process.env.PGHOST || '127.0.0.1'}:${process.env.PGPORT || 5432}/${process.env.PGDATABASE}`;

const proConfig = {
  connectionString: process.env.DATEBASE_URL || 'postgres://sdfdsgeynipxqw:1cb1bcb2d9c7f77ba5', //heroku addons
};

module.exports = new Client({
  connectionString: process.env.NODE_ENV === "production" ? proConfig.connectionString : devConfig
});
