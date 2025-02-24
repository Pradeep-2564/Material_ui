import React from 'react'
import { Box} from '@mui/material';
// import LandingPractice from './Components/Practice/pages/LandingPractice';
import BlogLanding from './Blog/Pages/BlogLanding';

// import First from './Components/First/First';
// import LandingPage from './Components/Pages/LandingPage';
// import { ThemeProvider } from '@emotion/react';
// import Main from './Login/Main';


function App() {

  // const [mode, setMode] = useState('light');
  // const darkTheme = createTheme({
  //   palette:{
  //     mode:mode
  //   }
  // })

  return(
    
    <Box>
       
      {/* <Main/> */}

      {/* <ThemeProvider theme={darkTheme}>
        <Box  bgcolor={"background.default"}>
          <LandingPage mode={mode} setMode={setMode} />
        </Box>
      </ThemeProvider> */}

{/* 
        <LandingPractice/>
        <First/> */}

        <BlogLanding/>


    </Box>

  )
}

export default App;
