import React from 'react';
import Image from 'next/image';
import NavMenu from '@/components/NavMenu';
import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';
import Link from 'next/link'; // Use Next.js Link instead of lucide-react

const eventSponsors = [
    {
        image: 'https://i.postimg.cc/3JsWDdC7/nav-india.jpg'
    },
    {
        image: 'https://i.postimg.cc/k58Qt0tY/hack-quest.jpg'
    },
    {
        image: 'https://i.postimg.cc/Kz0RKfQs/ms-technosoft.jpg' 
    },
    {
        image: 'https://i.postimg.cc/pdP92CF4/Whats-App-Image-2024-10-16-at-13-04-18-5a403a92.jpg',
        url: 'https://quillbot.com/'
    },
    {
        image: 'https://i.postimg.cc/qBFC82P6/Whats-App-Image-2024-10-16-at-13-03-17-438e1617.jpg',
        url: 'https://languagetool.org/'
    },
    {
        image: 'https://i.postimg.cc/5tqHJbzJ/ixigo.jpg'
    },
    {
        image: 'https://i.postimg.cc/W3NdbCmk/mood-makers.jpg'
    },
    {
        image: 'https://i.postimg.cc/dVCkW8tL/hop-up.jpg'
    },
];

const handleEventsClick = () => {
    console.log('Events clicked');
};

const handleAboutClick = () => {
    console.log('About clicked');
};

const Sponsors = () => {
    const router = useRouter();
    const showNav = router.query.showNav;

    return (
        <>
            <NewNavBar onEventsClick={handleEventsClick} onAboutClick={handleAboutClick} />
            <div className='bg-black pb-10'>
                <div className="md:px-12 xl:px-6">
                    <div className="relative pt-36">
                        <div className="lg:w-2/3 text-center mx-auto">
                            <h1 className="text-white text-12xl md:text-8xl xl:text-7xl" style={{ fontFamily: "Shuri", letterSpacing: "5px" }}>
                                Collaborators
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-2 py-2 lg:px-10 lg:pt-12">
                    <div className="container justify-center lg:max-w-[1300px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {eventSponsors.map((sponsor) => (
                                <div key={sponsor.image} className='p-3 justify-center flex rounded-3xl m-4'>
                                    {sponsor.url ? (
                                        <Link href={sponsor.url} passHref>
                                            <Image 
                                                className="h-auto max-w-full rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer" 
                                                width={300} 
                                                height={300} 
                                                src={sponsor.image} 
                                                alt="Sponsor Image" 
                                            />
                                        </Link>
                                    ) : (
                                        <Image 
                                            className="h-auto max-w-full rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer" 
                                            width={300} 
                                            height={300} 
                                            src={sponsor.image} 
                                            alt="Sponsor Image" 
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sponsors;
