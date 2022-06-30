
import { Layout, Menu,Avatar } from 'antd';
import '../styles/icon.css'
import {SwapOutlined,AppstoreOutlined,CloudDownloadOutlined,SettingOutlined,QuestionCircleOutlined,NotificationTwoTone,PoweroffOutlined } from '@ant-design/icons';
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
<div className="logo1" style={{marginTop:"100px"}}/>
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
<Avatar type="default"/>
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