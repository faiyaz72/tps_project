import { PaginatedResponsVo } from "./dbModel";

export interface CrimeModelVo extends PaginatedResponsVo {
  objectid: string;
  event_unique_id: string;
  report_date: string;
  occ_date: string;
  report_year: number;
  report_month: string;
  report_day: number;
  report_doy: number;
  report_dow: string;
  report_hour: number;
  occ_year: number;
  occ_month: string;
  occ_day: number;
  occ_doy: number;
  occ_dow: string;
  occ_hour: number;
  division: string;
  location_type: string;
  premises_type: string;
  ucr_code: string;
  ucr_ext: number;
  offence: string;
  mci_category: string;
  hood_158: string;
  neighbourhood_158: string;
  hood_140: string;
  neighbourhood_140: string;
  long_wgs84: number;
  lat_wgs84: number;
  x: number;
  y: number;
}
