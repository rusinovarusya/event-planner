import { getMonthName } from './getMonthName';

export const getMonthTitle = (dateObject: Date) => {
  const year = dateObject.getFullYear();
  const currentYear = new Date().getFullYear();
  const monthName = getMonthName(dateObject);

  return year === currentYear ? monthName : `${monthName} ${year}`;
}
