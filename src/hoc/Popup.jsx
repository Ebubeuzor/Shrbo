import React, { useState } from 'react';
import { Modal, Button, Dropdown, Space  } from "antd";

const Popup = ({ isModalVisible, handleCancel, children ,title , className}) => {
  
  return(
    <div>
        
        <Modal
            title={title}
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            className={className}
           
        > 
          {children}
        </Modal>

    </div>
);
};

export default Popup;



