import React from 'react';
import {Flex} from '@chakra-ui/react';
import ImageAlign from './ImageAlign';
import '../App.css';

function Themes(props) {
  return (
    <>  
        ({props.value && <Flex flexDir={'column'} justifyContent={'center'} marginTop={props.value?'0px':'30px'} alignItems={'center'} paddingX={props.value?'10px':'50px'} backgroundColor={'#020710'} color={'white'} flexWrap={'wrap'}>
            <Flex paddingY={'10px'} className='heading'><p>THEMES</p></Flex>
            <Flex padding={'10px 0px 10px 10px'} className='theme' flexWrap={'wrap'}><p>Shorefest 2023 believes that youth are the future leaders of the world and to tackle the problems of the present and future we have our theme as the Sustainable Development Goals set by the United Nations-theme content on the website.</p></Flex>
            <Flex flexGrow={'1'} width={'100%'} justifyContent={'center'}><ImageAlign val={props.value}/></Flex>
        </Flex>} || {!props.value && <Flex  justifyContent={'center'} alignItems={'center'} paddingX={props.value?'10px':'0px'} backgroundColor={'#020710'} color={'white'} flexWrap={'wrap'} width={'100%'}>
            <Flex width={'50%'} justifyContent={'center'}><ImageAlign val={props.value}/></Flex>
            <Flex flexDir={'column'} width={'30%'} flexWrap={'wrap'}>
              <Flex className='heading'><p>THEMES</p></Flex>
              <Flex padding={'10px 0px 10px 10px'} marginTop={props.value?'0px':'30px'} className='theme' flexWrap={'wrap'}><p>Shorefest 2023 believes that youth are the future leaders of the world and to tackle the problems of the present and future we have our theme as the Sustainable Development Goals set by the United Nations-theme content on the website.</p></Flex>
            </Flex>
        </Flex>})

    </>
  )
}

export default Themes