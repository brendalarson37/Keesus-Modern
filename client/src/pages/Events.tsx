import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, ExternalLink, Image as ImageIcon, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Events() {

  // Upcoming events with placeholders
  const upcomingEvents = [
    { title: "Chili Dump", date: "TBD", description: "Add event details here" },
    { title: "Spaghetti Dinner", date: "TBD", description: "Add event details here" },
  ];

  // Ongoing events
  const ongoingEvents = [
    {
      title: "LKAA Sheepshead",
      frequency: "Friday nights, once a month",
      description: "Join the group for sheepshead games at various homes around the lake.",
      contact: "Kenn Belter",
      phone: "538-1291",
    },
    {
      title: "LKAA Book Club",
      frequency: "Second Monday of every month",
      description: "Monthly book discussions with fellow lake community members.",
      contact: "Nina Schlidt",
      phone: "538-2771",
    },
  ];

  // Static data as per requirements
  const staticEvents = [
    { title: "Road Rally", date: "October 2025", link: "https://www.amazon.com/photos/shared/U7Pb5VqfR-S2x9EXJL95Ug.TLIhBUWCoHVyUthHsV-sVL" },
    { title: "Keesus Concert", date: "August 2025", link: "https://www.amazon.com/photos/shared/Wg3QEvR_RQ6bE-3yRHYAKQ.-h4Zfdugs9vXQr9Y3GR7VA" },
    { title: "Pontoon Trivia", date: "July 2025", link: "https://www.amazon.com/photos/shared/M70QebdRSbWWlCm9V2U_Qw.rkCRQbW_pP1ousdajoHToT" },
    { title: "4th of July Parade & Picnic", date: "July 2025", link: "https://www.amazon.com/photos/shared/2altiqOKTxmVPntTo01F_g.tKCBMeGwl2GilpBboiTYio" },
    { title: "LKAA Family Picnic", date: "June 2025", link: "https://www.amazon.com/photos/shared/lQUOjfOuRd6GKdpcCkxbnA.CMYveTZVJbAslASZB0MEIU" },
    { title: "Curling Event", date: "March 2025", link: "https://www.amazon.com/photos/shared/07h8a3iRT0ypLvgiiEaVIg.0BKZuXf0JACmIuPYTpwb8D" },
    { title: "Chili Dump", date: "February 2025", link: "https://www.amazon.com/photos/shared/5EdzmvBeSDSiab5r2q4iBw.F0o6Rn0gnkUAuvQAFwLkC2" },
    { title: "LKAA Holiday Party", date: "December 2024", link: "https://www.amazon.com/photos/shared/c4dli1vlT_uGfW4kbTtwtw.WwFAgB3etpp-krQ40T1rPK" },
    { title: "Annual Meeting & Barn Party", date: "September 2023", link: "https://www.amazon.com/photos/shared/OLXYVNQfQf6HpbK1iFqmzw.SQ9y0DuTdjdmudNPceibQ7" },
    { title: "Labor Day Brunch", date: "September 2023", link: "https://www.amazon.com/photos/shared/OzL7Dw4jRZ2swgihh6QvSQ.YvjaWi084zYf65FSS97A_O" },
    { title: "Dockhounds Game", date: "August 2023", link: "https://www.amazon.com/photos/shared/IKNzLH5TSVGmUf6l9hn9yA.U359gAmxF5tcxE2DMAsvfp" },
    { title: "90th Anniversary", date: "June 2021", link: "https://www.amazon.com/photos/shared/MxgB6yufQhSnOfYvJnZ0Jg.UouKPVHjc8IWeE366hZiGE" },
  ];

  // Use static events data
  const displayEvents = staticEvents;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <SectionHeader 
          title="Events & Gallery" 
          subtitle="Memories from our community gatherings"
        />

        {/* Upcoming Events Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            <h2 className="text-3xl font-display font-bold text-primary">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-l-4 border-l-secondary hover-lift">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-secondary/10 text-secondary hover:bg-secondary/20 border-none">
                    {event.date}
                  </Badge>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ongoing Events Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-secondary to-accent rounded-full"></div>
            <h2 className="text-3xl font-display font-bold text-primary">Ongoing Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingEvents.map((event, index) => (
              <Card key={index} className="border-t-4 border-t-primary hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold text-primary mb-2">{event.title}</h3>
                  <Badge variant="outline" className="mb-4 text-secondary border-secondary/30">
                    {event.frequency}
                  </Badge>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  <div className="flex items-center gap-2 text-secondary font-medium">
                    <Phone className="w-4 h-4" />
                    <span>{event.contact}: {event.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Photos & Past Events Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
            <h2 className="text-3xl font-display font-bold text-primary">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayEvents.map((event, index) => (
              <a 
                key={index} 
                href={event.link || (event as any).photoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="bg-card h-full rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group-hover:border-primary/30">
                  <div className="h-48 bg-muted relative overflow-hidden">
                    {/* Unsplash placeholder for event abstract */}
                    <img 
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1533174072545-8a4e5250cfb4' : '1511795409834-ef04bbd61622'}?q=80&w=800&auto=format&fit=crop`}
                      alt="Event placeholder" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" /> Photos
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                      {event.date}
                    </Badge>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm gap-4 mt-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> Lake Keesus
                      </span>
                      <span className="flex items-center gap-1 ml-auto text-primary font-medium group-hover:underline">
                        View Album <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
