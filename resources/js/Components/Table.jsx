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
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                {/* <Table  size="small" aria-label="a dense table"> */}

                <TableHead>
                    <TableRow style={{ background: "", color: "white " }}>
                        <TableCell align="right">شماره </TableCell>
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
                        <TableCell align="right"> توضیحات </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ background: "brown" }}>
                    {rows.map((row) => (
                        <TableRow
                            style={{ background: "red !important" }}
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">
                                {row.fName || `${row.name || ""}`}
                            </TableCell>
                            <TableCell align="right">
                                {row.lName || `${row.lastname || ""} `}
                            </TableCell>
                            <TableCell align="right">{row.deposit}</TableCell>
                            <TableCell align="right">
                                {row.school || row.schoolname}
                            </TableCell>
                            <TableCell align="right">
                                {row.foundation || row.level}
                            </TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">
                                {row.numberUniform || row.clotheCount}
                            </TableCell>
                            <TableCell align="right">
                                {row.sizeUniform || row.clotheSize}
                            </TableCell>
                            <TableCell align="right">
                                {row.numberPants || row.pantsCount}
                            </TableCell>
                            <TableCell align="right">
                                {row.sizePants || row.pantsSize}
                            </TableCell>
                            <TableCell align="right">
                                {row.numberScarf || row.maskedCount}
                            </TableCell>
                            <TableCell align="right">
                                {row.sizeScarf || row.maskedSize}
                            </TableCell>
                            <TableCell align="right">
                                {row.numberJogging || row.sportsweardCount}
                            </TableCell>
                            <TableCell align="right">
                                {row.sizeJogging || row.sportsweardSize}
                            </TableCell>
                            <TableCell align="right">
                                {row.description}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
