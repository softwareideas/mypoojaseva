import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-temple-pattern py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 to-maroon/10"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-4xl font-bold text-maroon mb-4">
              About My Pooja Seva
            </h1>
            <p className="text-xl text-gray-700">
              Guiding you through life's sacred Hindu rituals with authenticity
              and devotion.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="divine-border">
              <h2 className="text-2xl font-medium text-maroon mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To preserve, promote, and make accessible the authentic Hindu
                rituals and ceremonies that enrich one's spiritual journey,
                ensuring that the sacred traditions continue to guide and
                inspire generations to come.
              </p>
            </div>

            <div className="divine-border">
              <h2 className="text-2xl font-medium text-maroon mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be the trusted guide for Hindu families seeking to connect
                with their spiritual heritage and celebrate life's sacred
                moments with authentic, meaningful rituals that honor tradition
                while embracing the modern world.
              </p>
            </div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto bg-saffron/20" />

        {/* Our Story */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-maroon mb-6 text-center">
            Our Story
          </h2>

          <div className="space-y-6 text-gray-600">
            <p>
              My Pooja Seva began with a simple observation: as our lives become
              more modern and globally connected, many find it challenging to
              maintain connections to the rich spiritual traditions that have
              guided Hindu families for generations.
            </p>

            <p>
              Founded by a group of devoted practitioners with deep roots in
              Vedic traditions, our organization brings together experienced
              pandits, scholars, and spiritual guides who share a common
              goal—making authentic Hindu rituals accessible, meaningful, and
              relevant for contemporary families.
            </p>

            <p>
              We believe that the ancient wisdom embedded in these ceremonies
              and rituals provides valuable guidance for navigating life's
              journey, from birth to spiritual fulfillment. By preserving these
              traditions and providing knowledgeable guidance, we help families
              connect with their spiritual heritage and experience the profound
              beauty of the Hindu way of life.
            </p>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto bg-saffron/20" />

        {/* Our Values */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-maroon mb-6 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We maintain the integrity of ancient rituals while making them
                accessible for modern families.
              </p>
            </div>

            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">
                Knowledge
              </h3>
              <p className="text-gray-600">
                We provide understanding along with rituals, empowering people
                with the wisdom behind traditions.
              </p>
            </div>

            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Respect</h3>
              <p className="text-gray-600">
                We honor diverse traditions and regional variations within Hindu
                practices.
              </p>
            </div>

            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">
                Accessibility
              </h3>
              <p className="text-gray-600">
                We make sacred traditions available to all, regardless of
                location or background.
              </p>
            </div>

            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Service</h3>
              <p className="text-gray-600">
                We serve families with devotion, helping them connect with the
                divine through sacred rituals.
              </p>
            </div>

            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">
                Inclusivity
              </h3>
              <p className="text-gray-600">
                We welcome all who wish to explore and experience Hindu
                spiritual practices.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 bg-saffron/5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-maroon mb-6 text-center">
              Our Team
            </h2>

            <p className="text-center text-gray-600 mb-10">
              Our team consists of knowledgeable pandits, scholars, and
              spiritual guides with decades of experience in Hindu rituals and
              traditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-saffron/20 flex items-center justify-center mb-4">
                  <span className="text-5xl text-maroon">पं</span>
                </div>
                <h3 className="text-xl font-medium text-maroon">
                  Pandit Sharma
                </h3>
                <p className="text-gray-600 text-sm">Lead Ritual Specialist</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-saffron/20 flex items-center justify-center mb-4">
                  <span className="text-5xl text-maroon">डॉ</span>
                </div>
                <h3 className="text-xl font-medium text-maroon">
                  Dr. Ramesh Iyer
                </h3>
                <p className="text-gray-600 text-sm">Vedic Scholar</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-saffron/20 flex items-center justify-center mb-4">
                  <span className="text-5xl text-maroon">श्री</span>
                </div>
                <h3 className="text-xl font-medium text-maroon">
                  Shri Venkatesh
                </h3>
                <p className="text-gray-600 text-sm">Spiritual Guide</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
