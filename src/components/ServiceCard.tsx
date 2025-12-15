import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  userInputs: string;
  delivery: string;
  image: string;
  description: string;
}

const ServiceCard = ({ title, userInputs, delivery, image, description }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group hover:shadow-purple transition-all duration-300 bg-gradient-card border-primary/20 overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-all duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10"
        >
          <span>View Details</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        {isExpanded && (
          <div className="mt-4 space-y-4 animate-slide-up">
            <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
              <h4 className="font-semibold text-foreground mb-2">What You Submit:</h4>
              <p className="text-muted-foreground text-sm">{userInputs}</p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">What Infyrex Delivers:</h4>
              <p className="text-foreground text-sm">{delivery}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;