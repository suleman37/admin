import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BlogIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const [openReports, setOpenReports] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const navigate = useNavigate();

  const handleClickProducts = () => {
    setOpenProducts(!openProducts);
  };

  const handleClickReports = () => {
    setOpenReports(!openReports);
  };

  const handleClickUsers = () => {
    setOpenUsers(!openUsers);
  };

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleConfirmLogout = () => {
    // Handle the logout logic here
    // For example, clear user session or tokens
    // After logout logic, redirect or update the state
    navigate("/"); // Redirect to home or login page after logout
  };

  return (
    <div style={{ width: 250, height: "100vh", backgroundColor: "#f4f4f4" }}>
      <List>
        <ListItem button component={Link} to="/">
          <HomeIcon />
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={handleClickProducts}>
          <ShoppingCartIcon />
          <ListItemText primary="Products" />
          {openProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/all-products" style={{ paddingLeft: 32 }}>
              <CategoryIcon />
              <ListItemText primary="All Products" />
            </ListItem>
            <ListItem button component={Link} to="/add-products" style={{ paddingLeft: 32 }}>
              <CategoryIcon />
              <ListItemText primary="Add New Product" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleClickUsers}>
          <GroupIcon />
          <ListItemText primary="Orders" />
          {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/order-list" style={{ paddingLeft: 32 }}>
              <GroupIcon />
              <ListItemText primary="All Orders" />
            </ListItem>
            <ListItem button component={Link} to="/pending-orders" style={{ paddingLeft: 32 }}>
              <GroupIcon />
              <ListItemText primary="Pending Orders" />
            </ListItem>
            <ListItem button component={Link} to="/shipped-orders" style={{ paddingLeft: 32 }}>
              <GroupIcon />
              <ListItemText primary="Shipped Orders" />
            </ListItem>
            <ListItem button component={Link} to="/cancel-order" style={{ paddingLeft: 32 }}>
              <GroupIcon />
              <ListItemText primary="Cancelled Orders" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleClickReports}>
          <AssessmentIcon />
          <ListItemText primary="Blog" />
          {openReports ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openReports} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/blogslist" style={{ paddingLeft: 32 }}>
              <BlogIcon />
              <ListItemText primary="All Posts" />
            </ListItem>
            <ListItem button component={Link} to="/add-post" style={{ paddingLeft: 32 }}>
              <BlogIcon />
              <ListItemText primary="Add New Post" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />

        <ListItem button onClick={handleOpenLogoutDialog}>
          <ExitToAppIcon />
          <ListItemText primary="Logout" />
        </ListItem>
      </List>

      {/* Logout Confirmation Dialog */}
      <Dialog open={openLogoutDialog} onClose={handleCloseLogoutDialog}>
        <DialogTitle><b>Confirm Logout</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogoutDialog} color="primary"  style={{ backgroundColor: "#38a89d", color: "white" }}>
            <b>Cancel</b>
          </Button>
          <Button onClick={handleConfirmLogout} color="primary"  style={{ border: " 1px solid #38a89d", color: "#38a89d" }}>
            <b>Logout</b>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sidebar;
