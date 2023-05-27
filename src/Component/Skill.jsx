"use client"

import { motion } from "framer-motion";



export default function Skill () {
    
    return(
        <div className="group relative flex cursor-pointer ">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0,

            }}
            transition={{duration: 1}}
            whileInView={{opacity:1, x:1}}
            src="/jsPic.jpg" 
            className="h-20 w-20 rounded-full border-gray-500 md:w-22 md:h-22 xl:w-24 xl:h-24 
                       filter group-hover:grayscale transition duration-300 ease-in-out"/>
            
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  
                            h-20 w-20 md:w-22 md:h-22 xl:w-24 xl:h-24 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">100%</p>
                </div> 
            </div> 
        </div>
    )
}




