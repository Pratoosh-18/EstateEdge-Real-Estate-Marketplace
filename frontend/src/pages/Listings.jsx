import React, { useEffect, useState } from 'react';
import ListingCard from '../components/ListingCard';
import { getAllListings } from '../api/ListingsApi';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [allListings, setAllListings] = useState([]); // Store the original list
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [hasParking, setHasParking] = useState(false);
  const [isFurnished, setIsFurnished] = useState(false);

  const getList = async () => {
    const list = await getAllListings();
    setListings(list);
    setAllListings(list); // Set the original list
  };

  useEffect(() => {
    getList();
  }, []);

  // Handle sorting based on selected order
  const handleSort = (order) => {
    setSortOrder(order);
    let sortedListings = [...listings];
    if (order === "low-to-high") {
      sortedListings.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (order === "high-to-low") {
      sortedListings.sort((a, b) => b.discountPrice - a.discountPrice);
    }
    setListings(sortedListings);
  };

  // Handle search and reset to original list if search is cleared
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFilters(query, hasParking, isFurnished);
  };

  // Apply filters for search, parking, and furnished
  const applyFilters = (query, parking, furnished) => {
    let filteredListings = allListings;

    // Search filter
    if (query) {
      filteredListings = filteredListings.filter((listing) =>
        listing.address.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Parking filter
    if (parking) {
      filteredListings = filteredListings.filter((listing) => listing.parking);
    }

    // Furnished filter
    if (furnished) {
      filteredListings = filteredListings.filter((listing) => listing.furnished);
    }

    setListings(filteredListings);
  };

  // Handle Parking checkbox
  const handleParkingChange = () => {
    const newParkingStatus = !hasParking;
    setHasParking(newParkingStatus);
    applyFilters(searchQuery, newParkingStatus, isFurnished);
  };

  // Handle Furnished checkbox
  const handleFurnishedChange = () => {
    const newFurnishedStatus = !isFurnished;
    setIsFurnished(newFurnishedStatus);
    applyFilters(searchQuery, hasParking, newFurnishedStatus);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
        <div>
          <p>Search by location :</p>
          <input
            type="text"
            placeholder="Search by location"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          
          <p>Sort by Price :</p>
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="">Select Sorting</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={hasParking}
                onChange={handleParkingChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Parking</span>
            </label>
          </div>

          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isFurnished}
                onChange={handleFurnishedChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Furnished</span>
            </label>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="flex-1 flex flex-wrap justify-center gap-5 my-4">
        {listings.map((item) => (
          <ListingCard
            key={item._id}
            id={item._id}
            name={item.name}
            img={item.imageUrls[0]}
            desc={item.description}
            originalPrice={item.regularPrice}
            discountedPrice={item.discountPrice}
            listingDate={item.createdAt}
            location={item.address}
            beds={item.bedrooms}
            parking={item.parking}
            furnished={item.furnished}
          />
        ))}
      </div>
    </div>
  );
};

export default Listings;