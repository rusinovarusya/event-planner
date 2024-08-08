export const getMonthLimits = (currentDateId: string) => {
  const currentDateObject = new Date(currentDateId);
  const currentYear = currentDateObject.getFullYear();
  const currentMonth = currentDateObject.getMonth();

  const firstDateObject = new Date(currentYear, currentMonth, 1);
  const lastDateObject = new Date(currentYear, currentMonth + 1, 0);

  const firstMondayDateObject = new Date(currentYear, currentMonth, firstDateObject.getDay() === 0 ? -5 : (firstDateObject.getDay() === 1 ? 1 : 2 - firstDateObject.getDay()));
  const lastSundayDateObject = new Date(currentYear, currentMonth + 1, lastDateObject.getDay() ? 7 - lastDateObject.getDay() : 0);

  const lastDateForPreviousMonth = new Date(currentYear, currentMonth, 0);

  return { firstMondayDateObject, firstDateObject, currentDateObject, lastDateObject, lastSundayDateObject, lastDateForPreviousMonth };
}
