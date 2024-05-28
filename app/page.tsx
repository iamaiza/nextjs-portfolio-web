import About from "@/components/About";
import Demo from "@/components/Demo";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Testimonials from "@/components/News/Testimonials";
import News from "@/components/News/News";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <About />
        <Portfolio />
        <Skills />
        <Demo />
        <Partners />
        <Testimonials />
        <News />
        <Contact />
        <Copyright />
      </div>
    </>
  );
}
