import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { Button, Modal } from "@mui/material";
import Table from "@/Components/Table";
import { useForm } from "@inertiajs/react";
import "../../../css/showDelivery.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Modal from "mui";

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

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function Deliver({ data }) {
    const [id, setId] = React.useState(0);
    const [checkedItems, setCheckedItems] = React.useState({
        pants: true,
        scarf: true,
        clothe: true,
        sportsweard: false,
    });

    const [rows, setRows] = React.useState([]);
    const [searchName, SetSearchName] = React.useState();
    const [rowSearch, setRowSearch] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const inputRef = React.useRef('ff')
    const {
        data: newData,
        setData,
        post,
    } = useForm({
        id: "",
        scarf: "",
        sportsweard: "",
        clothe: "",
        pants: "",
    });

    const handelPost = (e) => {
        e.preventDefault();
        console.log(newData);
        // post(route("testPost"));
        post(route("deliverOut"));
        setOpen(true)
    };
    const handleClick = (e) => {
        const contact = {
            id: id,
            scarf: checkedItems["scarf"],
            sportsweard: checkedItems["sportsweard"],
            clothe: checkedItems["clothe"],
            pants: checkedItems["pants"],
        };
        console.log("c", contact);
        setData(contact);
        console.log(newData);
    };
    const submit = (e) => {
        e.preventDefault();
        // post(route('.......')) //// --> save
        setRows(data.filter((row) => row.id == id));
    };

    const handleChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSearch = () => {
        const test = data.filter((row) => {
            return (
                row.name.includes(searchName) ||
                row.lastname.includes(searchName)
            );
        });
        console.log("test", test);
        setRowSearch(test);
        // alert('3')
        // alert('e')
        console.log(searchName);
        console.log(rowSearch);
    };

    return (
        <CacheProvider value={cacheRtl}>
            <Box
                className="container"
                dir="rtl"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                onSubmit={handelPost}
            >
                <form className="formDelivery" onSubmit={submit}>
                    <TextField
                        style={{ textAlign: "right " }}
                        dir="rtl"
                        type="number"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        label="شماره ثبت"
                        // type='submit'
                        color="success"
                    />
                    <Button
                        className="btn-modal"
                        variant="contained"
                        color="success"
                        onClick={submit}
                        type="submit"
                        ref={inputRef}
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
                        value={searchName}
                        onChange={(e) => SetSearchName(e.target.value)}
                    />
                    <Button
                        className="btn-show"
                        variant="contained"
                        onClick={handleSearch}
                    >
                        جستجو
                    </Button>
                </form>
                <SecondModal open={open} setOpen={setOpen} />
                {rows.length != 0 && (
                    <>
                    {console.log(inputRef)}
                        <div className="table-form">
                            {" "}
                            <Table dir="rtl" rows={rows} />
                        </div>

                        <form>
                            <div
                                style={{
                                    // backgroundColor
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "10px",
                                    borderBottom: "3px solid black",
                                }}
                            >
                                <FormGroup>
                                    <FormControlLabel
                                        name="clothe"
                                        checked={checkedItems["clothe"]}
                                        control={<Checkbox />}
                                        label="لباس"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        name="pants"
                                        checked={checkedItems["pants"]}
                                        control={<Checkbox defaultChecked />}
                                        label="شلوار"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        name="scarf"
                                        checked={checkedItems["scarf"]}
                                        control={<Checkbox defaultChecked />}
                                        label="مقنعه"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        name="sportsweard"
                                        checked={checkedItems["sportsweard"]}
                                        control={<Checkbox />}
                                        label="ست ورزشی"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <Button
                                    className="btn-modal"
                                    style={{ width: "600px" }}
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handleClick}
                                    type="submit"
                                >
                                    تحویل داده شد
                                </Button>
                            </div>
                        </form>
                    </>
                )}
                {rowSearch.length != 0 && (
                    <>
                        <div className="table-form">
                            {/* {console.log('rowSearch',rowSearch)} */}
                            <Table dir="rtl" rows={rowSearch} />
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

const SecondModal = ({ setOpen, open }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            {/* dd */}
            <div className="deliverModal">با موفقیت تحویل داده شد</div>
        </Modal>
    );
};
