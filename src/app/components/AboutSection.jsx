"use client"
import React, {useTransition, useState, act} from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='space-y-1 list-disc pl-2'>
                <li>Python</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>TailWind</li>  
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React</li>
                <li>Flask</li>
                <li>MySQL</li>
                <li>SQLite</li>
                <li>Excel</li>
                <li>Power BI</li>
                <li>Git / GitHub</li>
                <li>Postman</li>
                <li>VS Code</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='space-y-1 list-disc pl-2'>
                <li>Bachelor of Technology in Computer Science and Engineering
                    <br />
                    <span className='text-sm text-gray-400'>
                        DIT University, Dehradun
                    </span>
                    <br />
                    <span className='text-sm text-gray-400'>
                        2022 - Present
                    </span>
                </li>
                <br />
                <li>Higher Secondary Education (CBSE)
                    <br />
                    <span className='text-sm text-gray-400'>
                        DAV Centenary Public School, Panipat
                    </span>
                    <br />
                    <span className='text-sm text-gray-400'>
                        2007 - 2022
                    </span>
                </li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='space-y-1 list-disc pl-2'>
                <li>Python for Data Science</li>
                <li>Machine Learning Basics</li>
                <li>Full Stack Web Development Certification</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {   
            setTab(id);
        });
    };
  return (
    <section id='about' className='text-white'>
        <div>
            <h2 className='flex flex-col items-center text-4xl font-bold text-white mt-20 md:mt-40 lg:mt-50 mb-5 ml-0'>About Me</h2>
            <p className='flex flex-col items-center text-base mt-5 md:mt-8 md:m-14 lg:pl-12 xl:pl-0 lg:text-lg'>
                A passionate computer science student with a keen interest in building innovative solutions 
            </p>
        </div>
        
        <div className='md:grid md:grid-cols-2 gap-2 items-start py-2 px-0 sm:py-6 xl:pl-10'>
            <div>
                <p className='text-base md:pl-8 md:pt-2 lg:text-lg'>
                    I am a Data Science student with a deep interest in machine learning, full-stack web development, and data visualization. 
                    I work with tools like Java, Python, HTML, CSS, JavaScript, Node.js, Express.js, Flask, React, MySQL, SQLite, Git, Excel and Power BI. 
                    I am a quick learner and I am always looking to expand my knowledge and skill set. 
                    I am a team player and I am excited to work with others to create innovative solutions.
                </p>
            </div>

            <div className='md:ml-15 lg:ml-45 xl:ml-60 mt-5 md:mt-0'>
                <div className='flex space-x-4 mb-5'>
                    <TabButton 
                        selectTab={() => handleTabChange('skills')} 
                        active={tab === 'skills'}>Skills / Tools
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange('education')} 
                        active={tab === 'education'}>Education
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange('certifications')} 
                        active={tab === 'certifications'}>Certifications
                    </TabButton>
                </div>
                <div className='mt-4'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>

  ) 
}

export default AboutSection