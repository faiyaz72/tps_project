import fetchFirstTenMajorCrimes from "../queries/queryCrimes";

const getSampleData = async (req: any, res: any) => {
    try {
        const data = await fetchFirstTenMajorCrimes();
        res.json(data);
    } catch (err) {
        console.error('Error fetching sample data', err);
        res.status(500).json({ error: 'Failed to fetch sample data' });
    }
};

export { getSampleData };