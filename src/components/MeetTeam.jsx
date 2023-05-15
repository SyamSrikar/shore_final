import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import '../about.css'
import '../App.css'



const MeetTeam=(props)=> {
  return (<>
     {!props.value && <Flex  marginTop={'50px'}>           
        <Flex width={'50%'} top={'50%'} justifyContent={'center'} >
            <Image marginTop={'8%'} src={process.env.PUBLIC_URL +'/images/team.jpg'} width={'60%'} ></Image>
        </Flex>
        <Flex width={'50%'} justifyContent={'center'} flexDir={'column'} paddingLeft={'30px'}  paddingRight={'120px'}>
            <Flex margin={props.value?'10px':'10px 0px 10px 0px'} justifyContent={'center'} width={'100%'} className='heading'><p>TEAM SHORE</p></Flex>

                <Flex><p className='theme'>Being a student-led university fest, the core committee has buckled their shoes and are on their toes! Lead SIGs and Clubs of GITAM have all come together to make this fest “HAPPEN”! </p></Flex>
                { <Flex><p className='model-desc'>So here’s a “Meet the team” section for you to get acquainted with the squad!</p></Flex>  }
                { <Flex justifyContent={'center'} zIndex={'1050'} alignItems={'center'} >
                <Flex cursor={'pointer'} onClick={()=>{ props.state(true)} } className={'gradient-border box'}><p className='button-text'>Meet the Team !</p></Flex>
            </Flex>            }
             </Flex> 
        </Flex>
}
     {props.value && 
            <Flex flexDir={'column'} flexWrap={'wrap'}  justifyContent={'center'} marginTop={'50px'} paddingX={'35px'}>
                <Flex  justifyContent={'center'} marginBottom={'30px'} width={'100%'} className='heading'><p>TEAM SHORE</p></Flex>
                <Image src={process.env.PUBLIC_URL +'/images/team.jpg'} alt={'team image'} width={'100%'} height={'90%'}></Image>

                <Flex marginY={'20px'}>
                    <p className='theme'>Being a student-led university fest, the core committee has buckled their shoes and are on their toes! Lead SIGs and Clubs of GITAM have all come together to make this fest “HAPPEN”! </p>
                </Flex>
                { <Flex justifyContent={'center'} zIndex={'1050'} alignItems={'center'} >
                <Flex cursor={'pointer'} onClick={()=>{ props.state(true)} } className={'gradient-border box'}>Meet the Team !</Flex>
            </Flex>  }
            </Flex>
    }</>
  )
}

export default MeetTeam