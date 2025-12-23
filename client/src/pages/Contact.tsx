import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const officers = [
  { role: "President", name: "Brenda Larson", phone: "414-688-9937" },
  { role: "Vice President", name: "Ann Belter", phone: "414-531-2873" },
  { role: "Secretary", name: "Linda Timbers", phone: "538-1482" },
  { role: "Treasurer", name: "Kenn Belter", phone: "538-1291" },
];

const directors = [
  { name: "Patty Mueller", phone: "414-899-4677" },
  { name: "Mischelle Peterson", phone: "414-531-4376" },
  { name: "Jim Hazzard", phone: "414-507-5501" },
  { name: "Pat Bolger", phone: "262-313-8797" },
  { name: "Rick Schefelker", phone: "262-659-9061" },
  { name: "Lisa Schwabenlander", phone: "262-347-6969" },
  { name: "Rick Zimbric", phone: "414-801-8728" },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Get in touch with the Lake Keesus Advancement Association leadership team
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Officers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-teal-500 rounded-full"></div>
            <h2 className="text-3xl font-display font-bold text-blue-900">2025 Officers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officers.map((officer) => (
              <Card key={officer.role} className="border-t-4 border-t-blue-500 hover-lift group">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{officer.role}</h3>
                  <h4 className="text-2xl font-display font-bold text-teal-600 mb-4">{officer.name}</h4>
                  <div className="flex items-center gap-3 text-gray-700 group-hover:text-blue-600 transition-colors">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    <a href={`tel:${officer.phone.replace(/[^\d]/g, "")}`} className="hover:underline">
                      {officer.phone}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-green-500 rounded-full"></div>
            <h2 className="text-3xl font-display font-bold text-blue-900">Directors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((director) => (
              <Card key={director.name} className="border-l-4 border-l-teal-500 hover-lift">
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-blue-900 mb-3">{director.name}</h4>
                  <div className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    <a href={`tel:${director.phone.replace(/[^\d]/g, "")}`} className="hover:underline">
                      {director.phone}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200">
          <div className="p-8">
            <h2 className="text-3xl font-display font-bold text-blue-900 mb-6">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Email Updates</h3>
                  <p className="text-gray-700 mb-3">
                    Want to receive LKAA news and event updates? Send your email address to:
                  </p>
                  <a
                    href="mailto:belterkl32@gmail.com"
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    belterkl32@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Mailing Address</h3>
                  <p className="text-gray-700">
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
  );
}
