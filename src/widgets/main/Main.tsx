import { useSelector } from 'react-redux';
import CalendarGrid from '../calendar-grid/CalendarGrid';
import { RootState } from '../../app/store';
import Authentication from '../authentication-stepper/AuthenticationStepper';

const Main = () => {
  const isAuthenticationModalVisible = useSelector((state: RootState) => state.modal.authenticationModalVisible);

  return (
    <main>
      <CalendarGrid />

      {isAuthenticationModalVisible && (
        <Authentication />
      )}
    </main>
  );
}

export default Main;
