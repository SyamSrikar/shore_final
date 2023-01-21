import React from 'react'
import '../App.css'
function Home() {
  return (
    <section className='Main'>
      <div className='Hero'>
        <video className='bgvideo object-contain' autoPlay loop muted>
          <source src='./shorefest.mp4' type='video/mp4' />
        </video>
      </div>
    </section>)
}

export default Home