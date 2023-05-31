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
            <div className="space-y-10 px-10 md:px-10 overflow-y-hidden">
                <h4 className="text-4xl font-semibold">
                    A Little About <span className="underline decoration-red-400/40">me</span>
                </h4>
                <p className=" text-xs md:text-sm xl:text-base "> Hey there, I'm Talal, and welcome to my page! I recently graduated with a degree in computer science, 
                    and right now, I'm on the lookout for awesome front-end job opportunities. You know what really gets me excited? 
                    Coding and building eye-catching websites that make people go, "Wow!"  When I'm not buried in lines of code, you'll most 
                    likely find me glued to the TV, cheering on my favorite sports teams. I'm a die-hard Arsenal fan, and I also love 
                    rooting for the Raptors, Leafs, and Blue Jays. I'm a hardworking individual whos always striving to push myself and produce top-notch work. Learning new things is my jam, 
                    so I'm always up for diving into new frameworks or languages that can take my coding skills to the next level. Right now, I'm all about the 
                    front-end side of things, but I've got my eye on full-stack development too. It's an exciting challenge that I'm eager to explore and grow in.  
                    Oh, and by the way, I also do freelance work on the side. If you've got any cool ideas or projects in mind, shoot me an email. I'm more than 
                    happy to chat and see how we can collaborate on something amazing. Let's make things happen!</p>
            </div>
        </motion.div>
    )
}


export default About
