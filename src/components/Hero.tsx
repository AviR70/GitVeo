import { Button } from "@/components/ui/button";
import { Play, GitBranch, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-glow" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Version Control for Video Production</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-info to-accent bg-clip-text text-transparent">
              GitVeo
            </span>
            <br />
            <span className="text-foreground">GitHub for Video Editing</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Collaborate on video projects with powerful version control. 
            Branch, merge, and review your edits like code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto group">
              Get Started
              <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Demo
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-card border border-border">
                <GitBranch className="w-4 h-4 text-primary" />
              </div>
              <span>Version Control</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-card border border-border">
                <Users className="w-4 h-4 text-accent" />
              </div>
              <span>Real-time Collaboration</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-card border border-border">
                <Play className="w-4 h-4 text-info" />
              </div>
              <span>Frame-accurate Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
