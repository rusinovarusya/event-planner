import { Attributes, ComponentPropsWithRef, ComponentType, createElement, CSSProperties } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';


type ButtonComponent =
  | keyof JSX.IntrinsicElements
  | ComponentType<any>;

type BaseProps<C extends ButtonComponent = 'button'> = {
  component?: C
  className?: string
  style?: CSSProperties
  size?: string
  status?: string
} & Attributes;

type ButtonProps<C extends ButtonComponent = 'button'> =
  C extends keyof JSX.IntrinsicElements
    ? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
    : C extends ComponentType<infer P>
    ? P extends ComponentPropsWithRef<any>
      ? Omit<P, keyof BaseProps<C>> & BaseProps<C>
      : never
    : never;

const Button = <C extends ButtonComponent = 'button'>({
  component='button',
  size='large',
  status='primary',
  children,
  ...props
}: ButtonProps<C>) => {

  return createElement(
    component, 
    { className: classNames(styles['button'], 'h4', { [styles[status]]: status, [styles[size]]: size }), ...props }, 
    children
  );
}

export default Button;
