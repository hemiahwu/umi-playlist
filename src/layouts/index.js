import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

function BasicLayout({ children }) {
  return (
    <Layout className="basic-layout">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
