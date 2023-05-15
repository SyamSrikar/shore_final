import React, { useState } from 'react';
import '../team.css';
import Profiles from './Profiles';
import {FaBars,FaRegWindowClose,FaCircle} from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";


const Navigation = (props) => {
    
  const valueParent = [
    {
      heading:'Shore',
      heads:[
        {
          "image": "/pictures/Core Team/Aakash.jpg",
          "name": "Aakash Manohar Indugula",
          "domain": "",
          "role": "President",
          "linkedin" : "#"
        },
        {
          "image": "/pictures/Core Team/Zenia_Khan.jpg",
          "name": "Zenia Khan",
          "domain": "",
          "role": "Vice President",
          "linkedin" : "#"
        }
      ],
      leads: [],
      members:[]
    },
    {
      heading:'Design Media',
      heads:[{
        "image": "/pictures/Design_Media/Lead-Yoshith Raaj Aalla.jpeg",
        "name": "Sreshna",
        "domain": "Design Media",
        "role": "Head",
        "linkedin" : "#"
      },
      {
        "image": "/pictures/Design_Media/Lead-Sathvik Thaduru.jpg",
        "name": "Sathvik Thaduru",
        "domain": "Design Media",
        "role": "Head",
        "linkedin" : "#"
      }],
      leads: [
        
        {
          "image": "/pictures/Design_Media/Lead-Krishna Chaitanya.jpg",
          "name": "Krishna Chaitanya",
          "domain": "Design Media",
          "role": "Lead",
          "linkedin" : "#"
        }
        ],
        members:[]
    },
        {
      heading:'Events',
      heads:[
        {
          "image": "/pictures/Events/head-Ogrima Mukherjee.jpg",
          "name": "Ogrima Mukherjee",
          "domain": "Events",
          "role": "Head Of Culturals",
          "linkedin" : "#"
        },
        {
          "image": "/pictures/Events/Head-Charan Raj Manthena.jpg",
          "name": "Charan Raj Manthena",
          "domain": "Events",
          "role": "Head Of Sports",
          "linkedin" : "#"
        }
      ],
      leads: [
        {
          "image": "/pictures/Events/Lead-Prerana Andra.jpg",
          "name": "Prerana Andra",
          "domain": "Events",
          "role": "Lead of Recreational",
          "linkedin" : "#"
        },
        {
          "image": "/pictures/Events/Lead-Anirvin Nidasanametla.jpg",
          "name": "Anirvin Nidasanametla",
          "domain": "Events",
          "role": "Lead of Sports",
          "linkedin" : "#"
        },
        {
          "image": "/pictures/Events/Lead-G S S Shreyas.jpg",
          "name": "PG S S Shreyas",
          "domain": "Events",
          "role": "Lead of Sports",
          "linkedin" : "#"
        },
        {
          "image": "/pictures/Events/Lead-Laxmi Usha Padmini.jpg",
          "name": "Laxmi Usha Padmini",
          "domain": "Events",
          "role": "Lead of Cultural",
          "linkedin" : "#"
        },
        {
          "image": "/pictures/Events/Lead-Yogita Achary.jpg",
          "name": "Yogita Achary",
          "domain": "Events",
          "role": "Lead of Recreational",
          "linkedin" : "#"
        }
        ],
      members:[]},
      {
        heading:"Hospitality",
        heads:[
          {
          "image": "/pictures/Hospitality/Head-Ananth Era.jpg",
          "name": "Ananth Era",
          "domain": "Hospitality",
          "role": "Head of Hospitality",
          "linkedin" : "#"
          }
        ],
        leads: [
          {
            "image": "/pictures/Hospitality/Lead-K.Thanmai Nookambhika.jpg",
            "name": "k.Thanmai Nookambhika",
            "domain": "Hospitality",
            "role": "Lead of Hospitality",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Hospitality/Lead-Snigdha.jpg",
            "name": "Snigdha",
            "domain": "Hospitality",
            "role": "Lead of Helpdesk",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Hospitality/Lead-Sai Ram Vinay.jpg",
            "name": "Sai Ram Vinay",
            "domain": "Hospitality",
            "role": "Lead of Invitations",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Hospitality/Lead-Pragyna Abhishek Titty.jpg",
            "name": "Pragnya Abhishek Titty",
            "domain": "Hospitality",
            "role": "Lead of Transportation and Accomodation",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Hospitality/Lead-Tanmayi Bade.jpg",
            "name": "Tanmayi Bade",
            "domain": "Hospitality",
            "role": "Lead of Food and Bevarages",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Hospitality/Lead-Joshi Kumar.jpg",
            "name": "Joshi Kumar",
            "domain": "Hospitality",
            "role": "Lead of Reception",
            "linkedin" : "#"
          }
          
      ]},
      {
        heading:"Marketing",
        heads:[
          {
            "image": "/pictures/Marketing/Head-Kshiraj Dilli.jpg",
            "name": "Joshi Kumar",
            "domain": "Marketing",
            "role": "Head of Marketing",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Marketing/Co-Head-Lakshman.jpg",
            "name": "Lakshman",
            "domain": "Marketing",
            "role": "Co-Head of Marketing",
            "linkedin" : "#"
          }
        ],
        leads:[
          {
            "image": "/pictures/Marketing/Lead-Anirudh Pakala.jpg",
            "name": "Anirudh Pakala",
            "domain": "Marketing",
            "role": "Lead of Content",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Marketing/Lead-Saaketh Choudarapu.jpg",
            "name": "Saaketh Choudrapu",
            "domain": "Marketing",
            "role": "Lead of External Relations",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Marketing/Lead-Charan Mokara.jpg",
            "name": "Charan Mokara",
            "domain": "Marketing",
            "role": "Lead of Offline Marketing",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Marketing/Lead-Mohit Reddy.jpg",
            "name": "Mohit Reddy",
            "domain": "Marketing",
            "role": "Lead of Online Marketing",
            "linkedin" : "#"
          }
        ]
      },
      {
        heading:"Operations",
        heads:[
          {
            "image": "/pictures/Operations/Head-Shreesh Verma.jpg",
            "name": "Shreesh Verma",
            "domain": "Marketing",
            "role": "Head of Operations",
            "linkedin" : "#"
          }
        ],
        leads:[
          {
            "image": "/pictures/Operations/Lead-D.Dheeresh Kumar.jpg",
            "name": "D.Dheeresh Kumar",
            "domain": "Operations",
            "role": "Lead of Campus Decoration",
            "linkedin" : "#"
          },
        
          {
            "image": "/pictures/Operations/Lead-Tanooj Vardhan.jpg",
            "name": "Tanooj Vardhan",
            "domain": "Operations",
            "role": "Lead of Inventory and Logistics",
            "linkedin" : "#"
          },
         
          {
            "image": "/pictures/Operations/Lead-Harsha Deep.jpg",
            "name": "Harsha Deep",
            "domain": "Operations",
            "role": "Lead of Safety and Security",
            "linkedin" : "#"
          },
       
          {
            "image": "/pictures/Operations/Lead-Sam Vijay.jpg",
            "name": "Sam Vijay",
            "domain": "Operations",
            "role": "Lead of Vendor Management",
            "linkedin" : "#"
          }
        ]
      },
      {
        heading:"Sponsorship",
        heads:[
          {
            "image": "/pictures/Sponsorship/Head-Prachi Sharma.jpg",
            "name": "Prachi Sharma",
            "domain": "Sponsorship",
            "role": "Head of Sponsorship",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Sponsorship/Lead-Syed Liyaqhat Ahmed.jpg",
            "name": "Syed Liyaqhat Ahmed",
            "domain": "Sponsorship",
            "role": "Head of Sponsorship",
            "linkedin" : "#"
          },
          
        ],
        leads:[
          {
            "image": "/pictures/Sponsorship/Lead-Jayanth.jpg",
            "name": "Jayanth",
            "domain": "Sponsorship",
            "role": "Lead of Sponsorship",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Sponsorship/Lead-Bhanu Prakash.jpg",
            "name": "Bhanu Prakash",
            "domain": "Sponsorship",
            "role": "Lead of Sponsorship",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Sponsorship/Lead-Sneha Bhavana.jpg",
            "name": "Sneha Bhavana",
            "domain": "Sponsorship",
            "role": "Lead of Sponsorship",
            "linkedin" : "#"
          },
          
          {
            "image": "/pictures/Sponsorship/Lead-Tanya.jpeg",
            "name": "Tanya",
            "domain": "Sponsorship",
            "role": "Lead of Sponsorship",
            "linkedin" : "#"
          }
        ] 
      },
      {
        heading:"Technology",
        heads:[
          {
            "image": "/pictures/Technology/Head-Rajdeep Ray.jpg",
            "name": "Rajdeep Ray",
            "domain": "Technology",
            "role": "Head of Technology",
            "linkedin" : "#"
          }
        ],
        leads:[
          {
            "image": "/pictures/Technology/Lead-Shravan Jeripothula.jpeg",
            "name": "Shravan Jeripothula",
            "domain": "Technology",
            "role": "Lead of Technology",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Technology/Lead-Syam Srikar.jpg",
            "name": "Syam Srikar",
            "domain": "Technology",
            "role": "Front-End Developer",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Technology/Lead-Tanmaya.jpg",
            "name": "Tanmaya",
            "domain": "Technology",
            "role": "UI-UX Designer",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Technology/Charan Kumar Udayagir.jpg",
            "name": "Charan Kumar Udayagir",
            "domain": "Technology",
            "role": "Back-End Developer",
            "linkedin" : "#"
          }
        ]
      },
      {
        heading:"Finance and Legal",
        heads:[
          {
            "image": "/pictures/Finance and Legal/Head-Riya Sethia.jpg",
            "name": "Riya Sethia",
            "domain": "Finance and Legal",
            "role": "Head of Finance and Legal",
            "linkedin" : "#"
          }
        ],
        leads:[
          {
            "image": "/pictures/Finance and Legal/Lead-P V Abhinav Sai.jpg",
            "name": "P V Abhinav Sai",
            "domain": "Finance and Legal",
            "role": "Lead of Finance and Legal",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Finance and Legal/Lead-Mamidipaka Venkata Ajay.jpg",
            "name": "Mamidipaka Venkata Ajay",
            "domain": "Finance and Legal",
            "role": "Lead of Finance and Legal",
            "linkedin" : "#"
          },
          {
            "image": "/pictures/Finance and Legal/Lead-Utkarsh Aluru.jpg",
            "name": "Utkarsh Aluru",
            "domain": "Finance and Legal",
            "role": "Lead of Finance and Legal",
            "linkedin" : "#"
          }
        ]
      }
  ]

  const [currentValueParent, setCurrentValueParent] = React.useState(valueParent[0]);
  

const [isMenu,setIsMenu]=useState(false)

const [isSelect,setSelected]=useState(false)

  return (
    <>
      { !isMenu && <div className='close_team' onClick={()=>{props.state(false)}}><AiOutlineHome size={'40px'}/></div>}
      <div className={props.value?'navigation-mobile':'navigation-desktop'}>
        {props.value &&<div className='check'>
            {!isSelect?
              <FaBars onClick={() => {setIsMenu(!isMenu);setSelected(!isSelect)}} color='white' size={'35px'}/>:
              <FaRegWindowClose onClick={() => {setIsMenu(!isMenu);setSelected(!isSelect)}} color='white' size={'35px'}/>
            }
        </div>}

        {!props.value &&<div className='navigation-links-desktop'>
          {valueParent.map((c) => <a className={currentValueParent.heading===c.heading?'active-parent':'inactive'} onClick={() => setCurrentValueParent(c)}>{c.heading}</a>)}
        </div>}
        
        {!props.value && <div className='spacer'></div>}
        {props.value && isMenu && <div className='navigation-links-mobile'>
          {valueParent.map((c) => <a className={currentValueParent.heading===c.heading?'active-parent':'inactive'} onClick={() => {setCurrentValueParent(c);setIsMenu(!isMenu);setSelected(!isSelect);}}>
            {currentValueParent.heading===c.heading?
            <div className='active'>
              <FaCircle color='white' size={'10px'}/>
              {c.heading}
              <FaCircle color='white' size={'10px'}/>
            </div>:c.heading}
          </a>)}
        </div>}
        {props.value&& !isMenu && <div className='title'><p>{currentValueParent.heading}</p></div>}
        {!isMenu && <div className='profiles'><Profiles  valueParent={currentValueParent} /></div>}
      </div>
    </>
  );
}
export default Navigation;

