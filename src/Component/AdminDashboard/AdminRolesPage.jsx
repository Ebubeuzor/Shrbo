import React, { useState } from 'react';
import { Form, Input, Button, Select, Space, Table, Modal } from 'antd';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminNavigation/AdminHeader';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';

const { confirm } = Modal;
const { Option } = Select;

const AdminRolesPage = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Admin 1', role: 'Super Admin' },
    { id: 2, name: 'Admin 2', role: 'Admin' },
    // Add more admin data as needed
  ]);

  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [newAdminModalVisible, setNewAdminModalVisible] = useState(false);

  const [form] = Form.useForm();
  const [newAdminForm] = Form.useForm();

  const columns = [
    {
      title: 'Admin Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => showRoleModal(record)}>Change Role</Button>
          <Button>Delete</Button>

        </Space>
      ),
    },
  ];

  const handleRoleChange = () => {
    // Handle role change and update the admin's role.
    // You can make an API call to update the role on the server.
    // For demonstration purposes, we'll update the role locally.
    const updatedAdmins = admins.map((admin) => {
      if (admin.id === selectedAdmin.id) {
        return { ...admin, role: form.getFieldValue('role') };
      }
      return admin;
    });

    setAdmins(updatedAdmins);
    setRoleModalVisible(false);
  };

  const showRoleModal = (admin) => {
    setSelectedAdmin(admin);
    form.setFieldsValue({ role: admin.role });
    setRoleModalVisible(true);
  };

  const handleCreateNewAdmin = (values) => {
  
    const newAdmin = {
      id: admins.length + 1,
      name: values.username,
      role: values.role,
    };
    setAdmins([...admins, newAdmin]);
  
    setNewAdminModalVisible(false);
    newAdminForm.resetFields();
  
    console.log("Form data submitted:", values);
  };
  
  

  return (
    <div className='bg-gray-100 h-[100vh]'>
      <AdminHeader />
      <div className="flex">
        <div className="bg-orange-400  text-white hidden md:block md:w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>
        <div className="w-full md:w-4/5 p-4 h-[100vh] overflow-auto example">
          <h1>Admin Roles</h1>
        <div className='mb-4'>
        <Button type="primary" onClick={() => setNewAdminModalVisible(true)}>
            Create New Admin
          </Button>
        </div>
        <div className='overflow-x-auto'>
        <Table columns={columns} dataSource={admins} />

        </div>
          <Modal
            title="Change Admin Role"
            open={roleModalVisible}
            onOk={handleRoleChange}
            onCancel={() => setRoleModalVisible(false)}
          >
            <Form form={form} layout="vertical">
              <Form.Item name="role" label="Select Role">
                <Select>
                  <Option value="Super Admin">Super Admin</Option>
                  <Option value="Admin">Admin</Option>
                </Select>
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Create New Admin"
            open={newAdminModalVisible}
            onOk={handleCreateNewAdmin}
            onCancel={() => setNewAdminModalVisible(false)}
          >
            <Form form={newAdminForm} layout="vertical" onFinish={handleCreateNewAdmin}>
              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true, message: 'Please enter a username' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please enter a password' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item name="role" label="Select Role">
                <Select>
                  <Option value="Super Admin">Super Admin</Option>
                  <Option value="Admin">Admin</Option>
                </Select>
              </Form.Item>
              <FormItem>
                <Button htmlType='submit' type='primary'>
                  Submit
                </Button>
              </FormItem>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AdminRolesPage;
