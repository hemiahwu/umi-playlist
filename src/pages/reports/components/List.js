import React from 'react';
import { Row, Col, Card, Pagination, Icon, Tooltip } from 'antd';
import { connect } from 'dva';

const List = ({ list, page, pageSize, total, dispatch }) => {
  const handleChangePage = current => {
    if (current !== page) getDatas(current);
  };

  const getDatas = page => {
    dispatch({
      type: 'reports/fetch',
      payload: { page },
    });
  };

  const colSpan = { xl: 6, xxl: 4, span: 6 };
  return (
    <div>
      <Row gutter={20}>
        {list.map(item => (
          <Col {...colSpan} key={item.id}>
            <Card
              title={item.createTime}
              extra={
                <>
                  <Tooltip placement="top" title="编辑">
                    <a href={`/reports/write/${item.id}`}>
                      <Icon type="form" />
                    </a>
                  </Tooltip>
                </>
              }
            >
              <p className="title">{item.title.slice(0, 20)}</p>
              <p>接收人: {item.receiverName.slice(0, 20)}</p>
            </Card>
          </Col>
        ))}
      </Row>
      {list.length ? (
        <Pagination
          className="global-pagination"
          current={page}
          pageSize={pageSize}
          total={total}
          onChange={handleChangePage}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default connect(({ reports }) => ({ ...reports }))(List);
