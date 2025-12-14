"use client";

import React from "react";

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-primary/20 neon-glow">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* AI Brain/Network Visualization */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
        {/* Central AI Core */}
        <circle cx="400" cy="250" r="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3">
          <animate attributeName="r" values="80;85;80" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="250" r="60" fill="hsl(var(--primary))" opacity="0.1">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Neural Network Nodes */}
        <circle cx="300" cy="150" r="15" fill="hsl(var(--primary))" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="150" r="15" fill="hsl(var(--accent))" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="350" r="15" fill="hsl(var(--primary))" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="550" cy="350" r="15" fill="hsl(var(--accent))" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="250" r="12" fill="hsl(var(--primary))" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="250" r="12" fill="hsl(var(--accent))" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
        </circle>
        
        {/* Connecting Lines */}
        <line x1="400" y1="250" x2="300" y2="150" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="400" y1="250" x2="500" y2="150" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite" />
        </line>
        <line x1="400" y1="250" x2="250" y2="350" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="400" y1="250" x2="550" y2="350" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.9s" repeatCount="indefinite" />
        </line>
        <line x1="400" y1="250" x2="200" y2="250" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.3s" repeatCount="indefinite" />
        </line>
        <line x1="400" y1="250" x2="600" y2="250" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.6s" repeatCount="indefinite" />
        </line>
      </svg>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/30 p-4 animate-float">
        <div className="text-primary font-bold text-sm">Resume</div>
        <div className="text-xs text-muted-foreground mt-1">AI-Powered</div>
      </div>
      
      <div className="absolute top-40 right-20 w-36 h-36 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/30 p-4 animate-float" style={{ animationDelay: "1s" }}>
        <div className="text-accent font-bold text-sm">Interview Prep</div>
        <div className="text-xs text-muted-foreground mt-1">Smart Training</div>
      </div>
      
      <div className="absolute bottom-20 left-32 w-40 h-32 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/30 p-4 animate-float" style={{ animationDelay: "2s" }}>
        <div className="text-primary font-bold text-sm">Cover Letter</div>
        <div className="text-xs text-muted-foreground mt-1">Personalized</div>
      </div>
      
      <div className="absolute bottom-32 right-40 w-36 h-36 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/30 p-4 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="text-accent font-bold text-sm">Career Insights</div>
        <div className="text-xs text-muted-foreground mt-1">Data-Driven</div>
      </div>
      
      {/* Center Icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md border-2 border-primary flex items-center justify-center neon-glow-strong">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 text-primary"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        </div>
      </div>
    </div>
  );
}
