import React, { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Navbar from "../../components/navbar/navbar-view";
import { enjoyList, facilities } from "./constants/data";
import Footer from "../../components/footer";


const About: React.FC = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">
        <div
          className="text-center bg-cover bg-center bg-no-repeat h-96 flex md:flex-col flex-row justify-center items-center text-gray-800"
          style={{ backgroundImage: `url('/assets/gold_bg.webp')` }}
        >
          <h1 className="text-6xl font-semibold mb-4 relative">About Us</h1>
        </div>
        <div className="sm:flex p-2 lg:p-8 pt-[2rem]">
          <div className="flex-1">
            <p className="text-[1.2rem] lg:text-2xl pl-5 font-semibold mb-4">BEST AMENITIES</p>
            <h1 className="text-[2.4rem] lg:text-6xl p-[0.5rem] tracking-wider font-semibold mb-8 leading-relaxed lg:mt-[2.5rem]">
              Enjoy Your Vacation In <span className="text-[#9b804e]">Our</span>{" "}
              Hotel And Get Lots Of Fun, Happiness{" "}
              <span className="text-[#9b804e]">And</span> Great{" "}
              <span className="text-[#9b804e]">Pleasure</span>
            </h1>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8">
            {enjoyList.map((enj) => (
              <div key={enj.id} className="flex flex-col items-center">
                <div className="text-7xl mb-4 ">
                  {<enj.image style={{ fontSize: "4rem" }} />}
                </div>
                <div className="text-2xl font-semibold mb-2">{enj.title}</div>
                <div className="text-base">{enj.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center p-3 lg:p-8 mt-[4rem]">
          <h1 className="text-[2rem] text-4xl font-semibold mb-4 underline p-4">HOTEL FACILITIES</h1>
          <div className="w-1/5 h-2 bg-brown mx-auto mb-6"></div>
          <div className="flex flex-wrap lg:grid grid-cols-3 space-y-4">
            {facilities.map((fac) => (
              <div key={fac} className="flex items-center m-[2rem] border-2 p-[1rem] bg-yellow-100">
                <CheckIcon className="w-6 h-6 text-brown mr-3" />
                <span className="text-lg font-bold">{fac}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
