"use client"
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { selfEmployed, converse } from "./experienceInfo"

const Experience =()=>{

    
    
    return(
        <motion.div initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1.5}} 
            className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-10
                            scrollbar scrollbar-[track-gray-400/20] scrollbar-thumb-red-400">
                <ExperienceCard company={selfEmployed}/>
                <ExperienceCard company={converse}/>
               
            </div>
        </motion.div>
    )
}

export default Experience;

