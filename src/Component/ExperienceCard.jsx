"use client"

import { motion } from "framer-motion";


const ExperienceCard = ({company}) =>{
  
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 xl:mt-20
                            w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 pb-0
                            opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 
                            overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-400">
          <motion.img  
                initial={{y: -100, opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                className="w-[90px] h-[90px] rounded-full xl:w-[175px] xl:h-[175px]
                            object-cover object-center"
                src={company.logo} alt="logo"/>
            
            <div className="px-0 md:px-10">
                <h4 className="xl:text-2xl md:text-2xl text-lg font-light">{company.name}</h4>
                <p className="font-bold text-xl mt-1">{company.company}</p>
                <div className="flex space-x-2 my-2">
                   {company.skills.map((skill, i) => (
                         <img className="h-10 w-10 rounded-full" src={skill}/>
                        
                   ))}
                    
                </div>
                <p className="uppercase py-5 text-gray-300"> Worked from {company.startDate} - {company.endDate}  </p>
                <ul className="list-disc space-y-3 ml-5 text-md">
                    {company.points.map((points) => (
                         <li>{points}</li>
                        
                    ))}
                </ul>
            </div>
        </article>
    )

}

export default ExperienceCard;

