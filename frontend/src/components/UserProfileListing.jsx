import React from 'react'
import { deleteListing } from '../api/ListingsApi'
import { MdOutlineDeleteOutline } from "react-icons/md";

const UserProfileListing = ({ listing }) => {

    const handleDelete = async (id) => {
        console.log(id)
        const res = await deleteListing(id);
        console.log(res)
    }

    return (
        <div className="p-4 w-full gap-5 md:flex bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <div className='md:w-[40%]'>
                <img
                    src={listing.imageUrls[0]}
                    alt={listing.name}
                    className="w-full h-40 object-cover rounded-lg"
                />
            </div>
            <div className='md:w-[60%]'>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">{listing.name}</h3>
                    <p className="text-gray-600">{listing.address}</p>
                    <div className="mt-2 flex justify-between items-center">
                        <span className="font-medium text-green-600">
                            ${listing.discountPrice || listing.regularPrice}
                        </span>
                        <span className="text-gray-500 text-sm">
                            {listing.bedrooms} Beds • {listing.bathrooms} Baths
                        </span>
                    </div>
                </div>
            </div>
            <button className='text-3xl text-red-600 hover:scale-125 transition' onClick={() => handleDelete(listing._id)}>
                <MdOutlineDeleteOutline />
            </button>
        </div>
    );
}

export default UserProfileListing