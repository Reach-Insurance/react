<div className="h-screen flex bg-blue-100">
  <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-2 px-16 shadow">
    <h1 className="text-4xl text-blue-700  text-primary mt-2 mb-2 text-center">
      {" "}
      Insurance Dapp
      <span>
        <button
          onClick={setDeployerModeOn.bind(this, !deployerModeOn)}
          className="pl-4 text-bold"
        >
          [{deployerModeOn && "d"}]
        </button>
      </span>
    </h1>
    <hr />
    <h1 className="text-xl font-medium text-primary mt-6 mb-6 text-center">
      Enter Your mnemonic to Login
    </h1>
    <form>
      <div>
        <input
          ref={mnemonicRef}
          type="text"
          value={mnemonicStr}
          onChange={(e) => setMnemonicStr(e.target.value)}
          className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
          id="mnemonic"
          placeholder="12-word phrase"
        />
      </div>
      <div>
        <label>
          Have no Algorand account ?{" "}
          <span
            onClick={newAlgoAccount}
            href="#"
            className="text-blue-600"
          >
            Create a new
          </span>{" "}
        </label>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={Login}
          className={` bg-blue-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-greenn-dark`}
        >
          Login
        </button>
      </div>
    </form>
  </div>
</div>

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  );
}
