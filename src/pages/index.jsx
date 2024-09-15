import React from 'react';
import Header from '@/components/Header'; 
import { useEffect,useState,useRef } from 'react';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';
import Image from 'next/image';
// import { Download } from 'lucide-react';
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Timer5 from '@/components/Countdown';
import Link from 'next/link';


export default function PreviewPage() {
    const words = ["Software", "E-Sports", "Hardware"];

const router = useRouter();
let showNav = router.query.showNav;
const [isShowNav, setIsShowNav] = useState(showNav === 'true');

useEffect(() => {
  const handlePopstate = () => {
    setIsShowNav(false);
  };

  window.addEventListener('popstate', handlePopstate);

  return () => {
    window.removeEventListener('popstate', handlePopstate);
  };
}, []);

const eventsRef = useRef(null);
const trailerRef = useRef(null);
const aboutRef = useRef(null); // Reference for "JU Rhythm" section

// Scroll to the specified section
const scrollToSection = (sectionRef) => {
  sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
};
  return (
   
    <>
   <NewNavBar
   onEventsClick={() => scrollToSection(eventsRef)} 
   onTrailerClick={() => scrollToSection(trailerRef)} 
   onAboutClick={() => scrollToSection(aboutRef)} 
   />

<Header onRegisterClick={() => scrollToSection(eventsRef)} />
   
        <section className='mt-auto md:mt-auto '>
          <div className="shadow">

       
          </div>
          
          </section>

          <section className='h-full lg:mt-0 mt-10 w-full' >
          <div className="bg-black bg-dot-white/[0.1] z-50">
  <div className="pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
  
  <div className=" bg-black">
    <div className="h-[200px] w-full lg:mt-0 -mt-10 text-white text-center text-3xl hover:scale-100 hover:shadow text-white" style={{fontFamily:"Shuri"}}>
      {/* <a>It Begins</a> */}

      <Timer5/>
                          
    </div>
  </div>
  
  <div  className="relative" id="home">
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 lg:mt-4 mt-[530px]">
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 text-justify-content  mx-auto">
          <div ref={aboutRef} className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
            <h1 className=" w-full md:w-[500px] lg:w-[700px] text-white text-3xl md:text-5xl xl:text-4.5xl pb-10" style={{fontFamily:"Shuri"}}>
              #Build&nbsp;
              <br />
              your idea<span className="text-primary text-white">'24</span>
              <br />
              <FlipWords className='text-[#20B2AA]' words={words} />
            </h1>
            
             
            <div className='lg:ml-0 ml-80 lg:w-[500px] w-48 -mt-44 lg:-mt-10'>
            <Image
                src="https://i.postimg.cc/rmFKCpng/92ce6ce3-d751-4200-a2bc-474690245883-8.png"
                alt="test"
                width={300} // Width for large screens
                height={300} // Height for large screens
                className="w-[250px] h-[220px] lg:w-[500px] lg:h-[400px] bg-blend-difference"
                style={{  
                  backgroundColor: "transparent",
                  opacity: "1",
                  backgroundBlendMode: "inherit",
                }}
              />
            </div>
          </div>
          
          <h1 className="lg:-mt-32 -mt-12 text-white text-3xl md:text-5xl xl:text-6xl " style={{fontFamily:"Shuri", letterSpacing:"5px"}}>
            {/* <Cover className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white'> */}
              JU Innov8<span className="text-primary text-white">'24</span>
            {/* </Cover> */}
          </h1>
          
          <h4 className="mt-8 text-white dark:text-gray-450 text-lg md:text-xl text-align:left">
          Immerse yourself in a hub of technological innovation at INNOV8, where the brightest minds in Software, Hardware, and eSports converge to compete and collaborate. From crafting next-gen software solutions to engineering disruptive hardware prototypes and mastering the world of competitive gaming, INNOV8 offers the ideal platform to demonstrate your expertise.
          With a staggering ₹5 Lakh prize pool, it's more than a competition—it's your gateway to turning groundbreaking ideas into reality. Last year, INNOV8 saw participation from over 150 teams and attracted more than 8,000 attendees from across India. Be a part of this nationwide tech revolution and shape the future of innovation!
          </h4>
          
          <div className='flex justify-between mt-10 text-align:left'>
            <div className="flex space-x-2">
              <svg className="w-6 h-6 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-[#20B2AA] text-lg">17-19 October</span>
            </div>
            
            <div className="flex space-x-2">
              <svg className="w-6 h-6 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                <circle cx="12" cy="11" r="4"></circle>
              </svg>
              <span className="text-[#20B2AA] text-lg">JECRC UNIVERSITY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </section>
    

       
        <div ref={eventsRef} className=" bg-dot-white/[0.1] z-50" style={{backgroundColor:"black"}}>
        <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className='flex flex-col text-center justify-center p-16 -mt-2.5'>
         
          <div className="flex justify-center items-center">
  <h1 
    className=" mb-24 mt-10 w-full text-center text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl" 
    style={{ fontFamily: "Shuri", letterSpacing: "5px" }}
  >
    Events
  </h1>
</div>

                    <div className=' grid  md:flex justify-evenly '>
                                {/*Seperate cards for each Event Domain */} 


                                <div className='my-2 mx-2'>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                <Link href='/technical'>
                                <Image src='https://i.postimg.cc/HsLVSPQJ/SOFTWARE.png' className="p-1 rounded-[22px] transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </Link>
                                </BackgroundGradient>
                                </div>


                                <div className='my-2 mx-2'>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                <Link href='/sports'>
                                <Image src='https://i.postimg.cc/pVCmJtnb/ESPORTS.png' className="p-1 rounded-[22px] transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </Link>
                                </BackgroundGradient>
                                </div>
                               
                                
                               <div className='my-2 mx-2'>
                               <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                <Link href='/hardware'>
                                <Image src='https://i.postimg.cc/HsLVSPQJ/SOFTWARE.png' className="p-1 rounded-[22px]  transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </Link>
                                </BackgroundGradient>
                                </div>

                               
                                
                             
                               

                            </div>
                            
                            </div>
                </div> 
     
          
          {/** Gallery */}
          <section ref={trailerRef} className='p-10 md:p-20 bg-black bg-dot-white/[0.1] h-[1000px] lg:h-[700px]' >
          <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="md:px-12 xl:px-6">         
                 <div className="relative pt-12 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className=" text-white text-4xl md:text-6xl xl:text-6xl" style={{fontFamily:"Shuri",letterSpacing:"5px"}}>
                          JU Innov8'23 Aftermovie
                          </h1>

                    </div>
                </div>
                </div>
                <div className="grid-wrapper mt-10 " >
                <iframe
  className="w-[350px] lg:w-[700px] mx-auto aspect-video self-stretch h-[400px] lg:pb-5"
  src="https://www.youtube.com/embed/nKrJw1DvRso?si=mXgeNdIilsjLgUOc"
  frameBorder="0"
  title="Product Overview Video"
  aria-hidden="true"
/>

                </div> 

            </section>

           
          <Footer/>        
      
    </>
    
  );
}