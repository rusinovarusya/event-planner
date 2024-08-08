import { useDispatch, useSelector } from 'react-redux';
import Text from '../../shared/ui/text/Text';
import styles from './MonthControl.module.scss';
import Icon from '../../shared/ui/icon/Icon';
import { getNextMonthDateId, getPreviousMonthDateId } from '../../features/slices/calendarSlice';
import { RootState } from '../../app/store';
import { getMonthTitle } from '../../features/model/date/getMonthTitle';

const MonthControl = () => {
  const dispatch = useDispatch();
  const dateId = useSelector((state: RootState) => state.calendar.dateId);
  const dateObject = new Date(dateId);
  const monthTitle = getMonthTitle(dateObject);

  const switchToPreviousMonth = () => {
    dispatch(getPreviousMonthDateId());
  }

  const switchToNextMonth = () => {
    dispatch(getNextMonthDateId());
  }

  return (
    <div className={styles.container}>
      <div className={styles.monthName}>
        <Text styleName='h3' className={styles.month}>{monthTitle}</Text>
      </div>
      <button className={styles.button} onClick={switchToPreviousMonth}>
        <Icon name='left-arrow' width={32} height={32} />
      </button>
      <button className={styles.button} onClick={switchToNextMonth}>
        <Icon name='right-arrow' width={32} height={32} />
      </button>
    </div>
  );
}

export default MonthControl;
