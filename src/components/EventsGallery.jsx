import React from 'react'
import '../events.css';
import { Flex } from '@chakra-ui/react';
import {
    Tag,
    TagLabel,
    TagLeftIcon
  } from '@chakra-ui/react'
import { IoTimeOutline} from "react-icons/io5";
import { GiTheater } from "react-icons/gi";
import { MdOutlineDateRange} from "react-icons/md";


function EventsGallery(props) {
  return (
    <div width={'300px'} height={'500px'}>
          <Flex flexDir={'column'} flexWrap={'wrap'}>
            <Flex> <img src={props.val.img} width={'100px'} height={'100px'}></img> </Flex>
            <Flex height={'50px'}>
                <p> {props.val.title}</p>
            </Flex>
            <Flex>
                <p>{props.val.desc}</p>
            </Flex>
            <Flex height={'100px'}>
                <Flex>
                    <Tag size={'lg'} key={'0'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='12px' as={MdOutlineDateRange} />
                        <TagLabel>{props.val.date}</TagLabel>
                    </Tag>
                </Flex>
                <Flex>
                    <Tag size={'lg'} key={'1'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='12px' as={IoTimeOutline} />
                        <TagLabel>{props.val.time}</TagLabel>
                    </Tag>
                </Flex>
                <Flex>
                    <Tag size={'lg'} key={'2'} variant='subtle' colorScheme='white'>
                        <TagLeftIcon boxSize='12px' as={GiTheater} />
                        <TagLabel>{props.val.venue}</TagLabel>
                    </Tag>
                </Flex>
            </Flex>
          </Flex>
        </div>)
}

export default EventsGallery