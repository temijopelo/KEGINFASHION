import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useRouter } from "next/navigation";

const columns: GridColDef[] = [
  { field: "id", headerName: "Ad ID", sortable: true, width: 100 },
  {
    field: "sellerName",
    headerName: "Seller Name",
    sortable: false,
    width: 150,
  },
  {
    field: "askingPrice",
    headerName: "Asking Price",
    sortable: false,
    width: 200,
  },
  {
    field: "itemLocation",
    headerName: "Item Location",
    sortable: false,
    width: 150,
  },
  {
    field: "sellingMode",
    headerName: "Selling Mode",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 150,
  },
  {
    field: "adTitle",
    headerName: "Ad Title",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 150,
  },
  {
    field: "creationDate",
    headerName: "Creation Date",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      const status = params.value;

      const getColor = () => {
        if (status === "Pending") return "orange";
        if (status === "Active") return "green";
        if (status === "Rejected") return "red";
        return "gray";
      };

      return (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <GoDotFill color={getColor()} />
          <span>{status}</span>
        </div>
      );
    },
  },

  // ---------------------- ACTION MENU COLUMN ----------------------
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    sortable: false,
    renderCell: (params) => {
      console.log(params, "logs");
      return (
        <>
          <RowActionsMenu row={params} />
        </>
      );
    },
  },
];

const rows = [
  {
    id: 3,
    sellerName: "sdvfa vfv ydfIgwe",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "Used Iphone 12",
    creationDate: "12th Oct. 2025",
    status: "Rejected",
    actions: "Edit",
  },
  {
    id: 5256,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Active",
    actions: "More",
  },
  {
    id: 5356,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 5456,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 5556,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 567,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 562,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 559,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 558,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 557,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 556,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 555,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 554,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 553,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 552,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 551,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 596,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 586,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 566,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 546,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 576,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 5056,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 5956,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 516,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 526,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 536,
    sellerName: "asdv sf",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "P. Protection, D. Contact",
    adTitle: "New Fan Bosch",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 88,
    sellerName: "Jude ehstnzhd",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "Payment Protection",
    adTitle: "Fairly Used phone",
    creationDate: "12th Oct. 2025",
    status: "Pending",
    actions: "More",
  },
  {
    id: 89,
    sellerName: "Snow",
    askingPrice: "₦1,000",
    itemLocation: "Egbeda",
    sellingMode: "jj",
    adTitle: "Car Tyres",
    creationDate: "12th Oct. 2025",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 8,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: " Egbeda",
    sellingMode: "Direct Contact",
    adTitle: "Children Cloth",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 9,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: "P. Protection, D. Contact",
    sellingMode: "A",
    adTitle: "Jon",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 97,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: "P. Protection, D. Contact",
    sellingMode: "A",
    adTitle: "Jon",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 76,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: "P. Protection, D. Contact",
    sellingMode: "A",
    adTitle: "Jon",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 78,
    sellerName: "Snow",
    askingPrice: "Jon",
    itemLocation: "P. Protection, D. Contact",
    sellingMode: "A",
    adTitle: "Jon",
    creationDate: "2024-01-01",
    status: "Active",
    actions: "Edit",
  },
];

function RowActionsMenu({ row }: { row: any }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        style={{
          borderRadius: 10,
          border: "1px solid #EAECF2",
          height: "45px",
          width: "80px",
          backgroundColor: "white",
          boxShadow: "none",
        }}
        className="flex gap-2 justify-center  items-center"
        onClick={handleOpen}
      >
        <HiOutlineDotsHorizontal size={17} className="border-2 rounded-md" />
        <p className="text-[10px]">MORE</p>
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => router.push(`/ProductDetails/${row.id}`)}>
          View
        </MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </>
  );
}

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: "none",
          /* HEADER */
          "& .MuiDataGrid-columnHeaders": {
            fontWeight: 600,
            fontSize: "15px",
            paddingY: "15px",
            color: "#757F8C",
            border: 0,
          },

          /* HEADER TEXT */
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 600,
          },

          /* ROW COLORS — ALTERNATING */

          ".MuiDataGrid-row--borderBottom .MuiDataGrid-columnHeader": {
            borderBottom: "none",
          },

          // "& .MuiDataGrid-row:nth-of-type(even)": {
          //   backgroundColor: "#ffffff",
          //   color: "black",
          //   fontWeight: 500,
          // },

          /* REMOVE FOCUS OUTLINE */
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
            borderRadius: "8px",
            marginY: "4px",
            textAlign: "left",
            textWrap: "pretty",
          },

          /* OPTIONAL: adjust row height */
          "& .MuiDataGrid-row": {
            minHeight: "75px!important",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fafafa",
            color: "black",
            fontWeight: 500,
            marginBottom: "20px",
            marginX: "6px",
            borderRadius: "8px",
          },
        }}
      />
    </Paper>
  );
}
