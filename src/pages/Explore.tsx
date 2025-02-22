
import { CampaignCard } from "@/components/campaign/CampaignCard";

const EXPLORE_CAMPAIGNS = [
  {
    title: "Local Animal Shelter",
    description: "Support our animal shelter in providing care and finding homes for abandoned pets.",
    raised: 12000,
    goal: 30000,
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    daysLeft: 20,
  },
  {
    title: "Clean Energy Project",
    description: "Help us install solar panels in underprivileged communities to promote sustainable energy.",
    raised: 45000,
    goal: 100000,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    daysLeft: 45,
  },
  {
    title: "Youth Sports Program",
    description: "Funding equipment and facilities for after-school sports programs.",
    raised: 5000,
    goal: 15000,
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    daysLeft: 30,
  },
  {
    title: "Mobile Health Clinic",
    description: "Bringing healthcare services to remote rural communities.",
    raised: 35000,
    goal: 75000,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    daysLeft: 60,
  },
];

const Explore = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 py-12 mx-auto">
        <header className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Explore Campaigns
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and support amazing projects from around the world
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPLORE_CAMPAIGNS.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
