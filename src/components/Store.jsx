import React from 'react';
import '../App.css';
import '../about.css'
import { Flex,Image } from '@chakra-ui/react';


function Store(props) {
  return (
    <>
       {!props.value && <Flex justifyContent={'center'} flexWrap={'wrap'} marginY={'40px'} flexDir={'column'} padding={'0px 50px 0px 50px'}>
            
            <Flex marginTop={'40px'}>
            <Flex flexDir={'column'} width={'50%'} justifyContent={'center'} paddingLeft={'30px'}>
            <Flex className={'heading'}>STORE</Flex>
            <Flex  marginTop={'30px'} padding={props.value?'':'0px 50px 0px 50px'} className='theme'>Add some style to your life with our merch! Flex the shore and enjoy the funky and stylish merchandise we have for you! Click the link below to see the merch store!</Flex>
            <Flex justifyContent={'center'} zIndex={'1050'} marginTop={'30px'} alignItems={'center'} >
                <Flex cursor={'pointer'} onClick={()=>{window.open('https://maps.app.goo.gl/ZikzmVTnS7aH7yaL9','_blank')} } className={'gradient-border box'}>Go To Store</Flex>
            </Flex>             </Flex>
            <Flex width={'50%'} justifyContent={'center'}>
            <Flex><Image width={'100%'} height={'100%'} src={process.env.PUBLIC_URL +'/images/store.png'} alt='store image'></Image></Flex>
            </Flex>
            </Flex>
        </Flex>}
        {props.value && 
          <Flex marginY={'40px'} flexDir={'column'} justifyContent={'center'} paddingX={'20px'}>
            <Flex className={'heading'}>STORE</Flex>
            <Image width={'100%'} height={'100%'} src={process.env.PUBLIC_URL +'/images/store.png'} alt='store image'></Image>
            <Flex paddingX={'20px'} marginTop={'30px'} className='theme'>Add some style to your life with our merch! Flex the shore and enjoy the funky and stylish merchandise we have for you! Click the link below to see the merch store!</Flex>
            <Flex justifyContent={'center'} zIndex={'1050'} marginTop={'30px'} alignItems={'center'} >
                <Flex cursor={'pointer'} onClick={()=>{window.open('https://maps.app.goo.gl/ZikzmVTnS7aH7yaL9','_blank')} } className={"gradient-border box"}><p className='button-text'>Go To Store</p></Flex>
            </Flex>            </Flex>
        }
    </>
  )
}

export default Store