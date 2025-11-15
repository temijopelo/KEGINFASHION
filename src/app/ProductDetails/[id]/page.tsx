import BuyerCard from "@/components/common/cards/BuyerCard";
import DetailsCard from "@/components/common/cards/DetailsCard";
import DetailsCard2 from "@/components/common/cards/DetailsCard2";
import DisplayCard from "@/components/common/cards/DisplayCard";
import SellerCard from "@/components/common/cards/SellerCard";
import TopNav from "@/components/common/TopNav";
import { Button } from "@mui/material";
import { GoDotFill } from "react-icons/go";
import { TfiExport } from "react-icons/tfi";

const ProductDetails = () => {
  return (
    <div className="pt-[100px]">
      <TopNav name="Delivery Details" />

      <div className="bg-white  border items-center p-6 rounded-lg border-[#EAECF2]">
        <div className="flex gap-3">
          <h5 className="font-semibold">
            <span className="opacity-40">Sell Ad:</span> AD-1258
          </h5>
          <span className="flex items-center gap-1 text-sm">
            <GoDotFill color="#F97316" /> Active
          </span>
        </div>
        <hr className="my-4 opacity-20" />

        <div className="grid xl:grid-cols-3 gap-4 lg:grid-cols-2 grid-cols-1">
          <DisplayCard />
          <DetailsCard />
          <DetailsCard2 />
        </div>

        <hr className="my-8 opacity-20" />
        <div className="grid xl:grid-cols-3 gap-4 lg:grid-cols-2 grid-cols-1">
          <SellerCard />
          <BuyerCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
