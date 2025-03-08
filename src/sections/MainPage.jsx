import React from "react";
import headerlogo from "../assets/logonobackground.png";
import fbicon from "../assets/3dfb.png";
import insticon from "../assets/instagram4.png";
import emailicon from "../assets/email.png";
import phoneicon from "../assets/telephone.png";
import bottle from "../assets/newbottlegordo.png";
// main//

function MainPage() {
  return (
    <>
      <div className="fixed flex items-center justify-center h-10 bg-blue-500  z-2 text-center text-white font-bold font-sigmar w-screen text-shadow ">GORDO
        <img src={headerlogo} alt="" className="h-10 ml-1 mr-1" />MIKES
        
      </div>

      <div className="fixed flex items-center justify-around  w-screen h-14 bg-blue-500 bottom-0 right-0 z-2 text-white text-center">
        <a href="mailto:test@example.com" target="_blank">
          <img
            src={emailicon}
            alt=""
            className="max-w-[40px] md:max-w-[50px] lg:min-w-[50px] img-shadow-2 "
          />
        </a>
        <a href="tel:555-555-5555" target="_blank">
          <img
            src={phoneicon}
            alt=""
            className="max-w-[40px] md:max-w-[50px] lg:min-w-[50px] img-shadow-2 "
          />
        </a>
        <a
          href="https://www.facebook.com/groups/414186977978889"
          target="_blank"
        >
          <img
            src={fbicon}
            alt=""
            className="max-w-[40px] md:max-w-[50px] lg:min-w-[50px] img-shadow-2 "
          />
        </a>
        <a href="https://www.instagram.com/gordomikesbbq/" target="_blank">
          <img
            src={insticon}
            alt=""
            className="max-w-[40px] md:max-w-[50px] lg:min-w-[50px] img-shadow-2 "
          />
        </a>
      </div>

      <div className="container mx-auto landscape:max-w-dvh min-h-screen min-w-screen bg-[url(./assets/bg-slate.png)] bg-cover bg-no-repeat bg-center">

        
        <div className="min-h-screen p-6">
          <div className="relative  p-6 min-h-20 min-w-20 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-center text-gray-300 font-sigmar text-shadow">
              The Sauce <br /> is <br />The Boss
            </h2>
            <img src={bottle} alt="" className="img-shadow-2" />
            <p className="text-sm md:text-lg lg:text-xl  leading-5 text-center font-bold text-gray-300 text-shadow mb-4">
              Tomato Sauce-Brown Sugar-Vinegar-Guava-Water-Worcestershire
              Sauce-Olive Oil-Ketchup-Salt-Pepper-Garlic-Mustard Powder-Onion
              Powder-Cayenne Pepper
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default MainPage;
