import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren, createElement } from 'react';

interface TextProps {
  styleName: 'h1' | 'h2' | 'h3' | 'h4' | 'body';
  className?: string;
}

const Text = ({ styleName, className, children }: PropsWithChildren<TextProps>) => {
  const Text = ({ ...props }: HTMLAttributes<HTMLElement>) => createElement(styleName === 'body' ? 'span' : styleName, props, children);
  const textClassName = classNames(styleName, { [className as string]: className });

  return (
    <Text className={textClassName}>{children}</Text>
  );
}

export default Text;
