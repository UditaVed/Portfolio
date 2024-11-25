import React from "react";
import Data from "../assets/data/profile.json";
import Image from "next/image";
import Link from "next/link";
import direct from "../assets/arrow.png";
export const Projects = () => {
  return (
    <div>
      <div>projects.</div>
      <div className="w-fit h-fit border-l-2 px-6 mt-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg">{Data.projects[0].title}</div>

          <Link
            href={Data.projects[0].link}
            target="_blank"
            className="flex gap-1"
          >
            Live Preview
            <Image src={direct} alt="direct" width={20} height={10} />
          </Link>

          <div>{Data.projects[0].description}</div>
          <div className="bg-[#E4E4E7] w-fit h-fit p-2 rounded-md text-sm">
          {Data.projects[0].technologies}
          </div>
        </div>
      </div>



      <div className="w-fit h-fit border-l-2 px-6 mt-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg">{Data.projects[1].title}</div>

          <Link
            href={Data.projects[1].link}
            target="_blank"
            className="flex gap-1"
          >
            Live Preview
            <Image src={direct} alt="direct" width={20} height={10} />
          </Link>

          <div>{Data.projects[1].description}</div>
          <div className="bg-[#E4E4E7] w-fit h-fit p-2 rounded-md text-sm">
          {Data.projects[1].technologies}
          </div>
        </div>
      </div>



      <div className="w-fit h-fit border-l-2 px-6 mt-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg">{Data.projects[2].title}</div>

          <Link
            href={Data.projects[2].link}
            target="_blank"
            className="flex gap-1"
          >
            Live Preview
            <Image src={direct} alt="direct" width={20} height={10} />
          </Link>

          <div>{Data.projects[2].description}</div>
          <div className="bg-[#E4E4E7] w-fit h-fit p-2 rounded-md text-sm">
          {Data.projects[2].technologies}
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
    </div>
  );
};
