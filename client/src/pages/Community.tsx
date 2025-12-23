import { SectionHeader } from "@/components/SectionHeader";
import { ShoppingBag, BookOpen, Tent, FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Community() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Community & Fundraising" 
          subtitle="Support LKAA and get involved"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Fundraising Card */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                History Books
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The updated Lake Keesus History Book, filled with personal stories from Keesans.
              </p>
              <div className="bg-secondary/10 text-secondary font-bold inline-block px-3 py-1 rounded-full mb-4">
                $25.00
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">
                Contact Jean Schlidt (538-1537) or Mary Bock (538-3810) to purchase.
              </p>
            </CardContent>
          </Card>

          {/* Grocery Receipts */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                Grocery Receipts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our most profitable fundraiser! Turn in receipts from Sentry Delafield (within 6 months) or Fox Piggly Wiggly.
              </p>
              <p className="text-sm font-medium text-primary">
                Drop off: Belter's Journal Box on Park Drive or mail to LKAA Receipts, Box 618, Merton, 53056.
              </p>
            </CardContent>
          </Card>

          {/* Special Orders */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Special Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="border-b pb-2">
                  <span className="font-bold block text-foreground">Road Signs</span>
                  <span className="text-sm text-muted-foreground">Contact Rick Zimbric: 414-507-5501</span>
                </li>
                <li className="border-b pb-2">
                  <span className="font-bold block text-foreground">Post Cards</span>
                  <span className="text-sm text-muted-foreground">10 for $3.00. Contact Ginny Belter: 538-1291</span>
                </li>
                <li>
                  <span className="font-bold block text-foreground">Logo Patches</span>
                  <span className="text-sm text-muted-foreground">$2.00 each. Contact Belters: 538-1291</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <SectionHeader title="Resources" className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Camp */}
           <div className="bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary/5 p-4 rounded-xl">
                 <Tent className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Camp Whitcomb Mason</h3>
                <p className="text-muted-foreground mb-4">
                   Volunteer opportunities available. Contact Patty Mueller at 414-899-4677.
                </p>
                <a href="https://www.bgcmilwaukee.org/our-locations/camp/" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="p-0 h-auto font-semibold">Learn More &rarr;</Button>
                </a>
              </div>
           </div>

           {/* LKMD */}
           <div className="bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-secondary/10 p-4 rounded-xl">
                 <FileText className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Management District (LKMD)</h3>
                <p className="text-muted-foreground mb-4">
                   Manages boat launch, weed harvesting, and fishing.
                </p>
                <a href="http://lkmdweb.wixsite.com/lkmd" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="p-0 h-auto font-semibold text-secondary">Visit Website &rarr;</Button>
                </a>
              </div>
           </div>
        </div>

        <div className="mt-12 bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
           <h3 className="text-2xl font-bold mb-6">Official Documents</h3>
           <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.keesus.com/files/By-laws.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="gap-2 shadow-lg">
                  <FileText className="w-4 h-4" /> Download By-Laws
                </Button>
              </a>
              <a href="https://www.keesus.com/files/ArticlesofIncorporation.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="gap-2 shadow-lg">
                  <FileText className="w-4 h-4" /> Articles of Incorporation
                </Button>
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}
