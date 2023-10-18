import React, { useState } from 'react';
import AdminHeader from './AdminNavigation/AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import { Select, Card, Row, Col, Table } from 'antd';

const { Option } = Select;

export default function AdminAnalytical() {
  const data = [
    {
      propertyName: 'Property 1',
      guestName: 'Guest A',
      total: 100,
      startDate: '2023-10-01',
      endDate: '2023-10-05',
      status: 'Booked',
    },
    {
      propertyName: 'Property 2',
      guestName: 'Guest B',
      total: 150,
      startDate: '2023-10-06',
      endDate: '2023-10-10',
      status: 'Confirmed',
    },
    // Add more data objects as needed
  ];

  const [filter, setFilter] = useState('today');

  const handleChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="bg-gray-100 h-[100vh]">
      <AdminHeader />
      <div className="flex">
        <div className="bg-orange-400 text-white w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>

        <div className="w-4/5 p-4 h-[100vh]">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <div className="bg-white p-4 rounded shadow">
            <div className="mb-4">
              <label htmlFor="filter" className="mr-4">
                Filter by:
              </label>
              <Select
                id="filter"
                value={filter}
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="today">Today</Option>
                <Option value="week">Week</Option>
                <Option value="month">Month</Option>
                <Option value="year">Year</Option>
              </Select>
            </div>

            <Row gutter={16}>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Guests Today</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Hosts Today</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Active Guests</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Active Hosts</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Total Property Listings</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Payments</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="bg-gray-200 p-4 rounded shadow mt-4">
            <h2 className="text-xl font-semibold">Today's Summary</h2>
            <Row gutter={16}>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Members</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Listings</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <p className="text-xl font-semibold">Payments</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="bg-gray-200 rounded shadow mt-4">
            <div className="flex justify-between p-4 bg-orange-400 text-white uppercase mb-4">
              <div className="font-bold">Current vacation rental bookings</div>
              <div>
                <Link to="/CurrentBookingsList">View All</Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table
                dataSource={data}
                columns={[
                  {
                    title: 'Property Name',
                    dataIndex: 'propertyName',
                    key: 'propertyName',
                    render: (text, record) => (
                      <Link to={`/property/${record.propertyId}`}>{text}</Link>
                    ),
                  },
                  {
                    title: 'Guest Name',
                    dataIndex: 'guestName',
                    key: 'guestName',
                    render: (text, record) => (
                      <Link to={`/guest/${record.guestId}`}>{text}</Link>
                    ),
                  },
                  {
                    title: 'Total',
                    dataIndex: 'total',
                    key: 'total',
                  },
                  {
                    title: 'Start Date',
                    dataIndex: 'startDate',
                    key: 'startDate',
                  },
                  {
                    title: 'End Date',
                    dataIndex: 'endDate',
                    key: 'endDate',
                  },
                  {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
