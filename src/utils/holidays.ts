import Holidays, { HolidaysTypes } from "date-holidays";

export const getHolidays = (
  year: number,
  country: HolidaysTypes.Country | string,
  state: string,
  region: string,
  opts?: HolidaysTypes.Options
): HolidaysTypes.Holiday[] => {
  const holidays = new Holidays(country, state, region, opts);
  return holidays.getHolidays(year);
};
