import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Faq from './components/Faq';
import Footer from './components/Footer';
import Themes from './components/Themes';
import { useState } from 'react';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Events from './components/Events';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';

function App() {

  const [click,setClick]=useState(false);
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
  setIsMobile(width<=768);
}, [width])

  return (
    !click ?<>
      <ChakraProvider>
      <Home/>
      <About value={isMobile}/>
      <Themes value={isMobile}/>
      <Events value={isMobile}/>
      <Store/>
      <Faq value={isMobile} state={setClick}/>
      <Footer value={isMobile}/>
    </ChakraProvider>
    </>:<Navigation value={isMobile} state={setClick}/>
    
  );
}

export default App;
