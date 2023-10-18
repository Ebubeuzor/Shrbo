import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminNavigation/AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Table, Button, Input, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { confirm } = Modal;

export default function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for demonstration purposes
  const sampleProperties = [
    {
      key: 1, // Add a unique key for each property
      id: 1,
      propertyName: 'Cozy Apartment',
      propertyId: 'ABC123',
      price: '$120 per night',
      addedBy: 'John Doe',
      createdOn: '2023-10-01',
      status: 'published',
      userVerified: true,
    },
    {
      key: 2, // Add a unique key for each property
      id: 2,
      propertyName: 'Luxury Villa',
      propertyId: 'XYZ789',
      price: '$350 per night',
      addedBy: 'Jane Smith',
      createdOn: '2023-09-15',
      status: 'unpublished',
      userVerified: false,
    },
    // Add more property listings as needed
  ];

  const showConfirm = (propertyId) => {
    confirm({
      title: 'Do you want to delete this property?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        // Implement the logic to delete the property with the given propertyId
        // Update the properties state after deletion
        const updatedProperties = properties.filter((property) => property.id !== propertyId);
        setProperties(updatedProperties);
      },
    });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProperties = properties.filter((property) => {
    return (
      property.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.addedBy.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const columns = [
    {
      title: 'Property Name',
      dataIndex: 'propertyName',
      key: 'propertyName',
    },
    {
      title: 'Property ID',
      dataIndex: 'propertyId',
      key: 'propertyId',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
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
          <Button type="primary">Edit</Button>
          <Button type="danger" onClick={() => showConfirm(record.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    // You can fetch data from your API here and update the properties state
    setProperties(sampleProperties);
  }, []);
  

  return (
    <div className="bg-gray-100 h-[100vh]">
      <AdminHeader />
      <div className="flex">
        <div className="hidden md:block bg-orange-400 text-white w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>

        <div className="w-full md:w-4/5 p-4 h-[100vh] overflow-auto example">
          <h1 className="text-2xl font-semibold mb-4">Property Listings</h1>
          <div className="bg-white p-4 rounded shadow">
            <Input
              placeholder="Search by Property Name or Added By"
              value={searchQuery}
              onChange={handleSearch}
              style={{ width: 200, marginBottom: '1rem' }}
            />
            <div className='overflow-x-auto'>
            <Table columns={columns} dataSource={filteredProperties} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
