// ** React Imports

// ** MUI Imports

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import CardContent from "@mui/material/CardContent";


const Uniform = ({ name, size, setSize, number, setNumber, id }) => {
  return (
    <CardContent>
      <form dir="rtl">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12}>
            <h2>{name}</h2>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="سایز"
              placeholder="سایز را وارد کنید"
              type="number"
              value={size}
              onChange={(event) => {
                const newValue = Math.min(Math.max(event.target.value, 1), 12);
                setSize(newValue);
              }}
              id={`uniform${id}`}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  document.getElementById(`number${id}`).focus();
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id={`number${id}`}
              fullWidth
              label=" تعداد"
              placeholder="تعداد  را وارد کنید "
              type="number"
              value={number}
              onChange={(event) => {
                const newValue = Math.min(Math.max(event.target.value, 1), 12);
                setNumber(newValue);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  if (id + 1 > 3) {
                    document.getElementById(`discription`).focus();
                  } else document.getElementById(`uniform${id + 1}`).focus();
                }
              }}
            />
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default Uniform;
