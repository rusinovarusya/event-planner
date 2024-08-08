import styles from './AuthenticationStepper.module.scss';
import EmailForm from '../../features/forms/email-form/EmailForm';
import PasswordForm from '../../features/forms/password-form/PasswordForm';
import RegistrationForm from '../../features/forms/registration-form/RegistrationForm';
import Modal from '../../shared/ui/modal/Modal';
import Text from '../../shared/ui/text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setAuthenticationModalInvisible } from '../../features/slices/modalSlice';
import Icon from '../../shared/ui/icon/Icon';

const noticeText = 'Используйте от 8 до 32 символов: строчные и прописные латинские буквы (A-z), цифры (0-9) и спец символы ( . , : ; ? ! * + % - < > @ [ ] { } / \ _ {} $ # )';

const AuthenticationStepper = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state: RootState) => state.authenticationStepper.activeStep);

  const closeModal = () => {
    dispatch(setAuthenticationModalInvisible());
  }

  return (
    <>
      {(activeStep === 'email' || activeStep === 'password') && (
        <Modal width={600} closeModal={closeModal}>
          <div className={styles.loginContainer}>
            <Text styleName='h3' className={styles.title}>Вход</Text>
            {activeStep === 'email' && (
              <EmailForm />
            )}
            {activeStep === 'password' && (
              <PasswordForm />
            )}
          </div>
        </Modal>
      )}
  
      {activeStep === 'registration' && (
        <Modal width={710} closeModal={closeModal}>
          <div className={styles.registrationContainer}>
            <div className={styles.titleContainer}>
              <Text styleName='h3' className={styles.title}>Регистрация</Text>
              <div className={styles.noticeTextContainer}>
                <Icon name='x16-info' width={24} height={24} />
                <Text styleName='body' className={styles.noticeText}>{noticeText}</Text>
              </div>
            </div>
            <RegistrationForm />
          </div>
        </Modal>
      )}
    </>
  );
}

export default AuthenticationStepper;
