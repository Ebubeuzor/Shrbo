import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminNavigation/AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Table, Input, Select, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default function GuestsListings() {
  const [guests, setGuests] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      image: 'https://assets.vogue.in/photos/640592409d03d0d41504f3a0/1:1/w_1600,h_1600,c_limit/Face%20taping%20.jpg',
      verified: true,
      dateCreated: '2023-10-01',
      lastLogin: '2023-10-15',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@example.com',
      image: 'https://assets.vogue.in/photos/640592409d03d0d41504f3a0/1:1/w_1600,h_1600,c_limit/Face%20taping%20.jpg',
      verified: false,
      dateCreated: '2023-09-15',
      lastLogin: '2023-10-14',
    },
    {
      id: 3,
      firstName: 'Gab',
      lastName: 'Adekunle',
      email: 'adekunleja@example.com',
      image: 'https://assets.vogue.in/photos/640592409d03d0d41504f3a0/1:1/w_1600,h_1600,c_limit/Face%20taping%20.jpg',
      verified: false,
      dateCreated: '2023-09-15',
      lastLogin: '2023-10-14',
    },
    {
      id: 4,
      firstName: 'Will',
      lastName: 'Smith',
      email: 'willsmithoriginal@example.com',
      image: 'https://assets.vogue.in/photos/640592409d03d0d41504f3a0/1:1/w_1600,h_1600,c_limit/Face%20taping%20.jpg',
      verified: false,
      dateCreated: '2023-09-15',
      lastLogin: '2023-10-14',
    },

    
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

  const handleDeleteGuest = (guestId) => {
    confirm({
      title: 'Do you want to delete this guest?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        const updatedGuests = guests.filter((guest) => guest.id !== guestId);
        setGuests(updatedGuests);
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
          alt="Guest"
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
          <Link to={`/guests/edit/${record.id}`}>Edit</Link>
          <span onClick={() => handleDeleteGuest(record.id)}>Delete</span>
        </div>
      ),
    },
  ];

  const filteredGuests = guests.filter((guest) => {
    const { verified } = filters;

    const matchesVerified =
      verified === 'Any' || guest.verified === (verified === 'Yes');

    const matchesSearch =
      guest.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guest.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesVerified && matchesSearch;
  });

  return (
    <div className="bg-gray-100 h-[100vh]">
      <AdminHeader />
      <div className="flex">
        <div className="hidden md:block bg-orange-400 text-white md:w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>

        <div className="w-full md:w-4/5 p-4 h-[100vh] overflow-auto example">
          <h1 className="text-2xl font-semibold mb-4">Guest Listings</h1>
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
            <div className="overflow-x-auto">
            <Table columns={columns} dataSource={filteredGuests} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
