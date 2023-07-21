/*
 * @Author: xiaoreya <xiaoreya@zknow.com>
 * @Date: 2022-11-15 15:49:40
 * @Description:
 */
import React from 'react';
import styles from './index.less';

const Knowledge = () => {

  function MyMap () {
    this.initStore();
  };

  let count = 8;
  MyMap.prototype.initStore = function() {
    this.store = new Array(count); //八个房间
    // 初始化链表头
    for (let i = 0; i < this.store.length; i++) {
      this.store[i] = {
        next: null,
      }
    }

  }

  MyMap.prototype.set = function(k: any, v: any) {
    // 通过key取余8计算，取得房间号
    let roomIndex = this.hash(k);
    // 取出链表头
    let queue = this.store[roomIndex];

    // 找元素
    while(queue.next) {
      // 不断的向下找
      if (queue.next.key === k) {
        // 覆盖
        return queue.next.value = v;
      } else {
        // 下一个
        queue = queue.next;
      }
    }

    // 第一次执行到这里，就是第一个数据 k: 1
    // 第二次执行到这里，就是末尾的一个
    queue.next = {
      next: null,
      key: k,
      value: v,
    }
  }

  MyMap.prototype.hash = function(k: any) {
    return k % count;
  }

  MyMap.prototype.get = function(k: any) {
    // 通过key取余8计算，取得房间号
    let roomIndex = this.hash(k);
    // 取出链表头
    let queue = this.store[roomIndex];

    // 跳过链表头
    queue = queue.next;

    // 查找当前是不是
    while(queue) {
      if (queue.key === k) {
        return queue.value;
      } else {
        // 指针下移
        queue = queue.next;
      }
    }

    return undefined;
  }

  MyMap.prototype.has = function(k: any) {
    return this.get(k) !== undefined;
  }

  const m: any = new MyMap();
  m.set(1, 'a')
  m.set(2, 'b')
  m.set(3, 'c')
  m.set(4, 'd')
  m.set(5, 'e')
  m.set(6, 'f')
  m.set(7, 'g')
  m.set(8, 'h')
  m.set(9, 'i')
  m.set(10, 'j')

  console.log('m ===>', m);
  console.log(m.get(3), m.get(7), 'has ===>', m.has(9))


  return (
    <div className={styles['home-warpper']}>
      我是
    </div>
  );
};

export default Knowledge;
