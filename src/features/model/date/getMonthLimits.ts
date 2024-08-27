import moment from 'moment';

export const getMonthLimits = (currentDateId: string) => {
  const currentDateObject = moment(currentDateId);

  const firstMondayDateObject = moment(currentDateId).startOf('month').startOf('isoWeek');
  const lastSundayDateObject = moment(currentDateId).endOf('month').endOf('isoWeek');

  return { firstMondayDateObject, currentDateObject, lastSundayDateObject };
}
