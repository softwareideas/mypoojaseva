import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const MarriageRituals = () => {
  return (
    <>
      <Helmet>
        <title>Hindu Marriage Rituals & Wedding Ceremonies | My Pooja Seva</title>
        <meta
          name="description"
          content="Traditional Hindu marriage ceremonies including Vivah Sanskar, pre-wedding rituals, and wedding poojas. Expert pandits for authentic Vedic wedding ceremonies across India."
        />
        <meta
          name="keywords"
          content="Hindu marriage, wedding ceremony, vivah sanskar, wedding rituals, pre-wedding pooja, engagement ceremony, haldi ceremony, mehendi ceremony, Hindu wedding pandit"
        />
        <link rel="canonical" href="https://softwareideas.github.io/mypoojaseva/services/marriage-rituals" />
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
            Hindu Marriage Rituals & Wedding Ceremonies
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Make your wedding day sacred and memorable with traditional Hindu marriage
              ceremonies performed by experienced pandits. We provide complete wedding
              ritual services following authentic Vedic traditions.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">
              Our Marriage Ceremony Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Vivah Sanskar (Wedding Ceremony)
                </h3>
                <p className="text-gray-600">
                  Complete Hindu wedding ceremony with Saptapadi (seven steps), Kanyadaan,
                  and all traditional rituals performed according to Vedic scriptures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Engagement Ceremony (Sagai)
                </h3>
                <p className="text-gray-600">
                  Traditional engagement ceremony with ring exchange, tilak, and blessings
                  from elders and deities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Haldi & Mehendi Ceremonies
                </h3>
                <p className="text-gray-600">
                  Pre-wedding rituals including Haldi (turmeric) ceremony and Mehendi
                  (henna) application with traditional songs and celebrations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Ganesh Pooja & Mandap Pooja
                </h3>
                <p className="text-gray-600">
                  Pre-wedding poojas to invoke Lord Ganesh's blessings and sanctify the
                  wedding mandap for the main ceremony.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Griha Shanti Pooja
                </h3>
                <p className="text-gray-600">
                  Peace and prosperity ritual performed before the wedding to ensure
                  harmony and remove obstacles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Reception Blessings
                </h3>
                <p className="text-gray-600">
                  Post-wedding blessings and rituals for the newly married couple's
                  prosperous life together.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                What We Provide
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Experienced Vedic pandits for all rituals</li>
                <li>Complete pooja materials and setup</li>
                <li>Customized ceremony planning based on your traditions</li>
                <li>Muhurat (auspicious timing) consultation</li>
                <li>Bilingual ceremonies (Sanskrit & regional languages)</li>
                <li>Photography-friendly ritual coordination</li>
                <li>Post-ceremony guidance and blessings</li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Book Wedding Ceremony
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarriageRituals;
