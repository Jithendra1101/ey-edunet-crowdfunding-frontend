
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Create Your Campaign",
    description: "Set up your fundraising campaign in minutes. Add your story, photos, and funding goal.",
    icon: "📝",
  },
  {
    title: "Share Your Story",
    description: "Share your campaign with friends, family, and social networks to gain support.",
    icon: "🌟",
  },
  {
    title: "Receive Support",
    description: "Watch as your community comes together to support your cause through secure donations.",
    icon: "💝",
  },
  {
    title: "Make an Impact",
    description: "Use the funds to make your project a reality and create positive change in your community.",
    icon: "🎯",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 py-12 mx-auto">
        <header className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your fundraising journey in four simple steps
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm space-y-4 animate-fade-in">
              <div className="text-4xl">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Ready to Make a Difference?</h2>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/start">Start Your Campaign</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
