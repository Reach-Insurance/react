import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const InsurancePackages = [
  {
    value: '0',
    label: '1000 - 120,000',
  },
  {
    value: '1',
    label: '5000 - 600,000',
  },
  {
    value: '2',
    label: '10,000 - 1,200,000',
  },
  {
    value: '3',
    label: '50,000 - 6,000,000',
  },
  {
    value: '4',
    label: '100,000 - 12,000,000',
  },
  {
    value: '5',
    label: '500,000 - 60,000,000',
  },
];


export default function SignUp() {
  const [selectedPackage, setInsurancePackage] = React.useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInsurancePackage(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}></Box>
      <Chip label="kids prefer cheese over fried green spinach every good boy deserves fun good boys do fine always" color="primary" />
      <div>
        <TextField
          label="Name"
          fullWidth
          variant="standard"
          color="primary"
          focused
          id="Name"
          type="text"
        />
        <TextField
          label="Surname"
          variant="standard"
          color="primary"
          focused
          id="Surname"
          type="text"
        />
        <TextField
          label="Phone"
          variant="standard"
          color="primary"
          focused
          id="Phone"
          type="tel"
        />
        <TextField
          label="Email"
          variant="standard"
          color="primary"
          focused
          id="Email"
          type="email"
          placeholder="your@email.com"
        />
        <TextField
          id="Package"
          select
          color="primary"
          label="Cover Amount"
          value={selectedPackage}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your cover amount"
          variant="standard"
        >
          {InsurancePackages.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div className="flex justify-right items-right mt-6">
        <Button variant="outlined">Register now</Button>
      </div>
    </Box>
  );
}
