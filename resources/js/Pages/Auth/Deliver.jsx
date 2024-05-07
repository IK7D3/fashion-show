import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { Button } from "@mui/material";
import Table from "@/Components/Table";
import { useForm } from "@inertiajs/react";
import "../../../css/showDelivery.css";
import { CheckBox } from "@mui/icons-material";

function createData(
    ID,
    delivery,
    fName,
    lName,
    school,
    foundation,
    phone,
    deposit,
    numberUniform,
    sizeUniform,
    numberPants,
    sizePants,
    numberScarf,
    sizeScarf,
    numberJogging,
    sizeJogging
) {
    return {
        ID,
        delivery,
        fName,
        lName,
        school,
        foundation,
        phone,
        deposit,
        numberUniform,
        sizeUniform,
        numberPants,
        sizePants,
        numberScarf,
        sizeScarf,
        numberJogging,
        sizeJogging,
    };
}
const rowsearch = [
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
];
const rows = [
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        "مادر",
        "2",
        "015544544",
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4"
    ),
];
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function Deliver({ data:jj }) {
    const [id, setId] = React.useState(0);
    const { data, setData, post, processing, errors, reset } = useForm({
        id: "",
    });

    const finish = (e) => {
        e.preventDefault();
        post(route('.......')) //// --> save
    };
    const submit = (e) => {
        e.preventDefault();
        post(route('.......')) //// --> save
    };
    return (
        <CacheProvider value={cacheRtl}>
            <Box
                className="container"
                // style={{ background: "#fff" }}
                dir="rtl"
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <form className="formDelivery" onSubmit={submit}>
                    <TextField
                        style={{ textAlign: "right " }}
                        dir="rtl"
                        type="number"
                        // value={id}
                        onChange={(e) => setData('id',e.target.value)}
                        label="شماره ثبت"
                        // type='submit'
                        color="success"
                    />
                    <Button
                        className="btn-modal"
                        variant="contained"
                        color="success"
                        onClick={submit}
                        // variant="contained"
                        type="submit"
                        // onChange={submit}
                    >
                        نمایش
                    </Button>
                </form>
                <form className="formDelivery">
                    <TextField
                        style={{ textAlign: "right " }}
                        dir="rtl"
                        // type="number"
                        label="نام"
                        color="success"
                    />
                    <Button className="btn-show" variant="contained">
                        جستجو
                    </Button>
                </form>
                {rows.length != 0 && (
                    <>
                        <div className="table-form">
                            {" "}
                            <Table dir="rtl" rows={rows} />
                        </div>

                        <div
                            style={{
                                // backgroundColor
                                display: "flex",
                                justifyContent: "center",
                                padding: "10px",
                                borderBottom: "3px solid black",
                            }}
                        >
                            <Button
                                style={{ width: "600px" }}
                                type="reset"
                                variant="outlined"
                                color="secondary"
                                onClick={finish}
                            >
                                تحویل داده شد
                            </Button>
                        </div>
                    </>
                )}
                {rowsearch.length != 0 && (
                    <>
                        <div className="table-form">
                            {" "}
                            <Table dir="rtl" rows={rowsearch} />
                        </div>

                        <div
                            style={{
                                // backgroundColor
                                display: "flex",
                                justifyContent: "center",
                                padding: "10px",
                            }}
                        >
                            <Button
                                style={{ width: "600px" }}
                                type="reset"
                                variant="outlined"
                                color="secondary"
                                disabled
                                // onClick={handleReset}
                            >
                                نتایج جستجو
                            </Button>
                        </div>
                    </>
                )}
            </Box>
        </CacheProvider>
    );
}
