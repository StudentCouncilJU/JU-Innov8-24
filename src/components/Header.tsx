import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for the props
interface HeaderProps {
  onRegisterClick: () => void; // Specify that the prop is a function that returns void
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  // Use HeaderProps as the type for the props

  return (
    <>
      <header>
        <div className="relative inset-x-0 overflow-hidden">
          {/* <iframe
            className="absolute inset-0 w-full h-full object-cover lg:-mt-24 -mt-60 "
            src="https://player.vimeo.com/video/1007351684?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            allow="autoplay;"
            style={{
              position: "fixed",
              width: "100%",
              height: "142vh",
              objectFit: "cover",
              zIndex: -3,
              opacity: 0.9,
            }}
            title="goku web"
          ></iframe> */}

          <video
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            position: 'fixed',
                            width: '100%',
                            height: '142vh',
                            objectFit: 'cover',
                            zIndex: -3,
                            opacity: 0.9,
                        }}
                    >
                        <source src="goku web.mp4" type="video/mp4" />
                    </video>

          <div className="flex items-center justify-center">
            <div
              className="relative w-[500px] max-w-screen-md lg:mt-0 -mt-14"
              style={{ fontFamily: "Customfont" }}
            >
              <div className="relative h-0 pb-[80%] md:pb-[65%] lg:mt-12 mt-0 mb-7">
                <Image
                  src="/test3.png"
                  alt="logo"
                  className="glowing-text light-bulb -mt-auto absolute inset-0 w-full object-contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex h-[80px] justify-center gap-10 text-center mb-10 lg:mt-0 -mt-20">
                <h1 className="text-white mb-12" style={{ fontSize: "50px" }}>
                  17
                  <sup
                    style={{
                      position: "relative",
                      top: "-20px",
                      fontSize: "30px",
                    }}
                  >
                    th
                  </sup>{" "}
                  Oct - 19
                  <sup
                    style={{
                      position: "relative",
                      top: "-20px",
                      fontSize: "30px",
                    }}
                  >
                    th
                  </sup>{" "}
                  Oct
                </h1>
              </div>
              <div className="relative z-40">
                <div className="flex justify-center lg:mt-15 mt-10 gap-10 text-center custom-md:mt-10">
                  <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#380036] to-[#0CBABA] rounded-lg" />
                    <div className="px-12 py-4 bg-black rounded-[6px] text-2xl relative group transition duration-200 text-white hover:bg-transparent">
                      <Link href="" download>
                        Guidelines
                      </Link>
                    </div>
                  </button>

                  <button onClick={onRegisterClick} className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#380036] to-[#0CBABA] rounded-lg" />
                    <div className="px-12 py-4 bg-black rounded-[6px] text-2xl relative group transition duration-200 text-white hover:bg-transparent">
                      Register
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-10 text-center mb-10 lg:mt-0 -mt-5">
                {/* Additional content if needed */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
