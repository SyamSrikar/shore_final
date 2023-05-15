import React from 'react';
import '../App.css'
import { Flex } from '@chakra-ui/react';

function ImageAlign(props) {
  return (
    (!props.val && <div className='circle-container'>
        <div className='center'><img src={process.env.PUBLIC_URL +'/images/goals.png'} alt='goals image'/></div>
        <div className='deg45'><img src={process.env.PUBLIC_URL +'/images/goal1.png'} alt='goals image'/></div>
        <div className='deg135'><img src={process.env.PUBLIC_URL +'/images/goal2.png'} alt='goals image'/></div>
        <div className='deg225'><img src={process.env.PUBLIC_URL +'/images/goal3.png'} alt='goals image'/> </div>
        <div className='deg270'><img src={process.env.PUBLIC_URL +'/images/goal4.png'} alt='goals image'/></div>
        <div className='deg315'><img src={process.env.PUBLIC_URL +'/images/goal5.png'} alt='goals image'/></div>
        </div>) ||
    (props.val && 
        <Flex className='circle-container-mobile' flexDir={'column'} width={'100%'} paddingX={'5px'} marginTop={'20px'} justifyContent={'center'} padding-inline-end={'5px'}>
            <Flex justifyContent={'center'} alignItems={'center'}><img src={process.env.PUBLIC_URL +'/images/goals.png'}/></Flex>
            <Flex marginTop={'30px'} justifyContent={'center'}>
                <Flex flexDir={'column'} justifyContent={'space-evenly'} height={'550px'}>
                    <img src={process.env.PUBLIC_URL+'/images/goal1.png'} alt='goals image'/>
                    <img src={process.env.PUBLIC_URL +'/images/goal2.png'} alt='goals image'/>
                    <img src={process.env.PUBLIC_URL +'/images/goal3.png'} alt='goals image'/>
                </Flex>
                <Flex flexDir={'column'} justifyContent={'space-around'} height={'558px'} >
                    <img src={process.env.PUBLIC_URL +'/images/goal4.png'} alt='goals image' className='img1'/>
                    <img src={process.env.PUBLIC_URL +'/images/goal5.png'} alt='goals image' className='img2'/>
                </Flex>
            </Flex>
        
        </Flex>
  )
)}

export default ImageAlign