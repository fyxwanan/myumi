/*
 * @Date: 2023-04-12 19:28:11
 * @LastEditors: xiaoreya@163.com
 * @LastEditTime: 2023-07-21 18:33:28
 * @Description: 
 */
import React, { useState } from 'react';
import type { IRouteComponentProps } from 'umi';
import { history } from 'umi';
import { Menu, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { menuList } from './mock.js';
import PageHeader from '../components/page-header';
import PageContent from '../components/page-content';
import PageFooter from '../components/page-footer';
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
      <PageFooter className="layout-footer">
          <footer className='footer'>备案号：鄂ICP备2023002166号-1</footer>
      </PageFooter>
    </>
  );
};

export default Layout;