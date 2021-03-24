import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import {
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  Divider,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SideBar from "./SideBar/SideBar";
//styles
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 260;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  logout: {
    left: "80%",
    background: "white",
    color: "#16a085",
  },
  toolbar: { paddingRight: 24 },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    width: theme.spacing(7),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpace: theme.mixins.toolbar,
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    overflow: "auto",
  },
});
//main component

const DashboardWrapper = (props) => {
  const userInfo = useSelector((state) => state.authReducer);
  //const { token } = userInfo;
  const {/* name, email,*/ clearance } = userInfo.user;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  //styling
  const { classes } = props;
  const handleDrawer = (e) => setOpen(!open);

  return (
    <div id="admin-page" className={classes.root}>
      <AppBar
        style={{ background: "#16a085" }}
        className={classNames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography noWrap component="h1" color="inherit" variant="h6">
            {clearance}
          </Typography>{" "}
          <Button
            className={classes.logout}
            onClick={() => dispatch(logoutUser())}
          >
            logout
          </Button>
        </Toolbar>{" "}
      </AppBar>{" "}
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          ),
        }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div>
          <SideBar />
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpace} />
        {props.children}{" "}
      </main>
    </div>
  );
};

export default withStyles(styles)(DashboardWrapper);
