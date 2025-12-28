import { SectionHeader } from "@/components/SectionHeader";
import { Anchor, Info, AlertTriangle, Map as MapIcon, Fish } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lakeMapUrl from "@assets/keesus_overview_1766516080502.png";

export default function Boating() {
  const rules = [
    {
      title: "Traffic Pattern",
      content: "Attempt to travel all Keesus Bays in a counter-clockwise direction (driver to shore) especially during high use periods."
    },
    {
      title: "Speed Limits",
      content: "Slow-No-Wake speed before 9:00 a.m. and after sundown Monday-Friday. Slow-No-Wake speed before 9:00 a.m. and after 6:00 p.m. on Saturdays, Sundays, and holidays."
    },
    {
      title: "Waterskiing",
      content: "No waterskiing after 6:00 p.m. on Saturdays, Sundays, and holidays."
    },
    {
      title: "Safety Equipment",
      content: "One life jacket for each person in a watercraft and one throwable if your boat is 16 feet or longer."
    },
    {
      title: "Personal Watercraft (PWC)",
      content: "PWC's must go slow-no-wake within 200' of shore. PWCs must go slow-no-wake upon entering and leaving Rices and Marquardt's Bays (even if you are in the exact middle of the 2 shores, you are still closer than 200 feet from shore)!"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Boating & Lake Info" 
          subtitle="Essential information for a safe day on the water"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content - Left Col */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <Anchor className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Lake Keesus Boating Guidelines</h3>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {rules.map((rule, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-lg hover:text-secondary">
                      {rule.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {rule.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://bit.ly/LakeKeesusSurf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Info className="w-4 h-4" /> Surf Boat Guidelines
                  </Button>
                </a>
                <a href="https://www.townofmerton.com/community/page/lake-patrol" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <AlertTriangle className="w-4 h-4" /> Town of Merton Regulations
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <MapIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Lake Map</h3>
              </div>
              <p className="mb-6 text-muted-foreground">
                Lake Keesus is made up of 5 bays and is ~42 feet deep. Explore the topography.
              </p>
              
              <div className="relative bg-muted rounded-xl overflow-hidden mb-6 border border-border">
                <img 
                  src={lakeMapUrl} 
                  alt="Lake Keesus map showing 5 bays"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <a href="https://apps.dnr.wi.gov/doclink/lakes_maps/0852400a.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto">View Full Topography Map</Button>
              </a>
            </div>
          </div>

          {/* Sidebar - Right Col */}
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Anchor className="w-5 h-5" /> Boat Launch
                </h4>
                <p className="text-primary-foreground/80 mb-4 text-sm">
                  Public boat launch available with 10 parking slips.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Resident</span>
                    <span className="font-bold">$8.00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Non-Resident</span>
                    <span className="font-bold">$10.00</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-sm mt-4">
                    <span className="font-bold block mb-1">Hours:</span>
                    6:00 AM - 9:00 PM
                    <br/>
                    <span className="opacity-70 text-xs">No launching outside hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2 text-primary">
                  <Info className="w-5 h-5" /> Boating License
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Born on or after Jan 1, 1989? You need a boating safety course.
                </p>
                <a href="https://www.boat-ed.com/wisconsin/" target="_blank" rel="noopener noreferrer" className="block mb-2">
                  <Button variant="secondary" className="w-full text-sm">Wisconsin DNR Course</Button>
                </a>
                <a href="https://www.worldwideboat.com/knowledgebase/guide-boating-safety" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="w-full text-sm">Safety Tips</Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
               {/* Fishing image placeholder */}
               <div className="h-32 bg-muted relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=800&auto=format&fit=crop"
                    alt="Fishing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h4 className="text-white font-bold text-xl flex items-center gap-2">
                      <Fish className="w-5 h-5" /> Fishing
                    </h4>
                  </div>
               </div>
               <CardContent className="p-6">
                 <p className="text-sm text-muted-foreground mb-4">
                   Lake Keesus is known for its great fishing opportunities.
                 </p>
                 <a href="https://www.lake-link.com/wisconsin-lakes/waukesha-county/lake-keesus/5648/" target="_blank" rel="noopener noreferrer">
                   <Button variant="outline" className="w-full">View Lake-Link Report</Button>
                 </a>
               </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
