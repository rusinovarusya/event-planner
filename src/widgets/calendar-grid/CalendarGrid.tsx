import { useSelector } from 'react-redux';
import Text from '../../shared/ui/text/Text';
import styles from './CalendarGrid.module.scss';
import { RootState } from '../../app/store';
import { IDate } from '../../shared/api/types';
import { getMonthWithRest } from '../../features/model/date/getMonthWithRest';

const CalendarGrid = () => {
  const dateId = useSelector((state: RootState) => state.calendar.dateId);
  const monthWithRest = getMonthWithRest(dateId);

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
        {monthWithRest.map((date: IDate) => (
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
