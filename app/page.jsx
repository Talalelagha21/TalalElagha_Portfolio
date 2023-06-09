"use client"
import About from "@/src/Component/About";
import Experience from "@/src/Component/Experience";
import Hero from "@/src/Component/Hero";
import { useRouter } from "next/navigation";
import Projects from "@/src/Component/Projects";
import Skills from "@/src/Component/Skills";
import Contact from "@/src/Component/Contact";
import Head from "next/head";
import Header from "@/src/Component/Header";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-[rgb(36,36,36)] text-white  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
                    z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-400">

      <Head>
          <title>Talal's Portfolio</title>
      </Head>     

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>
         
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="contact" className="snap-end">
        <Contact />
      </section>
      
      <footer className="sticky bottom-6 w-full cursor-pointer pl-5">
        <div className="h-10 w-10 rounded-full filter hover:grayscale">
          <a href={"#hero"} onClick={() => router.push('#hero')}><img src="./up-arrow-hand-drawn-outline-svgrepo-com.svg" /></a>
        </div>
      </footer>
    </div>
  )
}
