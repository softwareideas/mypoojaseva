import * as React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import ServicesHeader from "@/components/services/ServicesHeader";
import HomePoojaServices from "@/components/services/HomePoojaServices";
import LifeCycleServices from "@/components/services/LifeCycleServices";
import ServicesCallToAction from "@/components/services/ServicesCallToAction";
import SamskaraGuide from "@/components/SamskaraGuide";
import PoojaCalendar from "@/components/PoojaCalendar";
import PanditProfiles from "@/components/PanditProfiles";
import MonthlyTarpanamServices from "@/components/services/MonthlyTarpanamServices";
import LifecycleFlowchart from "@/components/LifecycleFlowchart";
import ServiceNavCard, { SERVICE_ITEMS } from "@/components/services/ServiceNavCard";

const CONTENT_MAP: Record<string, React.ReactNode> = {
  flowchart: <LifecycleFlowchart />,
  lifecycle: <LifeCycleServices />,
  pooja: <HomePoojaServices />,
  tarpanam: <MonthlyTarpanamServices />,
  samskara: <SamskaraGuide />,
  calendar: <PoojaCalendar />,
};

const Services = () => {
  const [activeSection, setActiveSection] = useState("flowchart");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <ServicesHeader />

        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Bento Grid Navigation */}
          <div className="mb-10">
            <p className="text-sm font-medium text-maroon/80 uppercase tracking-widest mb-4">
              Choose your path
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SERVICE_ITEMS.map((item) => (
                <ServiceNavCard
                  key={item.id}
                  item={item}
                  isActive={activeSection === item.id}
                  onClick={() => setActiveSection(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Content Area with smooth transition */}
          <div
            key={activeSection}
            className="animate-fade-in-up"
          >
            <div className="rounded-2xl border border-saffron/20 bg-gradient-to-b from-white to-amber-50/30 p-6 sm:p-8 shadow-lg">
              {CONTENT_MAP[activeSection]}
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <PanditProfiles />
        </section>

        <ServicesCallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
