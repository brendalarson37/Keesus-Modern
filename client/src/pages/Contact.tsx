import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const officers = [
  { role: "President", name: "Brenda Larson", phone: "414-688-9937" },
  { role: "Vice President", name: "Ann Belter", phone: "414-531-2873" },
  { role: "Secretary", name: "Linda Timbers", phone: "538-1482" },
  { role: "Treasurer", name: "Kenn Belter", phone: "538-1291" },
];

const directors = [
  { name: "Tiffany Davis", phone: "262-226-9073" },
  { name: "Jim Hazzard", phone: "414-507-5501" },
  { name: "Kristin Meissner", phone: "262-412-2557" },
  { name: "Mischelle Peterson", phone: "414-531-4376" },
  { name: "Rick Schefelker", phone: "262-659-9061" },
  { name: "Lisa Schwabenlander", phone: "262-347-6969" },
  { name: "Rick Zimbric", phone: "414-801-8728" },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Contact & Leadership" 
          subtitle="Meet the LKAA board of directors"
          centered
        />

        <div className="space-y-16">
          {/* Officers Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-teal-500 rounded-full"></div>
              <h2 className="text-3xl font-display font-bold text-primary">2026 Officers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officers.map((officer) => (
                <Card key={officer.role} className="border-t-4 border-t-primary hover-lift group">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">{officer.role}</h3>
                    <h4 className="text-2xl font-display font-bold text-secondary mb-4">{officer.name}</h4>
                    <a
                      href={`tel:${officer.phone.replace(/[^\d]/g, "")}`}
                      className="inline-flex items-center justify-center p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                      title={officer.phone}
                    >
                      <Phone className="h-6 w-6" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Directors Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              <h2 className="text-3xl font-display font-bold text-primary">Directors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directors.map((director) => (
                <Card key={director.name} className="border-l-4 border-l-secondary hover-lift group">
                  <div className="p-6">
                    <h4 className="text-xl font-display font-bold text-primary mb-3">{director.name}</h4>
                    <a
                      href={`tel:${director.phone.replace(/[^\d]/g, "")}`}
                      className="inline-flex items-center justify-center p-2 text-foreground hover:text-secondary transition-colors rounded-full hover:bg-secondary/10"
                      title={director.phone}
                    >
                      <Phone className="h-6 w-6" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <Card className="border-2 border-border/50 bg-white">
            <div className="p-8">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Get In Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email Updates</h3>
                    <p className="text-muted-foreground mb-3">
                      Want to receive LKAA news and event updates? Send your email address to:
                    </p>
                    <a
                      href="mailto:belterkl32@gmail.com"
                      className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
                    >
                      belterkl32@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mailing Address</h3>
                    <p className="text-muted-foreground">
                      LKAA<br />
                      Box 618<br />
                      Merton, WI 53056
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
