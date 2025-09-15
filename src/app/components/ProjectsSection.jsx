"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "FraudVision",
        description: "A machine learning-powered web app that detects fraudulent transactions with real-time analysis and detailed audit logs.",
        image: "/images/projects/1.png",
        tag: ["All", "ML/DL", "Web Dev"],
        gitUrl: "https://github.com/Mayank0204/fraudvision-credit-card.git",
        previewUrl: "https://fraudvision-credit-card.onrender.com/login?next=%2F"
    },
    {
        id: 2,
        title: "BlogNest",
        description: "A minimal blogging platform that lets users create    .",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Mayank0204/blognest-web-app.git",
        previewUrl: "https://blognest-web-app.onrender.com/"
    },
    {
        id: 3,
        title: "Flower Classifier",
        description: "FlowerVision is a web app that uses deep learning to classify flower species from images with a clean, user-friendly interface.",
        image: "/images/projects/3.png",
        tag: ["All", "ML/DL"],
        gitUrl: "https://github.com/Mayank0204/flower-image-classifier.git",
        previewUrl: "https://flower-image-classifier-5o7rja72g2zrynhqfrrmqk.streamlit.app/"
    }];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardvariants = {
        initial: { opacity: 0, y: 50 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-15 md:mt-30 mb-4 ml-0'>
                My Projects
            </h2>
            <div className='text-white flex flex-row items-center justify-center gap-2 py-8'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="ML/DL"
                    isSelected={tag === "ML/DL"}
                />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-6 xl:ml-8 xl:mr-8'>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        variants={cardvariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                        key={index}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSection