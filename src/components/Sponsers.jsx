import React from 'react'
import { Flex,Image } from '@chakra-ui/react'
import '../events.css'

const images=[
    {
        image:'/sponsers/Marcos_Vishal2',
        type:'Official Gaming Partners'
    },
    
    {
        image:'/sponsers/YoVizag',
        type:'Official Media Partner'
    },
    {
        image:'/sponsers/RadissonBlu1',
        type:'Official Stay Partner'
    },
    {
        image:'/sponsers/Standy1',
        type:'Official Valuable Sponsor'
    },
    {
        image:'/sponsers/SaveSoil',
        type:'Official Sustainability Partner'
    }
]

const Sponsers=(props)=> {
  return (<Flex flexDir={'column'} alignItems={'center'}>
    <Flex paddingY={'30px'} className='heading'><p>Partners</p></Flex>
    <Flex paddingTop={'30px'} width={props.value?'70%':'30%'} height={props.value?'18%':'10%'}  flexDir={'column'}   justifyContent={'center'}  alignItems={'center'} >
            <Image   src={process.env.PUBLIC_URL+'/sponsers/Cococola.jpg'}></Image>
            <p className={props.value?'sponser-type type-mobile':'sponser-type type-desktop'} textAlign={'center'}>Associate Sponsor & <br></br><span className='cococola'>Official Beverage Partner</span> </p>
    </Flex>
    <Flex flexWrap={'wrap'} justifyContent={'center'} width={'100%'} paddingX={props.value?'20px':'110px'} marginBottom={'40px'} alignItems={props.value?'center':'baseline'}>
    {images.map((c,i)=>(
        <Flex  width={i===0?props.value?'80%':'25%':props.value?'40%':'17%'}  height={props.value?'18%':'15%'} flexDir={'column'} margin={props.value?'5%':'5%'} marginBottom={!props.value && '0%'} justifyContent={'center'}  textAlign={'center'}>
            <Image  src={process.env.PUBLIC_URL+c.image+'.png'}></Image>
            <p className={props.value?'sponser-type type-mobile':'sponser-type type-desktop'}>{c.type}</p>
        </Flex>))}
        <Flex>

        </Flex>
    </Flex>  </Flex>

  )
}

export default Sponsers