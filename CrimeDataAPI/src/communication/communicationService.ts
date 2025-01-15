import { ActionResultModel } from "../models/ActionResultModel";
import { CrimeQueryResponse } from "../models/CrimeModel";
import { CrimeModelVo } from "../models/CrimeModelVo";
import * as queryCrimes from "../queries/queryCrimes";
import * as crimeModelConverter from "../converter/crimeModelConverter";

const PAGE_SIZE = 10;

const fetchMajorCrimesBetweenDates = async (
  startDate: string,
  endDate: string,
  page: number
) => {
  let result: ActionResultModel<CrimeQueryResponse>;

  try {
    const data: CrimeModelVo[] = await queryCrimes.fetchMajorCrimesBetweenDates(
      startDate,
      endDate,
      page,
      PAGE_SIZE
    );
    const totalRecords: number = parseInt(data[0].total_records);

    result = {
      data: {
        totalRecords,
        pageSize: PAGE_SIZE,
        page: page,
        totalPages: Math.ceil(totalRecords / PAGE_SIZE),
        data: data.map(crimeModelConverter.convertCrimeVoToModel),
      },
      success: true,
    };
  } catch (err) {
    result = {
      success: false,
      comment: "Failed to fetch crimes between dates",
      errorCode: 500,
    };
  }
  return result;
};

export { fetchMajorCrimesBetweenDates };
