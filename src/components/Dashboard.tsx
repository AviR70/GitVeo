import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, Clock, Users, Play, MoreVertical } from "lucide-react";

const projects = [
  {
    name: "Summer Campaign 2024",
    branches: 8,
    collaborators: 5,
    lastUpdate: "2 hours ago",
    thumbnail: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--info)) 100%)"
  },
  {
    name: "Product Launch Video",
    branches: 3,
    collaborators: 3,
    lastUpdate: "5 hours ago",
    thumbnail: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--success)) 100%)"
  },
  {
    name: "Tutorial Series - Episode 5",
    branches: 2,
    collaborators: 2,
    lastUpdate: "1 day ago",
    thumbnail: "linear-gradient(135deg, hsl(var(--warning)) 0%, hsl(var(--destructive)) 100%)"
  }
];

export const Dashboard = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Your Projects</h2>
              <p className="text-muted-foreground">Manage and collaborate on video projects</p>
            </div>
            <Button variant="hero">
              New Project
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  <div 
                    className="w-32 h-20 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: project.thumbnail }}
                  >
                    <Play className="w-8 h-8 text-white/80" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4" />
                        <span>{project.branches} branches</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{project.collaborators} collaborators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Updated {project.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card border-border">
              <div className="text-3xl font-bold mb-1">24</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="text-3xl font-bold mb-1">156</div>
              <div className="text-sm text-muted-foreground">Commits This Month</div>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-sm text-muted-foreground">Active Collaborators</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
