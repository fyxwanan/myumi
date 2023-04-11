import React from 'react';

const menuList = [
  {
    label: '首页',
    key: 'home',
  },
  {
    label: '知识',
    key: 'knowledge',
  },
  {
    label: '个人介绍',
    key: 'introduce',
  },
  {
    label: '关于',
    key: 'about',
  },
  {
    label: (
      <a href="https://apps.xiaoreya.top/xiaoreya-home" target="_blank" rel="noopener noreferrer">
        博客
      </a>
    ),
    key: 'other-home',
  },
];

export {
  menuList,
}