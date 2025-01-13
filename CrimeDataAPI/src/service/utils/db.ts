// connect to a postgres database
import pg from 'pg';
import config from '../../config/config';

const pool = new pg.Pool({
    connectionString: config.dbUri
});

const connectDb = async () => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database successfully');
        client.release();
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
};

const performQuery = async (query: string, params?: any) => {
    const client = await pool.connect();
    try {
        const res = await client.query(query, params);
        return res.rows;
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    } finally {
        client.release();
    }
};

export { connectDb, performQuery };