// react
import * as React from "react";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";

// mui
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/base";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// custom
// import Table from "../../componnent/Table/Table";
import TablePro from "../../Components/TablePro";
import Table from "@/Components/Table";

// css
import "./../../../css/showoutfit.css";

const mapSizeNumber = ["سایز ها", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
const mapSizeNumber1 = ["سایز ها", 1, 2,3];
const mapFoundationNumber = [
    "کلاس ها",
    "اول",
    "دوم",
    "سوم",
    "چهارم",
    "پنجم",
    "ششم",
    "هفتم",
    "هشتم",
    "نهم",
    "دهم",
    "یازدهم",
    "دوازدهم",
];

function createData(
    id,
    delivery,
    fName,
    lName,
    school,
    deposit,
    numberUniform,
    sizeUniform,
    numberPants,
    sizePants,
    numberScarf,
    sizeScarf,
    numberJogging,
    sizeJogging,
    foundation,
    phone
) {
    return {
        id,
        delivery,
        fName,
        lName,
        school,
        deposit,
        numberUniform,
        sizeUniform,
        numberPants,
        sizePants,
        numberScarf,
        sizeScarf,
        numberJogging,
        sizeJogging,
        foundation,
        phone,
    };
}

const rows = [
    createData(
        "0",
        "عدم تحویل",
        "معین",
        "مزرعه ملای",
        2,
        "300ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "2",
        "2",
        "4",
        4,
        "09138569356"
    ),
    createData(
        "1",
        "عدم تحویل",
        "مهدی",
        "مزرعه ملای",
        1,
        "400ت",
        "1",
        "2",
        "-1",
        "4",
        "81",
        "46",
        "22",
        "40",
        3,
        "589684544"
    ),
    createData(
        "1",
        "عدم تحویل",
        "جعفر",
        " رضایان",
        7,
        "400ت",
        "1",
        "2",
        "-1",
        "4",
        "81",
        "46",
        "22",
        "40",
        0,
        "589684544"
    ),
    createData(
        "2",
        "عدم تحویل",
        "احمد",
        " شریفی",
        2,
        "800ت",
        "1",
        "2",
        "-1",
        "-1",
        "30",
        "6",
        "2",
        "1",
        7,
        "09140893454"
    ),
    createData(
        "3",
        "عدم تحویل",
        "حسن",
        " کریمی",
        3,
        "100ت",
        "10",
        "4",
        "-1",
        "-1",
        "0",
        "1",
        "3",
        "5",
        10,
        "09140891574"
    ),
];

const currencies = [
    {
        value: "0",
        label: "همه",
    },
    {
        value: "1",
        label: "لباس",
    },
    {
        value: "2",
        label: "شلوار",
    },
    {
        value: "3",
        label: "ست ورزشی",
    },
    {
        value: "4",
        label: "مقنعه",
    },
];

const schoolName = ["مادر", "پدر", "علامه"];
export default function ShowOutfit({ data }) {
    console.log("m", data);
    const contentToPrint = React.useRef(null);
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });
    // let componentRef = React.useRef();
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const [value3, setValue3] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [forSize, setForSize] = React.useState(0);
    const [forSizeNumber, setForSizeNuber] = React.useState(mapSizeNumber);
    const [tableRows, setTableRows] = React.useState(data);

    React.useEffect(() => {
        let number = (value1 + 1) * 10;
        let result = data.filter((row) => parseInt(row.schoolname) === number);
        if (value2 != 0) {
            result = result.filter((row) => parseInt(row.level) == value2);
        }
        let count = 0;
        if (value3 != 0) {
            if (forSize == 1) {
                result = result.filter(
                    (row) => parseInt(row.clotheSize) == value3
                );
                result.map((row) => {
                    count = count + parseInt(row.clotheCount);
                });
                setForSizeNuber(mapSizeNumber);
                // alert(count);
            }

            if (forSize == 2) {
                result = result.filter(
                    (row) => parseInt(row.pantsSize) == value3
                );
                result.map((row) => {
                    count = count + parseInt(row.pantsCount);
                });
                setForSizeNuber(mapSizeNumber);
            }
            if (forSize == 3) {
                result = result.filter(
                    (row) => parseInt(row.sportsweardSize) == value3
                );
                result.map((row) => {
                    count = count + parseInt(row.sportsweardCount);
                });
                setForSizeNuber(mapSizeNumber);
            }
            if (forSize == 4) {
                result = result.filter(
                    (row) => parseInt(row.maskedSize) == value3
                );
                result.map((row) => {
                    count = count + parseInt(row.maskedCount);
                });
                setForSizeNuber(mapSizeNumber1);
            }
            setCount(count);
        }
        setTableRows(result);
    }, [value1, value2, value3, forSize]);

    React.useEffect(() => {
        if (forSize == 4) {
            setForSizeNuber(mapSizeNumber1);
        } else {
            setForSizeNuber(mapSizeNumber);
        }
    }, [forSize]);

    
    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (event, newValue) => {
        // console.log(newValue);
        setValue2(newValue);
    };
    const handleChange3 = (event, newValue) => {
        // console.log(newValue);
        setValue3(newValue);
    };

    return (
        <Box dir="rtl">
            <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className="headShowSizing"
            >
                <Tabs
                    value={value1}
                    onChange={handleChange1}
                    aria-label="basic tabs example"
                >
                    <Tab
                        label="مدرسه مادر "
                        {...a11yProps(10)}
                        style={{ color: "#fff" }}
                    />
                    <Tab
                        label="مدرسه پدر"
                        {...a11yProps(20)}
                        style={{ color: "#fff" }}
                    />
                    <Tab
                        label="علامه طباطبایی"
                        {...a11yProps(30)}
                        style={{ color: "#fff" }}
                    />
                </Tabs>
            </Box>
            <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className="Foundation"
            >
                <Tabs
                    value={value2}
                    onChange={handleChange2}
                    aria-label="basic tabs example"
                >
                    {mapFoundationNumber.map((number) => (
                        <Tab
                            label={number}
                            {...a11yProps(number - 1)}
                            style={{ color: "#fff" }}
                        />
                    ))}
                </Tabs>
            </Box>
            {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}           className="Foundation">
                <Button>select</Button> */}

            <Box
                className="Foundation"
                style={{ backgroundColor: "red !important" }}
                component="form"
                dir="rtl"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    style={{ backgroundColor: "red !important" }}
                    id="standard-select-currency"
                    select
                    label="سایز"
                    // defaultValue=
                    value={forSize}
                    onChange={(e) => setForSize(e.target.value)}
                    dir="rtl"
                    // helperText="Please select your currency"
                    variant="standard"
                >
                    {currencies.map((option) => (
                        <MenuItem
                            style={{
                                backgroundColor: "red !important",
                                color: "red !important",
                            }}
                            key={option.value}
                            value={option.value}
                            dir="rtl"
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            {/* </Box> */}
            <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className="Foundation"
            >
                <Tabs
                    value={value3}
                    onChange={handleChange3}
                    aria-label="basic tabs example"
                >
                    {forSizeNumber.map((number) => (
                        <Tab
                            label={number}
                            {...a11yProps(number - 1)}
                            style={{ color: "#fff" }}
                        />
                    ))}
                </Tabs>
            </Box>
            <div ref={contentToPrint}>
                <TablePro dir="rtl" rows={tableRows}></TablePro>
            </div>
            {value3 && value2 && forSize ? (
                <Box
                    component="section"
                    sx={{
                        p: 2,
                        border: "1px dashed #936c6c",
                        margin: "2em",
                        padding: "1em",
                        color: "#efefef",
                        textAlign: "center",
                        wordSpacing: "21px",
                    }}
                >
                    {`در مجموع تعداد ${currencies[forSize].label} با سایز ${value3} کلاس ${value2}ام  مدرسه ${schoolName[value1]} برابر است با ${count} تا`}
                </Box>
            ) : (
                <Box
                    component="section"
                    sx={{
                        p: 2,
                        border: "1px dashed #936c6c",
                        margin: "2em",
                        padding: "1em",
                        color: "#efefef",
                        textAlign: "center",
                        wordSpacing: "21px",
                    }}
                >
                    {`  برای نشان دادن تعداد مجموع باید کلاس و سایز و نوع فیلتر را مشخص کنید`}
                </Box>
            )}
            <div className="containerBtnPrint">
                <Button
                    onClick={() => {
                        handlePrint(null, () => contentToPrint.current);
                    }}
                    className="print"
                >
                    چاپ کردن
                </Button>
            </div>
        </Box>
    );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
