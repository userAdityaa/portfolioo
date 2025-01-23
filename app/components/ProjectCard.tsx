'use client'
import Image from "next/image";
import { Eye, Link as LinkIcon, Github, X } from "lucide-react";
import { useState } from "react";

type ProjectStatus = "Live" | "Building";

interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  image: string;
  demoLink?: string;
  githubLink?: string;
  previewLink?: string;
  previewVideo?: string;
}

interface ProjectCardProps extends Project {
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  status, 
  image,
  className = "",
  demoLink,
  githubLink,
  previewLink,
  previewVideo
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVideoClick = () => {
    if (showVideo) {
      setIsExpanded(true);
    }
  };

  return (
    <>
      <div className={`bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 ${className} max-phone:w-[98%]`}>
        <div className="relative">
        {showVideo ? (
            <div className="relative w-full h-96"> 
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-zinc-900/80 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
              <video 
                className="w-full h-full object-contain bg-black"
                autoPlay 
                controls
                src={previewVideo}
                onClick={handleVideoClick}
              />
            </div>
          ) : (
            <Image 
              src={image} 
              alt={title} 
              width={400} 
              height={200} 
              className="w-full h-48 object-cover"
            />
          )}
        </div>
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[22px] text-zinc-200 font-semibold">{title}</h3>
            <span className={`px-2 py-1 rounded text-sm ${
              status === "Live" ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"
            }`}>
              {status}
            </span>
          </div>
          <p className="text-zinc-400 text-[15px]">{description}</p>
          <div className="flex gap-2 justify-end">
            {previewVideo && (
              <button
                onClick={() => setShowVideo(true)}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 text-zinc-400" />
              </button>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer"
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <LinkIcon className="w-5 h-5 text-zinc-400" />
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer"
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <Github className="w-5 h-5 text-zinc-400" />
              </a>
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative w-full max-w-4xl mx-auto">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-zinc-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <video 
              className="w-full rounded-lg"
              autoPlay 
              controls
              src={previewVideo}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "Cosmic Tales Project",
      description: "Cosmic Tales is a minimalist, tech-driven platform built on Next.js, TypeScript, Redis, Python, and Flask. Enhanced with Sentiment Analysis, Gemini for AI insights, and Cloudinary for media management, it predicts and give a tarot cards to the user based on their activities on X / Twitter.",
      status: "Live",
      image: "/cosmic_project.png",
      demoLink: "https://cosmic-tales.vercel.app/",
      githubLink: "https://github.com/userAdityaa/celestial_frontend",
      previewVideo: "/cosmic.mov"
    },
    {
      title: "Bookmark Project",
      description: "This Project stands out with it's minimal design and the use case of it, as this website let the user store any website url along with that any long/short text, colors. This project is fully made upon next.js, typescript, prisma and neon for postgresql.",
      status: "Live",
      image: "/bookmark_project.png",
      demoLink: "https://bkmarks.vercel.app",
      githubLink: "https://github.com/userAdityaa/bookmark-project",
      previewVideo: "/bookmark.mov"
    },
    {
      title: "Todoodle Project",
      description: "A full stack application with the feature to make todo, schedule todo, write sticky notes, create events. This project is made upon next.js and typescript for the frontend part, where as the combo of Go + MongoDB make this project much faster.",
      status: "Live",
      image: "/todo_project.png",
      demoLink: "https://minimal-planner.vercel.app",
      githubLink: "https://github.com/userAdityaa/todo_website",
      previewVideo: "/videos/todo-demo.mp4"
    },
    {
      title: "Saiyan Drinks Project",
      description: "A frontend application with creative design, fully responsive along with amazing animation. This project is made with nextjs, typescript, and for the animation part GSAP is used. For future purpose, I will go with GraphQL for implementation of the backend.",
      status: "Live",
      image: "/drinks_project.png",
      demoLink: "https://saiyan-drinks.vercel.app",
      githubLink: "https://github.com/userAdityaa/saiyan-drinks",
      previewVideo: "/videos/drinks-demo.mp4"
    },
    {
      title: "Meal Planner Project",
      description: "A fullstack mobile application made with the help of flutter along with Riverpod for state management, backend part is handled using firebase for all the storage, auth, chat based feature. This project uses deep learning CNN model made by myself for checking out which fruit is currently being shown.",
      status: "Live",
      image: "/meal_project.png",
      githubLink: "https://github.com/userAdityaa/meal-planner",
      previewVideo: "/videos/meal-demo.mp4"
    }, 
    {
        title: "Blog Project",
        description: "A fullstack application for blogging, made with the help of javascript and next.js.",
        status: "Building",
        image: "/blog_project.png",
        githubLink: "https://github.com/userAdityaa/meal-planner",
        previewVideo: "/videos/meal-demo.mp4"
    }, 
    {
        title: "Web3 Marketplace Project",
        description: "Web3 Web3 Web3 Web3 Web3 Web3 Web3 Web3 Web3 Web3 Web3",
        status: "Building",
        image: "/marketplace_project.png",
        githubLink: "https://github.com/userAdityaa/meal-planner",
        previewVideo: "/videos/meal-demo.mp4"
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-zinc-300 text-2xl font-semibold mb-6">Projects.</h2>
      <div className="flex flex-col gap-6">
        {(showAll ? projects : projects.slice(0, 2)).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <button 
        onClick={() => setShowAll(!showAll)}
        className="w-full mt-6 py-4 flex items-center justify-center gap-2 bg-zinc-900/50 rounded-xl border border-zinc-800 text-zinc-400 hover:bg-zinc-900 transition-colors max-phone:w-[98%]"
      >
        <span>{showAll ? 'Show less' : 'Show all'}</span>
        <svg 
          className={`w-4 h-4 transform transition-transform ${showAll ? 'rotate-180' : ''}`} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default ProjectsSection;