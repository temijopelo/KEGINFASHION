import React from "react";
import { FiEdit } from "react-icons/fi";

const DetailsCard = () => {
  return (
    <div className=" p-4 border border-[#EAECF2] bg-[#FBFCFE] rounded-xl">
      <h5 className="text-[14px] font-semibold opacity-40">
        Pick up & Delivery Details
      </h5>
      <hr className="my-4 opacity-20" />
      <div className="flex flex-col space-y-4">
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Created at</span>
          <span className="font-semibold text-black">25th Aug 2025</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Ad Expiry date</span>
          <span className="font-semibold text-black">25th Aug 2027</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Pickup Type</span>
          <span className="font-semibold ">From Sender’s location</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Delivery Type</span>
          <span className="font-semibold ">PP, Direct Contact</span>
        </span>
      </div>
      <hr className="my-4 opacity-20" />

      <div className="flex flex-col space-y-4">
        <span className="flex gap-2 text-[14px] text-[#757F8C]">
          <input type="radio" name="" id="" />
          <label htmlFor="">Pick up Details: </label>
        </span>
        <span className="flex gap-3 text-[14px] text-[#757F8C]">
          <span>Name: </span>
          <span className="font-semibold text-black">Adebayo Ojoba</span>
        </span>
        <span className="flex gap-3 text-[14px] text-[#757F8C]">
          <span>Address: </span>
          <span className="font-semibold text-black">
            24 AKonwonjo Road, Egbeda, Alimoso{" "}
          </span>
        </span>
        <span className="flex gap-3 text-[14px] text-[#757F8C]">
          <span>Phone Number: </span>
          <span className="font-semibold text-black">+2348037456908</span>
        </span>
      </div>
      <hr className="my-4 opacity-20" />

      <div className="flex justify-end cursor-pointer">
        <FiEdit />
      </div>
    </div>
  );
};

export default DetailsCard;
