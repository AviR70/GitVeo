import { GitBranch, GitCommit, GitMerge, User, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Commit {
  id: string;
  message: string;
  author: string;
  time: string;
  branch: string;
  type: "commit" | "merge" | "branch";
}

const mockCommits: Commit[] = [
  {
    id: "a7f3c21",
    message: "Add final color grading to Act 3",
    author: "Sarah Chen",
    time: "2 hours ago",
    branch: "main",
    type: "commit"
  },
  {
    id: "b9e4d12",
    message: "Merge feature/audio-mixing into main",
    author: "Mike Rodriguez",
    time: "5 hours ago",
    branch: "main",
    type: "merge"
  },
  {
    id: "c2a1f08",
    message: "Update dialogue levels in scene 4",
    author: "Mike Rodriguez",
    time: "6 hours ago",
    branch: "feature/audio-mixing",
    type: "commit"
  },
  {
    id: "d5b7e34",
    message: "Add transition effects between scenes",
    author: "Alex Kim",
    time: "8 hours ago",
    branch: "main",
    type: "commit"
  },
  {
    id: "e8c9f45",
    message: "Create branch for audio mixing workflow",
    author: "Mike Rodriguez",
    time: "1 day ago",
    branch: "feature/audio-mixing",
    type: "branch"
  },
  {
    id: "f1d2e56",
    message: "Initial timeline commit - Rough cut v1",
    author: "Sarah Chen",
    time: "2 days ago",
    branch: "main",
    type: "commit"
  }
];

export const CommitTree = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "merge":
        return <GitMerge className="w-4 h-4" />;
      case "branch":
        return <GitBranch className="w-4 h-4" />;
      default:
        return <GitCommit className="w-4 h-4" />;
    }
  };

  const getBranchColor = (branch: string) => {
    if (branch === "main") return "border-primary bg-primary/10";
    if (branch.includes("audio")) return "border-accent bg-accent/10";
    return "border-info bg-info/10";
  };

  return (
    <section className="py-24 relative bg-card/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Version Control Made Visual
          </h2>
          <p className="text-xl text-muted-foreground">
            Track every edit, branch for experiments, and merge with confidence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-background/50 backdrop-blur border-border">
            {/* Branch Header */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
              <GitBranch className="w-5 h-5 text-primary" />
              <span className="font-semibold text-lg">Repository: video-project-2024</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm text-muted-foreground">6 commits</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">2 branches</span>
              </div>
            </div>

            {/* Commit Timeline */}
            <div className="space-y-0">
              {mockCommits.map((commit, index) => {
                const isMain = commit.branch === "main";
                const isMerge = commit.type === "merge";
                const isBranch = commit.type === "branch";
                
                return (
                  <div key={commit.id} className="relative">
                    {/* Connecting Line */}
                    {index < mockCommits.length - 1 && (
                      <div 
                        className={`absolute left-[15px] top-8 w-0.5 h-full ${
                          isMain ? "bg-primary/30" : "bg-accent/30"
                        }`} 
                      />
                    )}
                    
                    {/* Branch Line for feature branches */}
                    {!isMain && index > 0 && (
                      <div className="absolute left-[15px] top-0 w-12 h-8 border-l-2 border-b-2 border-accent/30 rounded-bl-lg" />
                    )}

                    {/* Commit Row */}
                    <div className="flex items-start gap-4 pb-6 relative z-10">
                      {/* Commit Dot */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 ${getBranchColor(commit.branch)} flex items-center justify-center ${
                        isMerge ? "text-primary" : isMain ? "text-primary" : "text-accent"
                      }`}>
                        {getIcon(commit.type)}
                      </div>

                      {/* Commit Details */}
                      <div className="flex-1 pt-0.5">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1">
                            <p className="font-medium text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">
                              {commit.message}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5" />
                                <span>{commit.author}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{commit.time}</span>
                              </div>
                              {!isMain && (
                                <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
                                  {commit.branch}
                                </span>
                              )}
                            </div>
                          </div>
                          <code className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                            {commit.id}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Footer */}
            <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">127</div>
                <div className="text-sm text-muted-foreground">Total Commits</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">8</div>
                <div className="text-sm text-muted-foreground">Active Branches</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">5</div>
                <div className="text-sm text-muted-foreground">Contributors</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};