"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter"

import BGSquare from "./BGSquare";
import Image from "next/image";
import Link from "next/link";


export default function Hero () {
    const [text, count] = useTypewriter({
        words: ["Hey, I'm Talal Elagha", 
                "Front-end-Developer", 
                "<LoveToCode />"
        ],
        loop: true,
        delaySpeed: 2000,

    });
    return ( 
        <div className="h-screen flex flex-col space-y-8 items-center justify-center 
                        text-center overflow-hidden">
            <BGSquare />
            <Image src='/faceImage.PNG' width={144} height={144} alt="image" style={{borderRadius:"9999px", position: "relative" , marginLeft: "auto", marginRight: "auto", objectFit: 'cover'}}/>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">Front-end Developer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-2 ">{text}</span>
                    <Cursor cursorColor="red"/>
                </h1>
                <div className="pt-3">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>

                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>

                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


