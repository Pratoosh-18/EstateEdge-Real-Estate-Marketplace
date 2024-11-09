import React, { useEffect, useState } from 'react';
import HomeBanner from '../components/HomeBanner';
import CarouselComponent from '../components/Carousel';
import ListingCardSkeleton from '../components/ListingCardSkeleton';
import ViewCard from '../components/ViewCard';
import { fetchListings } from '../api/ListingsApi';

const Home = () => {
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const { list1, list2 } = await fetchListings();
      setList1(list1);
      setList2(list2);
    };
    
    getList();
  }, []);

  return (
    <>
      <HomeBanner />
      <CarouselComponent />

      <div className="px-4 md:px-36 py-14">
        {/* Featured Properties */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Featured Properties</h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
            {list1.length === 0 ? (
              Array(6)
                .fill()
                .map((_, index) => <ListingCardSkeleton key={index} />)
            ) : (
              list1.map((item) => (
                <ViewCard
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
              ))
            )}
          </div>
        </div>

        {/* Best Deals */}
        <div>
          <h2 className="text-xl font-semibold mb-4 mt-10">Best Deals</h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
            {list2.length === 0 ? (
              Array(6)
                .fill()
                .map((_, index) => <ListingCardSkeleton key={index} />)
            ) : (
              list2.map((item) => (
                <ViewCard
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
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
