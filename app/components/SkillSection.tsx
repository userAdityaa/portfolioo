import Image from "next/image";
import { ReactNode } from "react";

interface SkillButtonProps {
  children: ReactNode;
}

const SkillButton = ({ children }: SkillButtonProps) => (
  <div className="bg-[#1c1c1c] text-[15px] text-white py-2 px-2 rounded-md flex items-center gap-2 border border-zinc-700 hover:bg-zinc-800/50 transition-colors">
    {children}
  </div>
);

const SkillsSection = () => (
  <div className="max-w-[50rem] mt-[2rem] pb-20">
    <h2 className="text-zinc-300 text-2xl font-semibold mb-4 mt-8">Skills & Tools.</h2>
    <div className="flex items-center flex-wrap gap-4">
      <SkillButton>
        <img src="/react.svg" alt="React" className="invert w-5 h-5" />
        ReactJS
      </SkillButton>
      <SkillButton>
        <img src="/next-1.svg" alt="Next.js" className="invert w-5 h-5" />
        NextJs
      </SkillButton>
      <SkillButton>
        <img src="/javascript.svg" alt="JavaScript" className="invert w-5 h-5" />
        JavaScript
      </SkillButton>
      <SkillButton>
        <img src="/typescript.svg" alt="TypeScript" className="invert w-5 h-5" />
        TypeScript
      </SkillButton>
      <SkillButton>
        <img src="/tailwind.svg" alt="Tailwind" className="invert w-5 h-5" />
        Tailwind
      </SkillButton>
      <SkillButton>
        <img src="/shadcn.svg" alt="shadcn" className="invert w-5 h-5" />
        shadcn
      </SkillButton>
      <SkillButton>
        <img src="/motion.svg" alt="motion" className="invert w-5 h-5" />
        Motion
      </SkillButton>
      <SkillButton>
        <img src="/gsap.svg" alt="GSAP" className="invert w-5 h-5" />
        GSAP
      </SkillButton>
      <SkillButton>
        <img src="/nodejs.svg" alt="Node.js" className="invert w-5 h-5" />
        NodeJS
      </SkillButton>
      <SkillButton>
        <img src="/express.svg" alt="Express.js" className="invert w-5 h-5" />
        ExpressJS
      </SkillButton>
      <SkillButton>
        <img src="/postman.svg" alt="Postman" className="invert w-5 h-5" />
        Postman
      </SkillButton>
      <SkillButton>
        <img src="/postgresql.svg" alt="PostgreSQL" className="invert w-5 h-5" />
        PostgreSQL
      </SkillButton>
      <SkillButton>
        <img src="/mongodb.svg" alt="MongoDB" className="invert w-5 h-5" />
        MongoDB
      </SkillButton>
      <SkillButton>
        <img src="/git.svg" alt="Git" className="invert w-5 h-5" />
        Git
      </SkillButton>
      <SkillButton>
        <img src="/github.svg" alt="GitHub" className="invert w-5 h-5" />
        GitHub
      </SkillButton>
      <SkillButton>
        <img src="/java.svg" alt="Java" className="invert w-5 h-5" />
        Java
      </SkillButton>
      <SkillButton>
        <img src="/c.svg" alt="C" className="invert" />
        C
      </SkillButton>
      <SkillButton>
        <img src="/cpp.svg" alt="C++" className="invert" />
        C++
      </SkillButton>
      <SkillButton>
        <img src="/linux.svg" alt="Linux" className="invert" />
        Linux
      </SkillButton>
      <SkillButton>
        <img src="/vercel-1.svg" alt="Vercel" className="invert" />
        Vercel
      </SkillButton>
    </div>
  </div>
);

export default SkillsSection;