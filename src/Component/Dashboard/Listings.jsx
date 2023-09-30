import React, { useState } from 'react';

export default function Listings() {
  const [selectedListings, setSelectedListings] = useState([]);
  const [filters, setFilters] = useState({
    rooms: 'Any',
    beds: 'Any',
    baths: 'Any',
    amenities: 'Any',
    status: 'Any',
  });

  const listings = [
    {
      id: 1,
      status: 'Active',
      instantBook: 'Yes',
      bedroom: 2,
      bathrooms: 2,
      amenities: "Pool",
      location: 'Lekki Phase 1',
      image: 'https://images.surferseo.art/fdb08e2e-5d39-402c-ad0c-8a3293301d9e.png',
    },
    {
      id: 2,
      status: 'Inactive',
      instantBook: 'No',
      bedroom: 3,
      bathrooms: 2.5,
      amenities: "pool",

      location: 'Admiralty 2b',
      image: 'https://images.surferseo.art/fdb08e2e-5d39-402c-ad0c-8a3293301d9e.png',
    },
  ];

  // Function to handle checkbox selection
  const handleCheckboxChange = (listingId) => {
    if (selectedListings.includes(listingId)) {
      setSelectedListings(selectedListings.filter(id => id !== listingId));
    } else {
      setSelectedListings([...selectedListings, listingId]);
    }
  };

  // Function to handle filter changes
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Apply filters to listings
  const filteredListings = listings.filter((listing) => {
    const {
      rooms, beds, baths, amenities, status,
    } = filters;

    // Check if the listing matches the selected filters
    if (
      (rooms === 'Any' || listing.bedroom === parseInt(rooms, 10)) &&
      (beds === 'Any' || listing.beds === parseInt(beds, 10)) &&
      (baths === 'Any' || listing.bathrooms === parseFloat(baths)) &&
      (amenities === 'Any' || listing.amenities.includes(amenities)) &&
      (status === 'Any' || listing.status === status)
    ) {
      return true;
    }

    return false;
  });

  return (
    <div className='md:flex-col md:w-[80vw] md:mx-auto md:my-10 p-4 md:p-10'>
      <h1 className="text-3xl font-semibold mb-4">2 Listings</h1>
      <div className='flex  justify-between'>
      <div className="mb-4">
        <label htmlFor="rooms" className="mr-2">Rooms:</label>
        <select
          name="rooms"
          id="rooms"
          value={filters.rooms}
          onChange={handleFilterChange}
          className="border p-1 rounded-full"
        >
          <option value="Any">Any</option>
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
          <option value="4">4 Rooms</option>

          <option value="5">5 Rooms</option>

          <option value="6">6 Rooms</option>
          <option value="7">7 Rooms</option>
          <option value="8">8 Rooms</option>

        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="beds" className="mr-2">Beds:</label>
        <select
          name="beds"
          id="beds"
          value={filters.beds}
          onChange={handleFilterChange}
          className="border p-1 rounded-full"
        >
          <option value="Any">Any</option>
          <option value="1">1 Bed</option>
          <option value="2">2 Beds</option>
          <option value="3">3 Beds</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="baths" className="mr-2">Baths:</label>
        <select
          name="baths"
          id="baths"
          value={filters.baths}
          onChange={handleFilterChange}
          className="border p-1 rounded-full"
        >
          <option value="Any">Any</option>
          <option value="1">1 Bath</option>
          <option value="2">2 Baths</option>
          <option value="2.5">2.5 Baths</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="amenities" className="mr-2">Amenities:</label>
        <select
          name="amenities"
          id="amenities"
          value={filters.amenities}
          onChange={handleFilterChange}
          className="border p-1 rounded-full"
        >
          <option value="Any">Any</option>
          <option value="Pool">Pool</option>
          <option value="Gym">Gym</option>
          <option value="Parking">Parking</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="mr-2">Status:</label>
        <select
          name="status"
          id="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="border p-1 rounded-full"
        >
          <option value="Any">Any</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="In progress">In progress</option>
        </select>
      </div>
      </div>
      <table className="min-w-full bg-white shadow-md border rounded-lg overflow-hidden">
        <thead className="bg-orange-400 text-white">
          <tr>
            <th className="py-2 px-4">Select</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Listing Status</th>
            <th className="py-2 px-4">Instant Book</th>
            <th className="py-2 px-4">Bedrooms</th>
            <th className="py-2 px-4">Bathrooms</th>
            <th className="py-2 px-4">Location</th>
          </tr>
        </thead>
        <tbody className="">
        {filteredListings.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No listings found.
              </td>
            </tr>
          ) : (
            filteredListings.map((listing) => (
              <tr key={listing.id} className='text-center border'>
                <td className="py-2 px-4">
                  <input
                    className='h-5'
                    type="checkbox"
                    onChange={() => handleCheckboxChange(listing.id)}
                    checked={selectedListings.includes(listing.id)}
                  />
                </td>
                <td className="py-2 px-4  flex justify-center">
                  <img
                    src={listing.image}
                    alt={`Listing ${listing.id}`}
                    className="w-14 h-14 object-cover  rounded-lg"
                  />
                </td>
                <td className="py-2 px-4">{listing.status}</td>
                <td className="py-2 px-4">{listing.instantBook}</td>
                <td className="py-2 px-4">{listing.bedroom}</td>
                <td className="py-2 px-4">{listing.bathrooms}</td>
                <td className="py-2 px-4">{listing.location}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
