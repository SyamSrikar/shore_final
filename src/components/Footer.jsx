import React from 'react'
import {Flex} from '@chakra-ui/react'; 
import '../App.css';

const Footer = (props) => {
  const link_style={justifyContent:'space-between' ,marginTop:'17px' ,alignItems:'center',fontSize:'25px',cursor:'pointer' ,width:'155px'};
  return (
    <Flex backgroundColor={'#303030'} padding={props.value?'40px 10px':'40px'} paddingX={!props.value && '80px'} color={'white'} flexWrap={'wrap'} justifyContent={'space-around'}> 
        {!props.value && <Flex height={'250px'} marginBottom={props.value?'50px':'20px'}> <img src={process.env.PUBLIC_URL +'/images/logo.png'} alt='LOGO'></img> </Flex>}
        <Flex flexDir={'column'} justifyContent={'flex-start'} marginBottom={props.value?'50px':'0px'}  >
            <p className='footer-heading' ><b>Visakhapatnam Campus</b></p>
            <br></br>
              <p className='footer-addr'>
                Gandhi Nagar, Rushikonda,<br></br>
                Visakhapatnam - 530045<br></br>
                Andhra Pradesh, India
              </p>
              <br></br> 
            <p className='footer-addr footer-addr-contact'>Contact</p>
            
              
            <a href='mailto:registrar@gitam.edu' className='footer-addr'>unifest_cc@gitam.in</a>
            
        </Flex>
        <Flex flexDir={'column'}  justifyContent={'flex-start'} marginBottom={props.value?'80px':'0px'} >
             <Flex justifyContent={'center'} className='footer-heading '><b>Social Media Links</b></Flex>
             <Flex flexDir={'column'} marginLeft={'40px'} width={'60%'} justifyContent={'center'} >
                <Flex style={link_style} onClick={()=>window.open( "https://www.instagram.com/shore.gitam/",'_blank')}>  
                  <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt={'instagram logo'} width={'30px'} height={'30px'}></img>
                  <p className='footer-link'>Instagram</p>
                </Flex>
                <Flex style={link_style} onClick={()=>window.open("https://www.facebook.com/profile.php?id=100088443708932&mibextid=LQQJ4d",'_blank')}>
                  <img src={process.env.PUBLIC_URL +'/images/facebook.png'} alt={'facebook logo'} width={'30px'} height={'30px'}></img>
                  <p className='footer-link'>Facebook</p>
                </Flex>
                <Flex style={link_style} onClick={()=>window.open( "https://www.linkedin.com/company/shore-gitam-deemed-to-be-university/",'_blank')}>
                  <img src={process.env.PUBLIC_URL +'/images/linkedin.png'} alt={'linkedIn logo'} width={'30px'} height={'30px'}></img>
                  <p className='footer-link'>LinkedIn</p>
                </Flex>
                <Flex style={link_style} onClick={()=>window.open("https://www.snapchat.com/add/shore.gitam?share_id=4NQqf4oGTgy7i8JkEVCrYw&locale=en_IN&sid=489faf2175d04d3d9092db22048b16f9",'_blank')}>
                  <img src={process.env.PUBLIC_URL +'/images/snapchat.png'} alt={'snapchatlogo'} width={'30px'} height={'30px'}></img>
                  <p className='footer-link'>Snapchat</p>
                </Flex>
             </Flex>
        </Flex>
        {props.value && <Flex height={'250px'} width={'250px'} marginBottom={props.value?'50px':'20px'}> <img  src={process.env.PUBLIC_URL +'/images/logo.png'} alt='LOGO' height={'100%'} width={'100%'}></img> </Flex>}
    </Flex>
  )
}

export default Footer