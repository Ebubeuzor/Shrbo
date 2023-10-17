import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminNavigation/AdminHeader';
import AdminSidebar from './AdminSidebar';

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
        <div className="bg-orange-400 text-white w-1/5 h-[100vh] p-4">
          <AdminSidebar />
        </div>

        <div className="w-4/5 p-4 h-[100vh]">
          <h1 className="text-2xl font-semibold mb-4">Guest Listings</h1>
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
                {filteredGuests.map((guest) => (
                  <tr key={guest.id}>
                    <td>
                      <img
                        src={guest.image}
                        alt={`${guest.firstName} ${guest.lastName}`}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td>{guest.firstName}</td>
                    <td>{guest.lastName}</td>
                    <td>{guest.email}</td>
                    <td>{guest.verified ? 'Yes' : 'No'}</td>
                    <td>{guest.dateCreated}</td>
                    <td>{guest.lastLogin}</td>
                    <td className='space-x-2'>
                      <Link to={`/guests/edit/${guest.id}`}>Edit</Link>
                      <button onClick={() => handleDeleteGuest(guest.id)}>Delete</button>
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
