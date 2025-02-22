
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CampaignCardProps {
  title: string;
  description: string;
  raised: number;
  goal: number;
  image: string;
  daysLeft: number;
}

export const CampaignCard = ({
  title,
  description,
  raised,
  goal,
  image,
  daysLeft,
}: CampaignCardProps) => {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in bg-white/80 backdrop-blur-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>${raised.toLocaleString()} raised</span>
            <span>${goal.toLocaleString()} goal</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{daysLeft} days left</span>
          <Button className="bg-primary hover:bg-primary/90">
            Support
          </Button>
        </div>
      </div>
    </Card>
  );
};
