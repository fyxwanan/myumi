/*
 * @Author: xiaoreya
 * @Date: 2021-01-21 14:19:05
 * @Description: 
 */
import React, { Component } from 'react';
import { Chart } from '@antv/g2';

class ChartDemoOne extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.renderContent(this.props?.data || [])
  }

  // static getDerivedStateFromProps(nextProps, preState) {
  //   console.log('echart   nextProps --->', nextProps)
  //   console.log('echart   preState --->', preState)
    
  // }

  componentWillReceiveProps(nextProps) {
    this.chart.changeData(nextProps.data)
  }

  renderContent = (data) => {
    console.log('this. ===>', this)
    const chart = new Chart({
      container: 'chatdemoboxid',
      autoFit: true,
      height: 500,
    });

    chart.data(data);
    // 此处主要注释纵坐标， scale 定义坐标轴
    chart.scale(
      {
        '月均降雨量': {
          // max: 120,  // 最大值
          // min: 0,  // 最小值
          // range: [0, 0.8] // 输出域、值域 图标绘制范围， 范围是[0, 1],  0.8 就相当于图形绘制的最大高度设为了 80%
          field: '月均降雨量',
          // values: [70, 70]
          // minLimit: 0, // 强制从什么值开始
          // maxLimit: 60 // 强制最大值是多少
          // nice: true, // 自动调整最大值最小值
          // ticks: [20, 40, 60, 80, 100, 120], // 纵坐标数字， 优先级最高
          // tickInterval: 10,  // 纵坐标数字间隔，如果设置了 ticks， tickInterval则不会生效
          // minTickInterval: 40，  // 纵坐标数字间隔, 最小间隔 只对 linear 适用
          // tickCount: 3, // 纵坐标提示的个数
          maxTickCount: 10,  // 纵坐标最大提示的个数
        }
      },
      {
        nice: true
      }
    );
    chart.tooltip({
      showMarkers: false,
      shared: true,
    });

    // chart.coordinate('polar')  // 极坐标轴
    // chart.coordinate('helix') // 螺旋坐标轴
    // chart.coordinate('theta')  // 一种特殊的极坐标系，半径长度固定，仅仅将数据映射到角度，常用于饼图的绘制。 等于 chart.coordinate('polar').transpose()
    // chart.coordinate('polar').transpose()

    // 图表样式切换
    chart.coordinate({
      type: 'polar',  // 坐标系类型  cartesian / rect 笛卡尔坐标级 属于极坐标轴
      // 坐标系配置项，目前常用于极坐标, 其他坐标没得卵用
      cfg: {
        radius: 0.85,  
        // startAngle: 1,
        // endAngle: 1,
        innerRadius: 0, // 内部那傻逼玩意，不用弄这个， 0就是没有，就是一个点，数值
      },
      // actions: [['transpose']], // 横，纵切换 默认是竖着的
    });
    
    chart
      .interval()
      .position('月份*月均降雨量')
      .color('name')
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ]);

    chart.interaction('active-region');
    console.log('laji npm')
    chart.theme({ "styleSheet": { "brandColor": "#B8E1FF", "paletteQualitative10": ["#B8E1FF", "#9AC5FF", "#7DAAFF", "#5B8FF9", "#3D76DD", "#085EC0", "#0047A5", "#00318A", "#001D70"], "paletteQualitative20": ["#B8E1FF", "#9AC5FF", "#7DAAFF", "#5B8FF9", "#3D76DD", "#085EC0", "#0047A5", "#00318A", "#001D70"] } });
    this.chart = chart;
    chart.render();
  }

  getMaxMoney = () => {
    const moneyArray = [];
    // moneyArray.forEach((moneyItem, index)) => {

    // }
    const maxIndex = getMax(moneyArray).maxIndex;
  }

  getMax = (arr) => {
    let max = arr[0];
    let maxIndex = 0;
    arr.forEach((element, index) => {
      if (arr[index] > max) {
        max = arr[index];
        maxIndex = index;
      }
    });
    const maxObj = {
      maxValue: max,
      maxIndex: maxIndex,
    }
    return maxObj;
  }

  render() {
    return (
      <div id="chatdemoboxid">
        {/* {this.renderContent()} */}
      </div>
    )
  }
}

export default ChartDemoOne;
