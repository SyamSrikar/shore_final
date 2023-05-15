import React from 'react'
import '../App.css'
function Home() {
  return (
    <section className='Main'>
      <div className='Hero'>
        <video className='bgvideo object-contain' autoPlay loop muted playsInline={true}>
          <source src={process.env.PUBLIC_URL +'/shorefest.mp4'} type='video/mp4' alt={'logo video'} />
        </video>
      </div>
    </section>)
}

export default Home