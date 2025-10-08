import React from "react";
import { HeroParallax } from "../ui/hero-parallax.jsx";

export function Products() {
  const products = [
    {
      title: "ThinkCode",
      link: "/thinkcode",
      thumbnail: "/thinkcode-demo.png",
      description: "AI-powered coding platform"
    },
    {
      title: "AI Resume Builder",
      link: "/ai-resume",
      thumbnail: "/ai-resume-demo.png",
      description: "Create perfect resumes with AI"
    },
    {
      title: "AI Interview Helper",
      link: "/ai-interview",
      thumbnail: "/ai-interview-demo.png",
      description: "Ace your interviews with AI coaching"
    },
    {
      title: "Code Review AI",
      link: "/code-review",
      thumbnail: "/thinkcode-demo.png",
      description: "Automated code reviews"
    },
    {
      title: "Resume Analyzer",
      link: "/resume-analyzer",
      thumbnail: "/ai-resume-demo.png",
      description: "Analyze and improve your resume"
    },
    {
      title: "Portfolio Builder",
      link: "/portfolio-builder",
      thumbnail: "/ai-resume-demo.png",
      description: "Build stunning portfolios"
    },
    {
      title: "ThinkCode",
      link: "/thinkcode",
      thumbnail: "/thinkcode-demo.png",
      description: "AI-powered coding platform"
    },
    {
      title: "AI Resume Builder",
      link: "/ai-resume",
      thumbnail: "/ai-resume-demo.png",
      description: "Create perfect resumes with AI"
    },
    {
      title: "AI Interview Helper",
      link: "/ai-interview",
      thumbnail: "/ai-interview-demo.png",
      description: "Ace your interviews with AI coaching"
    },
    {
      title: "Code Review AI",
      link: "/code-review",
      thumbnail: "/thinkcode-demo.png",
      description: "Automated code reviews"
    },
    
    
  ];

  return (
    <div className="py-20">
      <HeroParallax products={products} />
    </div>
  );
}