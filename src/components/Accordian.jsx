import React from 'react'
import { useState } from 'react';
import {Flex} from '@chakra-ui/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import {HiOutlineMinusCircle} from 'react-icons/hi';
import '../App.css';


const Accordian = (props)=> {

    const [isOpen, setIsOpen] = useState(false);
    return (<Flex
    marginTop={'5px'}
    flexDir={'column'}
    padding={'5px'} 
    borderBottom={'1px'}
    borderColor={'#505050'}
    width={'100%'}
    >
        <Flex marginTop={props.value?'-20px':'0px'}
            padding={'10px 1px'}
            fontSize={'20px'}   
            cursor={'pointer'} onClick={() => setIsOpen(!isOpen)}  alignItems={'center'} justifyContent={'space-between'}>
            <Flex color={'white'} flexWrap={'wrap'}><p className='question'>{props.question}</p></Flex>
            <Flex>
                {isOpen?<HiOutlineMinusCircle color={'white'} size={'25px'}/>:<IoAddCircleOutline color={'white'} size={'25px'}/>}
            </Flex>
        </Flex>
        <Flex fontSize={'17px'} height={isOpen?'inherit':0} paddingX={'30px'} overflow={isOpen?'auto':'hidden'} color={'#FAFAFA'} borderColor={isOpen?'white':'None'}>
            <p className='answer'>{props.answer}</p>
        </Flex>
    </Flex>);
}

export default Accordian