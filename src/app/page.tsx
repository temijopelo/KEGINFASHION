"use client";

import Card from "@/components/common/Card";
import DataTable from "@/components/common/Table";
import TopNav from "@/components/common/TopNav";
import { overview_data } from "@/components/constant";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";
import { Container, Typography, Box, Button } from "@mui/material";
import { BiSortAlt2 } from "react-icons/bi";
import { CiPause1 } from "react-icons/ci";
import { HiOutlineCalendarDateRange, HiOutlineFunnel } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { TfiExport } from "react-icons/tfi";

export default function HomePage() {
  const { isMobile } = useMediaQuery();

  return (
    <div className="pt-[100px]">
      <TopNav name="Marketplace" />
      <div className="bg-white border p-6 rounded-lg border-[#EAECF2]">
        <h3 className="text-[16px] font-bold mb-5">Overview</h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {overview_data.map((item) => (
            <Card key={item.id} text={item.text} value={item.value} />
          ))}
        </div>
        <hr className="my-7 opacity-10" />

        <div className="flex flex-wrap justify-between items-center mb-5">
          <div className="flex border-[#EAECF2] border gap-3 lg:w-[288px] px-4 py-2 rounded-lg items-center">
            <LuSearch />
            <input
              type="text"
              placeholder="Search assets"
              className="focus:outline-none text-sm flex-1"
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Button
              variant="outlined"
              style={{
                textTransform: "none",
                border: "none",
                color: "#1D1E20",
              }}
            >
              Reset
            </Button>
            <Button
              variant="outlined"
              startIcon={<BiSortAlt2 />}
              className="flex items-center"
              style={{
                textTransform: "none",
                border: 0,
                gap: 4,
                color: "#1D1E20",
              }}
            >
              Export
            </Button>
            <Button
              variant="outlined"
              startIcon={<HiOutlineFunnel />}
              className="flex items-center"
              style={{
                textTransform: "none",
                border: 0,
                gap: 4,
                color: "#1D1E20",
              }}
            >
              Advanced filter
            </Button>
            <Button
              variant="outlined"
              startIcon={<CiPause1 />}
              className="flex items-center"
              style={{
                textTransform: "none",
                border: 0,
                gap: 4,
                color: "#1D1E20",
              }}
            >
              Select Columns
            </Button>
            <Button
              variant="outlined"
              startIcon={<HiOutlineCalendarDateRange />}
              className="flex items-center"
              style={{
                textTransform: "none",
                borderWidth: 1,
                gap: 4,
                color: "#1D1E20",
                borderColor: "#EAECF2",
              }}
            >
              Date
            </Button>
          </div>
        </div>

        <div className="flex flex-col p-5 bg-[#FBFCFE] border border-[#EAECF2] gap-5 rounded-lg">
          <h3 className="text-[16px] font-bold">Advanced filter</h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <span className="flex flex-col gap-3">
              <label className="text-[12px]" htmlFor="">
                Item Title
              </label>
              <select
                className="border text-sm border-[#EAECF2] focus:outline-none p-2 rounded-md inline-block bg-white"
                name=""
                id=""
              >
                <option value="">any</option>
                <option value="">Select Item Title</option>
                <option value="">Select Item Title</option>
              </select>
            </span>
            <span className="flex flex-col gap-3">
              <label className="text-[12px]" htmlFor="">
                Location
              </label>
              <select
                className="border text-sm border-[#EAECF2] focus:outline-none p-2 rounded-md inline-block bg-white"
                name=""
                id=""
              >
                <option value="">any</option>
                <option value="">Select Item Title</option>
                <option value="">Select Item Title</option>
              </select>
            </span>
            <span className="flex flex-col gap-3">
              <label className="text-[12px]" htmlFor="">
                Ad Selling Mode
              </label>
              <select
                className="border text-sm border-[#EAECF2] focus:outline-none p-2 rounded-md inline-block bg-white"
                name=""
                id=""
              >
                <option value="">any</option>
                <option value="">Select Item Title</option>
                <option value="">Select Item Title</option>
              </select>
            </span>
            <span className="flex flex-col gap-3">
              <label className="text-[12px]" htmlFor="">
                Status
              </label>
              <select
                className="border text-sm border-[#EAECF2] focus:outline-none p-2 rounded-md inline-block bg-white"
                name=""
                id=""
              >
                <option value="">any</option>
                <option value="">Select Item Title</option>
                <option value="">Select Item Title</option>
              </select>
            </span>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <span className="flex flex-col gap-3">
              <label className="text-[12px]" htmlFor="">
                Price Range
              </label>
              <input
                className="border text-sm border-[#EAECF2] focus:outline-none p-2 rounded-md inline-block bg-white"
                type="number"
                placeholder="From: Minimum Amount "
              />
            </span>
            <span className="flex flex-col justify-end gap-3">
              <input
                className="border text-sm border-[#EAECF2] focus:outline-none p-2 rounded-md inline-block bg-white"
                type="number"
                placeholder="To: Maximum Amount "
              />
            </span>
            <span className="flex flex-col gap-3">
              <label className="text-[12px]" htmlFor="">
                Creation Date Range
              </label>
              <input
                className="border text-sm border-[#EAECF2] focus:outline-none p-2 rounded-md inline-block bg-white"
                type="date"
              />
            </span>
            <span className="flex flex-col justify-end gap-3">
              <input
                className="border text-sm border-[#EAECF2] focus:outline-none p-2 rounded-md inline-block bg-white"
                type="date"
              />
            </span>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outlined"
              style={{
                color: "#3D464D",
                borderColor: "#EAECF2",
                height: 34,
                fontSize: 12,
              }}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              style={{
                background: "#F97316",
                height: 34,
                fontSize: 12,
              }}
            >
              Apply filter
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
