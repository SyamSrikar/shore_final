import React from 'react'
import Carousel from 'react-grid-carousel'
import '../events.css'
import { Flex, Image } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react'
import { IoTimeOutline} from "react-icons/io5";
import { GiTheater} from "react-icons/gi";
import { MdOutlineDateRange} from "react-icons/md";


const responsive=[
    {
      breakpoint: 767,
      loop:true,
      cols: 1,
      rows: 1,
      autoplay: 3000,
      hideArrow:false,
      showDots:true,
      scrollSnap:true,
      gap:20,
      dotColorActive:'#3C79F5',
    },
    {
      breakpoint: 830,
      loop:true,
      cols: 2,
      rows: 1,
      autoplay: 2000,
      hideArrow:false,
      showDots:true,
      scrollSnap:true,
      gap:20,
      dotColorActive:'#3C79F5',
    }
  ]
  
 
const EventsCarousel = (props) => {
  return (<div>
    <Carousel cols={3} dotColorActive={'#3C79F5'} rows={1} gap={0} scrollSnap={true} responsiveLayout={responsive} loop  showDots={true} autoplay={3000} >
    {props.value.map((c,i)=>(
        <Carousel.Item key={i}>
            <Flex border={'2px solid rgb(255,255,255,.5)'}  flexDir={'column'} maxWidth={props.device?'100vw': '445px'}  flexWrap={'wrap'} marginLeft={props.device?'0px':'15px'} marginBottom={props.device?'0px':'15px'}>
            <Image src={process.env.PUBLIC_URL +c.img}  alt={'Image not found'} height={props.device?'200px':'300px'}></Image>
            <Flex paddingX={'15px'} flexDir={'column'}>
            <Flex flexWrap={'wrap'} padding={'5px'} className={'events-name'} ><p> {c.name}</p></Flex>
            <Flex  textAlign={'left'}  flexWrap={'wrap'} padding={'5px'} height={props.height} marginBottom={'10px'}><p>{c.desc}</p></Flex>
            <Flex    padding={'5px'} color={'white'} flexDir={'column'} >
                <Flex >
                    <Tag size={'lg'} key={'0'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='18px' as={MdOutlineDateRange} />
                        <TagLabel>{c.date}</TagLabel>
                    </Tag>
                </Flex>
                <Flex>
                    <Tag size={'lg'} key={'1'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='18px' as={IoTimeOutline} />
                        <TagLabel>{c.time}</TagLabel>
                    </Tag>
                </Flex>
                <Flex>
                    <Tag size={'lg'} key={'2'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='16px' as={GiTheater} />
                        <TagLabel>{c.venue}</TagLabel>
                    </Tag>
                </Flex>
            </Flex></Flex>
        </Flex>
        </Carousel.Item>
    ))}
    </Carousel></div>
  )
}
export default EventsCarousel