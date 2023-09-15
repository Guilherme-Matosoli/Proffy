import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve('db/database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;