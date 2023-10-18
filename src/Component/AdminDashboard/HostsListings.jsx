import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminNavigation/AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Table, Input, Select, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default function HostsListings() {
  const [hosts, setHosts] = useState([
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice@example.com',
      image: 'https://example.com/alice.jpg',
      verified: true,
      dateCreated: '2023-10-01',
      lastLogin: '2023-10-15',
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob@example.com',
      image: 'https://example.com/bob.jpg',
      verified: false,
      dateCreated: '2023-09-15',
      lastLogin: '2023-10-14',
    },
    // Add more host data as needed
  ]);

  const [filters, setFilters] = useState({
    verified: 'Any',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (value) => {
    setFilters({
      verified: value,
    });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDeleteHost = (hostId) => {
    confirm({
      title: 'Do you want to delete this host?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        const updatedHosts = hosts.filter((host) => host.id !== hostId);
        setHosts(updatedHosts);
      },
    });
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img
          src={image}
          alt="Host"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
      ),
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Verified',
      dataIndex: 'verified',
      key: 'verified',
      render: (verified) => (verified ? 'Yes' : 'No'),
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
    },
    {
      title: 'Last Login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Link to={`/hosts/edit/${record.id}`}>Edit</Link>
          <span onClick={() => handleDeleteHost(record.id)}>Delete</span>
        </div>
      ),
    },
  ];

  const filteredHosts = hosts.filter((host) => {
    const { verified } = filters;

    const matchesVerified =
      verified === 'Any' || host.verified === (verified === 'Yes');

    const matchesSearch =
      host.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      host.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      host.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesVerified && matchesSearch;
  });

  return (
    <div className="bg-gray-100 h-[100vh]">
      <AdminHeader />
      <div className="flex">
        <div className="hidden md:block bg-orange-400 text-white w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>

        <div className="md:w-4/5 w-full p-4 h-[100vh]">
          <h1 className="text-2xl font-semibold mb-4">Host Listings</h1>
          <div className="bg-white p-4 rounded shadow">
            <div className="mb-4 flex justify-end">
              <Input
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search by name or email"
                className="border p-1 rounded-full mr-2"
              />
              <Select
                style={{ width: 120 }}
                value={filters.verified}
                onChange={handleFilterChange}
              >
                <Select.Option value="Any">Verified</Select.Option>
                <Select.Option value="Yes">Verified</Select.Option>
                <Select.Option value="No">Not Verified</Select.Option>
              </Select>
            </div>
           <div className='overflow-x-auto'>
           <Table columns={columns} dataSource={filteredHosts} />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
