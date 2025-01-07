'use client'
import React from 'react'
import Image from 'next/image'
import { ProfileImageSwitcher } from '../components'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
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
        <ProfileImageSwitcher image_one="/banner-5.jpg" image_two="/banner-6.jpg"/>
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

      <div className="absolute left-80 top-[20rem] max-w-[52rem] mt-[2rem] pb-20">
        <h2 className="text-zinc-300 text-2xl font-semibold mb-6">Blogs.</h2>
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors" onClick={() => router.push('/blogs/docker')}>
          <div className="flex items-start gap-4">
            <Image
              src="/first.jpg"
              alt="docker chaos"
              width={180}
              height={56}
              className="rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-zinc-200 text-xl font-semibold mb-2">
              Dockerized Chaos: How Containers Revolutionize Creative Development Workflows
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
              Explore how Docker transforms the way developers think about workflows, bringing organization to the chaos of multi-environment setups. From running experimental side projects to scaling production-ready applications.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors mt-[2rem]" onClick={() => router.push('/blogs/redis')}>
          <div className="flex items-start gap-4">
            <Image
              src="/second.jpg"
              alt="redis cache"
              width={180}
              height={56}
              className="rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-zinc-200 text-xl font-semibold mb-2">
              Caching the Vibe: How Redis Supercharges Modern Applications
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
              Redis isn't just a database; it's the secret sauce that powers blazing-fast apps and seamless user experiences. From instant caching to real-time analytics, this blog explores the quirky yet brilliant ways Redis takes performance to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page