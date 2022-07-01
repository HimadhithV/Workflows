
import { Layout, Menu,Avatar,Space } from 'antd';
import '../styles/icon.css'
import Icon from '@ant-design/icons'
import {UserOutlined,SwapOutlined,AppstoreOutlined,CloudDownloadOutlined,SettingOutlined,QuestionCircleOutlined,NotificationTwoTone,PoweroffOutlined } from '@ant-design/icons';
import React from 'react';
const { Sider } = Layout;


function SiderBar()
{
    return(

<Sider
width={50}
breakpoint="lg"
collapsedWidth="0"
onBreakpoint={(broken) => {
  console.log(broken);
}}
onCollapse={(collapsed, type) => {
  console.log(collapsed, type);
}}
>
<div style={{marginBottom:"180px"}}>
<Menu

  theme="dark"
  mode="inline"
  
  items={[PoweroffOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`,
    }),
  )}
/>
</div>
<div className="logo"/>
<Menu

  theme="dark"
  mode="inline"
  defaultSelectedKeys={['5']}
  items={[AppstoreOutlined, SwapOutlined, CloudDownloadOutlined, SettingOutlined,QuestionCircleOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`,
    }),
  )}
/>
<div className="logo1" style={{marginTop:"150px"}}/>
<Menu

  theme="dark"
  mode="inline"
  
  items={[NotificationTwoTone].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`,
    }),
  )}
/>

<Avatar size="small" icon={<UserOutlined />}style={{marginTop:"10px",marginLeft:"10px"}} />

<Menu

  theme="dark"
  mode="inline"
  
  items={[PoweroffOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`,
    }),
  )}
/>
</Sider>
    )
}

export default SiderBar;