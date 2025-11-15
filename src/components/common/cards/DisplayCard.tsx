"use client";

import React, { useState } from "react";
import { BsEye } from "react-icons/bs";

const DisplayCard = () => {
  const [selectedImage, setSelectedImage] = useState<string>("img1");

  const RenderCardImg = () => {
    switch (selectedImage) {
      case "img1":
        return (
          <img
            src="/images/Pic1.png"
            alt="card image"
            width={300}
            height={300}
          />
        );
      case "img2":
        return (
          <img
            src="/images/Pic2.png"
            alt="card image"
            width={300}
            height={300}
          />
        );
      case "img3":
        return (
          <img
            src="/images/Pic3.png"
            alt="card image"
            width={300}
            height={300}
          />
        );
      case "img4":
        return (
          <img
            src="/images/Pic4.png"
            alt="card image"
            width={300}
            height={300}
          />
        );
      default:
        return (
          <img
            src="/images/cardImg.png"
            alt="card image"
            width={300}
            height={300}
          />
        );
    }
  };
  return (
    <div>
      <div className=" p-4 border border-[#EAECF2] rounded-xl">
        <div className="flex items-center text-[12px] gap-3 border border-[#EAECF2] rounded-lg p-3">
          <BsEye color="#F97316" size={16} />
          25 Views
        </div>

        <hr className="my-4 opacity-20" />

        <div className=" flex justify-center overflow-hidden p-4 bg-[#F9FAFB] rounded-lg">
          {RenderCardImg()}
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <div className="flex gap-3">
            <div
              className={`p-2 bg-[#F9FAFB]  rounded-lg border cursor-pointer flex justify-center items-center ${
                selectedImage === "img1"
                  ? "border-[#2563EB]"
                  : "border-[#EAECF2]"
              }`}
              onClick={() => setSelectedImage("img1")}
            >
              <img src="/images/Pic1.png" alt="thumbnail 1" />
            </div>
            <div
              className={`p-2 bg-[#F9FAFB]  rounded-lg border cursor-pointer flex justify-center items-center ${
                selectedImage === "img2"
                  ? "border-[#2563EB]"
                  : "border-[#EAECF2]"
              }`}
              onClick={() => setSelectedImage("img2")}
            >
              <img src="/images/Pic2.png" alt="thumbnail 2" />
            </div>
            <div
              className={`p-2 bg-[#F9FAFB]  rounded-lg border cursor-pointer flex justify-center items-center ${
                selectedImage === "img3"
                  ? "border-[#2563EB]"
                  : "border-[#EAECF2]"
              }`}
              onClick={() => setSelectedImage("img3")}
            >
              <img src="/images/Pic3.png" alt="thumbnail 3" />
            </div>
            <div
              className={`p-2 bg-[#F9FAFB] rounded-lg border cursor-pointer flex justify-center items-center ${
                selectedImage === "img4"
                  ? "border-[#2563EB]"
                  : "border-[#EAECF2]"
              }`}
              onClick={() => setSelectedImage("img4")}
            >
              <img src="/images/Pic4.png" alt="thumbnail 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
