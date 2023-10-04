import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deluxeRooms,
  executiveRooms,
  luxuryRooms,
  standardRooms,
} from "./constants/data";
import { useDispatch } from "react-redux";
import { setCart } from "../../redux/features/cartSlice";

const localizer = momentLocalizer(moment);

const roomFacilities = [
  "Breakfast Included",
  "Flat Screen TV",
  "Hairdryer",
  "Writing Desk",
  "Towel Warmer",
  "Shower bathtub",
  "Balcony or Terrace",
  "Ironing Board",
  "Kettle Tea",
  "Telephone",
  "Saving Safe",
  "Transportations",
];
const myEventsList = [
  {
    start: new Date(),
    end: new Date(),
  },
];

const RoomDetails = () => {
  const dispatch = useDispatch();
  const nav=useNavigate();
  const cartItems=useSelector((state: any)=> state.cart);
  console.log(cartItems);

  const [rating, setRating] = useState(0);
  const [bookingCheckin, setBookingCheckin] = useState<any>("");
  const [bookingCheckout, setBookingCheckout] = useState<any>("");
  const [bookingAdults, setBookingAdults] = useState<any>(2);
  const [bookingChildren, setBookingChildren] = useState<any>(0);
  const [bookingQuantity, setBookingQuantity] = useState<any>(1);

  const [inquiryName, setInquiryName] = useState<any>("");
  const [inquiryEmail, setInquiryEmail] = useState<any>("");
  const [inquiryNumber, setInquiryNumber] = useState<any>();
  const [inquiryAddress, setInquiryAddress] = useState<any>("");
  const [inquiryCheckin, setInquiryCheckin] = useState<any>("");
  const [inquiryCheckout, setInquiryCheckout] = useState<any>("");
  const [inquiryAdults, setInquiryAdults] = useState<any>(2);
  const [inquiryChildren, setInquiryChildren] = useState<any>(0);
  const [inquiryExtraInfo, setInquiryExtraInfo] = useState<any>("");
  const [activeButton, setActiveButton] = useState("booking");

  let rooms: any[] = [];

  const { roomId } = useParams();
  switch (roomId) {
    case "executive":
      rooms = executiveRooms;
      break;
    case "luxury":
      rooms = luxuryRooms;
      break;
    case "standard":
      rooms = standardRooms;
      break;
    case "deluxe":
      rooms = deluxeRooms;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBooking = (e: any) => {
    e.preventDefault();
    if (
      !bookingCheckin ||
      !bookingCheckout ||
      !bookingAdults ||
      !bookingChildren ||
      !bookingQuantity
    ) {
      return alert("All Fields are mandatory!");
    }
    const newCartItem = {
      checkin: bookingCheckin,
      checkout: bookingCheckout,
      adults: bookingAdults,
      children: bookingChildren,
      quantity: bookingQuantity,
      rooms: rooms,
    };
    dispatch(setCart([...cartItems, newCartItem]));
    nav('/cart');
  };

  const handleInquiry = (e: any) => {
    e.preventDefault();
    if (
      !inquiryAddress ||
      !inquiryAdults ||
      !inquiryCheckin ||
      !inquiryCheckout ||
      !inquiryChildren ||
      !inquiryEmail ||
      !inquiryExtraInfo ||
      !inquiryName ||
      !inquiryNumber
    ) {
      return alert("All Fields are mandatory!");
    }
  };

  const handleStarClick = (starValue: any) => {
    setRating(starValue);
  };

  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  const standardText =
    roomId && roomId.slice(0, 1).toUpperCase() + roomId.slice(1, roomId.length);

  return (
    <div>
      <Navbar />
      <div className="text-[1.3rem] text-center p-[2rem] bg-[#f6efea]">
        <Link to="/">Home</Link> . Hotel .{" "}
        <span className="text-[#c59172] font-semibold">{standardText}</span>
      </div>
      <div className="flex flex-row justify-between pt-[4rem] px-[3rem] py-[1rem]">
        <h1 className="text-[1.8rem] lg:text-[3rem] font-bold">
          {standardText} Rooms
        </h1>
        <p className="text-[1.2rem] lg:text-[1.4rem] text-gray-500">
          From{" "}
          <span className="text-[#ab6034] text-[1.4rem] lg:text-[1.8rem] font-semibold">
            {" "}
            ₹ 49 / NIGHT
          </span>
        </p>
      </div>
      <div className="bg-gray-300 w-[95%] h-[1px] m-auto" />
      <div className="flex flex-wrap pl-[3rem] py-[2rem]">
        <div className="flex flex-row mr-[1rem] text-gray-500">
          <ArchitectureIcon style={{ fontSize: "1.6rem", color: "#ab6034" }} />{" "}
          Size: 160 ft2
        </div>
        <div className="flex flex-row mr-[1rem] text-gray-500">
          <BedIcon style={{ fontSize: "1.6rem", color: "#ab6034" }} /> Beds: {2}
        </div>
        <div className="flex flex-row mr-[1rem] text-gray-500">
          <BathtubIcon style={{ fontSize: "1.6rem", color: "#ab6034" }} />{" "}
          Bathrooms: {1}
        </div>
        <div className="flex flex-row mr-[1rem] text-gray-500">
          <PersonIcon style={{ fontSize: "1.6rem", color: "#ab6034" }} />{" "}
          Adults: {2}
        </div>
        <div className="flex flex-row mr-[1rem] text-gray-500">
          <AccountCircleIcon style={{ fontSize: "1.6rem", color: "#ab6034" }} />{" "}
          Children: {2}
        </div>
      </div>
      <div className="py-[2rem] w-[95%] m-auto">
        {
          <Carousel
            interval={4000}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            className=""
          >
            {rooms?.map((room: any) => (
              <img
              key={room.id}
                src={`/assets/images/${room.image}`}
                alt="room"
                className="h-[80vh]"
              />
            ))}
          </Carousel>
        }
      </div>

      <div className="flex flex-col w-[98vw] lg:w-full m-auto justify-center lg:flex-row p-[1rem] lg:p-[3rem]">
        <div className="flex flex-col lg:w-[60%]">
          <div>
            <h1 className="text-[2.7rem] font-semibold mb-[1rem]">
              Description
            </h1>
            <p className="text-[1.2rem] text-gray-600">
              Our Room offers a stunning view of the white sand beach. This room
              is designed and decorated with modern style and equipped with the
              most luxurious facilites. Little luxuries include free Wi-Fi,
              deluxe bath amenities and a 4K technology flat-screen television
              with cable channels.
            </p>
          </div>
          <div className="my-[2rem]">
            <h1 className="text-[2.7rem] font-semibold my-[1rem]">
              Room Facilities
            </h1>
            <div className="text-[1.2rem] text-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roomFacilities.map((rmfc, index) => (
                <p key={index} className="p-[0.3rem]">
                  <CheckIcon style={{ fontSize: "1.4rem", color: "brown" }} />{" "}
                  {rmfc}
                </p>
              ))}
            </div>
          </div>
          <div className="my-[2rem]">
            <h1 className="text-[2.7rem] font-semibold mb-[1rem]">
              Rules & Regulations
            </h1>
            <p className="text-[1.2rem] text-gray-600">
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage avoids a pain
              that produces no resultant pleasure
            </p>
            <div className="pt-[1rem] text-[1.15rem] text-gray-600">
              <p className="mt-[0.5rem]">
                <CircleIcon
                  style={{
                    fontSize: "0.4rem",
                    color: "brown",
                    marginRight: "1rem",
                  }}
                />
                Check-in: After 02:00pm
              </p>
              <p className="mt-[0.5rem]">
                <CircleIcon
                  style={{
                    fontSize: "0.4rem",
                    color: "brown",
                    marginRight: "1rem",
                  }}
                />
                Checkout: Before 11:00am
              </p>
              <p className="mt-[0.5rem]">
                <CircleIcon
                  style={{
                    fontSize: "0.4rem",
                    color: "brown",
                    marginRight: "1rem",
                  }}
                />
                Late Checkout: Additional charge 50% of the room rate
              </p>
              <p className="mt-[0.5rem]">
                <CircleIcon
                  style={{
                    fontSize: "0.4rem",
                    color: "brown",
                    marginRight: "1rem",
                  }}
                />
                No smoking in side the room and No pets
              </p>
              <p className="mt-[0.5rem]">
                <CircleIcon
                  style={{
                    fontSize: "0.4rem",
                    color: "brown",
                    marginRight: "1rem",
                  }}
                />
                Identification document is must for hotel registration.
              </p>
            </div>
          </div>

          <div className="my-[2rem]">
            <h1 className="text-[2.7rem] font-semibold mb-[2rem]">
              Availability
            </h1>
            <div className="">
              <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                className={`w-[95%]`}
              />
            </div>
          </div>
          <div className="my-[2rem]">
            <h1 className="text-[2.7rem] font-semibold mb-[2rem]">Reviews</h1>
            <p className="text-[1.3rem] text-gray-500">
              There are no reviews yet.
            </p>
            <h1 className="text-[1.5rem]">Review “{standardText}”</h1>
            <p className="text-[1.3rem] text-gray-600">Your Rating</p>
            <div>
              {[1, 2, 3, 4, 5].map((starValue) => (
                <span
                  key={starValue}
                  onClick={() => handleStarClick(starValue)}
                  style={{
                    fontSize: "1.56em",
                    cursor: "pointer",
                    color: starValue <= rating ? "gold" : "gray",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <form className="pt-[2rem] lg:pr-[4rem]">
              <div className="flex flex-row gap-8">
                <div className="flex flex-col">
                  <p className="text-[1.2rem]">Name</p>
                  <input
                    type="text"
                    className="w-[10rem] lg:w-[20rem] h-[3rem] border-[1.5px] border-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[1.2rem]">Email</p>
                  <input
                    type="text"
                    className="w-[10rem] lg:w-[20rem] h-[3rem] border-[1.5px] border-gray-400"
                  />
                </div>
              </div>
              <p className="text-[1.2rem] mt-[2rem]">Your Review</p>
              <textarea className="w-full h-[10rem] border-[1.5px] border-gray-400" />

              <button className="text-[1.2rem] mt-6 text-white bg-[#ab6034] font-semibold hover:bg-black px-[3rem] p-[0.6rem]">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:w-[37%] sticky top-[1rem]">
          <div className="flex flex-row mb-[2rem]">
            <button
              onClick={() => handleButtonClick("booking")}
              className={`text-[1.8rem] font-bold ml-[2rem] ${
                activeButton === "booking"
                  ? "text-[#ab6034] border-b-2 border-[#ab6034]"
                  : ""
              }`}
            >
              Booking
            </button>
            <button
              onClick={() => handleButtonClick("inquiry")}
              className={`text-[1.8rem] font-bold ml-[2rem] ${
                activeButton === "inquiry"
                  ? "text-[#ab6034] border-b-2 border-[#ab6034]"
                  : ""
              }`}
            >
              Inquiry
            </button>
          </div>
          <div className="bg-[#f4f2f1] p-[2rem]">
            {activeButton == "booking" && (
              <form>
                <div className="flex flex-row gap-4 my-[1rem] mb-[2rem]">
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Check-In</p>
                    <input
                      type="date"
                      className="w-full lg:w-[11rem] h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      placeholder="dd-mm-YY"
                      value={bookingCheckin}
                      onChange={(e) => setBookingCheckin(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Check-Out</p>
                    <input
                      type="date"
                      className="w-full lg:w-[11rem] h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      placeholder="dd-mm-YY"
                      value={bookingCheckout}
                      onChange={(e) => setBookingCheckout(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-4 my-[1rem] mb-[2rem]">
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Adults</p>
                    <input
                      type="number"
                      className="w-full lg:w-[11rem] h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      value={bookingAdults}
                      onChange={(e) => setBookingAdults(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Children</p>
                    <input
                      type="number"
                      className="w-full lg:w-[11rem] h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      value={bookingChildren}
                      onChange={(e) => setBookingChildren(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-4 my-[2rem] w-1/2">
                  <div className="flex flex-col w-full">
                    <p className="text-[1.2rem]">Quantity</p>
                    <input
                      type="number"
                      className="w-[] lg:w-[11rem] h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      value={bookingQuantity}
                      onChange={(e) => setBookingQuantity(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  onClick={handleBooking}
                  className="w-full m-auto text-[1.2rem] mt-6 text-white bg-[#ab6034] font-semibold hover:bg-black px-[4rem] p-[0.8rem]"
                >
                  BOOKING
                </button>
              </form>
            )}
            {activeButton == "inquiry" && (
              <form>
                <div className="flex flex-row gap-4 my-[1rem] mb-[2rem]">
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Name</p>
                    <input
                      type="text"
                      className="w-full h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      placeholder="Your Name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Email</p>
                    <input
                      type="email"
                      className="w-full h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      placeholder="your@gmail.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-4 my-[1rem] mb-[2rem]">
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Number</p>
                    <input
                      type="text"
                      className="w-full h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      placeholder="+66-4545688"
                      value={inquiryNumber}
                      onChange={(e) => setInquiryNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Address</p>
                    <input
                      type="text"
                      className="w-full h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      placeholder="Address"
                      value={inquiryAddress}
                      onChange={(e) => setInquiryAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-4 my-[1rem] mb-[2rem]">
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Adults</p>
                    <input
                      type="number"
                      className="w-full h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      value={inquiryAdults}
                      onChange={(e) => setInquiryAdults(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[1.2rem]">Children</p>
                    <input
                      type="number"
                      className="w-full h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      value={inquiryChildren}
                      onChange={(e) => setInquiryChildren(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-4 my-[1rem] mb-[2rem]">
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Check-In</p>
                    <input
                      type="date"
                      className="w-full h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      placeholder="dd-mm-YY"
                      value={inquiryCheckin}
                      onChange={(e) => setInquiryCheckin(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <p className="text-[1.2rem]">Check-Out</p>
                    <input
                      type="date"
                      className="w-full h-[3rem] border-[1.5px] border-gray-300 p-[10px]"
                      placeholder="dd-mm-YY"
                      value={inquiryCheckout}
                      onChange={(e) => setInquiryCheckout(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <textarea
                    placeholder="Extra Information"
                    className="w-full h-[10rem] border-[1.5px] border-gray-300 p-[10px]"
                    value={inquiryExtraInfo}
                    onChange={(e) => setInquiryExtraInfo(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleInquiry}
                  className="w-[70%] m-auto text-[1.2rem] mt-6 text-white bg-[#ab6034] font-semibold hover:bg-black px-[4rem] p-[0.8rem]"
                >
                  SEND
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
