import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BirthCeremonies = () => {
  return (
    <>
      <Helmet>
        <title>Birth Ceremonies & Naming Rituals | My Pooja Seva</title>
        <meta
          name="description"
          content="Traditional Hindu birth ceremonies including Namkaran (naming ceremony), Annaprashan (first feeding), and other sacred rituals for newborns. Expert pandits for authentic birth ceremonies."
        />
        <meta
          name="keywords"
          content="birth ceremonies, namkaran, naming ceremony, annaprashan, first feeding ceremony, cradle ceremony, mundan ceremony, Hindu birth rituals"
        />
        <link rel="canonical" href="https://softwareideas.github.io/mypoojaseva/services/birth-ceremonies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <Link to="/services">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>

          <h1 className="text-4xl font-bold text-orange-800 mb-6">
            Birth Ceremonies & Naming Rituals
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Celebrate the arrival of your newborn with traditional Hindu birth ceremonies
              performed by experienced pandits. We offer authentic rituals that bless your
              child with prosperity, health, and happiness.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">
              Our Birth Ceremony Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Namkaran (Naming Ceremony)
                </h3>
                <p className="text-gray-600">
                  Traditional naming ceremony performed on an auspicious day to give your
                  child their sacred name based on astrological calculations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Annaprashan (First Feeding)
                </h3>
                <p className="text-gray-600">
                  Sacred ritual marking the first solid food feeding of your baby,
                  performed with Vedic mantras and blessings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Cradle Ceremony (Jatakarma)
                </h3>
                <p className="text-gray-600">
                  Welcome ceremony performed soon after birth to invoke divine blessings
                  and protection for the newborn.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Mundan (First Haircut)
                </h3>
                <p className="text-gray-600">
                  Traditional first haircut ceremony performed to remove birth impurities
                  and promote healthy hair growth.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                Why Choose Our Birth Ceremony Services?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Experienced and knowledgeable pandits</li>
                <li>Authentic Vedic rituals and mantras</li>
                <li>Personalized ceremony planning</li>
                <li>All pooja materials provided</li>
                <li>Flexible scheduling at your convenience</li>
                <li>Guidance on auspicious dates and times</li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Book a Birth Ceremony
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirthCeremonies;
