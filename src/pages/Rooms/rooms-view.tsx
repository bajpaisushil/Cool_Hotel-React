import Navbar from "../../components/navbar";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useRoomController from "./rooms-controller";
import Footer from "../../components/footer";

const Rooms = () => {
  const roomController = useRoomController();
  
  return (
    <div>
      <Navbar />
      <div className="">
        <img
          className="h-[88vh] w-full"
          src="/assets/images/coolhotel7.jpg"
          alt="front room"
        />
        <div className="flex justify-center items-center">
          <div className="absolute top-[18rem] mt-[1rem]">
            <h1 className="font-bold text-[4rem] lg:text-[5.5rem] text-white">
              {roomController.standardText} Rooms
            </h1>
            <p className="text-[1.5rem] lg:text-[2.5rem] text-center text-white font-medium">
              <Link to="/">Home</Link> . {roomController.standardText} Rooms
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-[#1d1b1a] w-full lg:w-[98%] relative bottom-[3rem] m-auto p-[2rem] h-fit lg:h-[10rem] duration-100">
        <div className="flex flex-row h-fit m-[1rem] justify-between border-gray-300 border-b-[1px]">
          <label
            htmlFor="checkin"
            className="text-[1.15rem] m-[6px] h-fit text-left w-[8rem] mr-[rem] text-white"
          >
            Check-in
          </label>
          <DatePicker
            className="text-end bg-transparent w-full h-[2.4rem] font-bold text-white"
            selected={roomController.selectedInDate}
            onChange={(date) => roomController.handleSelectedInDate(date)}
            placeholderText={`▼`}
          />
        </div>
        <div className="flex flex-row h-fit m-[1rem] justify-between border-gray-300 border-b-[1px]">
          <label
            htmlFor="checkin"
            className="text-[1.15rem] m-[6px] h-fit text-left w-[9rem] mr-[rem] text-white"
          >
            Check-out
          </label>
          <DatePicker
            className="text-end bg-transparent w-full h-[2.4rem] font-bold text-white"
            selected={roomController.selectedOutDate}
            onChange={(date) => roomController.handleSelectedOutDate(date)}
            placeholderText={`▼`}
          />
        </div>
        <div className="flex flex-row h-fit m-[1rem] justify-between border-gray-300 border-b-[1px]">
          <label
            htmlFor="adults"
            className="text-[1.15rem] m-[6px] h-fit text-left w-[6rem] mr-[rem] text-white"
          >
            Adults
          </label>
          <input
            id="adults"
            className="text-end bg-transparent w-full h-[2.4rem] font-bold text-white"
            type="number"
            value={roomController.adults}
            onChange={(e) => roomController.handleAdults(e.target.value)}
          />
        </div>
        <div className="flex flex-row h-fit m-[1rem] justify-between border-gray-300 border-b-[1px]">
          <label
            htmlFor="children"
            className="text-[1.15rem] m-[6px] h-fit text-left w-[6rem] mr-[rem] text-white"
          >
            Children
          </label>
          <input
            id="children"
            className="text-end bg-transparent w-full h-[2.4rem] font-bold text-white"
            type="number"
            value={roomController.children}
            onChange={(e) => roomController.handleChildren(e.target.value)}
          />
        </div>
        <button className="m-[1rem] w-[17rem] text-white font-medium hover:text-[#ab6034] hover:bg-white text-[1.3rem] text-center py-[0.9rem] px-[2rem] border border-white">
          Search Now{" "}
        </button>
      </div>

      <div
        className={`flex flex-wrap justify-center items-center p-[1.5rem] pt-[5rem] bg-[#f4f4f4] room-grid grid-cols-${roomController.largeWidth}`}
      >
        <div className="w-fit lg:w-[29rem] m-[0.8rem] bg-white">
              <Link to='/rooms/standard'>
              <img
                className="w-[100%] h-[18rem] cursor-pointer hover:scale-105"
                src={`/assets/images/coolhotel1.jpg`}
                alt="room"
              />
              </Link>
              <div className="flex flex-col p-[1rem]">
                <h1 className="text-[1.8rem] font-bold my-[0.7rem]">
                  Standard Room
                </h1>
                <div className="flex flex-ro7">
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[1.7rem] mb-[1rem]">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person w-[2rem] h-[1.6rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    Adults: 2
                  </div>
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[0.7rem] mb-[1rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-rulers w-[2rem] h-[1.3rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                    </svg>
                    Size: 610 ft2
                  </div>
                </div>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                All our Room have big windows to help you take a broad..
                </p>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                  From{" "}
                  <span className="text-[1.7rem] font-bold text-[#ab6034]">
                    ₹49
                  </span>{" "}
                  /per night
                </p>
              </div>
              <Link to='/rooms/standard'><button className="border-none w-[100%] font-bold bg-[#eeeceb] text-black hover:bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.7rem] px-6 mt-6 border-[4px] hover:border-white">
                Book Now {" >"}
              </button>
              </Link>
            </div>
            <div className="w-fit lg:w-[29rem] m-[0.8rem] bg-white">
            <Link to='/rooms/luxury'>
              <img
                className="w-[100%] h-[18rem] cursor-pointer hover:scale-105"
                src={`/assets/images/coolhotel2.jpeg`}
                alt="room"
              />
              </Link>
              <div className="flex flex-col p-[1rem]">
                <h1 className="text-[1.8rem] font-bold my-[0.7rem]">
                  Luxury Room
                </h1>
                <div className="flex flex-ro7">
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[1.7rem] mb-[1rem]">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person w-[2rem] h-[1.6rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    Adults: 2
                  </div>
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[0.7rem] mb-[1rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-rulers w-[2rem] h-[1.3rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                    </svg>
                    Size: 610 ft2
                  </div>
                </div>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                All our Room have big windows to help you take a broad..
                </p>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                  From{" "}
                  <span className="text-[1.7rem] font-bold text-[#ab6034]">
                    $49
                  </span>{" "}
                  /per night
                </p>
              </div>
              <Link to='/rooms/luxury'>
              <button className="border-none w-[100%] font-bold bg-[#eeeceb] text-black hover:bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.7rem] px-6 mt-6 border-[4px] hover:border-white">
                Book Now {" >"}
              </button>
              </Link>
            </div>
            <div className="w-fit lg:w-[29rem] m-[0.8rem] bg-white">
            <Link to='/rooms/deluxe'>
              <img
                className="w-[100%] h-[18rem] cursor-pointer hover:scale-105"
                src={`/assets/images/coolhotel3.jpg`}
                alt="room"
              />
              </Link>
              <div className="flex flex-col p-[1rem]">
                <h1 className="text-[1.8rem] font-bold my-[0.7rem]">
                  Deluxe Room
                </h1>
                <div className="flex flex-ro7">
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[1.7rem] mb-[1rem]">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person w-[2rem] h-[1.6rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    Adults: 2
                  </div>
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[0.7rem] mb-[1rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-rulers w-[2rem] h-[1.3rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                    </svg>
                    Size: 610 ft2
                  </div>
                </div>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                All our Room have big windows to help you take a broad..
                </p>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                  From{" "}
                  <span className="text-[1.7rem] font-bold text-[#ab6034]">
                    $49
                  </span>{" "}
                  /per night
                </p>
              </div>
              <Link to='/rooms/deluxe'>
              <button className="border-none w-[100%] font-bold bg-[#eeeceb] text-black hover:bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.7rem] px-6 mt-6 border-[4px] hover:border-white">
                Book Now {" >"}
              </button>
              </Link>
            </div>
            <div className="w-fit lg:w-[29rem] m-[0.8rem] bg-white">
            <Link to='/rooms/executive'>
              <img
                className="w-[100%] h-[18rem] cursor-pointer hover:scale-105"
                src={`/assets/images/coolhotel4.jpg`}
                alt="room"
              />
              </Link>
              <div className="flex flex-col p-[1rem]">
                <h1 className="text-[1.8rem] font-bold my-[0.7rem]">
                  Executive Room
                </h1>
                <div className="flex flex-ro7">
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[1.7rem] mb-[1rem]">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person w-[2rem] h-[1.6rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    Adults: 2
                  </div>
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[0.7rem] mb-[1rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-rulers w-[2rem] h-[1.3rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                    </svg>
                    Size: 610 ft2
                  </div>
                </div>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                All our Room have big windows to help you take a broad..
                </p>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                  From{" "}
                  <span className="text-[1.7rem] font-bold text-[#ab6034]">
                    $49
                  </span>{" "}
                  /per night
                </p>
              </div>
              <Link to='/rooms/executive'>
              <button className="border-none w-[100%] font-bold bg-[#eeeceb] text-black hover:bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.7rem] px-6 mt-6 border-[4px] hover:border-white">
                Book Now {" >"}
              </button>
              </Link>
            </div>
      </div>
    </div>
  );
};

export default Rooms;
