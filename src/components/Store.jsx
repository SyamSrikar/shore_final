import React from 'react';
import '../App.css';
import { Flex } from '@chakra-ui/react';


function Store() {
  return (
    <>
        <Flex justifyContent={'center'} marginTop={'40px'} flexDir={'column'} padding={'0px 50px 0px 50px'}>
            <Flex className={'heading'}>STORE</Flex>
            <Flex marginTop={'20px'} className='theme'>Add some style to your life with our merch! Flex the shore and enjoy the funky and stylish merchandise we have for you! Click the link below to see the merch store!</Flex>
        </Flex>
    </>
  )
}

export default Store