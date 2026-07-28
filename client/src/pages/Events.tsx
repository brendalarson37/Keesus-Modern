import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, ExternalLink, Image as ImageIcon, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Events() {

  // Upcoming events with placeholders
  const upcomingEvents = [
    { title: "Pontoon Trivia", date: "August 29", description: "Join us for a fun day of Pontoon Trivia! Save the date for Saturday, August 29th from 2-5p.m. Details coming soon!"},   
    { title: "LKAA Annual Meeting & Barn Party", date: "October 10", description: "Join us for dinner, our annual meeting, and live music at a barn party! Save the date for Saturday, October 10th from 6-10p.m. Details coming soon!"},   
    
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
    { title: "Keesus Koncert", date: "July 2026", link: "https://www.amazon.com/photos/shared/MNmSuIXDTh2ZF60-kMS6Ig.4jybJCkbDkIsS6_vztYvHd", image: "/images/events/keesus-koncert.jpg"},
    { title: "Rib Smoke-Off", date: "July 2026", link: "https://www.amazon.com/photos/shared/fL0hwfVUSAm-fEoifgxT6Q.QgPFRIYAV3lIoBkTPJzEZt", image: "/images/events/smoke-off.jpg" },
    { title: "4th of July Parade & Picnic", date: "July 2026", link: "https://www.amazon.com/photos/shared/TlqMucoASoGteuxF3WAM4A.vJva8_yNyDN2vQR2d8OyhP", image: "/images/events/4th-of-july.JPG" },
    { title: "Axe Throwing & Pizza Party", date: "March 2026", link: "https://www.amazon.com/photos/shared/Db63B0ZlSaqt-gobDC12Bg.3Rd49yHjCIq_h_aqKga1xb", image: "/images/events/axe.jpg" },
    { title: "Chili Dump", date: "February 2026", link: "https://www.amazon.com/photos/shared/la--yAeEREGBwzlqGTqOcQ.KkTkhVLTn_KZDsFCjaCSEQ", image: "/images/events/chili-dump.jpg" },
    { title: "Spaghetti and Bingo Night", date: "February 2026", link: "https://www.amazon.com/photos/shared/kchx90XWTCmx1UBZcr6YqA.Tf1wZ0-wHWk9lUollzqU7Z", image: "/images/events/bingo.jpg" },
    { title: "LKAA Holiday Party", date: "December 2025", link: "https://www.amazon.com/photos/shared/HBmkKaH8Rsu_iVRHIPFhJg.au-tprOs84e9yYVK6mQu1p", image: "/images/events/holiday-party.jpg" },
    { title: "Road Rally", date: "October 2025", link: "https://www.amazon.com/photos/shared/U7Pb5VqfR-S2x9EXJL95Ug.TLIhBUWCoHVyUthHsV-sVL", image: "/images/events/road-rally.jpg" },
    { title: "Pontoon Trivia", date: "July 2025", link: "https://www.amazon.com/photos/shared/M70QebdRSbWWlCm9V2U_Qw.rkCRQbW_pP1ousdajoHToT", image: "/images/events/pontoon-trivia.jpg" },
    { title: "Curling Event", date: "March 2025", link: "https://www.amazon.com/photos/shared/07h8a3iRT0ypLvgiiEaVIg.0BKZuXf0JACmIuPYTpwb8D", image: "/images/events/curling.jpg" },
   
  ];

  // Use static events data
  const displayEvents = staticEvents;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <SectionHeader 
          title="Events & Gallery" 
          subtitle="Memories from our community gatherings"
          centered
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
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                  {((event as any).links ?? ((event as any).link ? [{ href: (event as any).link, label: (event as any).linkLabel || (event as any).link }] : [])).length > 0 && (
                    <div className="text-muted-foreground mt-4 space-y-3">
                      {((event as any).links ?? ((event as any).link ? [{ href: (event as any).link, label: (event as any).linkLabel || (event as any).link }] : [])).map((link: any, linkIndex: number) => (
                        <div key={linkIndex}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-secondary/80 hover:underline font-medium inline-flex items-center gap-1"
                          >
                            {link.label}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ongoing Events Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
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
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
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
                    {/* Event image from static directory */}
                    <img 
                      src={(event as any).image}
                      alt="Event image" 
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
