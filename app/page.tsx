'use client'
import Image from "next/image";
import { ContactAndFooter, ProfileImageSwitcher, ProjectsSection, SkillsSection } from "./components";
import { Roboto } from "next/font/google";
import { useState } from "react";
import HireMeModal from "./components/HireModal";

const roboto = Roboto({
  subsets: ['latin'], 
  weight: '700',
})


type FormData = {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleHireMeClick = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleFormSubmit = async (formData: FormData) => {
    try {
      console.log(JSON.stringify(formData))
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        setIsModalOpen(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className={`bg-[#111111] min-h-screen w-full overflow-y-auto transition-all duration-300 max-phone:overflow-y-hidden`}>
      <div className="flex max-phone:hidden">
        <Image
          src="/banner.gif"
          alt="Banner 1"
          width={0}
          height={0}
          className="w-[30rem] h-[12rem] object-cover max-ipad:w-[35rem]"
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
          className="w-[30rem] h-[12rem] object-cover max-ipad:hidden"
        />
      </div>
      
      <a 
        href="/blogs" 
        className="flex items-center gap-2 bg-zinc-900 px-4 py-2 h-fit rounded-lg hover:bg-zinc-800 transition-colors shadow-lg text-zinc-300 absolute right-2 top-2 max-phone:px-2 max-phone:text-[14px]"
      >
        <svg 
          className="w-5 h-5 max-phone:w-4 max-phone:h-4" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M12 6L20 6M12 6V4M20 6V4M20 4L12 4M20 4V12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        Blogs
      </a>

      <div className="hidden max-phone:block mt-[4rem] ml-[1rem]">
        <div className="flex flex-col gap-2">
          <span className="bg-green-900/30 text-green-400 px-2 py-0.5 rounded text-sm w-[20%]">Available</span>
          <div className="flex items-center gap-4">
            <Image src = '/profile.jpg' alt="profile" height={300} width={125} className="rounded-lg"></Image>
            <div className="flex flex-col">
              <h2 className={`font-bold text-[25.5px] ${roboto.className}`}>Aditya Chaudhary</h2>
              <p className="font-thin text-gray-300">Software Engineer</p>
              <div className="flex gap-3 mt-1">
            <div className="relative group">
              <a href="https://github.com/userAdityaa" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} className="invert" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative bg-white text-black text-sm py-1 px-3 rounded-md whitespace-nowrap">
                  Github
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="https://x.com/userAdityaa" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
                <Image src="/twitter.svg" alt="Twitter" width={24} height={24} className="invert" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative bg-white text-black text-sm py-1 px-3 rounded-md whitespace-nowrap">
                  Twitter
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="https://www.linkedin.com/in/aditya-chaudhary-1b7354248/" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative bg-white text-black text-sm py-1 px-3 rounded-md whitespace-nowrap">
                  LinkedIn
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="https://leetcode.com/u/Aditya7841/" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
                <Image src="/leetcode.svg" alt="leetcode" width={24} height={24} className="invert" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative bg-white text-black text-sm py-1 px-3 rounded-md whitespace-nowrap">
                  LeetCode
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>  
        </div>
      </div>

      <div className="flex items-center absolute top-[9.4rem] left-80 gap-[0.8rem] max-phone:top-4 max-phone:left-28 max-phone:hidden max-ipad:left-32 max-mini:left-12">
        <div className="max-phone:hidden">
          <ProfileImageSwitcher image_one = '/profile.jpg' image_two = "/profile-2.JPG"/>
        </div>
        <div className="flex flex-col pt-14">
          <div className="flex items-center gap-3">
            <h1 className="text-zinc-300 font-bold text-[25px]">Aditya Chaudhary</h1>
            <span className="bg-green-900/30 text-green-400 px-2 py-0.5 rounded text-sm">Available</span>
          </div>
          <p className="text-gray-300">Software Engineer</p>
          <div className="flex gap-3 mt-1">
            <div className="relative group">
              <a href="https://github.com/userAdityaa" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} className="invert" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative bg-white text-black text-sm py-1 px-3 rounded-md whitespace-nowrap">
                  Github
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="https://x.com/userAdityaa" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
                <Image src="/twitter.svg" alt="Twitter" width={24} height={24} className="invert" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative bg-white text-black text-sm py-1 px-3 rounded-md whitespace-nowrap">
                  Twitter
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="https://www.linkedin.com/in/aditya-chaudhary-1b7354248/" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative bg-white text-black text-sm py-1 px-3 rounded-md whitespace-nowrap">
                  LinkedIn
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="https://leetcode.com/u/Aditya7841/" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600" target="_blank">
                <Image src="/leetcode.svg" alt="leetcode" width={24} height={24} className="invert" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative bg-white text-black text-sm py-1 px-3 rounded-md whitespace-nowrap">
                  LeetCode
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-80 top-[20rem] max-w-3xl mt-[2rem] pb-20 flex flex-col max-phone:left-4 max-phone:mt-[0rem] max-phone:top-[15rem] max-phone:w-[92.5%] max-mini:left-12 max-mini:w-[90%] max-ipad:left-32 max-ipad:w-[100rem]">
        <h2 className="text-zinc-300 text-2xl font-semibold mb-4 max-phone:text-xl">About Me.</h2>
        <div className="flex flex-col gap-4 text-zinc-400 max-phone:text-[0.92rem]">
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

        <h2 className="text-zinc-300 text-2xl font-semibold mb-4 mt-8 max-phone:text-xl">Hire Me.</h2>
        <div className="flex flex-col gap-4 text-zinc-400 max-phone:text-[0.92rem]">
          <p>
            I'm currently available for internships, full-time opportunities, and freelance projects. If you're looking for someone passionate, skilled, and ready to contribute, I'm here to help bring your ideas to life!
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-900 transition-colors shadow-lg border-[1px] border-zinc-600 text-zinc-300 max-phone:px-2" onClick={handleHireMeClick}>
              <svg className="w-5 h-5 max-phone:w-4 max-phone:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Hire Me
            </button>
          </div>
          {isModalOpen && <HireMeModal onClose={handleModalClose} onSubmit={handleFormSubmit} />}
        </div>
        <SkillsSection/>
        <div className="flex items-center">
          <Image src = '/project.gif' alt="tired" width={500} height={100} className="-mt-[2rem] max-phone:w-[99%] max-phone:h-[95%]"></Image>
        </div>
        <ProjectsSection/>
        <ContactAndFooter/>
      </div>      
    </div>
  );
}