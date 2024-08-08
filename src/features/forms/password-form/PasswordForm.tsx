import { useForm } from 'react-hook-form';
import { isValidPassword, passwordFormatErrorMessage } from '../../helpers/isValidPassword';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../entities/input/Input';
import styles from './PasswordForm.module.scss';
import { ErrorMessage } from '@hookform/error-message';
import Text from '../../../shared/ui/text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticationModalInvisible } from '../../slices/modalSlice';
import { setPassword } from '../../slices/userSlice';
import { RootState } from '../../../app/store';
import { useLoginUserMutation } from '../../../shared/api/publicUserPlannerApi';
import { logIn } from '../../model/authorization/handleAuthorization';

interface IPasswordForm {
  password: string;
}

const PasswordForm = () => {
  const { register, handleSubmit, setError, formState, getValues } = useForm<IPasswordForm>({
    defaultValues: {
      password: '',
    },
    mode: 'onChange'
  });

  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);

  const [loginUser, { data }] = useLoginUserMutation();

  const submit = () => {
    const { password } = getValues();
    dispatch(setPassword({ password }));
    
    loginUser({
      identifier: email,
      password: password
    });

    logIn();
    dispatch(setAuthenticationModalInvisible());
  }

  return (
    <form className={styles.form}>
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
        })}
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
      <Button component='input' type='button' value='Войти' status='primary' disabled={!formState.isValid} onClick={handleSubmit(submit)} />
    </form>
  );
}

export default PasswordForm;
