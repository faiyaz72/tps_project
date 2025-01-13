import fetchFirstTenMajorCrimes from "../queries/queryCrimes";
import { Request, Response } from 'express';

const getSampleData = async (req: Request, res: Response) => {
    try {
        const data = await fetchFirstTenMajorCrimes();
        res.json(data);
    } catch (err) {
        console.error('Error fetching sample data', err);
        res.status(500).json({ error: 'Failed to fetch sample data' });
    }
};

export { getSampleData };