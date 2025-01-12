import { performQuery } from '../service/utils/db';

const fetchFirstTenMajorCrimes = async () => {
    const query = 'SELECT * FROM tps.major_crime_t LIMIT 10';
    try {
        const result = await performQuery(query);
        return result;
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
};

export default fetchFirstTenMajorCrimes;