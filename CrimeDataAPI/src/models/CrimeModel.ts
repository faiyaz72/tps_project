export interface CrimeModel {
  eventUniqueId: string;
  reportDate: string;
  occDate: string;
  reportYear: number;
  reportMonth: string;
  reportDay: number;
  reportDoy: number;
  reportDow: string;
  reportHour: number;
  occYear: number;
  occMonth: string;
  occDay: number;
  occDoy: number;
  occDow: string;
  occHour: number;
  division: string;
  locationType: string;
  premisesType: string;
  offence: string;
  mciCategory: string;
  neighbourhood158: string;
  neighbourhood140: string;
  longWgs84: number;
  latWgs84: number;
  x: number;
  y: number;
}
