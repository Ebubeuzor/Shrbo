import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Space } from 'antd';

const PopupFull = ({title,onClose,open,children}) => {
 
  return (
    <div className=' hidden'>
      <Drawer
        title={title}
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
      
      >
        {children}
       
      </Drawer>
    </div>
  );
};
export default PopupFull;