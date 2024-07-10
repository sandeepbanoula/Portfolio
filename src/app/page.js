"use client";
import Image from "next/image";
import heroImage from "../../public/heroImg.svg";
import ropeImage from "../../public/rope.png";
import ThemeButton from "./themeButton";

import rightArrow from "../../public/right-arrow.svg"
import html_5 from "../../public/skills/html-5.svg";
import css_3 from "../../public/skills/css-3.svg";
import javascript_logo from "../../public/skills/javascript_logo.svg";
import react_logo from "../../public/skills/react_logo.svg";
import node_logo from "../../public/skills/node-js.svg";
import mysql_logo from "../../public/skills/mysql-logo.svg";
import tailwind_logo from "../../public/skills/tailwind_logo.svg";
import bootstrap_logo from "../../public/skills/bootstrap_logo.svg";
import python_logo from "../../public/skills/python_logo.svg";
import git_logo from "../../public/skills/git_logo.svg";
import github_logo from "../../public/skills/github_logo.svg";
import vscode_logo from "../../public/skills/vscode_logo.svg";
import { useEffect, useState } from "react";

export default function Home() {

  useEffect(() => {
    const carousel = document.getElementById("skillCarousel");
    carousel.addEventListener("wheel", (e) => {
      e.preventDefault();
      carousel.scrollLeft += e.deltaY * 3;
    });
    const scrollRight = document.getElementById("scrollSkill");
    scrollRight.addEventListener("click", () => {
      carousel.scrollLeft += 120;
    });
  })

  return (
    <>
      <div className="grid sticky inset-0 px-8 lg:px-24">
        {/* Navbar */}
        <nav className="grid items-center py-8 z-20 sm:grid-cols-2 md:grid-cols-[1fr_2fr] lg:py-12 xl:grid-cols-[2fr_1fr]">
          <div className="text-2xl">GenZ-Sandeep</div>
          <ul className="hidden grid-cols-[repeat(5,_auto)] items-center justify-items-end text-xl md:grid">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li className="border-2 border-green-500 p-2">
              <a href="#contact-me">Contact</a>
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
            <a
              href="#projects"
              className="inline-block rounded-3xl bg-green-500 px-5 py-3 text-xl font-semibold text-white dark:text-black lg:text-2xl"
            >
              Explore Projects
            </a>
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

      <div className="grid relative bg-white px-8 z-10 lg:px-24 dark:bg-black">
        {/* About Section */}
        <div id="about-me" className="grid py-5 lg:py-12 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-5xl lg:text-7xl">ABOUT ME</h2>
          </div>
          <div>
            <p className="text-justify text-xl lg:text-2xl">{`I am a full stack web developer from Uttarakhand, India. I have a batchelors's degree in Computer Science 
          and I have been working as a web developer for over 5 years. I love building web applications that
          are fast, secure, and scalable using Node.js and React.js. I'm always curious about new challenges and opportunities.
          When I'm not coding, I like to travel, play video games, and binge webshows.`}</p>
          </div>
        </div>
        {/* Skill Section */}
        <div id="skills" className="grid items-center md:grid-cols-[5fr_0.5fr_1fr] gap-4 md:gap-0 py-5 lg:py-12">
          <div className="heading md:order-last md:flex md:justify-end">
            <h2 className="text-5xl lg:text-7xl">SKILLS</h2>
          </div>

          <div id="skillCarousel" className="skill-carousel w-full h-24 flex flex-row items-center scroll-smooth gap-8">
            <Image src={html_5}
              alt="html-5"
              className="w-full h-full" />
            <Image src={css_3}
              alt="css-3"
              className="w-full h-full" />
            <Image src={javascript_logo}
              alt="javascript"
              className="w-full h-full" />
            <Image src={react_logo}
              alt="react.js"
              className="w-full h-full" />
            <Image src={node_logo}
              alt="node.js"
              className="w-full h-full" />
            <Image src={mysql_logo}
              alt="mysql"
              className="w-full h-full" />
            <Image src={tailwind_logo}
              alt="tailwind"
              className="w-full h-full" />
            <Image src={python_logo}
              alt="python"
              className="w-full h-full" />
            <Image src={bootstrap_logo}
              alt="bootstrap"
              className="w-full h-full" />
            <Image src={git_logo}
              alt="Git"
              className="w-full h-full" />
            <Image src={github_logo}
              alt="github"
              className="w-full h-full bg-black rounded-full" />
            <Image src={vscode_logo}
              alt="vscode"
              className="w-full h-full" />
          </div>
          <div id="scrollSkill" className="h-12 w-12 flex items-center justify-self-center bg-green-500 rounded-full animate-sway">
            <Image src={rightArrow} alt="next" className="w-full h-4/6" />
          </div>
        </div>
        {/* Projects */}
        {/* Contact */}

        {/* Theme Change */}
        <ThemeButton src={ropeImage} />

      </div>
      {/* Footer */}
      <div className="grid justify-center content-center relative py-4 bg-green-500 font-semibold text-white dark:text-black">
        © {new Date().getFullYear()} GenZ-Sandeep
      </div>
    </>
  );
}
