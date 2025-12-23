import React, { Suspense } from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Trust from '@/components/Home/Trust';
import ProblemSolution from '@/components/Home/ProblemSolution';
import Counter from '@/components/Home/Counter'
import Services from '@/components/Home/Services';
import TechStack from '@/components/Home/TechStack';
import Industries from '@/components/Home/Industries';
import Blog from '@/components/SharedComponent/Blog'

export const metadata: Metadata = {
  title: "Venus - Modern Web Development Services",
  description: "Full-stack development services for startups, enterprises, and growing businesses using MERN stack and Next.js",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <ProblemSolution />
      <TechStack />
      <Services />
      <Industries />
      <Suspense fallback={<div className="py-20 text-center">Loading Blog...</div>}>
        <Blog />
      </Suspense>
    </main>
  )
}
