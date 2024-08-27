import moment, { Moment } from 'moment';
import { getMonthName } from './getMonthName';

export const getMonthTitle = (dateObject: Moment) => {
  const year = dateObject.year();
  const currentYear = moment().year();
  const monthName = getMonthName(dateObject);

  return year === currentYear ? monthName : `${monthName} ${year}`;
}
