import { Button } from "@mui/material";
import React from "react";
import { TfiExport } from "react-icons/tfi";

const TopNav = ({ name }: { name: string }) => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center mb-3">
        <p
          style={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {name}
        </p>
        <Button
          variant="outlined"
          startIcon={<TfiExport />}
          className="flex items-center"
          style={{
            textTransform: "none",
            border: 0,
            gap: 8,
            color: "#1D1E20",
          }}
        >
          Export
        </Button>
      </div>
    </div>
  );
};

export default TopNav;
