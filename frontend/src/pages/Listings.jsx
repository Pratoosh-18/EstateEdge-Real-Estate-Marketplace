import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListingCard from '../components/ListingCard';
import { getAllListings } from '../api/ListingsApi';

const Listings = () => {

  const [listings, setListings] = useState([])

  const getList = async () => {
    const list = await getAllListings();
    setListings(list)
  }
  useEffect(() => {
  
    getList();
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