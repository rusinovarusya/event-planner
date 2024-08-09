import { useForm } from 'react-hook-form';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../entities/input/Input';
import { isValidPassword, passwordFormatErrorMessage } from '../../helpers/isValidPassword';
import styles from './RegistrationForm.module.scss';
import { ErrorMessage } from '@hookform/error-message';
import Text from '../../../shared/ui/text/Text';
import { useLoginUserMutation, useRegisterUserMutation } from '../../../shared/api/publicUserPlannerApi';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticationModalInvisible } from '../../slices/modalSlice';
import { RootState } from '../../../app/store';
import { logIn } from '../../model/authorization/handleAuthorization';

interface IRegistrationForm {
  firstName: string;
  password: string;
  repeatPassword: string;
}

const RegistrationForm = () => {
  const { register, handleSubmit, setError, formState, getValues, watch } = useForm<IRegistrationForm>({
    defaultValues: {
      firstName: '',
      password: '',
      repeatPassword: ''
    },
    mode: 'onChange'
  });

  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);

  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();

  const submit = () => {
    const { firstName, password } = getValues();
    
    registerUser({ 
      username: firstName,
      email: email,
      password: password 
    });

    loginUser({
      identifier: email,
      password: password
    });

    logIn();
    dispatch(setAuthenticationModalInvisible());
  }

  return (
    <form className={styles.form}>
      <div className={styles.widthLimitation}>
        <div className={styles.inputWrapper}>
          <Input type='text' label='Ваше имя' placeholder='' { ...register('firstName', {
            required: { value: true, message: 'Обязательное поле' },
          }) } 
          error={formState.errors.firstName} 
          />
          <ErrorMessage
            errors={formState.errors}
            name='firstName'
            render={({ message }) => (
              <Text styleName='body' className={styles.noticeText}>
                {message}
              </Text>
            )}
          />
        </div>
      
        <div className={styles.inputWrapper}>
          <Input type='password' label='Пароль' placeholder='' { ...register('password', {
            required: { value: true, message: 'Обязательное поле' },
            validate: (value) => {
              if (value && !isValidPassword(value)) {
                setError('password', { message: passwordFormatErrorMessage });
                return false;
              } else {
                return true;
              }
            }
          }) }
          error={formState.errors.password}  
          />
          <ErrorMessage
            errors={formState.errors}
            name='password'
            render={({ message }) => (
              <Text styleName='body' className={styles.noticeText}>
                {message}
              </Text>
            )}
          />
        </div>
  
        <div className={styles.inputWrapper}>
          <Input type='password' label='Повторить пароль' placeholder='' { ...register('repeatPassword', {
            required: { value: true, message: 'Обязательное поле' },
            validate: (value) => {
              if (watch('password') !== value) {
                setError('repeatPassword', { message: 'Пароли не совпадают' });
                return false;
              } else {
                return true;
              }
            }
          }) } 
          error={formState.errors.repeatPassword} 
          />
          <ErrorMessage
            errors={formState.errors}
            name='repeatPassword'
            render={({ message }) => (
              <Text styleName='body' className={styles.noticeText}>
                {message}
              </Text>
            )}
          />
        </div>

        <Button component='input' type='submit' value='Зарегистрироваться' status='primary' disabled={!formState.isValid} onClick={handleSubmit(submit)} />
      </div>
    </form>
  );
}

export default RegistrationForm;
