import React from "react";
import { Wand2 } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <Wand2 className="h-6 w-6 md:h-8 md:w-8 text-primary neon-glow transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300" />
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text tracking-tight">
          CareerGenie
        </span>
        <span className="text-[8px] md:text-[10px] text-muted-foreground tracking-widest uppercase ml-1">
          AI Career Coach
        </span>
      </div>
    </div>
  );
}
