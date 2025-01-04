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
      </div>
    </div>
  );
}