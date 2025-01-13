import { performQuery } from "../service/utils/db";

const SCHEMA = "tps";
const TABLE = "major_crime_t";

const fetchFirstTenMajorCrimes = async () => {
  const query = `SELECT * FROM ${SCHEMA}.${TABLE} LIMIT 10`;
  try {
    const result = await performQuery(query);
    return result;
  } catch (err) {
    console.error("Error executing query", err);
    throw err;
  }
};

const fetchMajorCrimesBetweenDates = async (
  startDate: string,
  endDate: string,
  page: number,
  pageSize: number
) => {
  const query = `SELECT * FROM ${SCHEMA}.${TABLE} WHERE OCC_DATE BETWEEN $1 AND $2 LIMIT $3 OFFSET $4`;
  const offset = (page - 1) * pageSize;
  const params = [startDate, endDate, pageSize, offset];
  try {
    const result = await performQuery(query, params);
    return result;
  } catch (err) {
    console.error("Error executing query", err);
    throw err;
  }
};

export { fetchFirstTenMajorCrimes, fetchMajorCrimesBetweenDates };
