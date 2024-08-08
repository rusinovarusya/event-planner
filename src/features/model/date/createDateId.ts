import moment from 'moment';

export const createDateIdByObject = (dateObject: Date) => {
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const date = dateObject.getDate();

  return moment({
    year,
    month,
    date,
    hour: 14
  }).utc(true).toISOString();
}

export const createDateIdByPrimitives = (year: number, month: number, date: number) => {
  return moment({
    year,
    month,
    date,
    hour: 14
  }).utc(true).toISOString();
}
