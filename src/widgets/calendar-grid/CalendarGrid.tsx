import { useSelector } from 'react-redux';
import Text from '../../shared/ui/text/Text';
import styles from './CalendarGrid.module.scss';
import { RootState } from '../../app/store';
import { IDate, IEvent } from '../../shared/api/types';
import { getMonthWithRest } from '../../features/model/date/getMonthWithRest';
import { useCalendarGridData } from './use-calendar-grid-data';
import moment from 'moment';

const CalendarGrid = () => {
  const dateId = useSelector((state: RootState) => state.calendar.dateId);
  const monthWithRest = getMonthWithRest(dateId);

  const firstMondayDateId = monthWithRest[0].dateId;
  const lastSundayDateId = monthWithRest[monthWithRest.length - 1].dateId;

  const { data, isLoading, isSuccess } = useCalendarGridData(firstMondayDateId, lastSundayDateId);
  const events: IEvent[] = data?.data;

  const monthWithRestWithEvents = monthWithRest.map((date: IDate) => {
    const currentDateEvents = events?.filter(
      (event: IEvent) => moment(date).isBetween(
        moment(event.dateStart), moment(event.dateEnd), 'days', '[]'
      ) || moment(date).isSame(event.dateStart, 'day') || moment(date).isSame(event.dateEnd, 'day')
    );
    const currentDate = { ...date };
    currentDate.events = currentDateEvents;
    return currentDate;
  });

  return (
    <article className={styles.container}>
      <div className={styles.days}>
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
          <div className={styles.day} key={day}>
            <Text styleName='h3'>{day}</Text>
          </div>
        ))}
      </div>
      
      <div className={styles.dates}>
        {monthWithRestWithEvents.map((date: IDate) => (
          <div className={styles.date} key={date.dateId}>
            <Text styleName='body' className={styles[date.status]}>{date.date}</Text>
            <div className={styles.events}></div>
          </div>
        ))}
      </div>
      
    </article>
  );
}

export default CalendarGrid;
