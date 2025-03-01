"use client";

import React from "react";

import { 
  skills, 
  // testimonials 
} from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skillset = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        <span className="text-purple">Skillset</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}

        <div className="flex flex-wrap items-center justify-center min-h-[10rem] gap-4 md:gap-8 lg:gap-16 max-lg:mt-10 mt-16 px-4">
          {skills.map((skill) => (
            <React.Fragment key={skill.id}>
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
