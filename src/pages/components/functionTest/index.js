import React, { Component } from 'react'
import './index.css';
import MyQuill from '../quill';
import ChartDemoOne from '../echart';
import QuillHtml from '../quillHtml';

const ehartData = {
  data1: [
    { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
    { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
    { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
    { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
    { name: 'London', 月份: 'May', 月均降雨量: 47 },
    { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
    { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
    { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
    { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
    { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
    { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
    { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
    { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
    { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
    { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
    { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
    { name: 'beijing', 月份: 'Aug.', 月均降雨量: 42.4 },
  ],
  data2: [
    { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
    { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
    { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
    { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
    { name: 'London', 月份: 'May', 月均降雨量: 47 },
    { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
    { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
    { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
  ],
  data3: [
    { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
    { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
  ]
}

let index = 1;

export default class FunctionTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      echartData: ehartData.data1,
    }
  }

  static getDerivedStateFromProps(nextProps, preState) {
    console.log('functionTest   nextProps --->', nextProps)
    console.log('functionTest   preState --->', preState)
  }

  /* 判断是否是ios手机safari浏览器打开的 */
  isIosSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    alert(ua)
    alert(ua)
    //判断是不是在iPhone的Safair浏览器打开的本页面
    if (
        ua.indexOf('applewebkit') > -1 &&
        ua.indexOf('mobile') > -1 &&
        ua.indexOf('safari') > -1 &&
        !(ua.indexOf('android') > -1) &&
        !(ua.indexOf('linux') > -1) &&
        !(ua.indexOf('crios') > -1) && 
        !(ua.indexOf('chrome') > -1) && 
        !(ua.indexOf('browser') > -1) && 
        !(ua.indexOf('ios') > -1)
      ) {
      // return true;
      alert('是的')
    } else {
      alert('false')

    }
    // return false;
  };

  testObject = () => {
    const fileUrl = 'https://bj.bcebos.com/v1/yanqian-stag/yqcloudtest/s29747574_V12.jpg?authorization=bce-auth-v1%2F27b30f09c04c4cdc9251ff9f5459d36c%2F2020-11-11T06%3A28%3A50Z%2F3600000%2F%2Fd8d68379f7c076582a23d3ae7b87101b27c7f71549974b71a86aebc4f2a95309';
    const fileUrl2 = 'https://bj.bcebos.com/v1/yanqian-stag/yqcloudtest/%E4%BA%8C%E5%BC%80%E6%96%87%E6%A1%A3%E4%BA%BA%E5%91%98%E5%AE%89%E6%8E%92_V12.txt?authorization=bce-auth-v1%2F27b30f09c04c4cdc9251ff9f5459d36c%2F2020-11-11T07%3A57%3A05Z%2F3600000%2F%2F765ac54abf596f752eff0c18795c07c800b9beb5936cb3a6798d30b34b177b83';
    const fileUrl3 = 'https://bj.bcebos.com/v1/yanqian-stag/yqcloudtest/S01111-12340671_V2.png?authorization=bce-auth-v1%2F27b30f09c04c4cdc9251ff9f5459d36c%2F2020-11-11T09%3A36%3A06Z%2F3600000%2F%2F77830037dc93122af7a62adac35482d493beea8dfac2aaef851c571cbce008fd';
     
    const aSpan = document.createElement('a');
    aSpan.href = fileUrl3;
    document.body.appendChild(aSpan);
    aSpan.className = 'oInput';
    aSpan.style.display = 'none';
    var e = document.createEvent('MouseEvent');     
    e.initEvent('click', false, false);     
    aSpan.dispatchEvent(e);
  }

  buttonClick = () => {
    // this.isIosSafari();
    // if (this.isIosSafari()) {
      // const fileUrl = 'https://bj.bcebos.com/v1/yanqian-stag/yqcloudtest/s29747574_V12.jpg?authorization=bce-auth-v1%2F27b30f09c04c4cdc9251ff9f5459d36c%2F2020-11-11T06%3A28%3A50Z%2F3600000%2F%2Fd8d68379f7c076582a23d3ae7b87101b27c7f71549974b71a86aebc4f2a95309';
      // const fileUrl2 = 'https://bj.bcebos.com/v1/yanqian-stag/yqcloudtest/%E4%BA%8C%E5%BC%80%E6%96%87%E6%A1%A3%E4%BA%BA%E5%91%98%E5%AE%89%E6%8E%92_V12.txt?authorization=bce-auth-v1%2F27b30f09c04c4cdc9251ff9f5459d36c%2F2020-11-11T07%3A57%3A05Z%2F3600000%2F%2F765ac54abf596f752eff0c18795c07c800b9beb5936cb3a6798d30b34b177b83';
      // const fileUrl3 = 'https://bj.bcebos.com/v1/yanqian-stag/yqcloudtest/S01111-12340671_V2.png?authorization=bce-auth-v1%2F27b30f09c04c4cdc9251ff9f5459d36c%2F2020-11-11T09%3A36%3A06Z%2F3600000%2F%2F77830037dc93122af7a62adac35482d493beea8dfac2aaef851c571cbce008fd';
      // // this.downloadFileByASpan(fileUrl3);
      // alert('牛逼啊')
      // const aSpan = document.createElement('a');
      // aSpan.href = fileUrl3;
      // aSpan.target = '__blank';
      // document.body.appendChild(aSpan);
      // aSpan.click();
      // aSpan.className = 'oInput';
      // aSpan.style.display = 'none';
      // document.body.removeChild(aSpan);

      // alert('这也可以？')
      // window.open(fileUrl3)

    // }

    // this.testObject();
    this.isIosSafari()
  }

  /* 利用a标签下载附件 */
  downloadFileByASpan = (fileUrl) => {
    // const aSpan = document.createElement('a');
    // aSpan.href = fileUrl;
    // aSpan.target = '__blank';
    // document.body.appendChild(aSpan);
    // aSpan.click();
    // aSpan.className = 'oInput';
    // aSpan.style.display = 'none';
    // document.body.removeChild(aSpan);
    // alert('下载')

    const winRef = window.open("","_blank");
    // alert(fileUrl)
    winRef.location.href = fileUrl;
  }

  sortWithOne = (beforeArray) => {
    const afterArray = beforeArray?.sort((a, b) => a - b);
    console.log('sortWithOne  afterArray ===>', afterArray)
    return afterArray;
  }

  sortWithTwo = (beforeArray) => {
    const afterArray = beforeArray?.sort((a, b) => a - b).reverse();
    console.log('sortWithTwo  afterArray ===>', afterArray)
    return afterArray;
  }

  sortWithThree = (beforeArray) => {
    const afterArray = beforeArray?.sort((a, b) => a - b).reverse();
    console.log('sortWithTwo  afterArray ===>', afterArray)
    return afterArray;
  }

  changeEchartData = () => {
    if (index === 3) {
      this.setState({
        echartData: ehartData[`data${index}`]
      })
      index = 1;
    } else {
      this.setState({
        echartData: ehartData[`data${index}`]
      })
      index++;
    }
  }
  
  render() {
    const array = [1, 6, 2, 13, 4, 5, 7, 7, 8, 9, 12, 3, 2]
    const { echartData } = this.state;
    return (
      <div>
        <div onClick={() => this.changeEchartData()}>我是按钮改变数据</div>
        {/* 我是按钮
        <div className="sort-item" onClick={() => this.sortWithOne(array)}>我是排序一号</div>
        <div className="sort-item" onClick={() => this.sortWithTwo(array)}>我是排序二号倒序</div>
        <div className="sort-item" onClick={() => this.sortWithThree(array)}>我是排序三号冒泡排序</div>
        <div className="sort-item" onClick={() => this.sortWithOne(array)}>我是排序四号</div>
        <div className="sort-item" onClick={() => this.sortWithOne(array)}>我是排序五号</div>
        <div className="sort-item" onClick={() => this.sortWithOne(array)}>我是排序六号</div>
        <div className="sort-item" onClick={() => this.sortWithOne(array)}>我是排序七号</div>
        <div className="sort-item" onClick={() => this.sortWithOne(array)}>我是排序八号</div> */}
        <MyQuill />
        {/* <ChartDemoOne
          data={echartData}
        /> */}
        {/* <QuillHtml /> */}
      </div>
    )
  }
}
