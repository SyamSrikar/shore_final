import React from 'react';
import {Flex} from '@chakra-ui/react';
import ImageAlign from './ImageAlign';
import '../App.css';


function Themes(props) {
  return (
    <>  
        {props.value && <Flex flexDir={'column'} justifyContent={'center'} marginTop={props.value?'0px':'30px'} alignItems={'center'} paddingX={props.value?'10px':'50px'} backgroundColor={'#020710'} color={'white'} flexWrap={'wrap'}>
            <Flex paddingY={'10px'} className='heading'><p>THEMES</p></Flex>
            <Flex padding={'10px 20px 10px 20px'} className='theme' flexWrap={'wrap'}><p>SHORe 2023 believes today’s generation of young people will be the future world leaders, to tackle the problem of just not exploring the educational aspects of a person and to make them have a better sustainable learning experience, the theme has been adopted from Sustainable Development Goals set by the United Nations. Various events and contests have been planned and will be organized to promote each of the chosen goals among the audience.</p></Flex>
            <Flex flexGrow={'1'} width={'100%'} justifyContent={'center'}><ImageAlign val={props.value}/></Flex>
        </Flex>} 
         {!props.value && <Flex  justifyContent={'center'} alignItems={'center'} paddingX={props.value?'10px':'0px'} backgroundColor={'#020710'} color={'white'} flexWrap={'wrap'} width={'100%'}>
            <Flex width={'45%'} justifyContent={'center'}><ImageAlign val={props.value}/></Flex>
            <Flex flexDir={'column'} width={'30%'} flexWrap={'wrap'}>
              <Flex className='heading'><p>THEMES</p></Flex>
              <Flex padding={'10px 0px 10px 10px'} marginTop={props.value?'0px':'30px'} className='theme' flexWrap={'wrap'}><p>SHORe 2023 believes today’s generation of young people will be the future world leaders, to tackle the problem of just not exploring the educational aspects of a person and to make them have a better sustainable learning experience, the theme has been adopted from Sustainable Development Goals set by the United Nations. Various events and contests have been planned and will be organized to promote each of the chosen goals among the audience.</p></Flex>
            </Flex>
        </Flex>}

    </>
  )
}

export default Themes