"use client"

import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div initial={{opacity:0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1.5}}
                    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl 
                        px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.img 
                initial={{
                    x:-200,
                    opacity:0
                }}
                transition={{
                    duration: 1.4,
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}
                viewport={{once: true}}
                src="/mePic.jpg"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                            md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[500px] xs:mt-10"/>
            <div className="space-y-10 px-10 md:px-10 ">
                <h4 className="text-4xl font-semibold">
                    A Little About <span className="underline decoration-red-400/40">me</span>
                </h4>
                <p className="text-base"> My name is Talal and I am a front-end developer who is actively seeking volunteer opportunities to gain 
                    hands-on experience and enhance my skills in this field. I was wondering if your organization has any volunteer 
                    opportunities available for front-end developers. I am eager to contribute to the growth of any organization.
                    I have experience working with HTML, CSS, JavaScript, and various front-end frameworks and I am confident that my skills would be of 
                    great value to your team.</p>
            </div>
        </motion.div>
    )
}


export default About