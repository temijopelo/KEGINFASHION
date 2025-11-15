import React from "react";

const BuyerCard = () => {
  return (
    <div className=" p-4 border border-[#EAECF2] bg-[#FBFCFE] rounded-xl">
      <h5 className="text-[14px] text-[#757F8C] font-semibold opacity-40">
        Buyer
      </h5>
      <hr className="my-3 opacity-40" />
      <div>
        <div className="flex items-center gap-5">
          <span>
            <img
              src="/images/k.png"
              alt=""
              width={48}
              height={48}
              className="rounded-full"
            />
          </span>
          <span className="flex flex-col space-y-1">
            <span>Bright Azu - Receiver</span>
            <span className="flex w-full items-center gap-2 text-sm text-[#F97316]">
              <span className="flex items-center gap-1">
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
                <img src="/images/Vector.svg" alt="star" />
              </span>
              <span>4.6</span>
            </span>
            <img src="/images/List.svg" alt="list" />
          </span>
        </div>
      </div>
      <span className="flex items-center text-[12px] font-semibold text-[#757F8C] gap-1 my-3">
        Purchase Details
        <hr className="flex-1 opacity-40" />
      </span>
      <div className="flex flex-col space-y-4">
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Purchase Date </span>
          <span className="font-semibold text-black">25th Aug 2025</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Purchase mode</span>
          <span className="font-semibold text-black">Purchase Protection</span>
        </span>
        <span className="flex justify-between text-[14px] text-[#757F8C]">
          <span>Linked Delivery Job</span>
          <span className="font-semibold text-black">PP-5698</span>
        </span>
      </div>
    </div>
  );
};

export default BuyerCard;
