import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaBed, FaParking, FaCouch } from "react-icons/fa";

const ListingCard = ({
  id,
  name,
  desc,
  img,
  originalPrice,
  discountedPrice,
  location,
  beds,
  parking,
  furnished,
}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      key={id}
      className="w-[300px] sm:w-[250px] flex flex-col rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
    >
      <Link onClick={scrollToTop} to={`/listing/${id}`} className="block h-full">
        <div className="flex flex-col h-full">
          <div className="overflow-hidden">
            <img
              src={img}
              alt={name}
              className="w-full h-[150px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-2 flex flex-col flex-grow justify-between">
            <div>
              <h2 className="text-base font-semibold text-gray-800 mb-1">
                {name}
              </h2>
              <p className="flex items-center text-gray-600 text-sm mb-2">
                <FaMapMarkerAlt className="text-green-500 mr-1" />
                <span className="text-xs">{location}</span>
              </p>
              <p className="text-xs text-gray-600 mb-2">{desc}</p>
            </div>
            <div className="mt-auto">
              <div className="mb-2 flex gap-2 items-center">
                <span className="text-gray-900 text-base">
                  {discountedPrice
                    ? `$${discountedPrice.toLocaleString()}`
                    : `$${originalPrice.toLocaleString()}`}
                </span>
                {discountedPrice && (
                  <span className="text-gray-500 text-sm line-through h-full flex justify-center items-center">
                    {`$${originalPrice.toLocaleString()}`}
                  </span>
                )}
              </div>
              <div className="flex items-center text-gray-600 text-xs gap-2">
                <div className="flex items-center gap-1">
                  <FaBed />
                  <span>{beds}</span>
                </div>
                {parking && (
                  <div className="flex items-center gap-1">
                    <FaParking />
                    <span>Parking</span>
                  </div>
                )}
                {furnished && (
                  <div className="flex items-center gap-1">
                    <FaCouch />
                    <span>Furnished</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;