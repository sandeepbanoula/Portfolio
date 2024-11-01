"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "/public/heroImg.svg";
import ropeImage from "/public/rope.png";
import ThemeButton from "./components/ThemeButton";
import CTAButton from "./components/CTAButton";
import SkillsCarousel from "./components/SkillsCarousel";
import FeaturedProject from "./components/FeaturedProject";
import OtherProjects from "./components/OtherProjects";

import rightArrow from "../../public/right-arrow.svg"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import projectData from "./assets/projects.json";

const projects = projectData["projects"];

export default function Home() {

  useEffect(() => {
    // horizontal scroll using mouse wheel
    const carousel = document.getElementById("skillCarousel");
    carousel.addEventListener("wheel", (e) => {
      e.preventDefault();
      carousel.scrollLeft += e.deltaY * 3;
    });
    // scroll right using button
    const scrollRight = document.getElementById("scrollSkill");
    scrollRight.addEventListener("click", () => {
      carousel.scrollLeft += 120;
    });
  })

  return (
    <>
      <div className="grid px-8 lg:px-24">
        {/* Navbar */}
        <nav id="header" className="grid items-center py-8 sm:grid-cols-2 md:grid-cols-[1fr_2fr] lg:py-12 xl:grid-cols-[2fr_1fr]">
          <div className="text-2xl">GenZ-Sandeep</div>
          <ul className="hidden grid-cols-[repeat(5,_auto)] items-center justify-items-end text-xl md:grid">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about-me" className="inline-block">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li className="border-2 border-green-500 p-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>


        {/* Hero Section */}
        <div className="grid grid-rows-[repeat(3,_auto)] py-5 md:grid-cols-2 md:grid-rows-[repeat(2,_auto)] lg:py-12 xl:items-end">
          {/* Main heading & sub heading */}
          <div className="md:pr-10 lg:row-start-1">
            <h1 className="pb-3 text-5xl font-bold text-green-500 lg:leading-tight xl:text-7xl">
              Hi, I Am Sandeep Banoula
            </h1>
            <h2 className="text-xl lg:pb-10 lg:text-2xl">
              Crafting Seamless Web Experiences with Frontend and Backend Magic
            </h2>
          </div>
          {/* Intro & Call-to-action */}
          <div className="md:row-start-2 md:pr-10">
            <p className="pb-5 text-xl md:pb-7 lg:text-2xl">
              {`I am a passionate web developer with a flair for turning ideas into functional code. Explore my projects and let's collaborate!`}
            </p>
            <CTAButton actionText={"Explore Projects"} actionLink={"#projects"} />
          </div>
          {/* Hero image */}
          <div className="row-start-2 py-5 md:row-span-2 lg:pb-0">
            <Image
              src={heroImage}
              alt=""
              width="500px"
              className="md:ml-auto md:w-11/12"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid sticky bg-white px-8 lg:px-24 dark:bg-black">
        {/* About Section */}
        <div id="about-me" className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-0 py-5 lg:py-12">
          <div className="heading">
            <h2 className="text-4xl lg:text-6xl">ABOUT ME</h2>
          </div>
          <div>
            <p className="text-justify text-xl lg:text-2xl">I am a full stack web developer from Uttarakhand, India. I have a bachelors&apos;s degree in Computer Science
              and I have been working as a web developer for over 5 years. I love building web applications that
              are fast, secure, and scalable using Node.js and React.js. I&apos;m always curious about new challenges and opportunities.
              When I&apos;m not coding, I like to travel, play video games, and binge webshows.</p>
          </div>
        </div>
        {/* Skill Section */}
        <div id="skills" className="grid items-center md:grid-cols-[5fr_0.5fr_1fr] gap-4 md:gap-0 py-5 lg:py-12">
          <div className="heading md:order-last md:flex md:justify-end">
            <h2 className="text-4xl lg:text-6xl">SKILLS</h2>
          </div>
          <SkillsCarousel />

          <div id="scrollSkill" className="h-12 w-12 flex items-center justify-self-center bg-green-500 rounded-full animate-sway">
            <Image src={rightArrow} alt="next" className="w-full h-4/6" />
          </div>
        </div>
        {/* Projects */}
        <div id="projects" className="py-5 lg:py-12">
          <div className="heading">
            <h2 className="text-4xl lg:text-6xl">PROJECTS</h2>
          </div>
          <div className="flex flex-wrap justify-evenly">
            {projects.map((item, index) => {
              if (item.images) {
                return <FeaturedProject key={index} images={item.images} name={item.name} link={item.link} description={item.description} skills={item.skills} position={index % 2 == 0 ? "lg:-left-20 peer-hover:left-0" : "lg:-right-20 peer-hover:right-0"} order={index % 2 == 0 ? "md:order-0" : "md:order-1"} />
              } else {
                return <OtherProjects key={index} name={item.name} link={item.link} description={item.description} skills={item.skills} />
              }

            })}
          </div>
        </div>
        {/* what my client's have to say */}
        {/* Contact */}
        <div id="contact" className="pt-5 lg:pt-12">
          <div className="heading flex justify-center">
            <h2 className="text-4xl lg:text-6xl">LETS CONNECT</h2>
          </div>
          <div className="pt-6 flex flex-col items-center">
            <p className="md:w-2/4 text-center text-xl lg:text-2xl">
              Whether you want to start a new project or
              get something done into existing or just want to chat,
              feel free to shoot me an email!
            </p>
            <div className="mt-6"><CTAButton actionText={"Say Hello"} actionLink={"mailto:sandeep.banoula@gmail.com"} /></div>

          </div>
          <div>

          </div>
        </div>
        {/* sub footer */}
        <div id="socials" className="flex justify-center py-5 lg:py-6">
          <div className="grid grid-cols-3 gap-8">
            <a href="https://www.linkedin.com/in/sandeepbanoula/" target="_blank" title="LinkedIn"><FaLinkedin size="2rem" /></a>
            <a href="https://github.com/sandeepbanoula/" target="_blank" title="Github"><FaGithub size="2rem" /></a>
            <a href="https://x.com/sandeepbanoula" target="_blank" title="X.com"><FaTwitter size="2rem" /></a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="text-center relative py-4 bg-green-500 font-semibold text-white dark:text-black">
        © {2024} Desined & Developed by <a href="https://sandeepbanoula.github.io/Portfolio/">Sandeep Banoula</a>
      </div>
      {/* Theme Change */}
      <ThemeButton src={ropeImage} />
    </>
  );
}
