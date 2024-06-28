// File: src/TransactionList.js

import React from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Checkbox,
} from "@mui/material";

import '../../../css/Transcation.css'

const TransactionList = ({ transactions, type, onRemoveTransaction }) => {
    return (
        <Box
            sx={{
                width: "45%",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: 2,
                background: "#fff",
            }}
        >
            <Typography variant="h6">
                {type === "debtors" ? " بدهکار ها" : "طلبکار ها "}
            </Typography>
            <List>
                {transactions.map((transaction, index) => (
                    <ListItem key={transaction.id}>
                        <Checkbox
                            onChange={() => onRemoveTransaction(transaction.id)}
                        />
                        <ListItemText
                            primary={`${transaction.name }`}
                            secondary={` ${transaction.amount}`}
                        />
                    </ListItem>
                ))}
            </List>
            <Box
                sx={{
                    padding: 2,
                    border: "2px solid #ccc",
                    borderRadius: 2,
                    background: "#efefef",
                }}
            >
                <p> جمع مبلغ: </p>
                <Typography sx={{ padding: 2 }}>
                    {" "}
                    {transactions.reduce((sum, transaction) => {
                        return sum + transaction.amount;
                    }, 0)}
                تومان 
                </Typography>
            </Box>
        </Box>
    );
};

export default TransactionList;
