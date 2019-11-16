import './index.scss';
import { Table } from 'antd';
const index = ({ className, ...rest }) => (
  <Table className={`table-wrapper ${className}`} {...rest} />
);

export default index;
