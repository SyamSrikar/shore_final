import {React,useState,useEffect} from 'react'
import { Flex } from '@chakra-ui/react';
import BoardAccordian from './BoardAccordian';

const Leaderboard=(props)=> {
    const [data,setdata]=useState("");
    let c;

    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/63ea2caac0e7653a05765665")
          .then(res => res.json())
          .then(
            (result) => {
                c={...result,record:{...result.record,leaderboard: result.record.leaderboard.sort((a,b) => b.points-a.points)}};
                setdata(c.record.leaderboard)
            },
            (error) => {
              console.log("error")
            }
          )
      }, [])


  return (
    <Flex flexDir={'column'} width={'100%'} height={'100%'}>
        <Flex marginTop={props.value?'20px':'60px'} padding={props.value?'15px 50px 30px 50px':'0px 50px 10px 50px'} className='heading faq'><p>Leaderboard</p></Flex>
        <Flex flexGrow={'1'} flexDir={'column'} alignItems={'center'}> 
        <Flex  minW={props.value?'95%':'50%'} maxW={props.value?'100%':'55%'} marginTop={'30px'} flexDir={'column'} marginBottom={'30px'} paddingX={props.value && '10px'}>
            {data[0] && <BoardAccordian device={props.value} value={data[0]} medal={'/images/first_place.png'}  />}
            {data[1] && <BoardAccordian device={props.value} value={data[1]} medal={'/images/second_place.png'} />}
            {data[2] && <BoardAccordian device={props.value} value={data[2]} medal={'/images/third_place.png'} />}
        </Flex>
    </Flex>
    </Flex>
  )
}

export default Leaderboard