import AboutUs from "@/components/main/AboutUs";
import { Encryption } from "@/components/main/Encryption";
import { Hero } from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import { Skills } from "@/components/main/Skills";
import ContactForm from '@/components/main/ContactForm';
import Image from "next/image";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-auto gap-20">
      <Hero />
      <Skills />
      <Encryption />
      <Projects />
      <AboutUs />
      <ContactForm/>
      </div>
    </main>
  );
}
