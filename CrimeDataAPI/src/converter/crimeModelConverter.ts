import { CrimeModel } from "../models/CrimeModel";
import { CrimeModelVo } from "../models/CrimeModelVo";

const convertCrimeVoToModel = (crimeModelVo: CrimeModelVo): CrimeModel => {
  const crimeModel: CrimeModel = {
    eventUniqueId: crimeModelVo.event_unique_id,
    reportDate: crimeModelVo.report_date,
    occDate: crimeModelVo.occ_date,
    reportYear: crimeModelVo.report_year,
    reportMonth: crimeModelVo.report_month,
    reportDay: crimeModelVo.report_day,
    reportDoy: crimeModelVo.report_doy,
    reportDow: crimeModelVo.report_dow,
    reportHour: crimeModelVo.report_hour,
    occYear: crimeModelVo.occ_year,
    occMonth: crimeModelVo.occ_month,
    occDay: crimeModelVo.occ_day,
    occDoy: crimeModelVo.occ_doy,
    occDow: crimeModelVo.occ_dow,
    occHour: crimeModelVo.occ_hour,
    division: crimeModelVo.division,
    locationType: crimeModelVo.location_type,
    premisesType: crimeModelVo.premises_type,
    offence: crimeModelVo.offence,
    mciCategory: crimeModelVo.mci_category,
    neighbourhood158: crimeModelVo.neighbourhood_158,
    neighbourhood140: crimeModelVo.neighbourhood_140,
    longWgs84: crimeModelVo.long_wgs84,
    latWgs84: crimeModelVo.lat_wgs84,
    x: crimeModelVo.x,
    y: crimeModelVo.y,
  };
  return crimeModel;
};

export { convertCrimeVoToModel };
