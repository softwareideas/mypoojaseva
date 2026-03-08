import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomamServices = () => {
  return (
    <>
      <Helmet>
        <title>Homam & Havan Services - Vedic Fire Rituals | My Pooja Seva</title>
        <meta
          name="description"
          content="Traditional Homam and Havan services including Ganapati Homam, Navagraha Homam, Lakshmi Homam, and more. Expert pandits for authentic Vedic fire rituals for health, prosperity, and peace."
        />
        <meta
          name="keywords"
          content="homam, havan, fire ritual, ganapati homam, navagraha homam, lakshmi homam, sudarshana homam, maha mrityunjaya homam, vedic fire ceremony"
        />
        <link rel="canonical" href="https://softwareideas.github.io/mypoojaseva/services/homam-services" />
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
            Homam & Havan Services - Vedic Fire Rituals
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Experience the power of ancient Vedic fire rituals performed by experienced
              pandits. Homam (Havan) is a sacred fire ceremony that purifies the environment,
              removes negative energies, and invokes divine blessings for specific purposes.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">
              Our Homam Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Ganapati Homam
                </h3>
                <p className="text-gray-600">
                  Invoke Lord Ganesha's blessings to remove obstacles, ensure success in
                  new ventures, and bring prosperity. Ideal for business openings and new beginnings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Navagraha Homam
                </h3>
                <p className="text-gray-600">
                  Appease the nine planets to reduce negative planetary influences,
                  improve health, career, and relationships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Lakshmi Kubera Homam
                </h3>
                <p className="text-gray-600">
                  Attract wealth, abundance, and financial prosperity by invoking Goddess
                  Lakshmi and Lord Kubera's blessings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Maha Mrityunjaya Homam
                </h3>
                <p className="text-gray-600">
                  Powerful healing ritual for health, longevity, and protection from
                  diseases. Invokes Lord Shiva's healing energies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Sudarshana Homam
                </h3>
                <p className="text-gray-600">
                  Protection ritual to ward off evil eye, negative energies, and enemies.
                  Invokes Lord Vishnu's protective chakra.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Ayush Homam
                </h3>
                <p className="text-gray-600">
                  Performed for children's health, longevity, and overall well-being.
                  Removes doshas affecting children.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Rudra Homam
                </h3>
                <p className="text-gray-600">
                  Invoke Lord Shiva's blessings for spiritual growth, peace of mind,
                  and removal of obstacles in life.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Saraswati Homam
                </h3>
                <p className="text-gray-600">
                  For students and professionals seeking knowledge, wisdom, and success
                  in education and creative pursuits.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                Benefits of Homam
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Purifies the environment and removes negative energies</li>
                <li>Invokes specific deity blessings for desired outcomes</li>
                <li>Improves health, wealth, and prosperity</li>
                <li>Removes planetary doshas and obstacles</li>
                <li>Brings peace, harmony, and spiritual growth</li>
                <li>Protects from evil eye and negative influences</li>
                <li>Fulfills specific wishes and desires</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                What We Provide
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Experienced Vedic pandits specialized in Homam rituals</li>
                <li>All required materials including sacred wood, ghee, and herbs</li>
                <li>Complete havan kund setup and arrangements</li>
                <li>Authentic Vedic mantras and procedures</li>
                <li>Muhurat consultation for auspicious timing</li>
                <li>Post-ritual guidance and prasad distribution</li>
                <li>Home or temple location options</li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Book Homam Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomamServices;
