"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers')
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Years (Coding Practice)",
    value: "2",
    postfix: "+",
  },
  {
    metric: "Projects",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Hackathons",
    value: "2",
  },
  {
    metric: "Coding problems",
    value: "500",
    postfix: "+",
  }
];

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className='text-white text-2xl font-bold flex flex-row items-center'>
                <AnimatedNumbers
                  includeCommas
                  animateToNumber={parseInt(achievement.value)}
                  locale='en-US'
                  className='text-white text-2xl font-bold'
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      tensions: 140 * (index + 1),
                      friction: 100,
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection