"use client";

import React, { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [nodes, setNodes] = useState([]);
  const [dataStreams, setDataStreams] = useState([]);

  useEffect(() => {
    // Generate AI neural network nodes
    const newNodes = [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 6,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setNodes(newNodes);

    // Generate data streams
    const newStreams = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));
    setDataStreams(newStreams);
  }, []);

  return (
    <>
      {/* AI-Themed Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Large Pulsing Gradient Orbs - Brain-like */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/40 rounded-full filter blur-[100px] opacity-80 animate-pulse-slow" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-accent/40 rounded-full filter blur-[120px] opacity-70 animate-pulse-slow animation-delay-2000" />
        <div className="absolute bottom-[-15%] left-[30%] w-[550px] h-[550px] bg-primary/30 rounded-full filter blur-[110px] opacity-60 animate-pulse-slow animation-delay-4000" />
        
        {/* Neural Network Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
        
        {/* AI Neural Network Nodes - Glowing Dots */}
        <div className="absolute inset-0">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute rounded-full neon-glow-strong"
              style={{
                width: `${node.size}px`,
                height: `${node.size}px`,
                left: `${node.left}%`,
                top: `${node.top}%`,
                background: "hsl(var(--primary))",
                animation: `pulse ${node.duration}s ease-in-out infinite`,
                animationDelay: `${node.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Vertical Data Streams - Matrix Style */}
        <div className="absolute inset-0">
          {dataStreams.map((stream) => (
            <div
              key={stream.id}
              className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60"
              style={{
                left: `${stream.left}%`,
                animation: `fall ${stream.duration}s linear infinite`,
                animationDelay: `${stream.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Horizontal Scanning Lines - AI Processing */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-down blur-sm" />
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-scan-down-slow blur-sm" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* Circuit Lines - Tech Feel */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-slide-right" style={{ top: "15%" }} />
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-slide-left" style={{ top: "35%" }} />
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-slide-right" style={{ top: "55%" }} />
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-slide-left" style={{ top: "75%" }} />
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-slide-right" style={{ top: "90%" }} />
        </div>

        {/* Binary Rain Effect */}
        <div className="absolute inset-0 opacity-20 font-mono text-xs text-primary select-none">
          <div className="absolute animate-binary-fall" style={{ left: "10%", animationDuration: "8s" }}>01001010</div>
          <div className="absolute animate-binary-fall" style={{ left: "25%", animationDuration: "10s", animationDelay: "1s" }}>11010101</div>
          <div className="absolute animate-binary-fall" style={{ left: "40%", animationDuration: "9s", animationDelay: "2s" }}>10101100</div>
          <div className="absolute animate-binary-fall" style={{ left: "60%", animationDuration: "11s", animationDelay: "0.5s" }}>01110011</div>
          <div className="absolute animate-binary-fall" style={{ left: "75%", animationDuration: "7s", animationDelay: "1.5s" }}>11001010</div>
          <div className="absolute animate-binary-fall" style={{ left: "90%", animationDuration: "9.5s", animationDelay: "2.5s" }}>10011101</div>
        </div>

        {/* Radial Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />
      </div>
    </>
  );
}
