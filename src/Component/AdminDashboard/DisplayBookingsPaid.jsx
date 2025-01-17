import React, { useState } from "react";
import { Table, Space, Input, DatePicker, Select } from "antd";
import AdminHeader from "./AdminNavigation/AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { parse, isAfter } from 'date-fns';


const { RangePicker } = DatePicker;
const { Option } = Select;

const DisplayBookingsPaid = () => {

  const [filters, setFilters] = useState({
    email: "",
    amount: "",
    dateRange: null,
  });


  const columns = [
    {
      title: "Email",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
    },
    {
      title: "Booking No",
      dataIndex: "bookingNo",
      key: "bookingNo",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      username: "darwinnuez@gmail.com",
      paymentDate: "2023-10-15",
      bookingNo: "B001",
      totalAmount: "$100",
      paymentType: "Visa Card",
      status: "Paid",
    },
    {
      key: "2",
      username: "kobiko@gmail.com",
      paymentDate: "2023-10-14",
      bookingNo: "B002",
      totalAmount: "$150",
      paymentType: "Transfer",
      status: "Paid",
    },
    {
      key: "3",
      username: "myemailaddress123@gmail.com",
      paymentDate: "2023-10-13",
      bookingNo: "B003",
      totalAmount: "$120",
      paymentType: "Verve Card",
      status: "Paid",
    },
  ];

  const filteredData = data.filter((record) => {
    const { email, amount, dateRange } = filters;
    const paymentDate = parse(record.paymentDate, 'yyyy-MM-dd', new Date());
  
    const matchesEmail = record.username.toLowerCase().includes(email.toLowerCase());
    const matchesAmount = record.totalAmount.toLowerCase().includes(amount.toLowerCase());
  
    // Check if the payment date is within the selected date range
    let matchesDate = true;
    if (dateRange) {
      const [startDate, endDate] = dateRange;
      if (startDate && endDate) {
        matchesDate =
          isAfter(paymentDate, startDate) && isAfter(endDate, paymentDate);
      }
    }
  
    return matchesEmail && matchesAmount && matchesDate;
  });
  

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 h-[100vh]">
      <AdminHeader />
      <div className="flex">
        <div className="bg-orange-400 text-white hidden md:block md:w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>
        <div className="w-full md:w-4/5 p-4 h-[100vh] overflow-auto example">
          <h1 className="text-2xl font-semibold mb-4">Paid Payments</h1>
          <div className="bg-white p-4 rounded shadow">
            <div className="mb-4 flex justify-end">
              <Input
                placeholder="Filter by Email"
                value={filters.email}
                onChange={(e) => handleFilterChange("email", e.target.value)}
              />
              <Input
                placeholder="Filter by Amount"
                value={filters.amount}
                onChange={(e) => handleFilterChange("amount", e.target.value)}
              />
              <RangePicker
                placeholder={["Start Date", "End Date"]}
                value={filters.dateRange}
                onChange={(dates) => handleFilterChange("dateRange", dates)}
              />
            </div>
            <div className="overflow-x-auto">
              {filteredData.length > 0 ? (
                <Table columns={columns} dataSource={filteredData} />
              ) : (
                <div>No data found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBookingsPaid;
