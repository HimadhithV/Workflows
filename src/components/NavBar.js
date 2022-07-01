import HeadCompo from './headcompo';
import HeaderSearchBar from './searchbar';
import React from 'react';
import 'antd/dist/antd.css';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout,Space} from 'antd';
// import Link from 'react-router-dom'
import SiderBar from './sidebar2';
import Cont from './content'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
const { Header, Content, Footer} = Layout;
const size=400;

const NavBar = () => (
    
  <Layout >
    <SiderBar/>
    <Layout style={{backgroundColor:"#ecf4ff"}}>
    
      <Space direction='horizontal' size={size}>
      <HeadCompo title="Workflows"/>
      <HeaderSearchBar/>
      <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={size}>
        Create a workflow
      </Button>
      </Space>
      <Content
        style={{
          margin: '24px 16px 0px',
          padding:'10px',
        
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight:'1000 px',
            marginTop:"-25px" 
            
          }}
        >
          <Cont/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default NavBar;