// import React from 'react'

// const Sizing = () => {
//   return (
//     <div>Sizing</div>
//   )
// }

// export default Sizing

// ** React Imports
import { useState } from "react";
import { useContext } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useForm } from "@inertiajs/react";

// ** MUI Imports
import { TabPanel, TabList, TabContext } from "@mui/lab";
import MuiTab from "@mui/material/Tab";
import { Button, Grid, Modal, styled, Card, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

// ** Icons Imports
// import AccountOutline from "mdi-material-ui/AccountOutline";

// **
import Account from "@/Components/Account";
// import AccountSettings from "./Pages/Acount";
// import { UserContext } from "../../App";
// import Table from "../../componnent/Table/Table";
import Table from "@/Components/Table";

// css
import "./../../../css/sizing.css";

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const Tab = styled(MuiTab)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        minWidth: 100,
    },
    [theme.breakpoints.down("sm")]: {
        minWidth: 67,
    },
}));

const TabName = styled("span")(({ theme }) => ({
    lineHeight: 1.71,
    fontSize: "0.875rem",
    marginLeft: theme.spacing(2.4),
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Sizing = ({ currentUser }) => {
    console.log("currentUser", currentUser);
    const { data, setData, post, processing, errors, reset } = useForm({
        fname: "",
        lname: "",
        school: "",
        deposit: "",
        sizeUniform: "",
        numberUniform: "",
        sizePants: "",
        numberPants: "",
        phone: "",
        foundation: "",
        sizeScarf: "",
        numberScarf: "",
        sizeJogging: "",
        numberJogging: "",
        discription: " ",
    });

    // ** State
    const [open, setOpen] = useState(false);
    const [deposit, setDeposi] = useState("");
    const [sizeScarf, setSizeScarf] = useState("");
    const [numberScarf, setNumberScarf] = useState("");
    const [sizeJogging, setSizeJogging] = useState("");
    const [numberJogging, setNumberJogging] = useState("");
    const [numberPants, setNumberPants] = useState("");
    const [sizePants, setSizePants] = useState("");
    const [numberUniform, setNumberUniform] = useState("");
    const [sizeUniform, setSizeUniform] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mony, setMony] = useState("");
    const [school, setSchool] = useState("");
    const [delivery, setDelivery] = useState("عدم تحویل");
    const [phone, setPhone] = useState("");
    const [foundation, setFoundation] = useState("");
    const [value, setValue] = useState("account");
    const [discription, setDiscription] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleReset = () => {
        setSizeScarf("");
        setNumberScarf("");
        setSizeJogging("");
        setNumberJogging("");
        setNumberPants("");
        setSizePants("");
        setNumberUniform("");
        setSizeUniform("");
        setFname("");
        setLname("");
        setDeposi("");
        setDiscription("");
    };

    return (
        <Card className="container">
            <CacheProvider value={cacheRtl}>
                <TabContext value={value}>
                    <TabList
                        onChange={handleChange}
                        aria-label="account-settings tabs"
                        sx={{
                            borderBottom: (theme) =>
                                `1px solid ${theme.palette.divider}`,
                        }}
                    >
                        <Tab
                            value="account"
                            label={
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* <AccountOutline /> */}
                                    <TabName>اطلاعات شخصی</TabName>
                                </Box>
                            }
                        />
                    </TabList>
                    <TabPanel
                        sx={{ p: 0 }}
                        value="account"
                        className="Accounts"
                    >
                        <Account
                            fname={fname}
                            setFname={setFname}
                            lname={lname}
                            setLname={setLname}
                            school={school}
                            setSchool={setSchool}
                            deposit={deposit}
                            setDeposi={setDeposi}
                            foundation={foundation}
                            setFoundation={setFoundation}
                            phone={phone}
                            setPhone={setPhone}
                            sizeUniform={sizeUniform}
                            setSizeUniform={setSizeUniform}
                            numberUniform={numberUniform}
                            setNumberUniform={setNumberUniform}
                            sizePants={sizePants}
                            setSizePants={setSizePants}
                            numberPants={numberPants}
                            setNumberPants={setNumberPants}
                            sizeScarf={sizeScarf}
                            setSizeScarf={setSizeScarf}
                            numberScarf={numberScarf}
                            setNumberScarf={setNumberScarf}
                            sizeJogging={sizeJogging}
                            setSizeJogging={setSizeJogging}
                            numberJogging={numberJogging}
                            setNumberJogging={setNumberJogging}
                            discription={discription}
                            setDiscription={setDiscription}
                        />
                    </TabPanel>
                </TabContext>
                <BasicModal
                    open={open}
                    setOpen={setOpen}
                    fName={fname}
                    lName={lname}
                    school={school}
                    deposit={deposit}
                    numberUniform={numberUniform}
                    sizeUniform={sizeUniform}
                    numberPants={numberPants}
                    sizePants={sizePants}
                    numberScarf={numberScarf}
                    sizeScarf={sizeScarf}
                    numberJogging={numberJogging}
                    sizeJogging={sizeJogging}
                    data={data}
                    setData={setData}
                    discription={discription}
                    setDiscription={setDiscription}
                    // data={data}
                    phone={phone}
                    foundation={foundation}
                    handleReset={handleReset}
                    post={post}
                    errors={errors}
                    currentUser={currentUser}
                />
                <Grid item xs={12} className="footerSizing">
                    <Button
                        variant="contained"
                        sx={{ marginRight: 3.5 }}
                        onClick={handleOpen}
                    >
                        ثبت
                    </Button>
                    <Button
                        type="reset"
                        variant="outlined"
                        color="secondary"
                        onClick={handleReset}
                    >
                        پاک کردن
                    </Button>
                </Grid>
            </CacheProvider>
        </Card>
    );
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function createData(
    ID,
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
        ID,
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

const BasicModal = ({
    setOpen,
    open,
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
    data,
    setData,
    foundation,
    phone,
    discription,
    setDiscription,
    handleReset,
    post,
    errors,
    currentUser,
}) => {
    // const {ID,setID} = useContext(UserContext)
    const rows = [
        createData(
            "ID",
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
        ),
    ];

    const submit = (e) => {
        e.preventDefault();
        // alert("befor");
        post(route("testPost"));
        // alert("af");
        console.log(data);
        console.log(errors);
        setOpenForSecond(true);
        console.log("currentUser.id", currentUser ? currentUser.id : "id");
        // handleClose();
    };
    const [openForSecond, setOpenForSecond] = useState(false);
    const handleClose = () => setOpen(false);
    const handleClick = () => {
        console.log(discription);
        const contant = {
            fname: fName,
            lname: lName,
            school: school,
            deposit: deposit,
            numberUniform: numberUniform,
            sizeUniform: sizeUniform,
            sizePants: sizePants,
            numberPants: numberPants,
            phone: phone,
            foundation: foundation,
            sizeScarf: sizeScarf,
            numberScarf: numberScarf,
            numberJogging: numberJogging,
            sizeJogging: sizeJogging,
            discription: discription,
        };
        // window.print();
        console.log(contant.discription);
        setData(contant);
        // handleReset();
    };
    return (
        <div>
            <Modal className="Modal " open={open} onClose={handleClose}>
                <form onSubmit={submit}>
                    <Box sx={style} className="Modal">
                        <Grid container spacing={7}>
                            <Grid>
                                {/* {console.log(rows)} */}
                                <Table rows={rows} />
                                {/* {fName} */}
                            </Grid>
                            <SecondModal
                                open={openForSecond}
                                currentUser={currentUser}
                                setOpenForSecond={setOpenForSecond}
                                handleCloseForFirst={handleClose}
                                handleReset={handleReset}
                            />
                            <Grid>
                                <Button
                                    className="btn-modal"
                                    variant="contained"
                                    color="success"
                                    onClick={handleClick}
                                    id="submit"
                                    type="submit"
                                >
                                    ثبت نهایی{" "}
                                </Button>
                                <Button
                                    className="btn-modal"
                                    variant="contained"
                                    color="error"
                                    onClick={handleClose}
                                >
                                    کنسل{" "}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Modal>
        </div>
    );
};

const SecondModal = ({
    currentUser,
    open,
    setOpenForSecond,
    handleCloseForFirst,
    handleReset,
}) => {
    const handleClose = () => {
        handleCloseForFirst();
        setOpenForSecond(false);
        handleReset();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            {/* dd */}
            <div className="te">
                {console.log(currentUser)}
                {!currentUser ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        <div>شماره ثبت </div>
                        <div>
                            {/* 22 */}
                            {currentUser.id}
                        </div>
                        <Button
                            className="btn-modal"
                            variant="contained"
                            color="error"
                            onClick={handleClose}
                        >
                            اتمام{" "}
                        </Button>
                    </>
                )}
            </div>
        </Modal>
    );
};
export default Sizing;
