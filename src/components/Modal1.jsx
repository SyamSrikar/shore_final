import React from 'react'
import { IoTimeOutline} from "react-icons/io5";
import { MdOutlineDateRange} from "react-icons/md";
import { GiTheater, GiTruce } from "react-icons/gi";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    Tag,
    TagLabel,
    TagLeftIcon
  } from '@chakra-ui/react'
import { Flex, Image } from '@chakra-ui/react'
import '../popup.css'

const Modal1=(props)=> {    
  return (
    <Modal isOpen={props.isopen} onClose={props.onclose} >
        <ModalOverlay />
        <ModalContent>
        <ModalCloseButton />
        <Flex margin={'auto'} marginTop={props.style?'6px':'10px'} className={props.style?'title-mobile':'title'} >{props.title}</Flex>
          <Flex justifyContent={'center'} flexDir={'column'} marginTop={props.style?'0px':'10px'} padding={props.style?'5px 20px 20px 20px':'20px'}>
                {props.data.map((x)=>(
                    <Flex flexDir={'column'} justifyContent={'center'}  borderBottom={'2px solid black'} margin={'5px 0px 5px 0px'}>
                      <Flex className={props.style?'macth-name-mobile':'match-name'}>{x.match}</Flex>
                      {x.fixture && <Flex className={props.style?'macth-name-mobile':'match-name'}>{x.fixture}</Flex>}

                          <Tag size={'lg'} key={'1'} variant='subtle' colorScheme='white'>
                              <TagLeftIcon boxSize={props.style?'15px':'18px'} as={MdOutlineDateRange} />
                              <TagLabel className={props.style?'match-desc-mobile':'match-desc'}>{x.date}</TagLabel>
                          </Tag>
                      
                          <Tag size={'lg'} key={'1'} variant='subtle' colorScheme='white'>
                              <TagLeftIcon boxSize={props.style?'15px':'18px'} as={IoTimeOutline} />
                              <TagLabel className={props.style?'match-desc-mobile':'match-desc'}>{x.time}</TagLabel>
                          </Tag>

                      <Flex>
                          <Tag size={'lg'} key={'1'} variant='subtle' colorScheme='white'>
                              <TagLeftIcon boxSize={props.style?'15px':'18px'} as={GiTheater} />
                              <TagLabel className={props.style?'match-desc-mobile':'match-desc'}>{x.venue}</TagLabel>
                          </Tag>
                      </Flex>
      
                    </Flex>
                ))}
          </Flex>
        </ModalContent>
      </Modal>
  )
}

export default Modal1