import React, { useState } from "react";
import AdminHeader from "./AdminNavigation/AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import { Select, Card, Row, Col, Table } from 'antd';


export default function AdminAnalytical() {
  const data = [
    {
      propertyName: "Property 1",
      guestName: "Guest A",
      total: 100,
      startDate: "2023-10-01",
      endDate: "2023-10-05",
      status: "Booked",
    },
    {
      propertyName: "Property 2",
      guestName: "Guest B",
      total: 150,
      startDate: "2023-10-06",
      endDate: "2023-10-10",
      status: "Confirmed",
    },
    // Add more data objects as needed
  ];
  return (
    <div className="bg-gray-100 h-[100vh]">
      <AdminHeader />
      <div className="flex">
        <div className="bg-orange-400 hidden md:block text-white md:w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>

        <div className="w-full md:w-4/5 p-4 h-[100vh]">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <div className="bg-white p-4 rounded shadow">
            <div className="mb-4">
              <label htmlFor="" className="mr-4">
                Filter by:
              </label>
              <select
                name=""
                className="border border-gray-300 rounded p-2"
                id=""
              >
                <option value="today">Today</option>

                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>

            <div className="bg-gray-200 p-4 rounded shadow">
              <h2 className="text-xl font-semibold">Today's Summary</h2>
              <div className="flex flex-col md:flex-row flex-wrap justify-between mt-4 gap-4">
                {/* Card for Guests Today */}
                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">Guests Today</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>

                {/* Card for Hosts Today */}
                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">Hosts Today</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>
                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">Active Guests</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>
                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">Active Hosts</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>
                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">
                    Total Property Listings
                  </p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>
                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">Payments</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 p-4 rounded shadow">
              <h2 className="text-xl font-semibold">Today's Summary</h2>
              <div className="flex flex-wrap justify-between mt-4 gap-3">
                {/* Card for Guests Today */}
                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">Members</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>

                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">Listings</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>
                <div className="bg-white rounded p-4 shadow flex-1 mr-4">
                  <p className="text-xl font-semibold">Payments</p>
                  <p className="text-4xl font-bold text-orange-400">0</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded shadow mt-4">
              <div className="flex justify-between p-4 bg-orange-400 text-white uppercase mb-4">
                <div className="font-bold">
                  Current vacation rental bookings
                </div>
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
    </div>
  );
}
