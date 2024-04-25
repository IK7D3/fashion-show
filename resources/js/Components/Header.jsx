import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from '@inertiajs/react';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import Icon1 from "../../../src/assets/Icons/Electronic_Devices_(2).jpg";
// import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";

import "../../css/Header.css"

const pages = [
  { name: "سایز کردن لباس", link: "/Sizing" },
  { name: "نمایش لباس ها ", link: "/ShowSizing" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
  <AppBar
       position="static"
       dir="rtl"
       style={{ backgroundColor: "transparent" }}
       className="Header"
    > 
      <Container maxWidth="xl" dir="rtl" className="Header">
    <Toolbar disableGutters dir="rtl" className="Header">
      {/* /home/moein/Documents/Web/sizing1/assets/Icons/20230103_170233.jpg */}
      {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}  dir="rtl"/> */}
      {/* <img style={{width:'20px',height:"20px"}} src={Icon1} alt="sss" /> */}
      {/*  icon */}
      <Typography
        className="Header"
        dir="rtl"
        variant="h6"
        noWrap
        component="a"
        // href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "Byekan",
          // fontWeight: 700,
          // letterSpacing: '.3rem',
          color: "inherit",
          fontSize: "inherit",
          textDecoration: "none",
        }}
      >
        مزون خیاطی ستاره شب
      </Typography>

      <Box
           style={{color:'black !important'}}
        // className="Header"
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
        }}
        // dir="rtl"
      >
        <IconButton
          className="Header"
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          {/* <MenuIcon
            sx={{ color: "inherit" }}
            dir="rtl"
            // className="Header"
            style={{color:'black !important'}}
          /> */}
        </IconButton>
        <Menu
             style={{color:'black !important'}}
          // className="Header"
          dir="rtl"
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
            // color: "",
            fontSize: "inherit",
          }}
        >
          {pages.map((page) => (
            <MenuItem
            style={{color:'black !important'}}
              // className="Header"
              // key={page}
              onClick={handleCloseNavMenu}
              dir="rtl"
            >
              <Typography  textAlign="center" dir="rtl"      
              style={{color:'black !important'}}>
                {/* <Link  
                href={page.link}      style={{color:'black !important'}}>
                  {page.name}
                </Link> */}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
      <Typography
        className="Header"
        id="title-Header"
        dir="rtl"
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          textDecoration: "none",
          color: "inherit",
          fontSize: "inherit",
        }}
      >
        مزون خیاطی شب ستاره
      </Typography>
      <Box
        className="Header"
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          margin: "0px 15px",
        }}
        dir="rtl"
      >
        <Link 
            className="Header bg-teal-400"
             href={route("goSizing")}
          >
            سایز کردن لباس
          </Link>

           <Link 
            className="Header bg-amber-500"
             href={route("goShowOutfit")}
          >
            نمایش لباس ها
          </Link>

      </Box>
    </Toolbar>
  </Container>
  <div>gfh</div>
    </AppBar>
  
  );
}
