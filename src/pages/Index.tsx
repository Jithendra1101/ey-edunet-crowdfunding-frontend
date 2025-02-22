
import { AuthForm } from "@/components/auth/AuthForm";
import { CampaignCard } from "@/components/campaign/CampaignCard";

const SAMPLE_CAMPAIGNS = [
  {
    title: "Save the Local Theater",
    description: "Help us preserve our historic community theater and continue bringing arts to our neighborhood.",
    raised: 15000,
    goal: 50000,
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    daysLeft: 15,
  },
  {
    title: "Community Garden Project",
    description: "Creating a sustainable garden to provide fresh produce for our local food bank.",
    raised: 8000,
    goal: 20000,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    daysLeft: 23,
  },
  {
    title: "Tech Education Initiative",
    description: "Providing coding education and computers to underprivileged students.",
    raised: 25000,
    goal: 40000,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    daysLeft: 8,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 py-8 mx-auto">
        <header className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Make a Difference
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Support meaningful projects and help create positive change in your community
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <AuthForm />
        </div>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-center">
            Featured Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_CAMPAIGNS.map((campaign, index) => (
              <CampaignCard key={index} {...campaign} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
