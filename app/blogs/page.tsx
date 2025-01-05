import React from 'react'
import Image from 'next/image'
import { ProfileImageSwitcher } from '../components'

const page = () => {
  return (
    <div className="bg-[#111111] min-h-screen w-full overflow-y-auto transition-all duration-300">
          <div className="flex">
            <Image
              src="/blogs.gif"
              alt="Banner 1"
              width={0}
              height={0}
              className="w-[30rem] h-[12rem] object-cover"
            />
            <Image
              src="/blogs.gif"
              alt="Banner 2"
              width={0}
              height={0}
              className="w-[30rem] h-[12rem] object-cover"
            />
            <Image
              src="/blogs.gif"
              alt="Banner 2"
              width={0}
              height={0}
              className="w-[30rem] h-[12rem] object-cover"
            />
          </div>

        <div className="flex items-center absolute top-[9.4rem] left-80 gap-[0.8rem]">
        <ProfileImageSwitcher image_one="/banner-5.jpg" image_two = "/banner-6.jpg"/>
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
    </div>
  )
}

export default page