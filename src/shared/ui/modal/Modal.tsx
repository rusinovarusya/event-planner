import { PropsWithChildren } from 'react';
import styles from './Modal.module.scss';
import Icon from '../icon/Icon';
import { createPortal } from 'react-dom';

interface ModalProps {
  width: number;
  closeModal: () => void;
}

const Modal = ({ width, closeModal, children }: PropsWithChildren<ModalProps>) => {
  return createPortal(
    <>
      <div className={styles.shadow}></div>
      <div className={styles.modalContainer} style={{ width: `${width}px` }}>

        {children}
        <button className={styles.button} onClick={closeModal}>
          <Icon name='cross' className={styles.icon} />
        </button>

      </div>
    </>,
    document.body
  );
}

export default Modal;
