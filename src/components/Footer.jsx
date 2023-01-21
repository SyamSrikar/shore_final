import React from 'react'
import {Flex} from '@chakra-ui/react'; 
import '../App.css';

const Footer = (props) => {
  const link_style={justifyContent:'space-between' ,marginTop:'30px' ,alignItems:'center',fontSize:'25px',cursor:'pointer' ,width:'155px'};
  return (
    <Flex backgroundColor={'#020710'} padding={'40px'} paddingTop={'0px'} color={'white'} flexWrap={'wrap'} justifyContent={'space-around'}> 
        {!props.value && <Flex height={'250px'} marginBottom={props.value?'50px':'20px'}> <img src='../images/logo.png' alt='LOGO'></img> </Flex>}
        <Flex flexDir={'column'} justifyContent={'flex-start'} marginBottom={props.value?'50px':'0px'}  >
            <p className='footer-heading' ><b>Visakhapatnam Campus</b></p>
            <br></br>
              <p className='footer-addr'>
                Gandhi Nagar, Rushikonda,<br></br>
                Visakhapatnam-530045<br></br>
                Andhra Pradesh,India
              </p>
            <br></br>
            <a href='mailto:registrar@gitam.edu' className='footer-addr'>unifest_cc@gitam.in</a>
            
        </Flex>
        <Flex flexDir={'column'}  justifyContent={'flex-start'} marginBottom={props.value?'80px':'0px'} >
             <Flex justifyContent={'center'} className='footer-heading '><b>Social Media Links</b></Flex>
             <Flex flexDir={'column'} marginLeft={'40px'} width={'60%'} justifyContent={'center'} >
                <Flex style={link_style} onClick={()=>window.location.href = "https://www.instagram.com/shore.gitam/"}>  
                  <img src='../images/instagram.png' width={'35px'} height={'35px'}></img>
                  <p className='footer-link'>Instagram</p>
                </Flex>
                <Flex style={link_style} onClick={()=>window.location.href = "https://www.facebook.com/profile.php?id=100088443708932&mibextid=LQQJ4d"}>
                  <img src='../images/facebook.png' width={'35px'} height={'35px'}></img>
                  <p className='footer-link'>Facebook</p>
                </Flex>
                <Flex style={link_style} onClick={()=>window.location.href = "https://www.linkedin.com/company/shore-gitam-deemed-to-be-university/"}>
                  <img src='../images/linkedin.png' width={'35px'} height={'35px'}></img>
                  <p className='footer-link'>LinkedIn</p>
                </Flex>
             </Flex>
        </Flex>
        {props.value && <Flex height={'250px'} marginBottom={props.value?'50px':'20px'}> <img src='../images/logo.png' alt='LOGO'></img> </Flex>}
    </Flex>
  )
}

export default Footer