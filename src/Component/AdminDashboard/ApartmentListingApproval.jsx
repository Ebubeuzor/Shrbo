import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminNavigation/AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Table, Button, Input, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default function ApartmentListingApproval() {
  const [apartments, setApartments] = useState([]);
  const [declineModalVisible, setDeclineModalVisible] = useState(false);
  const [selectedApartmentId, setSelectedApartmentId] = useState(null);
  const [declineReason, setDeclineReason] = useState('');

  // Sample data for demonstration purposes
  const sampleApartments = [
    {
      id: 1,
      propertyName: 'Cozy Retreat',
      propertyID: 'ABC123',
      price: 150,
      addedBy: 'Host A',
      createdOn: '2023-10-10',
      status: 'Pending Approval',
      userVerified: true,
    },
    {
      id: 2,
      propertyName: 'Beachfront Villa',
      propertyID: 'XYZ456',
      price: 300,
      addedBy: 'Host B',
      createdOn: '2023-10-12',
      status: 'Pending Approval',
      userVerified: true,
    },
    // Add more apartment listings as needed
  ];

  useEffect(() => {
    // You can fetch data from your API here and update the apartments state
    setApartments(sampleApartments);
  }, []);

  const showDeclineModal = (apartmentId) => {
    setDeclineModalVisible(true);
    setSelectedApartmentId(apartmentId);
  };

  const hideDeclineModal = () => {
    setDeclineModalVisible(false);
    setSelectedApartmentId(null);
    setDeclineReason('');
  };

  const handleDeclineReasonChange = (event) => {
    setDeclineReason(event.target.value);
  };

  const handleDecline = () => {
    // Implement the logic to send the decline reason to the host's email
    // You can use the selectedApartmentId and declineReason
    hideDeclineModal();
  };

  const columns = [
    {
      title: 'Property Name',
      dataIndex: 'propertyName',
      key: 'propertyName',
    },
    {
      title: 'Property ID',
      dataIndex: 'propertyID',
      key: 'propertyID',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `$${text}`,
    },
    {
      title: 'Added By',
      dataIndex: 'addedBy',
      key: 'addedBy',
    },
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'createdOn',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'User Verified',
      dataIndex: 'userVerified',
      key: 'userVerified',
      render: (verified) => (verified ? 'Yes' : 'No'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="primary">Approve</Button>
          <Button type="danger" onClick={() => showDeclineModal(record.id)}>
            Decline
          </Button>
          <Button type="default">View Details</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 h-[100vh]">
      <AdminHeader />
      <div className="flex">
        <div className="bg-orange-400 text-white w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>

        <div className="w-4/5 p-4 h-[100vh]">
          <h1 className="text-2xl font-semibold mb-4">Approve Listings</h1>
          <div className="bg-white p-4 rounded shadow">
            <Table columns={columns} dataSource={apartments} />
          </div>
        </div>
      </div>
      <Modal
        title="Provide a reason for declining"
        visible={declineModalVisible}
        onOk={handleDecline}
        onCancel={hideDeclineModal}
        okText="Submit"
        cancelText="Cancel"
      >
        <Input.TextArea
          value={declineReason}
          onChange={handleDeclineReasonChange}
          placeholder="Enter your reason here..."
        />
        <Button type="primary" onClick={handleDecline}>
          Submit
        </Button>
      </Modal>
    </div>
  );
}
