"use client"

import { motion } from "framer-motion";



export default function Skill ({image, progress}) {
    
    return(
        <div className="group relative flex cursor-pointer ">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0,

            }}
            transition={{duration: 1}}
            whileInView={{opacity:1, x:1}}
            viewport={{once: true}}
            src={image} 
            className="h-12 w-12 rounded-full border-gray-500 md:w-16 md:h-16 xl:w-20 xl:h-20 
                       filter group-hover:grayscale transition duration-300 ease-in-out"/>
            
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  
                            h-12 w-12 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-md md:text-xl xl:text-2xl font-bold text-black opacity-100">{progress}%</p>
                </div> 
            </div> 
        </div>
    )
}




