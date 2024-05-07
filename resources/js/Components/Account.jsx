// ** React Imports

// ** MUI Imports

import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Uniform from "./Uniform/";
const foundationItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Account = ({
    fname,
    setFname,
    lname,
    setLname,
    school,
    setSchool,
    deposit,
    setDeposi,
    sizeUniform,
    setSizeUniform,
    numberUniform,
    setNumberUniform,
    sizePants,
    setSizePants,
    numberPants,
    setNumberPants,
    phone,
    setPhone,
    foundation,
    setFoundation,
    sizeScarf,
    setSizeScarf,
    numberScarf,
    setNumberScarf,
    sizeJogging,
    setSizeJogging,
    numberJogging,
    setNumberJogging,
    discription,
    setDiscription,
}) => {
    return (
        <CardContent>
            <form dir="rtl">
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="نام"
                            placeholder="نام را وارد کنید"
                            value={fname}
                            onChange={(event) => {
                                setFname(event.target.value);
                            }}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    document.getElementById("lName").focus();
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="نام خانوادگی"
                            placeholder="نام خانوادگی را وارد کنید "
                            value={lname}
                            onChange={(event) => setLname(event.target.value)}
                            id="lName"
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    document.getElementById("deposit").focus();
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type="text"
                            label="بیعانه"
                            placeholder="بیعانه را وارد کنید"
                            value={deposit}
                            onChange={(event) => setDeposi(event.target.value)}
                            id="deposit"
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    document.getElementById("phone").focus();
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="idSchool">مدرسه</InputLabel>
                            <Select
                                labelId="idSchool"
                                label="school"
                                value={school}
                                onChange={(event) =>
                                    setSchool(event.target.value)
                                }
                            >
                                <MenuItem dir="rtl" value={10}>مادر</MenuItem>
                                <MenuItem dir="rtl" value={20}>علامه</MenuItem>
                                <MenuItem dir="rtl" value={30}>سید الشهدا</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type="number"
                            label="شماره موبایل"
                            placeholder="موبایل را وارد کنید"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            id="phone"
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    document
                                        .getElementById("foundation")
                                        .focus();
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="foundation">پاییه</InputLabel>
                            <Select
                                labelId="idSchool"
                                label="school"
                                value={foundation}
                                onChange={(event) =>
                                    setFoundation(event.target.value)
                                }
                            >
                                {foundationItem.map((item) => (
                                    <MenuItem dir="rtl" value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Uniform
                            name="پیراهن"
                            size={sizeUniform}
                            setSize={setSizeUniform}
                            number={numberUniform}
                            setNumber={setNumberUniform}
                            id={0}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Uniform
                            name="شلوار"
                            size={sizePants}
                            setSize={setSizePants}
                            number={numberPants}
                            setNumber={setNumberPants}
                            id={1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Uniform
                            name="شلوار ورزشی"
                            size={sizeJogging}
                            setSize={setSizeJogging}
                            number={numberJogging}
                            setNumber={setNumberJogging}
                            id={2}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Uniform
                            name="مقنعه"
                            size={sizeScarf}
                            setSize={setSizeScarf}
                            number={numberScarf}
                            setNumber={setNumberScarf}
                            id={3}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="discription"
                            fullWidth
                            label=" توضیحات"
                            placeholder="  توضیحات را بنویسید   "
                            type="text"
                            value={discription}
                            onChange={(event) =>
                                setDiscription(event.target.value)
                            }
                        />
                    </Grid>
                </Grid>
            </form>
        </CardContent>
    );
};

export default Account;
