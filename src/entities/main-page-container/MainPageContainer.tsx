import { PropsWithChildren } from 'react';
import styles from './MainPageContainer.module.scss';

const MainPageContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default MainPageContainer;
