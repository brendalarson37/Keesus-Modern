import { motion } from "framer-motion";
import { useNews } from "@/hooks/use-content";
import { ArrowRight, Waves, Home as HomeIcon, Map } from "lucide-react";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const { data: newsItems, isLoading: newsLoading } = useNews();

  const facts = [
    { icon: Waves, value: "5.3", label: "Miles of Shoreline" },
    { icon: HomeIcon, value: "216", label: "Lake Houses" },
    { icon: Map, value: "5", label: "Distinct Bays" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Unsplash image of a beautiful lake */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?q=80&w=2070&auto=format&fit=crop"
            alt="Lake Keesus scenic view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-primary/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg"
          >
            Lake Keesus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed drop-shadow-md"
          >
            A beautiful 237 acre lake located in the Town of Merton, Waukesha County, WI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/membership">
              <button className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Join LKAA
              </button>
            </Link>
            <Link href="/events">
              <button className="px-8 py-3 bg-secondary text-white rounded-full font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                View Events
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Lake Keesus Advancement Association (LKAA) was originally developed in 1930. 
              Our main purpose is to <span className="text-secondary font-semibold">protect and promote</span> the interests of the people residing on the shores of Lake Keesus.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Lake Facts" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/30 p-8 rounded-2xl text-center border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <fact.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 font-display">{fact.value}</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wide text-sm">{fact.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">The 5 Bays of Keesus</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Bull's Bay", "Marquardt's Bay", "Marshall Bay", "North Bay", "Rice's Bay"].map((bay) => (
                <span key={bay} className="px-6 py-3 bg-white rounded-full text-primary font-medium shadow-sm border border-primary/10">
                  {bay}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Latest News" subtitle="Updates from the community" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fallback content if API returns empty */}
            {(!newsItems || newsItems.length === 0) && (
              <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardContent className="p-6">
                  <span className="text-sm font-medium text-secondary mb-2 block">Community Update</span>
                  <h3 className="text-xl font-bold text-primary mb-3">Email Updates</h3>
                  <p className="text-muted-foreground mb-4">
                    See the email updates for the latest news and highlights from our social events. All LKAA members receive the emails.
                  </p>
                  <a href="mailto:belterkl32@gmail.com" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Contact for access <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            )}

            {newsItems?.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardContent className="p-6">
                  <span className="text-sm font-medium text-secondary mb-2 block">
                    {new Date(item.createdAt!).toLocaleDateString()}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground line-clamp-3">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
