"use client"

import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons";




const Projects = () => {
    const projects = [1,2,3,4,5,6]
    return (
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
        className="h-screen  relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

            <div className="relative w-full flex overflow-x-scroll mb-4 overflow-hidden snap-x snap-mandatory z-20 
                                  
                            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-400">
                {projects.map((project, i) => (
                   
                   <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
                        <motion.img 
                            initial={{
                                y:-300,
                                opacity:0
                            }}
                            transition={{duration: 1.3}}
                            whileInView={{opacity:1, y:0}}
                            viewport={{once: true}}
                            src="/SportStatMac.png"/>
                    
                    <div className="space-y-10 px-0 md:px-10 max-4-6xl">
                            
                            <div className="flex items-center space-x-1 justify-center">
                                <h4 className="text-2xl font-semibold text-center">
                                    Project {i + 1}: Sports website 
                                </h4>
                                <SocialIcon url="https://github.com/Talalelagha21" fgColor="gray" bgColor="transparent" style={{ height: 25, width: 25 }}/>
                            </div>
                            
                        <p className="text-sm text-center md:text-left">
                            My name is Talal and I am a front-end developer who is actively seeking volunteer opportunities to gain 
                            hands-on experience and enhance my skills in this field. I was wondering if your organization has any volunteer 
                            opportunities available for front-end developers. I am eager to contribute to the growth of any organization.
                            I have experience working with HTML, CSS, JavaScript, and various front-end frameworks and I am confident that my skills would be of 
                            great value to your team.
                        </p>
                    </div>
                   </div>
                ))}
            </div>
            
            
            <div className="w-full absolute top-[30%] bg-red-500/10 left-0 h-[500px]
                            -skew-y-12">

            </div>
        </motion.div>
    )
}

export default Projects