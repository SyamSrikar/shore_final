import React from 'react'
import '../team.css';
import Imagegallery from './Imagegallery'

const Profiles=(props)=> {

  return (
        <>  
            {props.valueParent.heads.length>0 && <div>
            <div className='heading_title'>{props.valueParent.heading!=='Shore' && <p>Heads</p>}</div>
            <div className={props.valueParent.heading==='Shore'?'profile_section profile-shore':'profile_section'} >
                {props.valueParent.heads.map((val,k) =>
                    <Imagegallery  value={val}/> 
                )}
            </div></div>}
            
            {props.valueParent.leads.length>0 && <div> 
            <div className='heading_title'><p>Leads</p></div>
            <div className='profile_section'>
                {props.valueParent.leads.map((val,k) =>
                    <Imagegallery value={val}/> 
                )}
            </div></div>}
        </>
            )
}

export default Profiles