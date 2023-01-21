import React from 'react'
import Carousel from 'react-grid-carousel'
import EventsGallery from './EventsGallery'
import { Flex, Image } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react'
import { IoTimeOutline} from "react-icons/io5";
import { GiTheater } from "react-icons/gi";
import { MdOutlineDateRange} from "react-icons/md";


const responsive=[
    {
      breakpoint: 900,
      cols: 1,
      rows: 1,
      loop: true,
      autoplay: 3000,
      hideArrow:false,
      showDots:true,
      scrollSnap:true,
      gap:0
    }
  ]
 
const EventsCarousel = (props) => {
  return (
    <Carousel cols={2} rows={1} gap={0} mobileBreakpoint={'767'} responsiveLayout={responsive} loop  showDots={true} autoplay={3000}>
    {props.value.map((c,i)=>(
        <Carousel.Item key={i}>
            <Flex flexDir={'column'} maxWidth={props.device?'400px':'650px'} flexWrap={'wrap'} marginLeft={props.device?'0px':'20px'}>
            <Image src={c.img} width={'100%'} height={'300px'}></Image>
            <Flex flexWrap={'wrap'} padding={'5px'}><p> {c.name}</p></Flex>
            <Flex   flexWrap={'wrap'} padding={'5px'} height={'168px'}><p>{c.desc}</p></Flex>
            <Flex   flexWrap={'wrap'} padding={'5px'} color={'white'} flexDir={'column'}>
                <Flex>
                    <Tag size={'lg'} key={'0'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='12px' as={MdOutlineDateRange} />
                        <TagLabel>{c.date}</TagLabel>
                    </Tag>
                </Flex>
                <Flex>
                    <Tag size={'lg'} key={'1'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='12px' as={IoTimeOutline} />
                        <TagLabel>{c.time}</TagLabel>
                    </Tag>
                </Flex>
                <Flex>
                    <Tag size={'lg'} key={'2'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='12px' as={GiTheater} />
                        <TagLabel>{c.venue}</TagLabel>
                    </Tag>
                </Flex>
            </Flex>
        </Flex>
        </Carousel.Item>
    ))}
    </Carousel>
    
  )
}
export default EventsCarousel