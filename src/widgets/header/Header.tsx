import { useDispatch } from 'react-redux';
import MonthControl from '../../entities/month-control/MonthControl';
import { isUserAuthorized } from '../../features/model/authorization/handleAuthorization';
import Button from '../../shared/ui/button/Button';
import Icon from '../../shared/ui/icon/Icon';
import Text from '../../shared/ui/text/Text';
import styles from './Header.module.scss';
import { setAuthenticationModalVisible } from '../../features/slices/modalSlice';
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  let isAuth = isUserAuthorized();

  useEffect(
    () => {
      isAuth = isUserAuthorized();
    }
  );

  return (
    <header className={styles.container}>
      <div className={styles.titleWrapper}>
        <Icon name='subheader' width={214} height={31} />
        <Text styleName='h2'>planner <span className={styles.emphasized}>event</span></Text>
      </div>
      <MonthControl />
      <div className={styles.buttonWrapper}>
        {isAuth ? (
          <>
            <Button size='small' onClick={() => {}}>
              <Icon name='plus' width={22} height={22} className={styles.icon} />
            </Button>
            <Icon name='default-avatar' width={80} height={80} />
          </>
        ) : (
          <Button size='small' onClick={() => {dispatch(setAuthenticationModalVisible())}}>Войти</Button>
        )}
      </div>
    </header>
  );
}

export default Header;
