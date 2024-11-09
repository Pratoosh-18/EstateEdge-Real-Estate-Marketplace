import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="md:h-[60vh] py-8 md:py-0 w-full flex flex-col justify-center px-6 md:px-28 gap-4">
      <div className="text-xl md:text-4xl font-bold text-gray-700">
        <div>Turning Dreams into Addresses</div>
        <div>
          <span className="mr-2 text-gray-500">EstateEdge</span>
          Makes Home Buying Effortless
        </div>
      </div>
      <div className="text-sm text-gray-700">
        Expertly Matching Homes to Dreams: EstateEdge, Where Your Dream Home
        Comes True
      </div>
      <Link className="text-base font-semibold text-blue-700" to={"/listings"}>Explore...</Link>
    </div>
  );
};

export default HomeBanner;