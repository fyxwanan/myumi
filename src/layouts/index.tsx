import React, { useState } from 'react';
import type { IRouteComponentProps } from 'umi';
import { history } from 'umi';
import { Menu, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { menuList } from './mock.js';
import PageHeader from '../components/page-header';
import PageContent from '../components/page-content';
import './index.less';

const Layout = ({ children }: IRouteComponentProps) => {

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e: any) => {
    setCurrent(e.key);
    e?.key && history.push(`./${e?.key}`);
  };

  return (
    <>
      <PageHeader className="layout-header" style={{ padding: '0px' }}>
        <div className='header-logo'> </div>
        <div className='header-menu'>
         <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuList} />
        </div>
        <div className='header-avatar'>
          <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>刘</Avatar>
        </div>
      </PageHeader>
      <PageContent>
        {children}
      </PageContent>
    </>
  );
};

export default Layout;