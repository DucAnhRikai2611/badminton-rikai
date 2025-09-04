import { Trophy } from "lucide-react"

export default function Greeting() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center mb-8">
          <div
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Trophy className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance animate-fade-in">
            Rikai Badminton Club
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground text-pretty animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Where champions are made
          </p>

          <div className="mt-8 pt-4 border-t border-border animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">In Progress</p>
          </div>
        </div>
      </div>
    </div>
  )
}
