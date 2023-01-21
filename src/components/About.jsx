import React from 'react';
import '../App.css';

function About(props) {
  return (
    <div class="video-container">
        <video loop="true" autoplay="autoplay" muted>
            <source src="./about.mp4" type="video/mp4" />
        </video>
        
        <div className={props.value?'model-mobile':'model'}>
        <div>
            <span ><p className={props.value?'model-heading-mobile':'model-heading'}>{!props.value&&'About SHORe'}{props.value&&<>About<br/>SHORe</>}</p></span>
            <p className='model-desc'>SHORe 2023 is a culmination of years of preparation, passion and ambition of GITAM to celebrate a festival that features both athletic and artistic pursuits. These go beyond anything we could have imagined. The team envisions making it an absolute trailblazer of an event!
The Serenity of Vizag beaches and the essence of GITAM's campus life can be captured with the word "Shore".
SHORe, when said out loud, is a homonym of "शोर" in Hindi, which defines our tagline as "Sound of Joy"..</p>
</div></div>
    </div>

  )
}

export default About