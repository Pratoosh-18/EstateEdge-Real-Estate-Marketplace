import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListingCard from '../components/ListingCard';

const Listings = () => {

  const [listings, setListings] = useState([])

  useEffect(() => {
    const getAllListings = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/listing/getListings");
        console.log(response.data.listings);
        const reversedListings = response.data.listings ? response.data.listings.reverse() : [];
        setListings(reversedListings);
      } catch (error) {
        console.error("Error fetching listings:", error);
        setListings([]);
      }
    };
  
    getAllListings();
  }, []);

  return (
    <>
    <div className="flex flex-wrap justify-center gap-5 my-4">
    {listings.map((item, index) => {
          return (
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
          );
        })}
    </div>
    </>
  )
}

export default Listings