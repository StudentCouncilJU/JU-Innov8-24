import React,{useState} from 'react'

import EventDetails from '../components/EventDetailsModal'
import Image from 'next/image';
import Link from 'next/link';
export default function EventsCard(props) {

    const [showModal,setShowModal]=useState(false)
    return (
        <div className='flex flex-col md:flex-row rounded-xl'>
          <div className='flex-shrink-0'>
            <p className='text-white text-center text-3xl' style={{fontFamily:"Shuri"}}>{props.title}</p>
            <Image className="p-2 lg:ml-0 mx-auto" src={props.image} alt={props.alias} width={400} height={100} />
            <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#380036] to-[#0CBABA] rounded-lg" />
                    <div className="px-12 py-4 bg-black rounded-[6px] text-2xl relative group transition duration-200 text-white hover:bg-transparent">
                      <Link href="https://rzp.io/l/innov8" download>
                      Register Now
                      </Link>
                    </div>
                  </button>
          </div>
          <div className='flex flex-col p-4 text-center lg:ml-0 mx-auto xl:mx-auto'>
            
            <EventDetails 
              name={props.title}
              date={props.date}
              time={props.time}
              venue={props.venue}
              about={props.about}
              team ={props.team}
              details={props.details}
              rules={props.rules}
              regulations={props.regulations}
              coordinator1={props.coordinator1}
              coordinator2={props.coordinator2}
              coordinator3={props.coordinator3}
            />
          </div>
        </div>
      );
}
