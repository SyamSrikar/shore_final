import React from 'react'
import Carousel from 'react-grid-carousel'

import { Flex, Image } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react'
import { IoTimeOutline} from "react-icons/io5";
import { GiTheater, GiTruce } from "react-icons/gi";
import { MdOutlineDateRange} from "react-icons/md";


const responsive=[
    {
      breakpoint: 767,
      cols: 1,
      rows: 1,
      loop: true,
      autoplay: false,
      hideArrow:false,
      showDots:true,
      scrollSnap:true,
      gap:20,
      dotColorActive:'#3C79F5',
    }
  ]
 
const EventsCarousel = (props) => {
  return (
    <Carousel cols={2} dotColorActive={'#3C79F5'} rows={1} gap={0} scrollSnap={true} responsiveLayout={responsive} loop={true}  showDots={true} autoplay={true} >
    {props.value.map((c,i)=>(
        <Carousel.Item key={i}>
            <Flex flexDir={'column'} maxWidth={props.device?'100vw': '650px'}  flexWrap={'wrap'} marginLeft={props.device?'0px':'15px'} marginBottom={props.device?'0px':'15px'}>
            <Image src={c.img}  alt={'Image not found'} height={props.device?'200px':'300px'}></Image>
            <Flex flexWrap={'wrap'} padding={'5px'} className={'events-name'} ><p> {c.name}</p></Flex>
            <Flex   flexWrap={'wrap'} padding={'5px'} marginBottom={'10px'}><p>{c.desc}</p></Flex>
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
            </Flex>
        </Flex>
        </Carousel.Item>
    ))}
    </Carousel>
  )
}
export default EventsCarousel