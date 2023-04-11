import React from 'react';
import styles from './index.less';

type HeaderProps = {
  children?: any,
  style?: object,
  className?: string,
}

export default (props: HeaderProps) => {
  const {
    children,
    style,
    className,
  } = props;

  return (
    <div className={`${styles['page-header']} ${className}`} style={style}>
      {children}
    </div>
  );
};
