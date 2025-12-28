import { SectionHeader } from "@/components/SectionHeader";
import { Check, Heart, Users, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Membership() {
  const tiers = [
    {
      name: "Single Membership",
      price: 25,
      icon: User,
      description: "For individual residents",
    },
    {
      name: "Golden Family",
      price: 30,
      icon: Heart,
      description: "Senior family membership",
    },
    {
      name: "Family Membership",
      price: 50,
      icon: Users,
      description: "For the whole household",
     
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Join LKAA" 
          subtitle="Support the preservation and community of Lake Keesus"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {tiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${tier.popular ? 'border-primary shadow-lg ring-1 ring-primary/10' : 'border-border'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <CardHeader className="text-center pt-8 pb-4">
                <div className="mx-auto bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <tier.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-display font-bold text-foreground">${tier.price}</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <ul className="text-left space-y-3 mb-8 px-4">
                  <li className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-secondary" /> Voting rights at annual meeting
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-secondary" /> Access to all social events
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-secondary" /> Support lake conservation
                  </li>
                </ul>
                <a 
                  href="https://www.paypal.com/donate/?hosted_button_id=HVM9SXBTTNNMS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 shadow-lg shadow-primary/20">
                    Pay Dues Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">New Member?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Please fill out the membership form to ensure we have your current contact details for our directory and email list.
          </p>
          <a 
            href="https://docs.google.com/forms/d/126N_HniVwA52rnZTCpNQPVyhBjpNvgbPNQ5Gv9-5d90/preview" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 rounded-xl font-bold">
              Open Membership Form
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
