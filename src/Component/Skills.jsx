"use client"

import { motion } from "framer-motion"
import Skill from "./Skill"



const Skills = () => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row
                                max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            
            
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm"> Hover over skill for current proficiency </h3>

            <div className="grid grid-cols-6 gap-5">
                <Skill progress={100} image={"./html.png"}/>    
                <Skill progress={100} image={"./react.png"}/>
                <Skill progress={100} image={"./vsCode.png"}/>
                <Skill progress={100} image={"./javascript.png"}/>
                <Skill progress={95} image={"./python.png"}/>
                <Skill progress={90} image={"./nextjs.png"}/>
                <Skill progress={90} image={"./tailwind.png"}/>
                <Skill progress={85} image={"./angularjs.png"}/>
                <Skill progress={85} image={"./react-native-1 (1).svg"}/>
                <Skill progress={80} image={"./dart.png"}/>
                <Skill progress={80} image={"./d3j3.png"}/>
                <Skill progress={75} image={"./agile-software (1).svg"}/>
                <Skill progress={75} image={"./bootstrap.png"}/>
                <Skill progress={70} image={"./mysql.png"}/>
                <Skill progress={70} image={"./java.png"}/>
                <Skill progress={65} image={"./nodejs.png"}/>
                <Skill progress={65} image={"./swift.png"}/>
                <Skill progress={60} image={"./css.png"}/>
                <Skill progress={60} image={"./typescript.png"}/>    
                <Skill progress={60} image={"./sanity (1).svg"}/>
                <Skill progress={60} image={"./jquery.png"}/> 
                <Skill progress={60} image={"./jira.png"}/>
            </div>
        </motion.div>
    )

}

export default Skills