import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import "../index.css";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const onhandleSubmit = () => {
        console.log("got here!");
    }

    return (
        <Paper
            component='form'
            onSubmit={onhandleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
                color: 'red'
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;