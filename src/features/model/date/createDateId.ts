import moment, { Moment } from 'moment';

export const createDateId = (dateObject: Moment) => {
  const year = dateObject.year();
  const month = dateObject.month();
  const date = dateObject.date();

  return moment({
    year,
    month,
    date,
    hour: 14
  }).utc(true).toISOString();
}
