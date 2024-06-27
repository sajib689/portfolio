import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Circles from "./../../components/Circles";
import Avatar from "./../../components/Avatar";
import { fadeIn } from "./../../variants";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="h-full bg-primary/30 py-16 text-center xl:text-left ">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 lg:left-[740px]"
      >
        <Avatar />
      </motion.div>
      <div className="container lg:w-[700px] lg:ms-20 mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <TypeAnimation
            className="mt-12 text-4xl"
            sequence={["About", 200, "About Me",700]}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          <p className="mt-3">
            Hello, I’m Sajib Hossen, a passionate frontend developer from
            Jashore, Khulna, Bangladesh. Currently, I am pursuing a BA in
            Islamic History and Culture at MM College, Jashore. With a keen eye
            for design and a commitment to creating seamless user experiences, I
            specialize in crafting visually appealing and highly functional web
            interfaces. I have experience in frontend development with HTML,
            CSS, JavaScript, Tailwind CSS, and React.js. My backend development
            skills include Node.js and Express.js, and I manage databases using
            MongoDB. For authentication and security, I use JWT, and I also work
            with Firebase for various services. Welcome to my portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
