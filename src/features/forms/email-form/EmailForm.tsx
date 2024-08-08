import { SubmitHandler, useForm } from 'react-hook-form';
import { isValidEmail } from '../../helpers/isValidEmail';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../entities/input/Input';
import { passwordFormatErrorMessage } from '../../helpers/isValidPassword';
import styles from './EmailForm.module.scss';
import { ErrorMessage } from '@hookform/error-message';
import Text from '../../../shared/ui/text/Text';
import { useExistUserByEmailQuery } from '../../../shared/api/publicUserPlannerApi';
import { useDispatch } from 'react-redux';
import { switchToPasswordStep, switchToRegistrationStep } from '../../slices/authenticationStepperSlice';
import { setEmail } from '../../slices/userSlice';

interface IEmailForm {
  email: string;
}

const EmailForm = () => {
  const { register, handleSubmit, setError, formState, getValues } = useForm<IEmailForm>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange'
  });

  const dispatch = useDispatch();
  const { data, isError, error } = useExistUserByEmailQuery(getValues().email);

  const submit: SubmitHandler<IEmailForm> = () => {
    const { email } = getValues();
    dispatch(setEmail({ email }));

    if (isError) {
      dispatch(switchToRegistrationStep());
    } else {
      dispatch(switchToPasswordStep());
    }
  }

  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <Input type='email' label='E-mail' placeholder='' { ...register('email', {
          required: { value: true, message: 'Обязательное поле' },
          validate: (value) => {
            if (value && !isValidEmail(value)) {
              setError('email', { message: passwordFormatErrorMessage });
              return false;
            } else {
              return true;
            }
          }
        })}
        error={formState.errors.email} 
        /> 
        <ErrorMessage
          errors={formState.errors}
          name='email'
          render={({ message }) => (
            <Text styleName='body' className={styles.noticeText}>
              {message}
            </Text>
          )}
        />
      </div>
      
      <Button component='input' type='button' value='Далее' status='primary' disabled={!formState.isValid} onClick={handleSubmit(submit)} />
    </form>
  );
}

export default EmailForm;
