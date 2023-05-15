import { Flex } from '@chakra-ui/react'
import React from 'react';
import Accordian from './Accordian';
import '../App.css';

const Faq =(props) => {
  return (
        <Flex marginTop={props.value?'20px':'60px'} padding={props.value?'15px 50px 30px 50px':'0px 50px 50px 50px'} flexDir={'column'} width={'100%'} height={'100%'} backgroundColor={'#020710'} >
              <Flex className='heading faq'><p>FAQ'S</p></Flex>
              <Flex flexGrow={'1'} flexDir={'column'} alignItems={'center'}> 
                <Flex  minW={props.value?'118%':'55%'} maxW={props.value?'118%':'55%'} marginTop={'30px'} flexDir={'column'} marginBottom={'30px'}>
                <Accordian question={'What are the dates of SHORe FEST 2023?'} answer={'The 1st Edition of SHORe FEST will be organized from 3rd to 5th FEBRUARY 2023.'}/>
                <Accordian question={'What is the duration of the registration process during the fest?'} answer={'The event registration process will begin on 26th January and will be open throughout the fest, except from 6 PM to 11 PM during concert nights. Entry to the concert nights will be permitted only after registration is completed.'}/>
                <Accordian question={'Would any transportation services be provided to reach the campus?'} answer={'Transportation services will not be provided by the SHORe Committee or the University.'}/>
                <Accordian question={'How do I register for SHORe Fest?'} answer={'You can register at the SHORe website or through the QR codes that are available all over the VISAKHAPATNAM Campus . For further assistance, registration desks are located throughout the campus where you can Self register or our team can help you out.'}/>
                <Accordian question={'Which celebrities are going to perform at the concert nights of SHORe Fest 2023?'} answer={'The celebs performing at the SHORe Fest 2023 concert nights will be announced soon on the SHORe Fest, GITAM Visakhapatnam Instagram page.'}/>
                <Accordian question={'What should you look out for at the SHORe Fest?'} answer={'SHORe Fest has a huge diversity of events and various other elements planned for the attendees, starting with concert night to various stalls and games. While you walk through the streets of GITAM during Fest, keep a good view of your surroundings or you could miss out on something interesting.'}/>
                <Accordian question={'If I book my ticket online, how do I collect my ticket?'} answer={'You will be receiving a mail which contains the soft copy of your ticket attached to it, while entering the concert night you have to carry an identity card along with your digital ticket.'}/>
                <Accordian question={'Can I get a refund if I change my mind about attending?'} answer={'No, refund will not be given if you change your mind after purchasing the ticket.'}/>
                </Flex>
              </Flex>
        </Flex>
  )
}

export default Faq