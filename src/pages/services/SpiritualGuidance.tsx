import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpiritualGuidance = () => {
  return (
    <>
      <Helmet>
        <title>Spiritual Guidance & Consultation Services | My Pooja Seva</title>
        <meta
          name="description"
          content="Expert spiritual guidance, astrology consultation, Vastu advice, and personalized spiritual counseling. Connect with experienced pandits and spiritual advisors for life guidance."
        />
        <meta
          name="keywords"
          content="spiritual guidance, astrology consultation, vastu consultation, spiritual counseling, life guidance, horoscope reading, kundli matching, spiritual advisor"
        />
        <link rel="canonical" href="https://softwareideas.github.io/mypoojaseva/services/spiritual-guidance" />
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
            Spiritual Guidance & Consultation Services
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Seek wisdom and clarity through our comprehensive spiritual guidance services.
              Our experienced pandits and spiritual advisors provide personalized consultations
              to help you navigate life's challenges and find inner peace.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">
              Our Spiritual Guidance Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Astrology Consultation
                </h3>
                <p className="text-gray-600">
                  Detailed horoscope analysis, birth chart reading, and personalized
                  predictions for career, health, relationships, and life events.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Kundli Matching
                </h3>
                <p className="text-gray-600">
                  Comprehensive compatibility analysis for marriage based on Vedic astrology
                  principles. Includes Guna Milan and Mangal Dosha analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Vastu Consultation
                </h3>
                <p className="text-gray-600">
                  Expert Vastu Shastra advice for homes, offices, and commercial spaces.
                  Identify and correct Vastu doshas for harmony and prosperity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Muhurat Selection
                </h3>
                <p className="text-gray-600">
                  Auspicious date and time selection for important life events like
                  weddings, business openings, travel, and ceremonies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Spiritual Counseling
                </h3>
                <p className="text-gray-600">
                  One-on-one guidance for spiritual growth, meditation practices,
                  and finding purpose and peace in life.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Dosha Analysis & Remedies
                </h3>
                <p className="text-gray-600">
                  Identify planetary doshas, Kaal Sarp Dosha, Mangal Dosha, and receive
                  personalized remedies through mantras, gemstones, and rituals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Name Numerology
                </h3>
                <p className="text-gray-600">
                  Baby name suggestions based on numerology and astrology. Business name
                  consultation for success and prosperity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Career & Business Guidance
                </h3>
                <p className="text-gray-600">
                  Astrological insights for career choices, business ventures, and
                  professional growth based on planetary positions.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                Why Choose Our Spiritual Guidance?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Experienced and knowledgeable spiritual advisors</li>
                <li>Authentic Vedic astrology and traditional wisdom</li>
                <li>Personalized consultations tailored to your needs</li>
                <li>Confidential and compassionate guidance</li>
                <li>Practical remedies and actionable advice</li>
                <li>Online and in-person consultation options</li>
                <li>Follow-up support and guidance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                Consultation Process
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Book your consultation session</li>
                <li>Provide birth details (date, time, place) if required</li>
                <li>Connect with our spiritual advisor (online or in-person)</li>
                <li>Receive detailed analysis and insights</li>
                <li>Get personalized remedies and recommendations</li>
                <li>Follow-up support for implementing guidance</li>
              </ol>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpiritualGuidance;
