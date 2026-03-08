import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Book, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const RitualGuides = () => {
  return (
    <>
      <Helmet>
        <title>Hindu Ritual Guides & Pooja Procedures | My Pooja Seva</title>
        <meta
          name="description"
          content="Comprehensive guides for Hindu rituals, pooja procedures, mantras, and ceremonies. Learn step-by-step instructions for performing traditional Hindu rituals at home."
        />
        <meta
          name="keywords"
          content="ritual guides, pooja procedures, Hindu rituals guide, how to perform pooja, mantras, ceremony instructions, pooja vidhi, Hindu traditions"
        />
        <link rel="canonical" href="https://softwareideas.github.io/mypoojaseva/resources/ritual-guides" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold text-orange-800 mb-6">
            Hindu Ritual Guides & Pooja Procedures
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Explore our comprehensive collection of ritual guides and pooja procedures.
              Learn the authentic methods of performing Hindu ceremonies and rituals at home
              with detailed step-by-step instructions.
            </p>

            <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">
              Daily Pooja Guides
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Morning Pooja Vidhi
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete guide for daily morning worship including mantras, offerings,
                  and proper procedures.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Ganesh Pooja at Home
                </h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step instructions for performing Ganesh Pooja with required
                  materials and mantras.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Lakshmi Pooja Procedure
                </h3>
                <p className="text-gray-600 mb-4">
                  Detailed guide for worshipping Goddess Lakshmi for prosperity and
                  abundance.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">
              Festival & Special Occasion Guides
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Diwali Pooja Vidhi
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete procedure for Diwali Lakshmi Pooja with muhurat timings and
                  rituals.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Satyanarayan Katha
                </h3>
                <p className="text-gray-600 mb-4">
                  Full Satyanarayan Pooja procedure with katha, mantras, and prasad
                  preparation.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Navratri Pooja Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Nine-day Navratri worship guide with daily rituals and Durga mantras.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">
              Life Ceremony Guides
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Namkaran Sanskar Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Baby naming ceremony procedure with mantras and traditional rituals.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Griha Pravesh Procedure
                </h3>
                <p className="text-gray-600 mb-4">
                  Housewarming ceremony guide with Vastu Pooja and entry rituals.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Book className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                  Wedding Rituals Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete Hindu wedding ceremony procedures and pre-wedding rituals.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                What's Included in Our Guides
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Step-by-step ritual procedures</li>
                <li>Required materials and pooja samagri list</li>
                <li>Sanskrit mantras with transliteration</li>
                <li>Meaning and significance of each ritual</li>
                <li>Auspicious timings and muhurat information</li>
                <li>Common mistakes to avoid</li>
                <li>FAQs and troubleshooting tips</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                Need Personalized Guidance?
              </h2>
              <p className="text-gray-700 mb-4">
                While our guides provide comprehensive instructions, some rituals may require
                expert guidance. Our experienced pandits are available for personalized
                consultations and can perform ceremonies on your behalf.
              </p>
              <Link to="/contact">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Contact Our Pandits
                </Button>
              </Link>
            </div>

            <div className="text-center bg-gradient-to-r from-orange-100 to-orange-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-orange-800 mb-4">
                Subscribe for New Guides
              </h2>
              <p className="text-gray-700 mb-6">
                Get notified when we publish new ritual guides and resources
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RitualGuides;
