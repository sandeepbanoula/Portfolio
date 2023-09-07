import Image from "next/image";
import heroImage from "../../public/heroImg.svg";

export default function Home() {
  return (
    <div className="grid px-8 lg:px-24">
      {/* Navbar */}
      <nav className="grid items-center py-8 sm:grid-cols-2 md:grid-cols-[1fr_2fr] lg:py-12 xl:grid-cols-[2fr_1fr]">
        <div className="text-2xl">SJavascript</div>
        <ul className="hidden grid-cols-[repeat(4,_auto)] items-center justify-items-end text-xl md:grid">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about-me">About</a>
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
            href="#"
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
          />
        </div>
      </div>

      {/* About Section */}
      <div id="about-me" className="grid py-5 lg:py-12 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-7xl py-5 md:py-0">ABOUT ME</h2>
        </div>
        <div>
          <p className="text-xl lg:text-2xl">{`My name is Sandeep Banoula, a full stack web developer from India. I have a batchelors's degree in Computer Science 
          and I have been working as a web developer for over 5 years. I love building web applications that
          are fast, secure, and scalable using Node.js and React.js. I'm always curious about new challenges and opportunities.
          When I'm not coding, I like to travel, play video games, and binge webshows.`}</p>
        </div>
      </div>
      {/* Skill Section */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
}
