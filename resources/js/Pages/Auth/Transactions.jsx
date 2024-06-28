// File: src/App.js

import React, { useState } from "react";
import TransactionEntry from "./TransactionEntry";
import TransactionList from "./TransactionList";
import { Box } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

import "../../../css/Transcation.css";
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const Transactions = () => {
    const [transactions, setTransactions] = useState([
        { id: 0, name: " علی ممد ", amount: 1000, isDebtor: false },
        { id: 1, name: "تقی جوادی  ", amount: 500, isDebtor: true },
        { id: 2, name: "گومز", amount: 500, isDebtor: true },
        { id: 3, name: "جعفری", amount: 500, isDebtor: true },
        { id: 4, name: "گشنیز", amount: 500, isDebtor: true },
        { id: 5, name: "علی تره", amount: 500, isDebtor: false },
        { id: 6, name: "حسم اوناب ", amount: 500, isDebtor: false },
        { id: 7, name: "جواد حسنی ", amount: 500, isDebtor: true },
        { id: 8, name: "بالا بالا ", amount: 500, isDebtor: true },
        { id: 9, name: "دور شدی", amount: 500, isDebtor: false },
    ]);

    const addTransaction = (transaction) => {
        console.log(transaction);
        setTransactions([...transactions, transaction]);
    };

    const removeTransaction = (index) => {
      console.log(transactions.find((transaction) => transaction.id == index));
        setTransactions(
            transactions.filter((transactions) => transactions.id !== index)
        );
    };

    return (
        <CacheProvider value={cacheRtl}>
            <Box
                sx={{ padding: 2, background: "#fff", direction: "rtl" }}
                className="container"
            >
                <TransactionEntry onAddTransaction={addTransaction} />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: 4,
                    }}
                >
                    <TransactionList
                        transactions={transactions.filter((t) => !t.isDebtor)}
                        type="creditors"
                        onRemoveTransaction={removeTransaction}
                    />
                    <TransactionList
                        transactions={transactions.filter((t) => t.isDebtor)}
                        type="debtors"
                        onRemoveTransaction={removeTransaction}
                    />
                </Box>
            </Box>
        </CacheProvider>
    );
};

export default Transactions;
