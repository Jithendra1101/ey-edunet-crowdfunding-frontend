
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { AuthForm } from "@/components/auth/AuthForm";

export const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">FundFlare</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/explore" className="text-sm font-medium hover:text-primary transition-colors">
                Explore
              </Link>
              <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Start a Campaign
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <AuthForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
};
