/**
 * title: 首页
 */
import ReactEcharts from 'echarts-for-react';
import { Card, Col, Row } from 'antd';
import styles from './index.scss';

function indexPage() {
  const reportOptions = {
    title: {
      text: '本周周报统计',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} 人({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['提交人数', '未提交人数'],
    },
    series: [
      {
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 200, name: '已提交' },
          { value: 30, name: '未提交' },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  const loginOptions = {
    title: {
      text: '本周登录人次',
      x: 'center',
      textAlign: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: ['登录人数', '登录次数'],
    },
    xAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周三', '周五', '周六', '周日'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '人数',
        min: 0,
        // interval: 50,
        axisLabel: {
          formatter: '{value} 人',
        },
      },
      {
        type: 'value',
        name: '次数',
        min: 0,
        // interval: 5,
        axisLabel: {
          formatter: '{value} 次',
        },
      },
    ],
    series: [
      {
        name: '人数',
        type: 'bar',
        data: [230, 150, 120, 100, 210, 15, 0],
        barWidth: [35],
        itemStyle: {
          color: '#58afff',
        },
      },
      {
        name: '次数',
        type: 'line',
        yAxisIndex: 1,
        data: [350, 300, 280, 378, 320, 20, 0],
        lineStyle: {
          color: 'orange',
        },
      },
    ],
  };

  return (
    <div className={styles.home}>
      <Row gutter={16}>
        <Col span={4}>
          <Card className={`${styles.card} ${styles.number}`}>
            <p className={styles.title}>待我审批</p>
            <p className={styles.text}>2</p>
          </Card>
        </Col>
        <Col span={4}>
          <Card className={`${styles.card} ${styles.number}`}>
            <p className={styles.title}>本周登录次数</p>
            <p className={`${styles.text} ${styles.gray}`}>5</p>
          </Card>
        </Col>
        <Col span={16}>
          <div className={`${styles.images} ${styles.card}`}></div>
        </Col>
        <Col span={8}>
          <Card className={`${styles.card}`}>
            <ReactEcharts option={reportOptions} style={{ height: 400 }} />
          </Card>
        </Col>
        <Col span={16}>
          <Card className={`${styles.card}`}>
            <ReactEcharts option={loginOptions} style={{ height: 400 }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default indexPage;
