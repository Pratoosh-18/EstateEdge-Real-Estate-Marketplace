import React from "react";

const ListingCardSkeleton = () => {
  return (
    <div className="w-[250px] rounded overflow-hidden bg-white shadow-lg flex flex-col">
      <div className="w-full h-[150px] bg-gray-200 animate-pulse"></div>
      <div className="p-2 flex flex-col justify-between h-full">
        <div className="flex flex-col space-y-4">
          <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="mt-auto flex flex-col space-y-2 text-gray-600">
          <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-1/2 h-3 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardSkeleton;