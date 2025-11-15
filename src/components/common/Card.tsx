import React from "react";

const Card = ({ text, value }: { text: string; value: string }) => {
  return (
    <div className="w-full flex flex-col justify-between px-4 border-l-2 h-10 border-[#F9F9FA]">
      <h2 className="text-[#757F8C] text-[12px]">{text}</h2>
      <p className="font-semibold text-[12px]">{value}</p>
    </div>
  );
};

export default Card;
