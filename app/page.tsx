import AboutUs from "@/components/main/AboutUs";
import { Encryption } from "@/components/main/Encryption";
import { Hero } from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import { Skills } from "@/components/main/Skills";
import ContactForm from '@/components/main/ContactForm';
import Image from "next/image";
import { OpeningText } from "@/components/main/OpeningText";
import Chatbot from "@/components/main/Chatbot";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-auto gap-10">
      <Hero />
      <Chatbot />
      <OpeningText />
      <Projects />
      <AboutUs />
      </div>
    </main>
  );
}
