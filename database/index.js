const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: "movies"
    }
});
module.exports = knex;
