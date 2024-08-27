import { IDate } from '../../../shared/api/types';
import { createDateId } from './createDateId';
import { getMonthLimits } from './getMonthLimits';

export const getMonthWithRest = (currentDateId: string) => {
  const { firstMondayDateObject, currentDateObject, lastSundayDateObject } = getMonthLimits(currentDateId);

  const dates: IDate[] = [];

  const currentMonth = currentDateObject.month();

  for (let dateObject = firstMondayDateObject; dateObject < lastSundayDateObject; dateObject = dateObject.add(1, 'day')) {
    dates.push({
      dateId: createDateId(dateObject),
      date: dateObject.date(),
      status: dateObject.month() === currentMonth ? 'active' : 'passive'
    });
  }

  return dates;
}
