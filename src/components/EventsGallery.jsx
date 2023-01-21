import React from 'react'
import Carousel from 'react-grid-carousel'
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
      breakpoint: 768,
      cols: 1,
      rows: 1,
      gap: 10,
      loop: true,
      autoplay: 1000
    }
  ]
 
const EventsGallery = (props) => {
  return (
    <Carousel cols={2} rows={1} gap={10} responsiveLayout={responsive} loop >
    {props.value.map((c,i)=>(
        <Carousel.Item key={i}>
            <Flex  flexDir={'column'} flexWrap={'wrap'} maxWidth={'650'}>
            <Image src={c.img}  height={'300px'}></Image>
            <Flex padding={'5px'}><p> {c.name}</p></Flex>
            <Flex width={'600px'} padding={'5px'} height={'168px'}><p>{c.desc}</p></Flex>
            <Flex   padding={'5px'} color={'white'} flexDir={'column'}>
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
export default EventsGallery