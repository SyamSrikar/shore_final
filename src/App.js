import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Faq from './components/Faq';
import Footer from './components/Footer';
import Themes from './components/Themes';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
const [isMobile,setIsMobile]=useState(false)
useEffect(() => {
  setIsMobile(width<768);
}, [width])

  return (
    <ChakraProvider>
      <Themes value={isMobile}/>
      <Faq value={isMobile}/>
      <Footer value={isMobile}/>
    </ChakraProvider>
  );
}

export default App;
