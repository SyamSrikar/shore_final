import { Flex } from '@chakra-ui/react'
import React from 'react';
import Accordian from './Accordian';
import '../App.css';

const Faq =(props) => {
  return (
        <Flex padding={props.value?'15px 50px 30px 50px':'50px'} flexDir={'column'} width={'100%'} height={'100%'} backgroundColor={'#020710'} >
              <Flex marginTop={props.value?'20px':'50px'}  padding={'15px 0px'} marginBottom={'50px'} justifyContent={'center'} alignItems={'center'}><button class={"glow-on-hover"} type="button" onClick={()=>{ props.state(true)} }>MEET THE TEAM !!!</button></Flex>
              <Flex className='heading faq'><p>FAQ'S</p></Flex>
              <Flex flexGrow={'1'} flexDir={'column'} alignItems={'center'}> 
                <Flex  minW={props.value?'118%':'55%'} maxW={props.value?'118%':'55%'} marginTop={'40px'} flexDir={'column'} marginBottom={'30px'}>
                <Accordian question={'What are the dates of SHORe FEST 2023?'} answer={'The 1st Edition of SHORe FEST will be organized from 3rd to 5th February 2023.'}/>
                <Accordian question={'What is the duration of the registration process during the fest?'} answer={'The registration process will start from the 23rd and will be open during all the times of the fest except for 6 pm to 11 pm during the time of pro nights. Entry to the pro nights will only be allowed after the completion of registration.'}/>
                <Accordian question={'Would any transportation services be provided to reach the campus?'} answer={'No, Transportation services(Buses and Cargo) will not be provided by SHORe Fest.'}/>
                <Accordian question={'Where should I report first in GITAM Visakhapatnam when reaching the Campus?'} answer={'Reaching inside the campus, participants have to first report to the Registration Desk of SHORe Fest situated near the GITAM Bhavan Building.'}/>
                <Accordian question={'Who are the celebrities which are going to perform at the pro nights of SHOREe Fest 2023?'} answer={'The celebrities performing at the pro nights of SHORe Fest 2023 will be announced soon from the Instagram page of SHOREe Fest, GITAM Visakhapatnam.'}/>
                </Flex>
              </Flex>
        </Flex>
  )
}

export default Faq