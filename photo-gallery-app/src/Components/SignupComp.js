import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Navbar from "./nav";
class SignupComp extends Component {
  useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  signUp = async (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value.trim();
    const lastName = e.target.elements.lastName.value.trim();
    const email = e.target.elements.email.value.trim();
    const age = parseInt(e.target.elements.age.value);
    const password = e.target.elements.password.value;
    if (!firstName || !lastName || !email || !age || !password) {
      return alert("all fields are required");
    }
    const name = firstName + " " + lastName;
    try {
      const data = {
        name,
        age,
        email,
        password,
      };
      const res = await axios.post("https://photo-gallery-deploy.herokuapp.com/users", data);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.user.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        this.props.history.push("/image");
      }
    } catch (error) {
      alert("this email already exists");
    }
  };
  render() {
    const classes = this.useStyles;
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: 50 }}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <div style={{ textAlign: "center" }}>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ fontSize: 40 }}>
                  Sign up
                </Typography>
              </div>
              <br />
              <form className={classes.form} onSubmit={this.signUp}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="age"
                      label="Age"
                      type="number"
                      id="age"
                      inputProps={{ min: 10, max: 60 }}
                      autoComplete="current-age"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <br />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}>
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <br />
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5} />
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupComp);
