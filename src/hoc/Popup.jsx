import React, { useState } from 'react';
import { Modal, Button, Dropdown, Space  } from "antd";

const Popup = ({ isModalVisible, handleCancel, children ,title}) => {
  
  return(
    <div>
        
        <Modal
            title={title}
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
        > 
          {children}
        </Modal>

    </div>
);
};

export default Popup;



