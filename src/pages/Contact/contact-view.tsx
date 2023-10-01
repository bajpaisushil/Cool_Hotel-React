import React, { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar-view";
import { Link } from "react-router-dom";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useContactController } from "./contact-controller";

const Contact = () => {
  const contactController = useContactController();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="h-[85vh] bg-cover"
        style={{ backgroundImage: `url('/assets/images/coolhotel8.webp')` }}
      >
        <div className="pt-[7rem]">
          <h1 className="text-center text-[5rem] font-bold text-white">
            Contact
          </h1>
          <p className="text-center text-[1.8rem] font-semibold text-white">
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            . Contact
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row py-[8rem] p-[1rem] lg:p-[3rem] justify-between">
        <div className="flex flex-col lg:w-1/2">
          <p className="text-[1.2rem] font-semibold text-[#b06940]">
            Contact Us
          </p>
          <h1 className="text-[2.8rem] font-semibold">
            Need Any Consultations to Booked your Seat
          </h1>
          <h1 className="text-[2.2rem] font-semibold mt-[2rem]">
            New Delhi-110041, India
          </h1>
          <div className="w-[5rem] h-[4px] bg-[#ab6034] mb-[3rem]" />
          <div className="flex flex-row m-[1rem]">
            <AddLocationAltIcon
              style={{ fontSize: "4rem" }}
              className="text-[#ab6034]"
            />
            <div className="flex flex-col ml-[2rem]">
              <h2 className="text-[1.5rem] font-medium">Locations</h2>
              <p className="text-[1.5rem] text-gray-500">
                55 Main Street, 2nd block, Melbourne, Australia
              </p>
            </div>
          </div>
          <div className="flex flex-row m-[1rem]">
            <MarkEmailUnreadIcon
              style={{ fontSize: "4rem" }}
              className="text-[#ab6034]"
            />
            <div className="flex flex-col ml-[2rem]">
              <h2 className="text-[1.5rem] font-medium">Mail Support</h2>
              <p className="text-[1.5rem] text-gray-500">
                <a href="mailto:mymail@gmail.com">
                  support@gmail.com, infohotel.net
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-row m-[1rem]">
            <AddIcCallIcon
              style={{ fontSize: "4rem" }}
              className="text-[#ab6034]"
            />
            <div className="flex flex-col ml-[2rem]">
              <h2 className="text-[1.5rem] font-medium">Make A Call</h2>
              <p className="text-[1.5rem] text-gray-500">
                <a href="tel:+1234567890">+000 (123) 456 88 99</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col p-[1rem] py-[2rem] bg-[#f4f2f1] px-[2rem] lg:w-1/2">
          <h1 className="text-[2rem] font-medium">Send Us Message</h1>
          <p className="text-[1.2rem] text-gray-500">
            Your email address will not be published.
          </p>
          <form onSubmit={contactController.handleSubmit}>
            <div className="flex flex-row my-[2rem]">
              <input
                type="text"
                name="fullName"
                required
                onChange={contactController.handleInput}
                className="p-[1rem] w-[45%] mr-[1.5rem]"
                placeholder="Full Name"
                value={contactController.messageDetails.name}
              />
              <input
                type="number"
                className="p-[1rem] w-[45%]"
                placeholder="Phone"
                required
                onChange={contactController.handleInput}
                name="phone"
                value={contactController.messageDetails.phone}
              />
            </div>
            <div className="flex flex-row my-[2rem]">
              <input
                type="text"
                className="p-[1rem] w-[45%] mr-[1.5rem]"
                placeholder="Email"
                required
                onChange={contactController.handleInput}
                name="email"
                value={contactController.messageDetails.email}
              />
              <input
                type="number"
                className="p-[1rem] w-[45%]"
                placeholder="Subject"
                required
                onChange={contactController.handleInput}
                name="subject"
                value={contactController.messageDetails.subject}
              />
            </div>
            <textarea
              className="w-full h-[15rem] text-gray-600 my-[1rem] p-[1rem]"
              placeholder="Message"
              name="message"
              required
              onChange={contactController.handleInput}
              value={contactController.messageDetails.message}
            />
            <button className="text-white text-[1.4rem] font-semibold bg-[#ab6034] px-[1.5rem] py-[0.5rem] my-[1rem]">
              Send Message {"  >"}
            </button>
          </form>
        </div>
      </div>
      <div className="mb-[6rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5865.156461084303!2d-160.24434561003756!3d-68.43800494770392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5da7ccb2b9a2d91%3A0xb2f0be48d8d76199!2sSouthern%20Ocean!5e0!3m2!1sen!2sin!4v1696139285996!5m2!1sen!2sin"
          className="w-full h-[100vh]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
