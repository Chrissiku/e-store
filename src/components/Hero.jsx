import React from "react";
import Clip from "./utils/Clip";
import SocialLink from "./utils/socialLink";

const Hero = ({
  heroapi: { title, subTitle, btnText, img, socialLinks, videos },
}) => {
  return (
    <div className="relative h-auto w-auto flex flex-col">
      <div
        className="bg-theme clip-path h-[90vh] lg:h-[80vh] 
      md:h-[70vh] sm:h-[60vh] w-auto absolute top-0 left-0 right-0 
      opacity-100 z-10"
      ></div>
      <div
        className="container relative opacity-100 z-20 grid items-center 
      justify-items-center"
      >
        <div className="grid items-center justify-items-center mt-20">
          <h1
            className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl 
          xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200"
          >
            {title}
          </h1>
          <h1
            className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl 
          xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200"
          >
            {subTitle}
          </h1>
          <button
            type="button"
            className="button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5"
          >
            {btnText}
          </button>
          {/* Video clip */}
          <div
            className="grid items-center gap-5 md:gap-3 absolute top-[33vh] 
          lg:top-[27vh] left-[11%] xl:left-2 w-auto h-auto"
          >
            {videos?.map((val, i) => (
              <Clip key={i} imgSrc={val.imgSrc} clip={val.clip} />
            ))}
          </div>
          {/* Social Icons */}
          <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-[5%] gap-3">
            {socialLinks?.map((val, i) => (
              <SocialLink key={i} icon={val.icon} />
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={img}
            alt="hero/img"
            className="w-auto h-[40vh] lg:h-[30vh] md:h-[30vh] 
          sm:h-[20vh] xsm:h-[20vh] transitions-theme -rotate-[20deg] hover:h-[45vh] 
        lg:hover:h-[35vh] md:hover:h-[33vh] sm:hover:h-[25vh] xsm:hover:h-[23vh] hover:rotate-0 
          cursor-pointer object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
