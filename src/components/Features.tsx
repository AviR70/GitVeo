import { GitBranch, Users, MessageSquare, Layers, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: GitBranch,
    title: "Powerful Version Control",
    description: "Branch, merge, and track every change in your video projects with Git-like precision for timelines and media files.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Work simultaneously with your team on the same project. See live cursors, edits, and changes as they happen.",
    color: "text-accent"
  },
  {
    icon: MessageSquare,
    title: "Frame-accurate Reviews",
    description: "Leave timestamp-locked comments, draw annotations, and record video responses for precise feedback.",
    color: "text-info"
  },
  {
    icon: Layers,
    title: "NLE Integration",
    description: "Deep integration with Premiere Pro, DaVinci Resolve, and Final Cut Pro. Work in your favorite editor.",
    color: "text-warning"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption, role-based access control, and zero-knowledge architecture to protect your content.",
    color: "text-success"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Global edge computing, smart caching, and P2P distribution ensure blazing-fast performance worldwide.",
    color: "text-primary"
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to collaborate
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for professional video production teams who demand the best tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
