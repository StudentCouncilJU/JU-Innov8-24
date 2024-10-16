
import EventCardSports from '../components/EventCardSports'
import React from 'react'
import EventCard from '../components/EventCard.jsx'
import NewNavBar from '../components/NavBar.jsx'
export default function Technical() {

  const events = [
    {
      "name": "BGMI",
      
  
      "alias": "BGMI",
      "image": '',
      "aboutEvent": "The BGMI LAN Event 2024 will be held in-person, bringing together top teams to compete in a structured, competitive environment.",
      "TeamSpecification":" A team may consist of a maximum of 4+1 participants. Students from different educational institutes can form a team.",
      "eventDetail": [
        // "Maximum 5 members || 2000/team"
      ],
      "rules": [
        
        "No Emulators allowed, only mobile phones and ipads.",
        "Squads are responsible for their own technical issues (hardware/internet).",
        "In case a player gets disconnected from a match, the Squad is allowed to continue to play the match at a disadvantage.",
        "Using hacks and any other 3rd party software/tool will result in immediate disqualification.",
        ],
        "regulations":[
        "PLACEMENT POINTS:",
        "1st Position - 10 points",
        "2nd Position - 6 points",
        "3rd Position - 5 points",
        "4th Position - 4 points",
        "5th Position - 3 points",
        "6th Position - 2 points",
        "7th Position - 1 points",
        "8th Position - 1 points",
        "9th Position - 16th Position - 0 points",
        "1 Kill - 1 Point",
        <br/>,  
        "FIXTURES:",
        "The event will consist of rounds depending upon the number of entries i.e. 20 at most for a single round.",
        "Qualifiers: Any no. of teams (2 Matches) (1 Erangel, 1 Sanhok)",
        "Semi-Final: 32 Teams (3 Matches) (1 Erangel, 1 Miramar, 1 Sanhok)",
        "Final: 16 Teams (4 Matches) (2 Erangel, 1 Miramar, 1 Sanhok)",
        "POWERPLAY specially for the Finalists!!",
        "POWERPLAY: For every kill in the first zone, team will be awarded 2x points per finish.",
        <br/>,  
        "JUDGING CRITERIA:",
        "The winner of the tournament will be decided as follows: The winner will be decided in the final round by adding up all the points they scored in the final round. Solo or Squad with the highest point count will proceed to the next round or eventually win.",
        <br/>,  
        "QUALIFICATION ROUND:",
        "Teams have to qualify the online rounds that will be held 7 days prior to the LAN event.",
        "Teams will be informed a week prior to the qualification round.",
        "Only qualified teams will be permitted to sit in the main LAN event."

      ],
     
      "coordinators":{"name":'Arpit Mina : 8905572157',"name2":'Harman Singh : 7357304047',"name3":'Bhawani Singh Rajawat : 7851074822'},
      "schedule": {
        "day": "18th October",
        "venue": "DOME",
        "time": "09:00am - 09:00pm"
      }
    },
    {
      "name": "VALORANT",
      "alias": "VALORANT",
      "image": 'https://i.postimg.cc/t4F4stXC/valorant.png',
      "aboutEvent":" The Valorant LAN Event 2024 will be held in-person, bringing together top teams to compete in a structured, competitive environment.",
     "TeamSpecification":" A team may consist of 5+1 participants. Students from different educational institutes can form a team.",
     
      "eventDetail": [""],
      "rules": [
        "The event will be held in 4 stages - Online Qualifiers-> LAN Quarter-Finals -> LAN Semi-Finals -> LAN Finals.",
        "All disputes should be raised with the Organizers and the decision of the organizer will be final.",
        "Participants are requested to carry their own Gaming pc/Laptop.",
        "Teams are responsible for their own technical issues (hardware/internet).",
        "Using hacks and any other 3rd party software/tool will result in immediate disqualification.",
        "Teams must have a minimum of four players in lobby at the time of the match, else the Team who does fails will forfeit the matches.",
        // "click HERE for the Detailed Rulebook.",
        
      ],
      "regulations":[
        "JUDGING CRITERIA",
        "Online qualifiers, Quarter-finals and Finals will follow a single elimination (BO1) format and Finals will be a best of three (BO3) game.",
        "Game mode will be STANDARD.",
        <br/>,
        "QUALIFICATION ROUND",
        "TEAMS HAVE TO QUALIFY THE ONLINE ROUNDS THAT WILL BE HELD 7 DAYS PRIOR THE LAN EVENT. TEAMS WILL BE INFORMED IN ADVANCE ABOUT ONLINE QUALIFIERS. ONLY QUALIFIED TEAM WILL BE INVITED FOR MAIN LAN EVENT.",
        

      ],
     
      "coordinators":{"name":'Abhinav Jangid : 8955319132',"name2":'Fabiayan Makhdoomi : 8700110060',"name3":'Bhubaneswar : 7062632211'},
      "schedule": {
        "day": "18th October",
        "venue": "DOME",
        "time": "09:00am - 09:00pm"
      }
    },
    {
      "name": "TEKKEN",
      "alias": "TEKKEN",
      "image": 'https://i.postimg.cc/5Nht9kWR/tekken.png',
    
      "aboutEvent": "The Tekken LAN Event 2024 is a live, in-person tournament aimed at showcasing top-tier talent in Tekken.",
      "TeamSpecification":["Individual Entry",
        <br/>,
        <br/>,
      "MATCH FORMAT",
      <br/>,
"The tournament will utilize a double-elimination format.",
"All matches except for the finals will be best-of-three games. The finals will be best-of-five games.",
      ],
      "eventDetail": [
        ""
      ],
      "rules": [
        "If players choose not to rematch on the same stage, the next stage must be selected randomly.",
      "Certain stages may be banned due to fairness issues.",
      "The winner of a game must keep their character, while the loser can switch.",
    "All characters, including DLC, are allowed unless specifically banned.",
    "In the event of a disconnection, the round will be forfeited by the player who disconnected unless otherwise ruled by the organizers.",
    "All disputes should be raised with the tournament staff. The decision of the staff is final.",
    "Finals will be conducted in a best-of-five format. The grand final will reset if the player from the loser's bracket wins the first set",
    "Spamming power moves are probihited.",
    "Character customization will be off.",
      ],
      "regulations":[
        // "QUALIFICATION ROUND",
        // "TEAMS HAVE TO QUALIFY THE ONLINE ROUNDS THAT WILL BE 7 DAYS PRIER THE LAN EVENT. TEAMS WILL BE INFORMED A WEEK PRIER FROM THE QUALIFICATON ROUND. ONLY QUALIFIED TEAM WILL BE PERMITTED TO SIT IN THE MAIN LAN EVENT.",
      ],
      "coordinators":{"name":'Aadil Khan:  9128924050',"name2":'Kunal Mathur: 8949489937'},
      "schedule": {
        "day": "18th October",
        "venue": "DOME",
        "time": "09:00am - 09:00pm"
      }
    },
  ]

  const handleEventsClick = () => {
    // Handle the events click
    console.log('Events clicked');
};

const handleAboutClick = () => {
    // Handle the about click
    console.log('About clicked');
};

  return (
    <>
      
      <div className=" bg-dot-white/[0.2] z-50 lg:w-full md:w-[1500px]" style={{backgroundColor:"black"}}>
      <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <NewNavBar onEventsClick={handleEventsClick} onAboutClick={handleAboutClick} />
      <div className='flex flex-col text-center justify-center gap-10 mt-6'>
        <div className='text-white text-6xl'>
          <p className='m-2' style={{fontFamily:"Shuri", letterSpacing:"5px"}}>E-SPORTS</p>
        </div>
        <div className='flex flex-col mx-16 md:grid gap-10'>
          {events.map((element, index) => (
            <EventCardSports
              key={index}
              title={element.alias}
              image={element.image}
              date={element.schedule.day}
              time={element.schedule.time}
              venue={element.schedule.venue}
              about={element.aboutEvent}
              team ={element.TeamSpecification}
              details={element.eventDetail}
              rules={element.rules}
              regulations={element.regulations}
              coordinator1={element.coordinators.name}
              coordinator2={element.coordinators.name2}
              coordinator3={element.coordinators.name3}
            />
          ))}
        </div>
      </div>   </div> 
    </>
  )
}
