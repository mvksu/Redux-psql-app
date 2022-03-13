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
  connectionString: process.env.DATEBASE_URL || 'postgres://sdfdsgeynipxqw:1cb1bcb2d9c7f77ba565cf017ca7dcf2ff8dca373fa98dd66d830f4f3554be7a@ec2-52-70-186-184.compute-1.amazonaws.com:5432/dcluuq38blukk', //heroku addons
};

module.exports = new Client({
  connectionString: process.env.NODE_ENV === "production" ? proConfig.connectionString : devConfig,
});
