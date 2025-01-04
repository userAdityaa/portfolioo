import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#181818] h-[100vh] w-[100vw]">
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
      <div className="flex items-center absolute top-[9.4rem] left-60 gap-[0.8rem]">
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
            <a href="#" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg">
              <Image src="/github.svg" alt="GitHub" width={24} height={24} className="invert" />
            </a>
            <a href="#" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg">
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} className="invert" />
            </a>
            <a href="#" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg">
              <Image src="/discord.svg" alt="Discord" width={24} height={24} className="invert" />
            </a>
            <a href="#" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg">
              <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
            </a>
            <a href="#" className="bg-black w-9 h-9 rounded-lg flex items-center justify-center hover:bg-zinc-900 transition-colors shadow-lg">
              <Image src="/leetcode.svg" alt="leetcode" width={24} height={24} className="invert" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}