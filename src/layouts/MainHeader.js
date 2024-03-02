import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { Button } from "@mui/material";

function MainHeader() {
  const { user } = useAuth();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            CoderStore
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" color="inherit" component="div">
            Welcome {user?.username}!{" "}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="h6" color="inherit" component="div">
            <AddShoppingCartIcon />
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
