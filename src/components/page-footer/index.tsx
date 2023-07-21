import React from 'react';
import styles from './index.less';

type FooterProps = {
  children?: any,
  style?: object,
  className?: string,
}

export default (props: FooterProps) => {
  const {
    children,
    style,
    className,
  } = props;

  return (
    <div className={`${styles['page-footer']} ${className}`} style={style}>
      {children}
    </div>
  );
};
