import { forwardRef, ReactNode, useState } from 'react';
import styles from './Input.module.scss';
import Text from '../../shared/ui/text/Text';
import classNames from 'classnames';
import { FieldError } from 'react-hook-form';

interface InputProps {
  type?: 'date' | 'email' | 'password' | 'text' | 'time';
  label: string;
  name: string;
  placeholder?: string;
  error?: FieldError | undefined;
  className?: string;

  children?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type='text', label, name, placeholder='', error, children, ...props }, ref) => {
  const id = name;
  const [isInputHasBeenFocused, setInputHasBeenFocused] = useState(false);
  
  const handleFocus = () => {
    setInputHasBeenFocused(true);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputHasBeenFocused(Boolean(value));
  }

  return (
    <div className={classNames(styles.container, { [styles['inputError']]: error?.message })}>
      <label className={styles.label} htmlFor={id}>
        <Text styleName='body' className={styles.labelText}>{label}<span className={styles.star}>*</span></Text>
        <div className={styles.inputWrapper}>
          {children}
          <input 
            className={classNames(styles.input, { [styles.focus]: isInputHasBeenFocused })}
            id={id}
            type={type} 
            name={name}
            placeholder={placeholder}
            ref={ref}
            onFocus={handleFocus}
            onChange={handleChange}
            {...props}
          />
        </div>
      </label>
    </div>
  );
});

export default Input;
