import Image from "next/image";
import { ReactNode } from "react";
import { SkillsSection } from "./components";

interface SkillButtonProps {
  children: ReactNode;
}

const SkillButton = ({ children }: SkillButtonProps) => (
  <div className="bg-[#1c1c1c] text-white py-2.5 px-2 rounded-md flex items-center gap-3 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors">
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="bg-[#181818] min-h-screen w-full overflow-y-auto">
      <div className="flex">
        <Image
          src="/banner.gif"
          alt="Banner 1"
          width={0}
          height={0}
          className="w-[30rem] h-[12rem] object-cover"
        />
        <Image
          src="/banner-2.gif"
          alt="Banner 2"
          width={0}
          height={0}
          className="w-[30rem] h-[12rem] object-cover"
        />
        <Image
          src="/banner-2.gif"
          alt="Banner 2"
          width={0}
          height={0}
          className="w-[30rem] h-[12rem] object-cover"
        />
      </div>
      
      <div className="flex items-center absolute top-[9.4rem] left-80 gap-[0.8rem]">
        <Image
          src='/profile.jpg'
          alt="profile image"
          height={30}
          width={175}
          className="rounded-lg"
        />
        <div className="flex flex-col pt-14">
          <div className="flex items-center gap-3">
            <h1 className="text-zinc-300 font-bold text-[25px]">Aditya Chaudhary</h1>
            <span className="bg-green-900/30 text-green-400 px-2 py-0.5 rounded text-sm">Available</span>
          </div>
          <p className="text-gray-300">Software Engineer</p>
          <div className="flex gap-3 mt-1">
            <a href="https://github.com/userAdityaa" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
              <Image src="/github.svg" alt="GitHub" width={24} height={24} className="invert" />
            </a>
            <a href="https://x.com/userAdityaa" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} className="invert" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-chaudhary-1b7354248/" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
              <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
            </a>
            <a href="https://leetcode.com/u/Aditya7841/" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
              <Image src="/leetcode.svg" alt="leetcode" width={24} height={24} className="invert" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute left-80 top-[20rem] max-w-3xl mt-[2rem] pb-20">
        <h2 className="text-zinc-300 text-2xl font-semibold mb-4">About Me.</h2>
        <div className="flex flex-col gap-4 text-zinc-400">
          <p>
            Hi, I'm Aditya Chaudhary, a Computer Science undergraduate and full-stack developer passionate about creating and delivering projects that make a real-world impact.
          </p>
          <p>
            I primarily work with Next.js, Node.js, Golang for full-stack development, often leveraging TypeScript for type safety. Additionally, I've built several exciting projects using Golang and other modern tools.
          </p>
          <p>
            Got an idea and want to collaborate? Feel free to DM me! I'm always excited to connect and work on awesome projects. Don't forget to explore more about me—just click the button in the top right corner!
          </p>
        </div>

        <h2 className="text-zinc-300 text-2xl font-semibold mb-4 mt-8">Hire Me.</h2>
        <div className="flex flex-col gap-4 text-zinc-400">
          <p>
            I'm currently available for internships, full-time opportunities, and freelance projects. If you're looking for someone passionate, skilled, and ready to contribute, I'm here to help bring your ideas to life!
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600 text-zinc-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Hire Me
            </button>
          </div>
        </div>
      </div>

      <SkillsSection/>
    </div>
  );
}