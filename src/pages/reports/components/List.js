import React from 'react';
import { Row, Col, Card } from 'antd';
import { connect } from 'dva';

const List = ({ list }) => {
  const colSpan = { xl: 6, xxl: 4, span: 6 };
  return (
    <div>
      <Row gutter={20}>
        {list.map(item => (
          <Col {...colSpan} key={item.id}>
            <Card title={item.createTime}>
              <p className="title">{item.title.slice(0, 20)}</p>
              <p>接收人: {item.receiverName.slice(0, 20)}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default connect(({ reports }) => ({ ...reports }))(List);
