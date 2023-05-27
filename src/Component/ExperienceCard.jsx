"use client"

import { motion } from "framer-motion";


const ExperienceCard = () =>{
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-10 
                            w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
                            opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img  
                initial={{y: -100, opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                className="w-[115px] h-[115px] rounded-full xl:w-[175px] xl:h-[175px]
                            object-cover object-center"
                src='/LogoTalal.png' alt="logo"/>
            
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Freelance Web Developer</h4>
                <p className="font-bold text-2xl mt-1">Self Employed</p>
                <div className="flex space-x-2 my-2">
                    <img className="h-10 w-10 rounded-full" src="/jsPic.jpg"/>
                    <img className="h-10 w-10 rounded-full" src="/jsPic.jpg"/>
                    <img className="h-10 w-10 rounded-full" src="/jsPic.jpg"/>
                    <img className="h-10 w-10 rounded-full" src="/jsPic.jpg"/>
                </div>
                <p className="uppercase py-5 text-gray-300"> Worked from 0000 - 0000  </p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary List</li>
                    <li>Summary Lost </li>
                    <li>Summary last</li>
                    <li>Summau skod</li>
                    <li>skiodfl dslidf</li>
                </ul>
            </div>
        </article>
    )

}

export default ExperienceCard;