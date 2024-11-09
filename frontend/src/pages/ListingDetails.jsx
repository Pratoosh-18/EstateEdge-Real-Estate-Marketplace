import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchListingDetails } from '../api/ListingsApi';
import { Carousel } from "react-responsive-carousel";
import { FaInfoCircle, FaMapMarkerAlt, FaUser, FaEnvelope, FaBed, FaBath, FaCouch, FaParking, FaDollarSign } from "react-icons/fa";

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isBuying, setIsBuying] = useState(false);
    const [isSold, setIsSold] = useState(false);

    const handleBuy = () => {
        console.log("Buy")
    }

    const getListing = async () => {
        try {
            const res = await fetchListingDetails(id);
            setListing(res)
            console.log(res)
            setIsSold(res.isSold)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    function capitalizeFirstLetter(string) {
        if (!string) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        getListing();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="my-4 sm:my-10 container mx-auto p-4 relative bg-white shadow-lg rounded-lg">
            <h1 className="text-xl md:text-4xl font-bold mb-6 text-center text-gray-700">
                {capitalizeFirstLetter(listing.name)}
            </h1>
            <div className="w-full flex flex-col items-center">
                <div className="mb-6 w-full md:w-3/4">
                    <Carousel>
                        {listing.imageUrls.map((url, index) => (
                            <div className="h-[200px] sm:h-[300px] md:h-[400px]" key={index}>
                                <img
                                    src={url}
                                    alt={`Listing image ${index + 1}`}
                                    className="object-cover h-full w-full rounded-lg"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="w-full md:w-3/4 bg-gray-100 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="md:text-xl font-semibold mb-2 flex items-center">
                                {/* <FaInfoCircle className="mr-2" /> */}
                                {capitalizeFirstLetter(listing.description)}
                            </p>
                            <p className="md:text-lg mb-2 flex items-center">
                                <FaMapMarkerAlt className="mr-2" /> Address: {listing.address}
                            </p>
                            <p className="md:text-lg mb-2 flex items-center">
                                <FaUser className="mr-2" /> Owner: {listing.owner.username}
                            </p>
                            <p className="md:text-lg mb-2 flex items-center">
                                <FaEnvelope className="mr-2" /> Email: {listing.owner.email}
                            </p>
                        </div>
                        <div>
                            <p className="md:text-lg mb-2 flex items-center">
                                <FaBed className="mr-2" /> Bedrooms: {listing.bedrooms}
                            </p>
                            <p className="md:text-lg mb-2 flex items-center">
                                <FaBath className="mr-2" /> Bathrooms: {listing.bathrooms}
                            </p>
                            <p className="md:text-lg mb-2 flex items-center">
                                <FaCouch className="mr-2" /> Furnished: {listing.furnished ? "Yes" : "No"}
                            </p>
                            <p className="md:text-lg mb-2 flex items-center">
                                <FaParking className="mr-2" /> Parking: {listing.parking ? "Yes" : "No"}
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-green-600 mb-2 flex items-center">
                                <FaDollarSign className="mr-2" /> Price: ${listing.discountPrice ? listing.discountPrice.toLocaleString() : listing.regularPrice.toLocaleString()}
                            </p>
                            {listing.discountPrice && (
                                <p className="text-gray-500 line-through mb-2">
                                    Original Price: ${listing.regularPrice.toLocaleString()}
                                </p>
                            )}
                        </div>
                    </div>
                    {isSold ? (
                        <div className="w-full h-11 rounded-md font-bold bg-gray-300 flex justify-center items-center text-gray-700 mt-4">
                            Sold
                        </div>
                    ) : (
                        <>
                            {isBuying ? <div
                                onClick={handleBuy}
                                className="flex justify-center items-center w-full h-11 rounded-md font-bold bg-gray-600 text-white mt-4 transition-colors"
                            >
                                Processing ...
                            </div> : <button
                                onClick={handleBuy}
                                className="w-full h-11 rounded-md font-bold bg-blue-500 text-white mt-4 hover:bg-blue-600 transition-colors"
                            >
                                Buy
                            </button>
                            }
                        </>

                    )}
                </div>
            </div>
            <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-600 text-xs">
                <p>Listing created on {new Date(listing.createdAt).toLocaleDateString()}</p>
                <p>Last updated on {new Date(listing.updatedAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default ListingDetails;
