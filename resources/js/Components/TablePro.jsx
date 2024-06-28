import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import '../../css/table.css'

const columns = [
  { field: "id", headerName: "ID", width: 130 },
  // {
  //   field: "status",
  //   headerName: "وضعیت تحویل",
  //   width: 130,
  // },
  {
    field: "fullName",
    headerName: "نام کامل",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.name || ""} ${row.lastname || ""}  ${row.level || ' hi '}`,
  },
  {
    field: "phone",
    headerName: "شماره تماس",
    width: 130,
  },
  // {
  //   field: "school",
  //   headerName: "مدرسه",
  //   width: 130,
  // },
 
  {
    field: "deposit",
    headerName: "بیعانه",
    width: 130,
  },
  {
    field: "clotheCount",
    headerName: "تعداد لباس",
    width: 130,
  },
  {
    field: "clotheSize",
    headerName: "سایز لباس",
    width: 130,
  },
  {
    field: "pantsCount",
    headerName: "تعداد شلوار",
    width: 130,
  },
  {
    field: "pantsSize",
    headerName: "سایز شلوار",
    width: 130,
  },
  {
    field: "maskedCount",
    headerName: "تعداد مقنعه",
    width: 130,
  },
  {
    field: "maskedSize",
    headerName: " سایز مقنعه",
    width: 130,
  },
  {
    field: "sportsweardCount",
    headerName: "تعداد لباس ورزشی",
    width: 130,
  },
  {
    field: "sportsweardSize",
    headerName: "سایز لباس ورزشی",
    width: 130,
  },
  {
    field: "description",
    headerName: "توضیحات",
    width: 3000,
  },


//   clotheCount
// : 
// 0
// clotheSize
// : 
// 0
// deposit
// : 
// 0
// description
// : 
// null
// id
// : 
// 7

// level
// : 
// null








];



export default function DataTable({rows}) {
  return (
    <div
      className="containerTable"
      dir="rtl"
      style={{
        height: 800,
        width: "50px !important",
      }}
    >
      <DataGrid
        dir="rtl"
        className="te"
        rows={rows}
        columns={columns}
        ov
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[15, 25]}
      />
    </div>
  );
}
