import React from 'react';
import '../events.css';
import {Flex} from '@chakra-ui/react';
import { useState } from 'react';
import EventsCarousel from './EventsCarousel';

import { propTypes } from 'react-grid-carousel';


const eventListMajor = [
  {
    name: "Narthana (Classical Group Dance)",
    desc: "Narthana is a classical group dance competition which aims to create awareness about India’s vast cultural heritage. Participants will be expected to perform pure classical dance forms and styles. This is a tribute to our rich culture through and through. The dancers express their emotions using their expressions, body language, and choreography. They will depict a story understood and felt by everyone in the audience. The performances will be a display of talent, creatively, culture, and hardwork.",
    date: "3 Feb 2023",
    time: "5:30PM - 6:30PM",
    venue: "Open Auditorium",
    img: "./events/narthana.jpg"
  },
    {
      name: "Groove Theory (Western Group Dance)",
      desc: "Groove Theory is a western group dance competition. It is one of the most awaited events of Shore Fest ‘23. This event is a burning display of passion and talent on stage. Strategically, the lack of a theme allows the teams to exercise their creativity without any bounds. It also allows the audience the freedom to decipher the performance on their own terms. To sum up, this competition will be an excellent opportunity to showcase and utilise the talent and resources at hand innovatively.",
      date: "3 Feb 2023",
      time: "6:30PM - 9:00PM",
      venue: "Open Auditorium",
      img: "./events/groove.JPG"
    },
    {
      name: "Act-o-Mania (Stage Play)",
      desc: "Act-o-Mania is a theatre play competition that will bring out the creative ideas of the participants. They are free to perform original or published work in the competition. A theatre competition is a great platform for students to showcase their talents and learn to collaborate with a team to deliver flawless performances. This competition aims to provide a safe platform conducive to and individual’s skill development in acting as well as teamwork within the crew.",
      date: "3 Feb 2023",
      time: "1:00PM - 3:00PM",
      venue: "Mother Teresa Auditorium",
      img: "./events/act_mania.JPG"
    },
    {
      name: "Rang (Mural Wall Art)",
      desc: "Mural painting is inherently different from all other forms of pictorial art in that it is organically connected with architecture. In this sense, mural is the only form of painting that is truly three-dimensional, since it modifies and partakes of a given space. To sum up, Rang will be an excellent opportunity to showcase and utilize the talent and resources at hand innovatively. In this competition the participants will be expected to paint a given wall section artistically in the given time period according to the theme chosen by them.",
      date: "3,4 Feb 2023",
      time: "8:00AM - 3:00PM",
      venue: "stadium Wall",
      img: "./events/rang.jpg"
    },
    
    {
      name: "Battle of Bands ",
      desc: "The Battle of Bands competition as the name suggests is a competition where bands battle it out on stage. The fight with their musical talent and skills in a very creatively conducive atmosphere. The band are encouraged to bend all the rules and change the face of music in the fest. The band will be using a wide range of instruments and the vocalists will be belting notes in multiple languages and genres. This event will surely be a feast for your soul.",
      date: "4 Feb 2023",
      time: "6:30 to 9:00hrs",
      venue: "MT Parking",
      img: "./events/bandBattle.JPG"
    },
    {
      name: "Just for Laughs (Stand up comedy competition)",
      desc: "Just for Laughs is a stand-up comedy competition. It aims to promote stand-up comedy at the college level. Stand-up comedy is a great way for participants to work on their speech delivery, comedic timing, and spontaneity. It is a medium which can be used to talk about heavy or taboo topics in a lighthearted manner. This stand-up comedy show is paired with a short workshop which will help the participants tune the fine points of their skill set. It also includes a comedy show by an established stand-up comedian.",
      date: "4 Feb 2023",
      time: "11:00PM - 2:00PM",
      venue: "Mother Teresa Auditorium",
      img: "./events/just_laugh.jpg"
    },
    {
      name: "Khoj (Treasure Hunt)",
      desc: "A treasure hunt is a game in which the organizers prepare hints and riddles which on solving will lead them to the final treasure or prize. The competition will be played in teams with participants of mixed backgrounds and skillsets so that they can take on any type of challenge or barrier.",
      date: "5 Feb 2023",
      time: "9:00AM - 1:00PM",
      venue: "All Campus",
      img: "./events/khoj.jpg"
    },
    {
      name: "Verbattle (Debate Competition)",
      desc: "A debate is a discussion or structured contest about an issue or a resolution. A formal debate involves two sides: one supporting a resolution and one opposing it. Such a debate is bound by rules previously agreed upon. Verbattle is a competition which will hone the reasoning, research, and public speaking skills of every participant. They will learn how to put forth their opinion and facts in a calm, concise, and regulated manner. This very formulated and regulated debate competition will be a treat to watch as audience since the audience is presented with a great opportunity to learn as well.",
      date: "3 & 5 Feb 2023",
      time: "9:00AM - 12:00PM & 1:00PM - 3:00PM",
      venue: "KRC Auditorium",
      img: "./events/verbattle.jpg"
    },
    
  ]
  
  const eventListMinor = [
    {
      name: "Solo Dance",
      desc: "The solo dance competition is for all those main characters out ther.This is a great opportunity to showcase your skill and talent. The competition will help you build confidence, gain experience, meet other dancers, and develop your own skill.",
      date: "3 Feb 2023",
      time: "9:00AM - 12:00PM",
      venue: "Mother Teresa Auditorium",
      img: "./events/solo_dance.jpg"
    },
    {
      name: "Duet Dance",
      desc: "The Duet Dance competition is open to all kinds of pairs regardless of gender. The competition allows all types of dance and genres of music; the only rule is to have a partner. The synchronization and partnership between the dancers is one of the main criterion for judgement.",
      date: "5 Feb 2023",
      time: "9:00AM - 11:00PM",
      venue: "Mother Teresa Auditorium",
      img: "./events/duet_dance.jpg"
    },

    {
      name: "Dance Battle",
      desc: "Dance battles are competitions where two individuals or groups compete against each other. The participants have to dance to random songs played by the moderator and the winner is judged based on the crowd's reaction or opinion coupled with the judges scoring. The dance battle competition will be conducted in three rounds, wherein a different song is played in each round, and the winner is decided by best of three. There are no rules or limitations on the type of style which can be performed.",
      date: "5 Feb 2023",
      time: "1:00PM - 3:00PM",
      venue: "Open Auditorium",
      img: "./events/dance_battle.jpg"
    },
     {
      name: "Mono Act",
      desc: "Mono-action is all about a performance that is done by a sole person or by a single individual. The individual plays numerous roles in an alternate manner in the same scene, each with a new and changed version. Such mono-acting is often seen in horror films and marks the talent of a person as an actor. The participants of this competition have to perform a monologue which may be self-written or published. This is a great way to test the creativity, acting skill, and pure talent of an actor.",
      date: "4 Feb 2023",
      time: "10:00AM - 11:00PM",
      venue: "Open Auditorium",
      img: "./events/mono_act.JPG"
    },
    {
      name: "Mime Act",
      desc: "Mime is the theatrical technique of suggesting action, character or emotion without words, using only gesture, expression and movement. The theme and plot have to be conveyed without the use of dialogue, audio voiceovers, background visuals, and props. This competition can be solo or group.",
      date: "4 Feb 2023",
      time: "10:00AM - 11:00AM",
      venue: "Open Auditorium",
      img: "./events/mime_act.jpg"
    },
    {
      name: "Acapella",
      desc: "A cappella music is a performance by a singer or a singing group without instrumental accompaniment or a piece intended to be performed in this way. The use of instruments or backing tracks is not allowed, participants need to produce music purely with their bodies.",
      date: "5 Feb 2023",
      time: "11:00AM - 1:00PM",
      venue: "Mother Teresa Auditorium",
      img: "./events/acapella.jpeg"
    },
    {
      name: "Solo Singing",
      desc: "Solo singing is the act of producing musical sounds with the voice using a variety of vocal techniques. The participants of this competition need to sing using a backing track or with the accompaniment of one semi-acoustic/acoustic guitarist.",
      date: "5 Feb 2023",
      time: "11:00AM - 1:00PM",
      venue: "Mother Teresa Auditorium",
      img: "./events/solo_sing.JPG"
    },
    {
      name: "Face Paint",
      desc: "Participants must be a pair consisting of an artist and a model. The artist must paint the model’s face according to the given theme. Along with paints, the artist may also use some special decorative items.",
      date: "4 Feb 2023",
      time: "1:00PM - 2:00PM",
      venue: "GIM Seminar Hall",
      img: "./events/face_paint.JPG"
    },

    {
      name: "Poetry",
      desc: "Poetry is a type of writing that brings a thought, and defines a scene or tells a story in an intensive, lyrical arrangement of words. Poems are often of different lengths, use different tenses, and, most importantly, express different ideas through often strange yet reasonable ways. The participants of this competition must recite their self-written poetry/Shayari.",
      date: "4 Feb 2023",
      time: "9:00AM - 10:00AM",
      venue: "Talent Cafe",
      img: "./events/poetry.jpg"
    },
    {
      name: "Short Film",
      desc: "A short film is any motion picture that is short enough in running time not to be considered a feature film. The team has to start shooting for their short film and continue till 27.01.23. The team must creatively capture the fest activities.",
      date: "5 Feb 2023",
      time: "2:00PM to 3:00PM",
      venue: "Mother Teresa Park",
      img: "./events/short_film.jpg"
    },
    {
      name: "Split Screen (Western)",
      desc: "Split Screen dance consists of a group that will be divided by the judges into two parts which need not necessarily be equal in number. The two divided groups will then perform on the stage with a split screen in between them at the same time,  on the same music.",
      date: "4 Feb 2023",
      time: "10:00AM to 11:00AM",
      venue: "Open Auditorium",
      img: "./events/split_screen.JPG"
    },
    {
      name: "Rap Battle",
      desc: "Battle rap (also known as rap battling) is a type of rapping performed between two or more performers that incorporate boasts and wordplay. Battle rap is often performed or freestyled spontaneously in live battles. Rap is the epitome of musical amalgamation, which combines poetry and beats that literally portray the artist's emotions. The Rap Battle ensures to set the stage on fire.",
      date: "5 Feb 2023",
      time: "5:00PM - 6:00PM",
      venue: "MT Parking",
      img: "./events/rap_battle.JPG"
    },

    {
      name: "JAM - Just A Minute",
      desc: "Participants have to speak on the given topic for a minute, and if they make any mistakes or pause during their turn, they can be interrupted by the other participants, who will then have another minute to speak on.",
      date: "27 Feb 2023",
      time: "3:00PM to 4:00PM",
      venue: "KRC Auditorium",
      img: "./events/jam.JPG"
    },
    
  ]
  

const Events=(props)=> {

 const [tab,setTab]=useState('tab1')
  return (
    <>
        <Flex flexDir={'column'} paddingX={props.value?'0px':'50px'} marginTop={props.value?'0px':'40px'} width={'100%'}  > 
            <Flex margin={props.value?'10px':'10px 0px 10px 0px'} justifyContent={'center'} width={'100%'} className='heading'><p>EVENTS</p></Flex>
            <Flex justifyContent={'flex-start'}  marginTop={props.value?'6px':'20px'} position={'relative'}  width={'300px'} cursor={'pointer'}>
                <div className={tab==='tab1'?'tab tabselect':'tab'} onClick={()=>setTab('tab1')} >Major Events</div>
                <div className={tab==='tab2'?'tab tabselect':'tab'} onClick={()=>setTab('tab2')}>Minor Events</div>
            </Flex>
            <Flex >   
              {!props.value && <div className={tab==='tab2'?'carousel-div2':'carousel-div'} >
                {tab==='tab1'&&<EventsCarousel value={eventListMajor}  device={props.value}/>}
                 {tab==='tab2'&& <EventsCarousel value={eventListMinor} device={props.value}/>}
                </div>}
                {props.value && <div className={tab==='tab2'?'carousel-div3':'carousel-div'} >
                {tab==='tab1'&&<EventsCarousel value={eventListMajor}  device={props.value}/>}
                 {tab==='tab2'&& <EventsCarousel value={eventListMinor} device={props.value}/>}
                </div>}

            </Flex>
        </Flex>
    </>
  )
}

export default Events