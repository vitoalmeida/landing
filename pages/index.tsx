import type { NextPage } from "next";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";

const Home: NextPage = () => {
  return (
    <div className="flex flex-1 h-screen overflow-hidden">
      <div className="flex bg-gradient-to-r from-[#08FEAB] via-[#07f6a6]  via-[#09d994] via-[#1BC997] to-[#29AB8D] w-full">
        <div id="left" className="flex w-[60%] pl-44 flex-col">
          <div className="relative h-[18rem] mt-32 w-[85.5%]">
            <Image src="/logo-and-title.svg" layout="fill" />
          </div>
          <div className="mt-5 px-4 w-[88%] pl-12">
            <p className="text-primary font-montserrat text-[1.9rem] font-medium text-justify leading-[180%]">
              We use our deep insight into the energy and blockchain industries
              to support entrepreneurs building the next frontier in
              decentralized applications and decarbonization solutions.
            </p>
            <button className="flex justify-center items-center mt-7 text-tertiary rounded-full bg-primary px-3 py-3 w-[9.2rem]">
              <BiLinkExternal size="1.2rem" />
              <p className="font-roboto ml-2 text-2xl">Careers</p>
            </button>
          </div>
        </div>
        <div id="left" className="flex w-[40%] pl-32 flex-col">
          <div className="relative h-[110%] w-[110%]">
            <Image src="/hexagon.svg" layout="fill" objectFit="cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
