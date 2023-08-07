import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-rows-5 px-8">
      <nav className="grid grid-cols-[2fr_1fr] py-8">
        <div className="logo">
          SJavascript
        </div>
        <ul className="primary-menu inline-grid grid-cols-[repeat(4,_auto)] justify-items-end items-center">
          <li><a href="">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li className="border-2 border-green-500 p-2"><a href="#contact-me">Contact Me</a></li>
        </ul>
      </nav>

    </div>
  )
}
