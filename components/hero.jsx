"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroIllustration from "./hero-illustration";

const HeroSection = () => {

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-slide-in-right">
            Unlock Your Career Potential
            <br/> with CareerGenie
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
           Your AI-powered career companion for resumes, interviews, and professional growth.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 button-glow-strong neon-glow">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8 button-glow border-primary/30">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="mt-12 md:mt-16 px-4">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
