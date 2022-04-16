import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Insurance DApp
      </Typography>
      <Typography variant="h5" component="div">
        Login
        <br/>
      </Typography>
      <TextField
        label="Mnemonic"
        fullWidth
        variant="standard"
        color="primary"
        focused
        id="Mnemonic"
        type="text"
        helperText="Enter Your mnemonic to Login"
      />
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small">Submit</Button>
    </CardActions>
  </React.Fragment>
);

export default function Login() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
