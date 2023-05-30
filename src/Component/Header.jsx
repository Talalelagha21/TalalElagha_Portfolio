"use client"
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { SocialIcon } from "react-social-icons";








const Header = () => {

    const router = useRouter();
    
     return (
       <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto mt-3
                          xl:items-center z-10">
            <motion.div className="flex flex-row items-center"
                        initial={{
                            x:-500,
                            opacity:0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale:1
                        }}
                        transition={{
                            duration: 1.5,
                
                        }}
                        >
                <SocialIcon url="https://github.com/Talalelagha21" fgColor="gray" bgColor="transparent" style={{ height: 40, width: 40 }}/>
                <SocialIcon url="https://www.linkedin.com/in/talal-elagha-a4120a250/" fgColor="gray" bgColor="transparent" style={{ height: 40, width: 40 }}/>
                <SocialIcon url="https://www.discordapp.com/users/yung_me7o#5343" fgColor="transparent" bgColor="gray" style={{ height: 25, width: 25 }}/>
            </motion.div>

            
                <motion.div className="flex flex-row items-center text-gray-300 cursor-pointer"
                        initial={{
                            x:500,
                            opacity:0,
                            scale:0.5
                        }}
                        animate={{
                            x:0,
                            opacity:1,
                            scale:1
                        }}
                        transition={{
                            duration: 1.5

                        }}>
                    <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" style={{ height: 40, width: 40 }}/>
                    <a href={"#contact"} onClick={() => router.push('#contact')} className="uppercase hidden md:inline-flex text-sm text-gray-400">Reach me Here</a>
                </motion.div>
          
       </header>

     )
}

export default Header;

