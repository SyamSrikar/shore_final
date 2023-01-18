import React from 'react';
import '../App.css'
import { Flex } from '@chakra-ui/react';

function ImageAlign(props) {
  return (
    (!props.val && <div className='circle-container'>
        <div className='center'><img src='./images/goals.png'/></div>
        <div className='deg45'><img src='./images/goal1.png'/></div>
        <div className='deg135'><img src='./images/goal2.png'/></div>
        <div className='deg225'><img src='./images/goal3.png'/> </div>
        <div className='deg270'><img src='./images/goal4.png'/></div>
        <div className='deg315'><img src='./images/goal5.png'/></div>
        </div>) ||
    (props.val && 
        <Flex className='circle-container-mobile' flexDir={'column'} width={'100%'} paddingX={'5px'} marginTop={'20px'} justifyContent={'center'} padding-inline-end={'5px'}>
            <Flex justifyContent={'center'} alignItems={'center'}><img src='./images/goals.png'/></Flex>
            <Flex marginTop={'30px'} justifyContent={'center'}>
                <Flex flexDir={'column'} justifyContent={'space-evenly'} height={'550px'}>
                    <img src='./images/goal1.png'/>
                    <img src='./images/goal2.png'/>
                    <img src='./images/goal3.png'/>
                </Flex>
                <Flex flexDir={'column'} justifyContent={'space-around'} height={'558px'} >
                    <img src='./images/goal4.png' className='img1'/>
                    <img src='./images/goal5.png' className='img2'/>
                </Flex>
            </Flex>
        
        </Flex>
  )
)}

export default ImageAlign