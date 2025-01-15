export interface CrimeModel {
  eventUniqueId: string;
  reportDate: string;
  occDate: string;
  division: string;
  locationType: string;
  premisesType: string;
  offence: string;
  mciCategory: string;
  neighbourhood158: string;
  neighbourhood140: string;
  longWgs84: number;
  latWgs84: number;
}

export interface CrimeQueryResponse {
  totalRecords: number;
  pageSize: number;
  page: number;
  totalPages: number;
  data: CrimeModel[];
}