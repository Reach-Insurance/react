import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

<div>
  <h1> Error ! </h1>
  <p> {errMessage} </p>
  <br />
  <hr />
  {errCode === "GOTO_LOGIN" ? (
    <Button onClick={setActivePage.bind(this, "LOGIN")} variant="outlined">
        Go back to login{" "}
    </Button>
    // <button onClick={setActivePage.bind(this, "LOGIN")}>
    //     Go back to login{" "}
    // </button>
  ) : errCode === "GOTO_SIGNUP" ? (
    <Button onClick={setActivePage.bind(this, "SIGNUP")} variant="outlined">
        Go back to login{" "}
    </Button>
    // <button onClick={setActivePage.bind(this, "SIGNUP")}>
    //   Go back to login{" "}
    // </button>
  ) : (
    <Button onClick={setActivePage.bind(this, "LOGIN")} variant="outlined">
        Go back to login{" "}
    </Button>
    // <button onClick={setActivePage.bind(this, "LOGIN")}>
    //   Go back to login{" "}
    // </button>
  )}
</div>