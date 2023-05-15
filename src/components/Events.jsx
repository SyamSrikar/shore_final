import React from 'react';
import '../events.css';
import '../about.css'
import {Flex} from '@chakra-ui/react';
import { useState } from 'react';
import EventsCarousel from './EventsCarousel';
import SportsCarousel from './SportsCarousel';


const eventListMajor = [
  {
    name: "Narthana ",
    desc: "Narthana is a classical group dance competition which aims to create awareness about India’s vast cultural heritage. Participants will be expected to perform pure classical dance forms and styles. This is a tribute to our rich culture through and through. The dancers express their emotions using their expressions, body language, and choreography. The performances will be a display of talent, creatively, culture, and hardwork.",
    date: "3 Feb 2023",
    time: "5:30PM - 6:30PM",
    venue: "Open Auditorium",
    img: "/events/narthana.jpg"
  },
    {
      name: "Groove Theory ",
      desc: "Groove Theory is a western group dance competition. It is one of the most awaited events of Shore Fest ‘23. This event is a burning display of passion and talent on stage. Strategically, the lack of a theme allows the teams to exercise their creativity without any bounds. It also allows the audience the freedom to decipher the performance on their own terms. To sum up, this competition will be an excellent opportunity to showcase and utilise the talent.",
      date: "3 Feb 2023",
      time: "6:30PM - 9:00PM",
      venue: "Open Auditorium",
      img: "/events/groove.jpg"
    },
    {
      name: "Act-o-Mania (Stage Play)",
      desc: "Act-o-Mania is a theatre play competition that will bring out the creative ideas of the participants. They are free to perform original or published work in the competition. A theatre competition is a great platform for students to showcase their talents and learn to collaborate with a team to deliver flawless performances. This competition aims to provide a safe platform conducive to and individual’s skill development in acting as well as teamwork within the crew.",
      date: "3 Feb 2023",
      time: "1:00PM - 3:00PM",
      venue: "Mother Teresa Auditorium",
      img: "/events/act_mania.jpg"
    },
    {
      name: "Rang (Mural Wall Art)",
      desc: "Mural painting is distinct from all other forms of pictorial art in that it is inextricably linked to architecture. Murals are the only form of painting that is truly three-dimensional in this sense, as they modify and participate in a given space. To summarize, Rang will be an excellent opportunity to showcase and creatively utilize the talent and resources available.",
      date: "3,4 Feb 2023",
      time: "8:00AM - 3:00PM",
      venue: "Stadium Wall",
      img: "/events/rang.jpg"
    },
    
    {
      name: "Battle of Bands ",
      desc: "The Battle of Bands competition as the name suggests is a competition where bands battle it out on stage. The bands are encouraged to bend all the rules and change the face of music in the fest. The band will use a variety of instruments, and the vocalists will belt out notes in a variety of languages and genres. This will undoubtedly be a spiritual feast.",
      date: "4 Feb 2023",
      time: "4:30PM to 7:00PM",
      venue: "Mother Teresa Parking",
      img: "/events/bandBattle.jpg"
    },
    {
      name: "Just for Laughs",
      desc: "Just for Laughs is a Stand-up comedy competition that aims to promote the art of laughter at college level. It includes a live show and a short workshop where students work on their comedic timing, speech delivery, and improvisation. The goal of this event is to help young people develop skills they can use in their future careers as comedians or entertainers.",
      date: "4 Feb 2023",
      time: "11:00AM - 2:00PM",
      venue: "Mother Teresa Auditorium",
      img: "/events/just_laugh.jpg"
    },
    {
      name: "Khoj (Treasure Hunt)",
      desc: "Treasure hunts are a type of game in which the organizers set up clues and puzzles that will lead participants to a final prize or treasure. These competitions are often played by teams with players from diverse backgrounds so they can tackle any obstacle. As fun as it is to solve these challenges together, Treasure Hunts also provide an important opportunity for people to come together and work towards common goals, regardless of their differences.",
      date: "5 Feb 2023",
      time: "9:00AM - 1:00PM",
      venue: "All Campus",
      img: "/events/khoj.jpg"
    },
    {
      name: "Verbattle ",
      desc: "Verbattle is a debate competition that will hone the reasoning, research, and public speaking skills of every participant. A formal debate involves two sides: one supporting a resolution and one opposing it. They will learn how to put forth their opinion and facts in a calm, concise, and regulated manner.  This very formulated and regulated debate competition will be a treat to watch since the audience are presented with a great opportunity to learn as well.",
      date: "3 & 5 Feb 2023",
      time: "9:00AM - 12:00PM & 1:00PM - 3:00PM",
      venue: "KRC Auditorium",
      img: "/events/verbattle.jpg"
    },
    
  ]
  
  const eventListMinor = [
    {
      name: "Solo Dance",
      desc: "The solo dance competition is for all those main characters out ther.This is a great opportunity to showcase your skill and talent. The competition will help you build confidence, gain experience, meet other dancers, and develop your own skill.",
      date: "3 Feb 2023",
      time: "9:00AM - 12:00PM",
      venue: "Mother Teresa Auditorium",
      img: "/events/solo_dance.jpg"
    },
    {
      name: "Duet Dance",
      desc: "The Duet Dance competition is open to all kinds of pairs regardless of gender. The competition allows all types of dance and genres of music; the only rule is to have a partner. The synchronization and partnership between the dancers is one of the main criterion for judgement.",
      date: "5 Feb 2023",
      time: "9:00AM - 11:00AM",
      venue: "Mother Teresa Auditorium",
      img: "/events/duet_dance.jpg"
    },

    {
      name: "Dance Battle",
      desc: "Dance battles are competitions where two individuals or groups compete against each other. There are no rules or limitations on the type of style which can be performed. The winner is judged based on the crowd's reaction or opinion coupled with the judges scoring and is decided by best of three.",
      date: "5 Feb 2023",
      time: "1:00PM - 3:00PM",
      venue: "Open Auditorium",
      img: "/events/dance_battle.jpg"
    },
     {
      name: "Mono Act",
      desc: "Mono-Act is all about a performance that is done by a sole person or by a single individual. Mono-acting is often seen in horror films and marks the talent of a person as an actor. The participants of this competition have to perform a monologue which may be self-written or published.",
      date: "4 Feb 2023",
      time: "10:00AM - 11:00PM",
      venue: "Open Auditorium",
      img: "/events/mono_act.jpg"
    },
    {
      name: "Mime Act",
      desc: "Mime is the theatrical technique of suggesting action, character or emotion without words, using only gesture, expression and movement. The theme and plot have to be conveyed without the use of dialogue, audio voiceovers, background visuals, and props. This competition can be solo or group.",
      date: "4 Feb 2023",
      time: "10:00AM - 11:00AM",
      venue: "Open Auditorium",
      img: "/events/mime_act.jpg"
    },
    {
      name: "Acapella",
      desc: "Acappella music is a performance by a singer or a singing group without instrumental accompaniment or a piece intended to be performed in this way. The use of instruments or backing tracks is not allowed, participants need to produce music purely with their bodies.",
      date: "5 Feb 2023",
      time: "11:00AM - 1:00PM",
      venue: "Mother Teresa Auditorium",
      img: "/events/acapella.jpg"
    },
    {
      name: "Solo Singing",
      desc: "Solo singing is the act of producing musical sounds with the voice using a variety of vocal techniques. The participants of this competition need to sing using a backing track or with the accompaniment of one semi-acoustic/acoustic guitarist.",
      date: "5 Feb 2023",
      time: "11:00AM - 1:00PM",
      venue: "Mother Teresa Auditorium",
      img: "/events/solo_sing.jpg"
    },
    {
      name: "Face Paint",
      desc: "Participants must be a pair consisting of an artist and a model. The artist must paint the model’s face according to the given theme. Along with paints, the artist may also use some special decorative items.",
      date: "4 Feb 2023",
      time: "1:00PM - 2:00PM",
      venue: "GIM Seminar Hall",
      img: "/events/face_paint.jpg"
    },

    {
      name: "Poetry",
      desc: "Poetry is a type of writing that brings thoughtfulness, and defines a scene or tells a story in an intensive, lyrical arrangement of words. The participants of this competition use different lengths and different tenses, and, most importantly, they must express different ideas through often strange yet reasonable ways.",
      date: "4 Feb 2023",
      time: "9:00AM - 10:00AM",
      venue: "Talent Cafe",
      img: "/events/poetry.jpg"
    },
    {
      name: "Short Film",
      desc: "A short film is any motion picture that is short enough in running time not to be considered a feature film. The team has to start shooting for their short film and continue till 27.01.23. The team must creatively capture the fest activities.",
      date: "5 Feb 2023",
      time: "2:00PM - 3:00PM",
      venue: "Mother Teresa Park",
      img: "/events/short_film.jpg"
    },
    {
      name: "Split Screen (Western)",
      desc: "Split Screen dance consists of a group that will be divided by the judges into two parts which need not necessarily be equal in number. The two divided groups will then perform on the stage with a split screen in between them at the same time,  on the same music.",
      date: "4 Feb 2023",
      time: "10:00AM - 11:00AM",
      venue: "Open Auditorium",
      img: "/events/split_screen.jpg"
    },
    {
      name: "Rap Battle",
      desc: "Battle rap is a type of rapping performed between two or more performers that incorporates boasts and wordplay. Rap is the epitome of musical amalgamation, combining poetry and beats that literally portray the artist's emotions. The Rap Battle ensures to set the stage on fire.",
      date: "5 Feb 2023",
      time: "5:00PM - 6:00PM",
      venue: "MT Parking",
      img: "/events/rap_battle.jpg"
    },

    {
      name: "JAM - Just A Minute",
      desc: "Participants have to speak on the given topic for a minute, and if they make any mistakes or pause during their turn, they can be interrupted by the other participants, who will then have another minute to speak on.",
      date: "4 Feb 2023",
      time: "3:00PM - 4:00PM",
      venue: "KRC Auditorium",
      img: "/events/jam.jpg"
    },
    
    {
      name:'69 Seconds to Fame',
      desc: "69 Seconds to Fame is an event where participants are given a platform to showcase their talent. A participant will be given 69 seconds to impress the crowd with any talent they wish like dance, singing, magic, standup etc.",
      date: "3 Feb 2023",
      time: "10:00AM - 11:00AM",
      venue: "Open Auditorium",
      img: "/events/69.jpg"
    },
    {
      name:'Scavenger hunt',
      desc: "Get your magnifying glass out, put your running shoes on, and get ready for the scavenger hunt! Be the first to rummage around the 4 corners of the campus to find objects and complete a set of tasks (a list of which will be provided to you at the start) to be crowned the winner.",
      date: "3 Feb 2023",
      time: "1:00PM - 3:00PM",
      venue: "All Campus",
      img: "/events/Scanvenger.jpg"
    },
    {
      name: "Ad Masters",
      desc: "The participants are given a certain product,e.g chair, they will have create a brand advertisement, jingle, protoytype. The next task is to convince a stranger to buy that product the candidate has created by using marketing techniques.",
      date: "5 Feb 2023",
      time: "10:00AM - 12:00PM",
      venue: "VDC Room",
      img: "/events/AdMaster.jpg"
    },
    {
      name: "Pitch Off",
      desc: "Similar to the popular televison show SHARK TANK, candidates pitch their business ideas to the judges and answer the follw up questiones.",
      date: "4 Feb 2023",
      time: "3:00PM - 4:00PM",
      venue: "VDC Room",
      img: "/events/pitch.jpg"
    },
    
  ]

  const sportEvents = [
    {
      name: "E-Sports",
      desc: "E-Sports is a form of competition that often takes the form of organized, multiplayer video game competitions, particularly between professional players, individually or as teams. It mimics the experience of watching a professional sporting event, except spectators watch video gamers compete against each other. The matches will be played based on round robin.",
      dtv: [{
        match: "E-Sports(Match 1)",
        fixture:"VZG VS BLR",
        date: "3 Feb 2023",
        time: "9:00AM - 12:00PM",
        venue: "Shivaji Auditorium",
      }, 
      {
        match: "E-Sports(Match 2)",
        fixture:"BLR VS HYD",
        date: "3 Feb 2023",
        time: "1:00PM - 4:00PM",
        venue: "Shivaji Auditorium",
      }, {
        match: "E-Sports(Match 3)",
        fixture:"VZG VS HYD",
        date: "4 Feb 2023",
        time: "9:00AM - 12:00PM",
        venue: "Shivaji Auditorium",
      }, {
        match: "E-Sports(Finals)",
        date: "4 Feb 2023",
        time: "1:00PM - 4:00PM",
        venue: "Shivaji Auditorium",
      }],
      img: "/sports/E-Sports.png"
    },
    {
      name:"Cricket Stars",
      desc:"Cricket Stars is a strategy card game designed for the avid cricket lover in us. The game has tournaments for some spicy competition to prove who is the best while promoting a chess-like strategy needed to win over the opponents. So build your decks with the best cards to get the title of CRICKETSTAR!",
      img:"cricket_stars.mp4"
    },
    {
      name: "Cricket",
      desc: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard (20-meter) pitch with a wicket at each end, each comprising two bails that are balanced on three stumps. Matches will be conducted in a round-robin format. A final match will be conducted between the two qualified teams.",
      dtv: [{
        match: "Cricket(Match 1)",
        fixture:"BLR VS VZG",
        date: "3 Feb 2023",
        time: "9:00AM - 12:00PM",
        venue: "GITAM Cricket Stadium",
      },
      {
        match: "Cricket(Match 2)",
        fixture:"VZG VS HYD",
        date: "3 Feb 2023",
        time: "1:00PM - 4:00PM",
        venue: "GITAM Cricket Stadium",
      },
      {
        match: "Cricket(Match 3)",
        fixture:"HYD VS BLR",
        date: "4 Feb 2023",
        time: "9:00AM - 12:00PM",
        venue: "GITAM Cricket Stadium",
      },
      {
        match: "Cricket(Final)",
        date: "5 Feb 2023",
        time: "9:00AM - 1:00PM",
        venue: "GITAM Cricket Stadium",
      },],
      img: "/sports/cricket.png"
    },
    {
      name: "Football",
      desc: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. A football team consists of 11 players who are divided into strikers, midfielders, defenders, and a goalkeeper. Matches will be conducted on a round-robin basis, and the finals will be conducted between the top two teams, who will play for the honor of being named champion.",
      dtv: [{
        match: "Football(Match 1)",
        fixture:"BLR VS VZG",
        date: "3 Feb 2023",
        time: "7:00AM - 9:00AM",
        venue: "GITAM Cricket Stadium",
      },
      {
        match: "Football(Match 2)",
        fixture:"VZG VS HYD",
        date: "4 Feb 2023",
        time: "7:00AM - 9:00AM",
        venue: "GITAM Cricket Stadium",
      }, {
        match: "Football(Match 3)",
        fixture:"BLR VS HYD",
        date: "4 Feb 2023",
        time: "2:00PM - 4:00PM",
        venue: "GITAM Cricket Stadium",
      }, {
        match: "Football(Final)",
        date: "5 Feb 2023",
        time: "1:00PM - 3:00PM",
        venue: "GITAM Cricket Stadium",
      }],
      img:"/sports/football.jpg"
    },
    {
      name: "Badminton",
      desc: 'Badminton is a racquet sport where players hit a shuttlecock across a net.Although it may be played with larger teams, the most common forms of the game are "singles" and "doubles". Points are scored by striking the shuttlecock with the racquet and landing it within the opposing teams half of the court. Matches are going to be conducted on a round-robin basis.',
      dtv: [{
        match: "Badminton(Match 1)",
        fixture:"VZG VS BLR",
        date: "3 Feb 2023",
        time: "7:00AM - 9:00AM",
        venue: "Indoor stadium",
      },
      {
        match: "Badminton(Match 2)",
        fixture:"BLR VS HYD",
        date: "3 Feb 2023",
        time: "11:00AM - 1:00PM",
        venue: "Indoor stadium",
      },
      {
        match: "Badminton(Match 3)",
        fixture:"HYD VS VZG",
        date: "4 Feb 2023",
        time: "9:00AM - 11:00AM",
        venue: "Indoor stadium",
      },
      {
        match: "Badminton(Final)",
        date: "5 Feb 2023",
        time: "7:00AM - 9:00AM",
        venue: "Indoor stadium",
      },],
      img:"/sports/badminton.jpg"
    },
    
    {
      name: "Table Tennis",
      desc: "Table tennis, also known as ping-pong and whiff-whaff, is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small, solid rackets. It takes place on a hard table divided by a net. Matches are played in a round-robin format.",
      dtv: [{
        match: "TT (Match 1)",
        fixture:"BLR VS VZG",
        date: "3 Feb 2023",
        time: "10:00AM - 11:00AM",
        venue: "Behind KRC",
      }, {
        match: "TT (Match 2)",
        fixture:"BLR VS HYD",
        date: "3 Feb 2023",
        time: "12:00PM - 1:00PM",
        venue: "Behind KRC",
      },
      {
        match: "TT (Match 3)",
        fixture:"HYD VS VZG",
        date: "3 Feb 2023",
        time: "1:00PM - 2:00PM",
        venue: "Behind KRC",
      },
      {
        match: "TT (Finals)",
        date: "4 Feb 2023",
        time: "9:00AM - 10:00AM",
        venue: "Behind KRC",
      }],
      img:"/sports/tabletennis.jpg"
    },
    {
      name: "Chess",
      desc: 'Chess is a board game between two players based on strategy. It is sometimes called "international chess" or “Western chess" to distinguish it from related games such as xiangqi and shogi. A battle of wits will ensue, with matches played in a round robin format and the team with the most points crowned champion',
        dtv: [{
        match: "Chess(Match 1)",
        fixture:"VZG VS BLR",
        date: "4 Feb 2023",
        time: "8:00AM - 9:00AM",
        venue: "Behind KRC",
      }, {
        match: "Chess(Match 2)",
        fixture:"BLR VS HYD",
        date: "4 Feb 2023",
        time: "10:00AM - 11:00AM",
        venue: "Behind KRC",
      }, {
        match: "Chess(Match 3)",
        fixture:"VZG VS HYD",
        date: "4 Feb 2023",
        time: "11:00AM - 12:00PM",
        venue: "Behind KRC",
      }, {
        match: "Chess(Finals)",
        date: "4 Feb 2023",
        time: "2:00PM - 3:00PM",
        venue: "Behind KRC",
      },],
      img: "/sports/chess.jpg"
    },
    {
      name: "Athletics",
      desc: "Athletics is a group of sporting events that involve competitive running, jumping, throwing, and walking. The most common types of athletic competitions are track and field, road running, cross-country running, hurdles, racewalking, and many others. Athletes from all three campuses will partake in the competitions simultaneously, vying for all the glory.",
      dtv: [{
        match: "Athletics 100m, 200m(Men & Women)",
        date: "4 Feb 2023",
        time: "8:00AM - 10:00AM",
        venue: "GIMSR ground",
      }, {
        match: "Mixed Relay",
        date: "4 Feb 2023",
        time: "2:00PM - 3:00PM",
        venue: "GIMSR ground",
      }, {
        match: "Shotput(Men & Women)",
        date: "4 Feb 2023",
        time: "3:00PM - 4:00PM",
        venue: "GIMSR ground",
      }],
      img:"/sports/athletics.jpg"
    },
    {
      name: "Volleyball",
      desc: "Volleyball is a team sport in which two teams of six players are separated by a net. A team tries to score points by grounding a ball on the other team's court. A number of consistent techniques have evolved in volleyball, including spiking and blocking and specialized player positions and offensive and defensive structures. The matches will be played in a round-robin format",
      dtv: [{
        match: "Volleyball(Match 1)",
        fixture:"BLR VS VZG",
        date: "3 Feb 2023",
        time: "9:00AM - 10:00AM",
        venue: "GIMSR ground",
      }, {
        match: "Volleyball(Match 2)",
        fixture:"VZG VS HYD",
        date: "3 Feb 2023",
        time: "11:00AM - 12:00PM",
        venue: "GIMSR ground",
      }, {
        match: "Volleyball(Match 3)",
        fixture:"HYD VS BLR",
        date: "3 Feb 2023",
        time: "3:00PM - 4:00PM",
        venue: "GIMSR ground",
      }, {
        match: "Volleyball(Finals)",
        date: "4 Feb 2023",
        time: "3:00PM - 4:00PM",
        venue: "Indoor stadium",
      }],
      img: "/sports/volleyball.jpg"
    },
    {
      name: "Kabaddi",
      desc: 'Kabaddi is a contact team sport. Played between two teams of seven players, the objective is for a single player on offense, referred to as a "raider," to run into the opposing teams half, touch out as many of their players as possible, and return to their own half, all without being tackled by the defenders, in 30 seconds. Matches will be played based on round robin.',
      dtv: [{
        match: "Kabaddi (Match 1)",
        fixture:"VZG VS BLR",
        date: "3 Feb 2023",
        time: "9:00AM - 10:00AM",
        venue: "Tennis Court",
      }, {
        match: "Kabaddi (Match 2)",
        fixture:"VZG VS HYD",
        date: "3 Feb 2023",
        time: "3:00PM - 4:00PM",
        venue: "Tennis Court",
      }, {
        match: "Kabaddi (Match 3)",
        fixture:"HYD VS BLR",
        date: "4 Feb 2023",
        time: "9:00AM - 10:00AM",
        venue: "Tennis Court",
      }, {
        match: "Kabaddi (Finals)",
        date: "4 Feb 2023",
        time: "2:00PM - 3:00PM",
        venue: "Tennis Court",
      }],
      img: "/sports/Kabbadi.jpg"
    },
    {
      name: "Basketball",
      desc: "Basketball is a team sport in which two teams, consisting of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender's hoop high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop. Matches will be conducted on round robin basis.",
      dtv: [{
        match: "Basketball(Match 1)",
        fixture:"VZG VS BLR",
        date: "3 Feb 2023",
        time: "9:00AM - 11:00AM",
        venue: "Indoor stadium",
      },
      {
        match: "Basketball(Match 2)",
        fixture:"BLR VS HYD",
        date: "3 Feb 2023",
        time: "1:00PM - 3:00PM",
        venue: "Indoor stadium",
      },
      {
        match: "Basketball(Match 3)",
        fixture:"HYD VS VZG",
        date: "4 Feb 2023",
        time: "7:00AM - 9:00AM",
        venue: "Indoor stadium",
      }, {
        match: "Basketball(Final)",
        date: "4 Feb 2023",
        time: "1:00PM - 3:00PM",
        venue: "Indoor stadium",
      }],
      img: "/sports/basketball.jpg"
    },
  ]
  
  const concert_night = [
    {
      name: "Cultural Night",
      desc: "A truly fantastic night of fun, extravaganza, and joy, with experiences ranging from the most exotic and HYPE dances to mesmerizing plays and everything in between, that you won't forget for years to come. With all of our amazing GITAMites prepared to demonstrate their brilliant talents and abilities, we really have it all! Truly a night you cannot afford to miss out on.",
      date: "3 Feb 2023",
      time: "5:30PM - 9:00PM",
      venue: "Open Auditorium",
      img: "/concert/cultural.jpg"
    }, {
      name: "Band Night",
      desc: "An unforgettable night filled with absolutely breathtaking music, head banging, and pure awesomeness with various astounding bands performing iconic songs for a truly out-of-world experience. Be prepared to have your boots knocked with an ELECTRIC atmosphere, and your senses treated with all that we have to offer. Get ready for an experience you haven’t had before.",
      date: "4 Feb 2023",
      time: "7:30PM - 9:30PM",
      venue: "Mother Teresa Parking",
      img: "/concert/band.jpg"
    },
    {
      name: "DJ Night",
      desc: "A night filled with the craziest beat drop and dancing ALL-NIGHT-LONG. Get ready to dance your way to new core memories that you won’t forget even if you tried. Get hyped with an exhilarating atmosphere and a crowd that is ready to party, and then party some more. A truly incredible experience that one has to witness first hand to believe.",
      date: "5 Feb 2023",
      time: "6:00PM - 9:00PM",
      venue: "Mother Teresa Parking",
      img: "/concert/dj.jpg"
    },
    {
      name: "Standup Show",
      desc: "A stand-up comic or comedian stands alone in front of an audience and tells jokes. Stand-up comedy is a comedic performance to a live audience in which the performer addresses the audience directly from the stage. The performer is known as a comedian, a comic or a stand-up, it consists of one-liners, stories, observations or a shtick that may incorporate props, music, magic tricks or ventriloquism. It can be performed almost anywhere.",
      date: "4 Feb 2023",
      time: "2:00PM - 3:00PM",
      venue: "Mother Teresa Auditorium",
      img: "/concert/standup.jpg"
    },
    {
      name: "Rap Cypher",
      desc: "A Rap Cypher is a gathering of rappers and beatboxers in a circle, extemporaneously making music together.In a cypher, one emcee will rap about a certain topic, which is quickly taken up or flipped by another emcee who plays off the prior words and themes.The circle can go on continuously, as long as emcees, beatboxers, dancers, and the crowd keep the fluidity of the cypher going.",
      date: "5 Feb 2023",
      time: "5:00PM - 6:00PM",
      venue: "Mother Teresa Parking",
      img: "/concert/rap.png"
    },
    {
      name: "Live Graffiti",
      desc: "Graffiti is a form of visual communication created in public places. It is art that is written, painted or drawn on a wall or other surface, usually without permission and within public view. As everyone tries to leave theie mark, graffiti is the most artistic to do so which makes the world around us look beautiful.Live graffiti artists painting temporary walls for events and activations. Our artists can tailor the artwork to your allotted times and produce engaging.",
      date: "3 Feb 2023",
      time: "4:30PM - 5:30PM",
      venue: "Open Auditorium",
      img: "/concert/graffiti.jpg"
    }
  ]

  const recSportEvents = [
    {
      name: "Tug of War",
      desc: "Tug of war is a sport that pits two teams against each other in a test of strength: teams pull on opposite ends of a rope, with the goal being to bring the rope a certain distance in one direction against the force of the opposing team's pull.",
      date: "4 Feb 2023",
      time: "2:00PM - 3:00PM",
      venue: "Cricket Stadium",
      img: "/sports/tugofwar.jpeg"
    },
    {
    name: "Hit the Wicket",
    desc: "Hit wicket is a method of dismissal in the sport of cricket. This method of dismissal is governed by Law 35 of the Laws of Cricket. The striker is out \"hit wicket\" if, after the bowler has entered his delivery stride and while the ball is in play, his wicket is put down by his bat or his person.",
    date: "4 Feb 2023",
    time: "10:00AM - 11:00AM",
    venue: "Coke Station road",
    img: "/sports/hit-the-wicket.jpg"
  },
  {
    name: "Dribble the Ball",
    desc: "Dribbling is the art of moving the ball past your opponent without allowing him to tackle you, allowing you to keep possession. Because, in the end, the only thing standing in your way of scoring goals is the opposition. The game becomes much easier if you can negate the opposition with fancy dribbling footwork.",
    date: "4 Feb 2023",
    time: "1:00PM - 2:00PM",
    venue: "Coke Station road",
    img: "/sports/dribbletheball.jpg"
  },
  {
    name: "Penalty Goal",
    desc: "A penalty kick is a method of restarting play in association football, in which a player is allowed to take a single shot at the goal while it is defended only by the opposing team's goalkeeper. It is awarded when an offense punishable by a direct free kick is committed by a player in their own penalty area.",
    date: "4 Feb 2023",
    time: "11:00AM - 12:00PM",
    venue: "Coke Station road",
    img: "/sports/penalty.jpg"
  },
  ]


const Events=(props)=> {

  
 const [tab,setTab]=useState('tab1');
 const [type,setType]=useState('major');
 const [open,setopen]=useState(true);
 const [sport,setSport]=useState('sports')
  return (
    <>
        <Flex flexDir={'column'} paddingX={props.value?'0px':'50px'} marginTop={props.value?'0px':'40px'} width={'100%'}  > 
            <Flex margin={props.value?'10px':'0px'} marginTop={props.value && '5px'} justifyContent={'center'} width={'100%'} className='heading'><p>EVENTS</p></Flex>
            <Flex className={'options'} >
                <div className={tab==='tab1'?'tab tabselect':'tab'} onClick={()=>{setTab('tab1');setopen(true);setType('major')}} >Culturals</div>
                <div className={tab==='tab2'?'tab tabselect':'tab'}  onClick={()=>{setTab('tab2');setSport('sports')}}>Sports</div>
                <div className={tab==='tab3'?'tab tabselect':'tab'} onClick={()=>{setTab('tab3');setType('major');setopen(false);}}>Pro-Nites</div>
            </Flex>
            {tab==='tab1' &&  
              <Flex position={'relative'} overflow={open?'auto':'hidden'}  transition={'height 1s'} transitionTimingFunction={'ease'} padding={'10px'} width={'100%'} justifyContent={'center'}>
                <div className={type==='major'?'type typeselect':'type'} onClick={()=>setType('major')} >Major Events</div>
                <div className={type==='minor'?'type typeselect':'type'} onClick={()=>setType('minor')}>Minor Events</div>
              </Flex>
            }

            {tab==='tab2' &&  
              <Flex position={'relative'} overflow={open?'auto':'hidden'}  transition={'height 1s'} transitionTimingFunction={'ease'} padding={'10px'} width={'100%'} justifyContent={'center'}>
                <div className={sport==='sports'?'type typeselect':'type'} onClick={()=>setSport('sports')} >Sports</div>
                <div className={sport==='recreational'?'type typeselect':'type'} onClick={()=>setSport('recreational')}>Recreational</div>
              </Flex>
            }

              {tab==='tab1' && <> <Flex justifyContent={'center'} alignItems={'center'} zIndex={'1050'} position={'relative'} marginTop={'20px'}>
                <Flex onClick={()=>window.open('https://guprojects.gitam.edu/Minor-Competitions/','_blank')} cursor={'pointer'} className={"gradient-border box"}><p className='button-text'>Register for Events </p></Flex>
                </Flex></>}
                
                

                {tab==='tab3' && <> <Flex justifyContent={'center'} alignItems={'center'} zIndex={'1050'} position={'relative'} marginTop={'20px'} >
                <Flex onClick={()=>window.open('https://guprojects.gitam.edu/Pro_Nites/','_blank')} cursor={'pointer'} className={"gradient-border box"}><p className='button-text'>Buy A Ticket </p></Flex>
                </Flex></>}


            <Flex justifyContent={'center'}>  
              {!props.value &&  <div  className={((tab==='tab1' && type==='minor')||(tab==='tab2'))?'carousel-div2':'carousel-div'} > 
                {tab==='tab1' && type==='major' && <EventsCarousel  height={'230'} value={eventListMajor}  device={props.value}/>}
                {tab==='tab1' && type==='minor' && <Flex flexDir={'column'}>
                
                <EventsCarousel height={'160'} value={eventListMinor}  device={props.value}/>
                </Flex> }

                
                 {tab==='tab2' && sport==='sports' && <SportsCarousel height={'180'} value={sportEvents} device={props.value}/>}
                 {tab==='tab2' && sport==='recreational' && <EventsCarousel height={'180'} value={recSportEvents} device={props.value}/>}
                 
                 
                 {tab==='tab3'&& <Flex flexDir={'column'}>
                 <EventsCarousel height={'220'} value={concert_night} device={props.value}/>
                 </Flex>}
                </div>}

                {props.value && <div justifyContent={'center'} className={((tab==='tab1' && type==='minor')||(tab==='tab2'))?'carousel-div2':'carousel-div'} >
                {tab==='tab1'&& type==='major' && <EventsCarousel height={'330'} value={eventListMajor}  device={props.value}/>}
                 {tab==='tab1'&& type==='minor' && <Flex flexDir={'column'}>
                 <EventsCarousel height={'265'} value={eventListMinor} device={props.value}/>
              
                 </Flex>}
                 
                 {tab==='tab2' && sport==='sports' &&<SportsCarousel height={'285'} value={sportEvents} device={props.value}/>}
                 {tab==='tab2' && sport==='recreational' &&<EventsCarousel height={'265'} value={recSportEvents} device={props.value}/>}

                 
                 {tab==='tab3'&& <Flex flexDir={'column'}>
                 <EventsCarousel height={'300'} value={concert_night} device={props.value}/>
                 </Flex>}
                </div>}
            </Flex>
        </Flex>
    </>
  )
}
export default Events