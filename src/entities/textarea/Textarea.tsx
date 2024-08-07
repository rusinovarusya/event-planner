import { useState } from 'react';
import styles from './Textarea.module.scss';
import classNames from 'classnames';
import Text from '../../shared/ui/text/Text';

interface TextareaProps {
  label: string;
  name: string;
  placeholder: string;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
}

const Textarea = ({ label, name, placeholder }: TextareaProps) => {
  const id = name;
  const [isTextareaHasBeenFocused, setTextareaHasBeenFocused] = useState(false);

  const handleFocus = () => {
    setTextareaHasBeenFocused(true);
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        <Text styleName='body' className={styles.labelText}>{label}<span className={styles.star}>*</span></Text>
        <textarea 
          className={classNames(styles.textarea, { [styles.focus]: isTextareaHasBeenFocused })} 
          id={id}
          name={name} 
          placeholder={placeholder}
          onFocus={handleFocus} 
        />
      </label>
    </div>
  );
}

export default Textarea;
