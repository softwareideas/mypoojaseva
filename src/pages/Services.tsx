import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <ServicesHeader />

        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Tabs defaultValue="flowchart" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
              <TabsTrigger
                value="flowchart"
                className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold text-xs lg:text-sm"
              >
                Interactive Journey
              </TabsTrigger>
              <TabsTrigger
                value="lifecycle"
                className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold text-xs lg:text-sm"
              >
                Life Cycle
              </TabsTrigger>
              <TabsTrigger
                value="pooja"
                className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold text-xs lg:text-sm"
              >
                Pooja Services
              </TabsTrigger>
              <TabsTrigger
                value="tarpanam"
                className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold text-xs lg:text-sm"
              >
                Monthly Tarpanam
              </TabsTrigger>
              <TabsTrigger
                value="samskara"
                className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold text-xs lg:text-sm"
              >
                Samskara Guide
              </TabsTrigger>
              <TabsTrigger
                value="calendar"
                className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold text-xs lg:text-sm"
              >
                Calendar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="flowchart" className="mt-6">
              <LifecycleFlowchart />
            </TabsContent>

            <TabsContent value="lifecycle" className="mt-6">
              <LifeCycleServices />
            </TabsContent>

            <TabsContent value="pooja" className="mt-6">
              <HomePoojaServices />
            </TabsContent>

            <TabsContent value="tarpanam" className="mt-6">
              <MonthlyTarpanamServices />
            </TabsContent>

            <TabsContent value="samskara" className="mt-6">
              <SamskaraGuide />
            </TabsContent>

            <TabsContent value="calendar" className="mt-6">
              <PoojaCalendar />
            </TabsContent>
          </Tabs>
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
