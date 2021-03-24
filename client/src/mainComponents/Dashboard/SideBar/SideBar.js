import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // ListSubheader,
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ListItemLink = (props) => {
  return <ListItem button component={RouterLink} {...props} />;
};

const SideBar = () => {
  const { clearance } = useSelector((state) => state.authReducer);
  return (
    <List>
      <ListItemLink to="/admin">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemLink>
      <ListItemLink to="/admin/produits">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Produits" />
      </ListItemLink>{" "}
      <ListItemLink to="/admin/partenaires">
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="Partenaires" />
      </ListItemLink>
      <ListItemLink to="/admin/actualités">
        <ListItemIcon>
          <AnnouncementIcon />
        </ListItemIcon>
        <ListItemText primary="Actualitées" />
      </ListItemLink>
      {clearance === "admin" && (
        <ListItemLink to="/admin/newadmin">
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Ajouter admin" />
        </ListItemLink>
      )}
    </List>
  );
};

export default SideBar;
