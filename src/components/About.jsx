import React from 'react'
import { Flex } from '@chakra-ui/react'
import '../about.css'
import { BsCalendar2Week } from "react-icons/bs";



const About=(props) =>{

  return (
    <div  className={props.value?'video-container-mobile':'video-container-desktop'}>
        <video  className={'video'} loop={'true'} autoPlay="autoplay" muted={'true'} playsInline={'true'} >
            <source src={process.env.PUBLIC_URL +"/about(1).mp4"} type="video/mp4" alt={'about video'}/>
        </video>
    
       <Flex flexDir={'column'} className={props.value?'modal modal-mobile':'modal modal-desktop'}  >
            <Flex justifyContent={'flex-start'}><p className={props.value?'heading heading-mobile':'heading heading-desktop'}>{!props.value&&'About SHORe'}{props.value&&<>About<br/>SHORe</>}</p></Flex>
            <Flex className='modal-desc' justifyContent={'center'}>
                SHORe 2023 is a culmination of years of preparation, passion and ambition of GITAM to celebrate a festival that features both athletic and artistic pursuits. These go beyond anything we could have imagined. The team envisions making it an absolute trailblazer of an event!
    The Serenity of Vizag beaches and the essence of GITAM's campus life can be captured with the word "Shore".
    SHORe, when said out loud, is a homonym of "शोर" in Hindi, which defines our tagline as "Sound of Joy"..
            </Flex>
            <Flex className={props.value?'dates dates-mobile':'dates dates-desktop'}>
                <Flex alignItems={'center'}><BsCalendar2Week/></Flex>
                <Flex marginLeft={'15px'}><div className={props.value?'date-mobile':'date-desktop'}>3<sup>rd</sup>, 4<sup>th</sup> & 5<sup>th</sup> February 2023</div></Flex>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} >
                <Flex onClick={()=>{window.open('https://guprojects.gitam.edu/Pro_Nites/','_blank')}} cursor={'pointer'} className={"gradient-border box"}><p className='button-text'>Buy A Ticket </p> </Flex>
            </Flex>
       </Flex>
    </div>
        
  )
}

export default About