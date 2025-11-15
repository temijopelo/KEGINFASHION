import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown, IoIosArrowRoundDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { PiBell } from "react-icons/pi";

const Navbar = ({ sidebarWidth }: { sidebarWidth: any }) => {
  const imgeUrl = [
    {
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHByZXR0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Jane Doe",
    },
    {
      url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHByZXR0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "John Smith",
    },
    {
      url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHByZXR0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Alice Johnson",
    },
    {
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHByZXR0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Michael Brown",
    },
    {
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHByZXR0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Emily Davis",
    },
  ];

  const User = ({ index }: { index: number }) => {
    return (
      <Link
        href={imgeUrl[index].name}
        className="flex items-center gap-2 border-3 border-white rounded-full"
      >
        <img
          src={imgeUrl[index].url}
          alt={imgeUrl[index].name}
          className="w-9 h-9 rounded-full object-cover"
        />
      </Link>
    );
  };

  const Initials = ({ index }: { index: number }) => {
    const name = imgeUrl[index].name;
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    return (
      <div className="w-8 h-8 rounded-full bg-[#F9F9FA] border-2 border-[#EAECF2] flex items-center justify-center font-semibold">
        {initials}
      </div>
    );
  };

  const Profile = () => {
    return (
      <div className="flex items-center gap-2 border-3 border-white rounded-full">
        <Initials index={0} />
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold">Jane Doe</span>
          <span className="text-[11px]">ADMIN</span>
        </div>
        <IoIosArrowDown size={20} />
      </div>
    );
  };

  return (
    <div
      style={{
        padding: 0,
        marginLeft: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`,
      }}
      className="h-16 fixed top-0 left-0 z-50"
    >
      <div className="flex justify-between items-center h-full bg-white">
        <div className="flex bg-[#F9F9FA] gap-3 ml-12 w-[320px] px-4 py-2 rounded-md items-center">
          <LuSearch />
          <input
            type="text"
            placeholder="Search for anything"
            className="focus:outline-none"
          />
        </div>
        <div className=" flex space-x-4 mr-2">
          <div className="flex items-center border-r-2 border-[#EAECF2] pr-4 gap-2">
            <IoIosArrowRoundDown size={20} />
            <span className="text-sm font-semibold">Quick actions</span>
          </div>
          <div className="flex w-[70px] items-center justify-center border-r-2 border-[#EAECF2] pr-4 gap-2">
            <span className="relative flex justify-center items-center">
              <PiBell size={20} />
              <span className="absolute text-[8px] top-0 right-0 flex justify-center items-center rounded-full bg-[#F97316] w-3 h-3 p-1.5 text-white">
                2
              </span>
            </span>
          </div>
          <div className="flex  -space-x-3 border-r-2 border-[#EAECF2] pr-4">
            {imgeUrl.map((url, idx) => (
              <User key={idx} index={idx} />
            ))}
          </div>

          <div className="flex items-center gap-2 ">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
