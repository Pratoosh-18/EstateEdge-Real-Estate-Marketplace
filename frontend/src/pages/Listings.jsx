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
  const [minBedrooms, setMinBedrooms] = useState(""); // State for bedroom filter
  const [isFilterVisible, setIsFilterVisible] = useState(false); // Control filter visibility on smaller screens

  const getList = async () => {
    const list = await getAllListings();
    setListings(list);
    setAllListings(list); // Set the original list
  };

  useEffect(() => {
    getList();
  }, []);

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

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFilters(query, hasParking, isFurnished, minBedrooms);
  };

  const applyFilters = (query, parking, furnished, bedrooms) => {
    let filteredListings = allListings;

    if (query) {
      filteredListings = filteredListings.filter((listing) =>
        listing.address.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (parking) {
      filteredListings = filteredListings.filter((listing) => listing.parking);
    }
    if (furnished) {
      filteredListings = filteredListings.filter((listing) => listing.furnished);
    }
    if (bedrooms) {
      filteredListings = filteredListings.filter(
        (listing) => listing.bedrooms >= parseInt(bedrooms, 10)
      );
    }

    setListings(filteredListings);
  };

  const handleParkingChange = () => {
    const newParkingStatus = !hasParking;
    setHasParking(newParkingStatus);
    applyFilters(searchQuery, newParkingStatus, isFurnished, minBedrooms);
  };

  const handleFurnishedChange = () => {
    const newFurnishedStatus = !isFurnished;
    setIsFurnished(newFurnishedStatus);
    applyFilters(searchQuery, hasParking, newFurnishedStatus, minBedrooms);
  };

  const handleBedroomsChange = (e) => {
    const value = e.target.value;
    setMinBedrooms(value);
    applyFilters(searchQuery, hasParking, isFurnished, value);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar for larger screens */}
      <div className={`w-full md:w-1/4 p-4 bg-gray-100 ${isFilterVisible ? 'block' : 'hidden md:block'}`}>
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

          <p>Minimum Bedrooms:</p>
          <input
            type="number"
            placeholder="Number of bedrooms"
            value={minBedrooms}
            onChange={handleBedroomsChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

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

      {/* Toggle button for small screens */}
      <button
        onClick={() => setIsFilterVisible(!isFilterVisible)}
        className="md:hidden border-2 p-2 w-full text-center"
      >
        {isFilterVisible ? "Hide Filters" : "Show Filters"}
      </button>

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