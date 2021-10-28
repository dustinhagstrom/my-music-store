import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const userData = undefined;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Music Store
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          //   sx={{ mr: 2 }}
        ></IconButton>
        <ShoppingCartIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
