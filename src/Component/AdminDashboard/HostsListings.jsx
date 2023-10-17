import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminNavigation/AdminHeader';
import AdminSidebar from './AdminSidebar';

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

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
        <div className="bg-orange-400 text-white w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>

        <div className="w-4/5 p-4 h-[100vh]">
          <h1 className="text-2xl font-semibold mb-4">Host Listings</h1>
          <div className="bg-white p-4 rounded shadow">
            <div className="mb-4 flex justify-end">
              <input
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search by name or email"
                className="border p-1 rounded-full mr-2"
              />
              <select
                name="verified"
                value={filters.verified}
                onChange={handleFilterChange}
                className="border p-1 rounded-full"
              >
                <option value="Any">Verified</option>
                <option value="Any">Any</option>
                <option value="Yes">Verified</option>
                <option value="No">Not Verified</option>
              </select>
            </div>
            <div className='overflow-x-auto'>
              <table className="w-full text-center">
                <thead className="bg-orange-400 text-white">
                  <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Verified</th>
                    <th>Date Created</th>
                    <th>Last Login</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHosts.map((host) => (
                    <tr key={host.id}>
                      <td>
                        <img
                          src={host.image}
                          alt={`${host.firstName} ${host.lastName}`}
                          className="w-10 h-10 rounded-full"
                        />
                      </td>
                      <td>{host.firstName}</td>
                      <td>{host.lastName}</td>
                      <td>{host.email}</td>
                      <td>{host.verified ? 'Yes' : 'No'}</td>
                      <td>{host.dateCreated}</td>
                      <td>{host.lastLogin}</td>
                      <td className='space-x-2'>
                        <Link to={`/hosts/edit/${host.id}`}>Edit</Link>
                        <button onClick={() => handleDeleteHost(host.id)}>Delete</button>
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
