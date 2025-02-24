import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Box, Button, Typography, Container } from '@mui/material';

const Main = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>

      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Typography>
      
      {isSignUp ? <SignUp /> : <SignIn />}

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 2 }}>
        
        <Button
          variant="outlined"
          onClick={() => setIsSignUp(!isSignUp)}
          sx={{ width: '100%', maxWidth: 300 }}
        >
          Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
        </Button>
        
      </Box>
    </Container>
  );
};

export default Main;
