import React, { useState } from "react";
import AdminHeader from "./AdminNavigation/AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function PropertyList() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      propertyName: "Cozy Apartment",
      propertyId: "ABC123",
      price: "$120 per night",
      addedBy: "John Doe",
      createdOn: "2023-10-01",
      status: "published",
      userVerified: true,
    },
    {
      id: 2,
      propertyName: "Luxury Villa",
      propertyId: "XYZ789",
      price: "$350 per night",
      addedBy: "Jane Smith",
      createdOn: "2023-09-15",
      status: "unpublish",
      userVerified: false,
    },
  ]);

  const [filters, setFilters] = useState({
    status: "Any",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (event) => {
    const {name, value} = event.target;
        setFilters({
            ...filters,
            [name]: value,
        })
      }

      const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };
    
      const filteredProperties = properties.filter((property) => {
        const { status } = filters;
        const matchesStatus = status === 'Any' || property.status === status;
        const matchesSearch =
          property.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.addedBy.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
      });
  return (
    <div>
      {" "}
      <div className="bg-gray-100 h-[100vh]">
        <AdminHeader />
        <div className="flex">
          <div className="bg-orange-400 text-white w-1/5 h-[100vh] p-4">
            <AdminSidebar />
          </div>

          <div className="w-4/5 p-4 h-[100vh]">
            <h1 className="text-2xl font-semibold mb-4">Property Listings</h1>
            <div className="bg-white p-4 rounded shadow">
            <div className="mb-4 flex justify-end">
          <input
            type="text"
            name="searchQuery"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search by property name or added by"
            className="border p-1 rounded-full mr-2"
          />
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="border p-1 rounded-full"
          >
            <option value="Any">Status</option>
            <option value="Any">Any</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            {/* Add more status options as needed */}
          </select>
        </div>
        <table className="w-full text-center">
          <thead className="bg-orange-400 text-white">
            <tr>
              <th>Property Name</th>
              <th>Property ID</th>
              <th>Price</th>
              <th>Added By</th>
              <th>Created On</th>
              <th>Status</th>
              <th>User Verified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProperties.map((property) => (
              <tr key={property.id}>
                <td>{property.propertyName}</td>
                <td>{property.propertyId}</td>
                <td>{property.price}</td>
                <td>{property.addedBy}</td>
                <td>{property.createdOn}</td>
                <td>{property.status}</td>
                <td>{property.userVerified ? 'Yes' : 'No'}</td>
                <td className='space-x-2'>
                  <button onClick={() => handleEditProperty(property.id)}>Edit</button>
                  <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
