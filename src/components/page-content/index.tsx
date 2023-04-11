import React from 'react';
import styles from './index.less';

type HeaderProps = {
  children?: any,
}

export default (props: HeaderProps) => {
  const {
    children
  } = props;

  return (
    <div className={styles['page-content']}>
      {children}
    </div>
  );
};
