import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      {/* <Table  size="small" aria-label="a dense table"> */}

        <TableHead>
          <TableRow style={{ background: "",color:'white ' }}>
            <TableCell align="right">شماره  </TableCell>
            <TableCell align="right">نام </TableCell>
            <TableCell align="right">نام خانوادگی</TableCell>
            <TableCell align="right">بیعانه</TableCell>
            <TableCell align="right">مدرسه</TableCell>
            <TableCell align="right"> پایه</TableCell>
            <TableCell align="right">شماره موبایل</TableCell>
            <TableCell align="right">تعداد لباس</TableCell>
            <TableCell align="right">سایز لباس</TableCell>
            <TableCell align="right">تعداد شلوار</TableCell>
            <TableCell align="right">سایز شلوار</TableCell>
            <TableCell align="right">تعداد مقنعه</TableCell>
            <TableCell align="right">سایز مقنعه</TableCell>
            <TableCell align="right">تعداد لباس ورزشی</TableCell>
            <TableCell align="right">سایز لباس وارزشی</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ background: "brown" }}>
          {rows.map((row) => (
            <TableRow
              style={{ background: "red !important" }}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ background: "brown" }}
              >
                {row.ID}
              </TableCell>
              <TableCell align="right">{row.fName}</TableCell>
              <TableCell align="right">{row.lName}</TableCell>
              <TableCell align="right">{row.deposit}</TableCell>
              <TableCell align="right">{row.school}</TableCell>
              <TableCell align="right">{row.foundation}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.numberUniform}</TableCell>
              <TableCell align="right">{row.sizeUniform}</TableCell>
              <TableCell align="right">{row.numberPants}</TableCell>
              <TableCell align="right">{row.sizePants}</TableCell>
              <TableCell align="right">{row.numberScarf}</TableCell>
              <TableCell align="right">{row.sizeScarf}</TableCell>
              <TableCell align="right">{row.numberJogging}</TableCell>
              <TableCell align="right">{row.sizeJogging}</TableCell>
              {/* <TableCell align="right">{row.deposit}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
