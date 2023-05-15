import React from 'react'
import Carousel from 'react-grid-carousel'
import '../App.css'
import { useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import Modal1 from './Modal1'


import { Button } from '@chakra-ui/react'

const responsive=[
    {
      breakpoint: 767,
      cols: 1,
      rows: 1,
      loop: true,
      autoplay: 2000,
      hideArrow:false,
      showDots:true,
      scrollSnap:true,
      gap:20,
      dotColorActive:'#3C79F5',
    },
    {
      breakpoint: 830,
      cols: 2,
      rows: 1,
      loop: true,
      autoplay: 2000,
      hideArrow:false,
      showDots:true,
      scrollSnap:true,
      gap:20,
      dotColorActive:'#3C79F5',
    }
  ]

  
 
const SportsCarousel = (props) => {
    const[play,setplay]=useState(true)
    const[data,setdata]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const[heading,setheading]=useState("")
    
  return (<div position={'relative'} marginTop={'10px '}>
    <Carousel cols={3} dotColorActive={'#3C79F5'}  rows={1} gap={0} scrollSnap={true} responsiveLayout={responsive} loop={true}  showDots={true} autoplay={play?3000:false}>
    {props.value.map((c,i)=>(
        <Carousel.Item key={i}>
            <Flex  border={'2px solid white'} flexDir={'column'} maxWidth={props.device?'100vw': '445px'}  flexWrap={'wrap'} marginLeft={props.device?'0px':'15px'} marginBottom={props.device?'0px':'15px'}>
            {c.name==='Cricket Stars' && <video src={process.env.PUBLIC_URL+c.img} autoPlay={'true'} playsInline={true} loop={'true'} muted={'true'} className={props.device?'cricket-video-mobile':'cricket-video'} alt={'cricket starts video'}></video>}
            {c.name!=='Cricket Stars' && <Image src={process.env.PUBLIC_URL+c.img}  alt={'sports image'} height={props.device?'200px':'300px'}></Image>}
            <Flex paddingX={'15px'} flexDir={'column'}>
            <Flex flexWrap={'wrap'} padding={'5px'} className={'events-name'} ><p> {c.name}</p></Flex>
            {c.name==='E-Sports' &&  <p className='events-sponser'>Powered by -<span className='sponser-name'> Marcos Gaming</span></p>}
            <Flex  textAlign={'left'}  flexWrap={'wrap'} height={props.height} padding={'5px'} marginBottom={!props.device && '10px'}><p>{c.desc}</p></Flex>
            {c.name==='Cricket Stars' && <Flex justifyContent={'center'} className='sponser-name'>Play and Win Exciting Prizes</Flex>}
            {c.name!=='E-Sports' &&<Flex height={c.name==='Cricket Stars'?'40px':'70px'}></Flex> }
            {c.name==='E-Sports' && 
              <Flex width={'100%'}  alignItems={'center'} justifyContent='center'>
              <Flex paddingX={'10px'} cursor={'pointer'} onClick={()=>{window.open('http://www.vishalperipherals.in/','_blank')}}>
              <img width={'30px'} height={'30px'} src={process.env.PUBLIC_URL+'/images/website.png'}></img>
          </Flex>
                <Flex paddingX={'10px'} cursor={'pointer'} onClick={()=>window.open('https://www.instagram.com/vishalperipheralsts/','_blank')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40px" height="38px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5" /><stop offset=".328" stop-color="#ff543f" /><stop offset=".348" stop-color="#fc5245" /><stop offset=".504" stop-color="#e64771" /><stop offset=".643" stop-color="#d53e91" /><stop offset=".761" stop-color="#cc39a4" /><stop offset=".841" stop-color="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9" /><stop offset=".999" stop-color="#4168c9" stop-opacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg></Flex>
                <Flex paddingX={'10px'} cursor={'pointer'} onClick={()=>window.open('https://www.youtube.com/channel/UC5lBoXeDXQhxyhAN7sPxI8Q','_blank')} ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="40" height="40"
viewBox="0 0 48 48">
<path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
</svg></Flex>     
                     
            </Flex>  
            }

            { props.device && c.name==='Cricket Stars' && <Flex marginBottom={'20px'} paddingTop={'10px'} justifyContent={'center'}  ><Flex className='schedule' onClick={()=>{window.open('https://www.facebook.com/gaming/play/544652224092593/?source=fb_gg_url&ext=1675257421&hash=AeRbLJUU8Cb8H3PIcB8','_blank')}}><Button colorScheme='messenger' variant='solid'>
    Play Game
  </Button></Flex></Flex>}

            {!props.device && c.name==='Cricket Stars'  && <Flex marginTop={'5px'} marginBottom={'20px'} justifyContent={'center'}  ><Flex className='schedule' onClick={()=>{window.open('https://www.facebook.com/gaming/play/544652224092593/?source=fb_gg_url&ext=1675257421&hash=AeRbLJUU8Cb8H3PIcB8','_blank')}}><Button colorScheme='messenger' variant='solid'>
    Play Game
  </Button></Flex></Flex>}

            {!props.device && c.name!=='Cricket Stars' && <Flex marginTop={'5px'} marginBottom={'20px'} justifyContent={'center'}  ><Flex className='schedule' onClick={()=>{onOpen();setdata(c.dtv);setheading(c.name);setplay(false) }}><Button colorScheme='messenger' variant='solid'>
    Schedule
  </Button></Flex></Flex>}
            { props.device && c.name!=='Cricket Stars' && <Flex marginBottom={'20px'} paddingTop={'10px'} justifyContent={'center'}  ><Flex className='schedule' onClick={()=>{onOpen();setdata(c.dtv);setheading(c.name);setplay(false) }}><Button colorScheme='messenger' variant='solid'>
    Schedule
  </Button></Flex></Flex>}

        </Flex></Flex>
        </Carousel.Item>
    ))}
    </Carousel>
    <Modal1 style={props.device} isopen={isOpen} onclose={onClose} title={heading} data={data}/></div>
  )
}
export default SportsCarousel