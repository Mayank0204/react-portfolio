"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
    const handleScroll = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id='home' className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12 lg:ml-[60px] gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Mayank",
                                1000,
                                "Data Science Student",
                                1000,
                                "Python & ML Developer",
                                1000,
                                "Web Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>

                    <p className="text-muted text-base sm:text-lg mb-6 mr-2.5 lg:text-xl">
                        I am a software developer with a passion for creating innovative
                        solutions. I love coding, learning new technologies, and sharing
                        knowledge with others. Welcome to my portfolio!
                    </p>

                    <div>
                        <button
                            onClick={handleScroll}
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/40"
                        >
                            Get in Touch
                        </button>

                        <a
                            href="/resume.pdf"
                            download
                            className="px-6 py-3 w-full sm:w-fit inline-block rounded-full bg-gradient-to-r from-primary to-secondary text-white mt-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/40"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-6 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative ml-10 sm:ml-0 md:ml-[60px] lg:ml-0">
                        <Image
                            src="/images/hero-image.png"
                            alt="Portrait of Mayank"
                            width={300}
                            height={300}
                            priority
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
