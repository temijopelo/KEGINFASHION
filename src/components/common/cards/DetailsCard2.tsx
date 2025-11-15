import React from "react";
import { FiEdit } from "react-icons/fi";

const DetailsCard2 = () => {
  return (
    <div className=" p-4 border border-[#EAECF2] bg-[#FBFCFE] rounded-xl">
      <h5 className="text-[14px] font-semibold opacity-40">Package Details</h5>
      <hr className="my-4 opacity-20" />
      <div className="flex flex-col space-y-4">
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Title</span>
          <span className="font-semibold text-black">
            New Samsung Galaxy S10
          </span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Category</span>
          <span className="font-semibold text-black">Electronics</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Product category</span>
          <span className="font-semibold text-black lg:w-[50%] ">
            Multi Category (Petroleum/ Liquids/Chemicals/ Agricultural Produce)
          </span>
        </span>
      </div>
      <hr className="my-4 opacity-20" />

      <div className="flex flex-col space-y-4">
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Package Weight </span>
          <span className="font-semibold text-black">5kg</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Monetary Worth of Package</span>
          <span className="font-semibold text-black">60,000</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Pickup preference</span>
          <span className="font-semibold text-black">No Vehicle</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Delivery Fee Invoice Recipient</span>
          <span className="font-semibold text-black">Sender</span>
        </span>
      </div>
      <hr className="my-4 opacity-20" />

      <div className="flex justify-end cursor-pointer">
        <FiEdit />
      </div>
    </div>
  );
};

export default DetailsCard2;
