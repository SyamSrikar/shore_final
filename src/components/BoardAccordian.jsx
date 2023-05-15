import {React,useState} from 'react'
import { Flex,Image } from '@chakra-ui/react';
import { BsArrowUpCircle,BsArrowDownCircle } from "react-icons/bs";
import '../events.css'


const BoardAccordian=(props) =>{

    const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex marginTop={'5px'}
    flexDir={'column'}
    padding={'5px'} 
    border={'1px'}
    borderColor={'#505050'}
    width={'100%'}>
        <Flex
            
            padding={'10px 1px'}
            fontSize={'20px'}   
            cursor={'pointer'} onClick={() => setIsOpen(!isOpen)}  alignItems={'center'} justifyContent={props.device && 'space-between'} >
            <Flex width={props.device?'8%':'8%'} justifyContent={'center'}>
            <Image src={process.env.PUBLIC_URL + props.medal}/>
            </Flex>
            <Flex width={props.device?'45%':'50%'} color={'white'} flexWrap={'wrap'} paddingX={!props.device && '20px'}>
                <p>{props.value.campus}</p>
            </Flex>
            <Flex width={props.device?'33%':'35%'} color={'white'} flexWrap={'wrap'} paddingX={!props.device && '20px'}>
                <p > points: {props.value.points}</p>
            </Flex>
            <Flex width={props.device?'5%':'5%'} justifyContent={'center'}>
                {isOpen?<BsArrowUpCircle color={'white'} size={'25px'}/>:<BsArrowDownCircle color={'white'} size={'25px'}/>}
            </Flex>
        </Flex>
        {isOpen && <Flex width={'100%'} fontSize={'20px'} fontWeight={'700'} height={isOpen?'inherit':'0px'} padding={'10px 10px'} overflow={isOpen?'auto':'hidden'} color={'#FAFAFA'} borderColor={isOpen?'white':'None'}>
            <Flex width={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Flex width={'50%'} paddingX={'5%'} paddingLeft={props.device && '0px'} height={'100%'} flexDir={'column'} justifyContent={'flex-start'} borderRight={'1px solid white'} textAlign={'left'}>
                    <Flex justifyContent={'center'} marginBottom={'20px'} ><p>Sports</p></Flex>
                    {props.value.sport.map((e,i)=>{
                        const [key, value] =Object.entries(e);
                        return(
                            <Flex width={'100%'} justifyContent={'space-evenly'} alignItems={'center'} borderTop={i!==0?'2px solid #505050':'none'}>
                                 <Flex width={'90%'}><p className={'sports_name'}>{key[0]}</p></Flex>
                                <Flex width={'5%'}><p className={'sports_name'}>{key[1]}</p></Flex>
                            </Flex>
                        )
                    })}     
                    </Flex>
                    <Flex width={'50%'} paddingX={'5%'} height={'100%'} flexDir={'column'} justifyContent={'flex-start'} textAlign={'left'}>
                    <Flex justifyContent={'center'} marginBottom={'20px'}><p>Culturals</p></Flex>
                    {props.value.cultural.map((e,i)=>{
                        const [key, value] =Object.entries(e);
                        return(
                            <Flex width={'100%'} justifyContent={'space-around'} alignItems={'center'} borderTop={i!==0?'2px solid #505050':'none'} >
                                 <Flex width={'90%'}><p className={'sports_name'}>{key[0]}</p></Flex>
                                <Flex width={'5%'}><p className={'sports_name'}>{key[1]}</p></Flex>
                            </Flex>
                        )
                    })}  
                </Flex>
                </Flex>
                
            </Flex>}


    </Flex>
    
  )
}

export default BoardAccordian