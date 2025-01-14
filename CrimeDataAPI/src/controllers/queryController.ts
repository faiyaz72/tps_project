import * as queryCrimes from "../queries/queryCrimes";
import { Request, Response } from "express";

const PAGE_SIZE = 10;

const getSampleData = async (req: Request, res: Response) => {
  try {
    const data = await queryCrimes.fetchFirstTenMajorCrimes();
    res.json(data);
  } catch (err) {
    console.error("Error fetching sample data", err);
    res.status(500).json({ error: "Failed to fetch sample data" });
  }
};

const getCrimesBetweenDates = async (req: Request, res: Response) => {
  const { startDate, endDate, page = 1 } = req.query;
  if (!startDate || !endDate) {
    return res.status(400).json({ error: "Missing required query parameters" });
  }

  try {
    const data = await queryCrimes.fetchMajorCrimesBetweenDates(
      req.query.startDate as string,
      req.query.endDate as string,
      parseInt(page as string, 10),
      PAGE_SIZE
    );
    res.json(data);
  } catch (err) {
    console.error("Error fetching crimes between dates", err);
    res.status(500).json({ error: "Failed to fetch crimes between dates" });
  }
};

export { getSampleData, getCrimesBetweenDates };
