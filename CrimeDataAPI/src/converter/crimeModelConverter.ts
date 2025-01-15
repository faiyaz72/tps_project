import { CrimeModel } from "../models/CrimeModel";
import { CrimeModelVo } from "../models/CrimeModelVo";

const convertCrimeVoToModel = (crimeModelVo: CrimeModelVo): CrimeModel => {
  const crimeModel: CrimeModel = {
    eventUniqueId: crimeModelVo.event_unique_id,
    reportDate: crimeModelVo.report_date,
    occDate: crimeModelVo.occ_date,
    division: crimeModelVo.division,
    locationType: crimeModelVo.location_type,
    premisesType: crimeModelVo.premises_type,
    offence: crimeModelVo.offence,
    mciCategory: crimeModelVo.mci_category,
    neighbourhood158: crimeModelVo.neighbourhood_158,
    neighbourhood140: crimeModelVo.neighbourhood_140,
    longWgs84: crimeModelVo.long_wgs84,
    latWgs84: crimeModelVo.lat_wgs84,
  };
  return crimeModel;
};

export { convertCrimeVoToModel };
