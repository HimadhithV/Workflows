import React from "react";
import '../styles/sidebar.css';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
function SideBar(){
    return(
    <div className="sidebar">
    <div className="links">

  <div className="icons">
  <span className="material-symbols-outlined" href="#apps">
apps
</span>
  <span className="material-symbols-outlined">
sync_alt
</span>
<span className="material-symbols-outlined">
cloud_sync
</span>
<span className="material-symbols-outlined">
settings_suggest
</span>
<span className="material-symbols-outlined">
chat
</span>
</div>

  
</div>

<div className="iconsbot">
<span className="material-symbols-outlined">
notification_add
</span>
<span>
 <Avatar size="large" icon={<UserOutlined />} />
</span>
<span className="material-symbols-outlined">
power_settings_new
</span>
</div>
</div>
    )
}

export default SideBar;