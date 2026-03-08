import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const GrihaPravesh = () => {
  return (
    <>
      <Helmet>
        <title>Griha Pravesh Pooja - Housewarming Ceremony | My Pooja Seva</title>
        <meta
          name="description"
          content="Traditional Griha Pravesh (housewarming) ceremony for new homes. Vastu Shanti Pooja, Ganesh Pooja, and complete housewarming rituals by expert pandits for prosperity and peace."
        />
        <meta
          name="keywords"
          content="griha pravesh, housewarming ceremony, vastu shanti pooja, new home pooja, house blessing, griha pravesh muhurat, housewarming rituals, vastu pooja"
        />
        <link rel="canonical" href="https://softwareideas.github.io/mypoojaseva/services/griha-pravesh" />
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
            Griha Pravesh Pooja - Housewarming Ceremony
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Begin your new journey in your new home with traditional Griha Pravesh ceremony.
              Our expert pandits perform authentic Vedic rituals to invoke divine blessings,
              ensure Vastu compliance, and bring peace, prosperity, and happiness to your home.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">
              Our Griha Pravesh Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Complete Griha Pravesh Ceremony
                </h3>
                <p className="text-gray-600">
                  Full housewarming ritual including Ganesh Pooja, Vastu Pooja, Navagraha
                  Pooja, and ceremonial entry into the new home on an auspicious muhurat.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Vastu Shanti Pooja
                </h3>
                <p className="text-gray-600">
                  Special ceremony to correct Vastu doshas and harmonize the energy of your
                  home according to Vastu Shastra principles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Ganesh Pooja
                </h3>
                <p className="text-gray-600">
                  Invoke Lord Ganesh's blessings to remove obstacles and ensure a smooth
                  beginning in your new home.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Navagraha Shanti Pooja
                </h3>
                <p className="text-gray-600">
                  Worship of nine planets to ensure positive planetary influences and
                  protection from negative energies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Lakshmi Pooja
                </h3>
                <p className="text-gray-600">
                  Invoke Goddess Lakshmi's blessings for wealth, prosperity, and abundance
                  in your new home.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Muhurat Consultation
                </h3>
                <p className="text-gray-600">
                  Expert astrological consultation to determine the most auspicious date
                  and time for your Griha Pravesh ceremony.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                Griha Pravesh Ceremony Process
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Muhurat selection based on astrological calculations</li>
                <li>Preparation and purification of the house</li>
                <li>Ganesh Pooja to remove obstacles</li>
                <li>Vastu Pooja for harmonizing energies</li>
                <li>Navagraha Pooja for planetary blessings</li>
                <li>Lakshmi Pooja for prosperity</li>
                <li>Ceremonial entry with family members</li>
                <li>Havan (sacred fire ritual)</li>
                <li>Distribution of prasad and blessings</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                What's Included
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Experienced pandit for the ceremony</li>
                <li>All pooja materials and samagri</li>
                <li>Muhurat consultation and selection</li>
                <li>Complete ritual setup and arrangements</li>
                <li>Vedic mantras and prayers</li>
                <li>Post-ceremony guidance and blessings</li>
                <li>Prasad for family and guests</li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Book Griha Pravesh Ceremony
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrihaPravesh;
