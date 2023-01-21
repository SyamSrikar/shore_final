import React from 'react'
import { FaLinkedin} from "react-icons/fa";
import '../team.css';

const Imagegallery=(props)=> {
  return (
    <>  
    
        <div className='profile_detail'>
            <div class="wrapper">
              <div><img src={props.value.image} alt={'image'}></img></div>
              <div class="bg"></div>
            </div>  
            <div><p className='name'>{props.value.name}</p></div>
            {props.value.domain.length!=0?<div><p>{props.value.domain}</p></div>:<div></div>}
            <div><p>{props.value.role}</p></div>
            <div><a href={props.value.linkedin}><FaLinkedin color='white' size={'25px'}/></a></div>
        </div>
    </>
  )
}

export default Imagegallery