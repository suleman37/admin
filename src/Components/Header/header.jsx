import Logo from "../../Assets/New-Project-1536x682.webp"
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{backgroundColor:"#38a89d"}}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img src={Logo} alt="" width={"130px"}/>
        </Typography>
        <Button color="inherit">Profile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;