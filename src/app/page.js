import Image from 'next/image'
import heroImage from '../../public/heroImg.svg'

export default function Home() {
  return (
    <div className="grid px-8 lg:px-24">
      {/* Navbar */}
      <nav className="grid sm:grid-cols-2 md:grid-cols-[1fr_2fr] xl:grid-cols-[2fr_1fr] items-center py-8 lg:py-12">
        <div className="logo text-2xl">
          SJavascript
        </div>
        <ul className="primary-menu hidden md:grid text-xl grid-cols-[repeat(4,_auto)] justify-items-end items-center">
          <li><a href="">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li className="border-2 border-green-500 p-2"><a href="#contact-me">Contact Me</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-rows-[repeat(3,_auto)] py-5 md:grid-cols-2 md:grid-rows-[repeat(2,_auto)] lg:py-12 xl:items-end">
        {/* Main heading & sub heading */}
        <div className="lg:row-start-1 md:pr-10 text-justify">
          <h1 className="text-5xl xl:text-7xl font-bold text-green-500 pb-3 lg:leading-tight">
            Hi, I Am Sandeep Banoula
          </h1>
          <h2 className="text-xl lg:text-2xl lg:pb-10">
            Crafting Seamless Web Experiences with Frontend and Backend Magic
          </h2>
        </div>
        {/* Intro & Call-to-action */}
        <div className="md:row-start-2 md:pr-10">
          <p className="text-xl pb-5 md:pb-7 lg:text-2xl text-justify">
            I am a passionate web developer with a flair for turning ideas into functional code. Explore my projects and let's collaborate!
          </p>
          <a href="#" className="bg-green-500 text-xl inline-block lg:text-2xl text-white dark:text-black font-semibold px-5 py-3 rounded-3xl">Explore Projects</a>
        </div>
        {/* Hero image */}
        <div className="row-start-2 py-5 lg:pt-1 lg:pb-0 md:row-span-2">
          <Image src={heroImage} alt="" width="500px" className="md:w-11/12 md:ml-auto" />
        </div>
      </div>

    </div>
  )
}
