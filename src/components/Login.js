import React, { useState } from 'react';
import './Login.css';

import {
  makeStyles,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 330,
    width: 500,
    background: "white",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    marginBottom: "160px",
    borderRadius: "10px",
    top: 230,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "80vw",
      height: "65vh",
      marginLeft: 73,
      position: "absolute",
      marginBottom: "90px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
      height: "65vh",
      marginLeft: "33px",
      marginBottom: "80px",
    },
  },
  form: {
    position: "fixed",
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
      width: "39vw",
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
      width: "40vw",
    },
  },
  item: {
    color: "white",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(
      login({
      name: name,
      email: email,
      password: password,
      loggedIn: true,
      })
    );
  };

  return (
    <>
      <div className="title">
        <h1
          style={{
            marginTop: "60px",
            marginLeft: "430px",
            fontFamily: "sans-serif",
            color: "white",
          }}
        >
          Login Here
        </h1>
      </div>
      <Container className={classes.container}>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className={classes.item}>
            <TextField
              id="standard-basic"
              label="Name"
              type="name"
              placeholder="Name"
              size="small"
              style={{ width: "200%" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.item}>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              placeholder="Email"
              size="small"
              style={{ width: "200%" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.item}>
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              placeholder="Password"
              size="small"
              style={{ width: "200%" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.item}>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginRight: 20, marginTop: 20 }}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Login