import React from "react";
import Data from "../assets/data/profile.json";
import Image from "next/image";
import Link from "next/link";
import direct from "../assets/arrow.png";
export const Projects = () => {
  return (
    <div>
      <div className="text-black">projects.</div>
      <div className="w-fit h-fit border-l-2 px-6 mt-8">
        <div className="flex flex-col gap-2">
          <div className="text-black text-sm md:text-[16px]">{Data.projects[0].title}</div>

          <Link
            href={Data.projects[0].link}
            target="_blank"
            className="flex gap-1 text-black hover:text-blue-700 text-sm md:text-[16px]"
          >
            Live Preview
            <Image src={direct} alt="direct" width={20} height={10} />
          </Link>

          <div className="text-sm md:text-[16px]">{Data.projects[0].description}</div>
          <div className="bg-[#E4E4E7] w-fit h-fit p-2 rounded-md text-gray-800 text-sm md:text-[15px]">
          {Data.projects[0].technologies}
          </div>
        </div>
      </div>



      <div className="w-fit h-fit border-l-2 px-6 mt-8">
        <div className="flex flex-col gap-2">
          <div className="text-sm md:text-lg text-black">{Data.projects[1].title}</div>

          <Link
            href={Data.projects[1].link}
            target="_blank"
            className="flex gap-1 text-black hover:text-blue-700 text-sm md:text-[16px]" 
          >
            Live Preview
            <Image src={direct} alt="direct" width={20} height={10} />
          </Link>

          <div className="text-sm md:text-[16px]">{Data.projects[1].description}</div>
          <div className="bg-[#E4E4E7] w-fit h-fit p-2 rounded-md text-gray-800 text-sm md:text-[15px]">
          {Data.projects[1].technologies}
          </div>
        </div>
      </div>



      <div className="w-fit h-fit border-l-2 px-6 mt-8">
        <div className="flex flex-col gap-2">
          <div className="md:text-lg text-sm text-black">{Data.projects[2].title}</div>

          <Link
            href={Data.projects[2].link}
            target="_blank"
            className="flex gap-1 text-black hover:text-blue-700 text-sm md:text-[16px]"
          >
            Live Preview
            <Image src={direct} alt="direct" width={20} height={10} />
          </Link>

          <div className="text-sm md:text-[16px]">{Data.projects[2].description}</div>
          <div className="bg-[#E4E4E7] w-fit h-fit p-2 rounded-md text-sm md:text-[15px] text-gray-800">
          {Data.projects[2].technologies}
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
    </div>
  );
};
