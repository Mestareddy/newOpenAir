import React from 'react';
import { AppBar, Avatar, makeStyles, Toolbar, Typography, Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import './Logout.css';
import Data from './Data';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  button: {
    marginLeft: 1220,
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      marginLeft: 555,
      position: "absolute",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 195,
      position: "absolute",
    },
  },
  avatar: {
    marginLeft: 100,
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 90,
      position: "absolute",
    },
  },
}));

const Logout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }

  return (
    <>
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Welcome
        </Typography>
        <Avatar alt="Mike" src="" className={classes.avatar} />
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
    <Data />
    </>
  );
}

export default Logout