const { Client } = require('pg');

const client = new Client({
    user: 'dark',
    host: 'localhost',
    database: 'alda_clases',
    password: '1234',
    port: 5432,
});

client.connect().catch(err => console.error('Connection error', err.stack));

module.exports = client;
