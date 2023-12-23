"use client";
import Image from "next/image";
import animationData from "@/public/animations/namaste.json";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { sendMessage } from "@/app/api/database/route";
const About = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div>
      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 container mx-auto md:justify-between px-2">
        <div className=" md:mx-10 md:col-span-2">
          {/* Text content */}
          <div className="w-36">
            <Lottie animationData={animationData} loop={true} />
          </div>
          <p className="text-5xl py-4">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hello!",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Namaste",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Ram Ram",
                2000,
                "Namaskaram",
                2000,
                "Sat Sri Akaal",
                2000,
                "Salaam",
                2000,
                "Pranam",
                2000,
              ]}
              wrapper="span"
              speed={80}
              style={{
                display: "inline",
                color: "#EB455F",
              }}
              repeat={Infinity}
            />
          </p>
          <h1 className="text-5xl py-4"> I&apos;m Dr. Sachin Sidhra</h1>
          <p className=" p-4 md:p-8 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed
            quibusdam non at fugit reiciendis deserunt magni, necessitatibus
            odio soluta dolorem similique autem nesciunt tempora repudiandae
            ipsam praesentium. Iure maxime dolor cupiditate eaque deleniti ipsa
            possimus repellendus exercitationem veritatis voluptatibus provident
            ad labore fugit, eveniet modi cum doloribus ipsum. Sapiente?
          </p>
          <p className="hidden md:block p-8 text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            aperiam voluptatem soluta necessitatibus sapiente quae voluptate
            dolorem aut distinctio, recusandae labore placeat modi repellendus
            debitis eius architecto, facere explicabo commodi est? Tempora esse
            in perspiciatis. Sunt doloribus blanditiis expedita error!
          </p>
        </div>
        <div className="relative text-center sm:w-96 h-[60vh] my-10 ">
          {/* Image */}
          <Image
            src="/images/suited.jpg"
            alt="Suited man"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl dark:hover:shadow-red-100 shadow-lg hover:shadow-slate-400"
          />
        </div>
      </div>
      <div className="container mx-auto text-xl my-12">
        <form action="" className="grid justify-items-start gap-y-6">
          <div>
            <label htmlFor="name" className="mx-4">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              className="py-2 px-4 ml-4 focus:outline focus:outline-[#EB455F] rounded-md"
              onChange={(e) => setName(e.target.value)}
              placeholder="May I know you?"
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="contact" className="mx-4">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              value={contact}
              className="py-2 px-4 focus:outline focus:outline-[#EB455F] rounded-md"
              onChange={(e) => setContact(e.target.value)}
              placeholder="optional"
            />
          </div>

          <div>
            <textarea
              name="message"
              maxLength={500}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={10}
              cols={50}
              placeholder="Message"
              className="p-4 w-full focus:outline focus:outline-[#EB455F] rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" px-10 py-2 border border-[#EB455F] text-2xl hover:bg-[#EB455F] font-semibold hover:text-white justify-self-end"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
