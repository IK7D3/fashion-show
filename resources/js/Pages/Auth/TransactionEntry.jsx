// File: src/TransactionEntry.js

import React, { useState } from "react";
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Box,
} from "@mui/material";

import "../../../css/Transcation.css";
const TransactionEntry = ({ onAddTransaction }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [isDebtor, setIsDebtor] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTransaction({ name, amount, isDebtor });
        setName("");
        setAmount("");
        setIsDebtor(false);
    };

    const amountFieldColor = isDebtor ? "warning" : "error";

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
            <TextField
                label="اسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="مبلغ"
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                required
                color={amountFieldColor}
            />
            <FormControlLabel
                className="dir-rtl"
                control={
                    <Checkbox
                        checked={isDebtor}
                        onChange={(e) => setIsDebtor(e.target.checked)}
                    />
                }
                label="بدهکار است؟"
            />
            <Button type="submit" variant="contained">
                افزودن تراکنش
            </Button>
        </Box>
    );
};

export default TransactionEntry;
