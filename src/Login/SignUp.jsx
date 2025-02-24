import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (email && password) {
        
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        setError('');
        alert('Account created successful!');
        setEmail('');
        setPassword('');
    } else {
        setError('Please fill in both fields.');
    }
  };

  return (
    <Container maxWidth="xs">

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </Container>
  );
};

export default SignUp;
