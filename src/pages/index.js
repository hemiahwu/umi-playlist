import { Card, Col, Row } from 'antd';
import styles from './index.scss';

function indexPage() {
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
      </Row>
    </div>
  );
}

export default indexPage;
