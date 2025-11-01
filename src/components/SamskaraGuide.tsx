import * as React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Star, Heart, Baby, GraduationCap, Users, Home, Mountain, Heart as HeartIcon } from "lucide-react";

const SamskaraGuide = () => {
  const [selectedSamskara, setSelectedSamskara] = useState<string>("garbhadhana");

  const samskaras = [
    {
      id: "garbhadhana",
      name: "Garbhadhana",
      category: "Pre-Birth",
      icon: Heart,
      description: "The first samskara performed before conception",
      timing: "Before conception",
      purpose: "To invoke divine blessings for conception",
      details: "This samskara is performed by the couple before conception to ensure a healthy and virtuous child. It involves prayers, mantras, and specific rituals to invoke divine blessings.",
      significance: "Marks the beginning of the journey of a new soul into the world"
    },
    {
      id: "pumsavana",
      name: "Pumsavana",
      category: "Pre-Birth",
      icon: Heart,
      description: "Performed during pregnancy for child's well-being",
      timing: "3rd month of pregnancy",
      purpose: "To ensure healthy development of the fetus",
      details: "This ceremony is performed during the third month of pregnancy to ensure the well-being of both mother and child. It involves specific prayers and rituals.",
      significance: "Ensures the healthy development and protection of the unborn child"
    },
    {
      id: "seemantonayana",
      name: "Seemantonayana",
      category: "Pre-Birth",
      icon: Heart,
      description: "Hair parting ceremony during pregnancy",
      timing: "4th, 6th, or 8th month of pregnancy",
      purpose: "To protect mother and child from negative influences",
      details: "The parting of hair ceremony where the husband parts his wife's hair and applies vermillion. This ritual is believed to protect both mother and child.",
      significance: "Protects the mother and child from negative energies and influences"
    },
    {
      id: "jatakarma",
      name: "Jatakarma",
      category: "Birth",
      icon: Baby,
      description: "First ritual performed after birth",
      timing: "Immediately after birth",
      purpose: "To welcome the child and invoke divine protection",
      details: "The first samskara performed immediately after the birth of a child. It involves welcoming the newborn and invoking divine protection.",
      significance: "Welcomes the child into the world with divine blessings"
    },
    {
      id: "namkaran",
      name: "Namkaran",
      category: "Birth",
      icon: Baby,
      description: "Naming ceremony for the newborn",
      timing: "11th or 12th day after birth",
      purpose: "To give the child a meaningful name and identity",
      details: "The naming ceremony where the child is given a meaningful name based on astrological considerations and family traditions.",
      significance: "Gives the child their identity and connects them to their heritage"
    },
    {
      id: "nishkramana",
      name: "Nishkramana",
      category: "Birth",
      icon: Baby,
      description: "First outing ceremony",
      timing: "4th month after birth",
      purpose: "To introduce the child to the outside world",
      details: "The first time the child is taken outside the house to be introduced to the world and nature.",
      significance: "Introduces the child to the external world and natural elements"
    },
    {
      id: "annaprashana",
      name: "Annaprashana",
      category: "Birth",
      icon: Baby,
      description: "First solid food feeding ceremony",
      timing: "6th month after birth",
      purpose: "To introduce solid food and ensure proper nutrition",
      details: "The ceremony where the child is fed solid food for the first time, marking the transition from milk to solid food.",
      significance: "Marks the beginning of the child's nutritional independence"
    },
    {
      id: "chudakarma",
      name: "Chudakarma (Mundan)",
      category: "Birth",
      icon: Baby,
      description: "First haircut ceremony",
      timing: "1-3 years of age",
      purpose: "To purify the child and remove negative influences",
      details: "The first haircut ceremony where the child's head is shaved to remove negative influences and purify the child.",
      significance: "Purifies the child and removes negative karmic influences"
    },
    {
      id: "karnavedha",
      name: "Karnavedha",
      category: "Birth",
      icon: Baby,
      description: "Ear-piercing ceremony",
      timing: "3rd or 5th year",
      purpose: "To improve hearing and protect from diseases",
      details: "The ear-piercing ceremony performed for both boys and girls to improve hearing and protect from diseases.",
      significance: "Improves hearing and protects from various diseases"
    },
    {
      id: "vidyarambha",
      name: "Vidyarambha",
      category: "Education",
      icon: GraduationCap,
      description: "Initiation into learning",
      timing: "5th year",
      purpose: "To begin the child's educational journey",
      details: "The ceremony where the child is introduced to the alphabet and begins their educational journey.",
      significance: "Marks the beginning of the child's formal education"
    },
    {
      id: "upanayana",
      name: "Upanayana",
      category: "Education",
      icon: GraduationCap,
      description: "Sacred thread ceremony",
      timing: "8-12 years for boys",
      purpose: "To initiate into Vedic learning and spiritual practices",
      details: "The sacred thread ceremony marking the beginning of formal education and spiritual learning.",
      significance: "Initiates the child into Vedic learning and spiritual practices"
    },
    {
      id: "vedarambha",
      name: "Vedarambha",
      category: "Education",
      icon: GraduationCap,
      description: "Beginning of Vedic studies",
      timing: "After Upanayana",
      purpose: "To begin formal study of Vedas and scriptures",
      details: "The formal beginning of Vedic studies where the student starts learning the sacred texts.",
      significance: "Marks the beginning of formal Vedic education"
    },
    {
      id: "keshanta",
      name: "Keshanta",
      category: "Education",
      icon: GraduationCap,
      description: "First shaving ceremony",
      timing: "16th year",
      purpose: "To mark physical maturity and readiness for adult responsibilities",
      details: "The first shaving ceremony marking the transition to adolescence and physical maturity.",
      significance: "Marks physical maturity and readiness for adult responsibilities"
    },
    {
      id: "samavartana",
      name: "Samavartana",
      category: "Education",
      icon: GraduationCap,
      description: "Graduation ceremony",
      timing: "After completion of studies",
      purpose: "To mark the end of student life and beginning of householder duties",
      details: "The graduation ceremony marking the completion of formal education and return to householder life.",
      significance: "Marks the end of student life and beginning of householder duties"
    },
    {
      id: "vivaha",
      name: "Vivaha",
      category: "Marriage",
      icon: Users,
      description: "Marriage ceremony",
      timing: "When ready for marriage",
      purpose: "To unite two souls in holy matrimony",
      details: "The marriage ceremony uniting two souls in holy matrimony according to Vedic traditions.",
      significance: "Unites two souls and marks the beginning of family life"
    },
    {
      id: "antyeshti",
      name: "Antyeshti",
      category: "Death",
      icon: HeartIcon,
      description: "Final rites and cremation",
      timing: "Within 24 hours of death",
      purpose: "To release the soul from the physical body",
      details: "The final samskara involving cremation and final rites to release the soul from the physical body.",
      significance: "Releases the soul from the physical body and ensures peaceful transition"
    }
  ];

  const categories = [
    { id: "pre-birth", name: "Pre-Birth", icon: Heart, count: 3 },
    { id: "birth", name: "Birth & Childhood", icon: Baby, count: 6 },
    { id: "education", name: "Education", icon: GraduationCap, count: 5 },
    { id: "marriage", name: "Marriage", icon: Users, count: 1 },
    { id: "death", name: "Death", icon: HeartIcon, count: 1 }
  ];

  const selectedSamskaraData = samskaras.find(s => s.id === selectedSamskara);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-maroon mb-4">The 16 Samskaras Guide</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover the complete journey of human life through the 16 sacred samskaras (sacraments) 
          that mark important milestones from conception to the final journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="divine-border">
            <CardHeader>
              <CardTitle className="text-maroon">Samskara Categories</CardTitle>
              <CardDescription>Select a category to explore the samskaras</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gold/5 cursor-pointer transition-colors"
                  onClick={() => setSelectedSamskara(samskaras.find(s => s.category === category.name)?.id || "garbhadhana")}
                >
                  <div className="flex items-center">
                    <category.icon className="h-5 w-5 text-gold mr-3" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <Badge variant="secondary">{category.count}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="divine-border">
            <CardHeader>
              <div className="flex items-center">
                {selectedSamskaraData?.icon && React.createElement(selectedSamskaraData.icon, { className: "h-6 w-6 text-gold mr-3" })}
                <div>
                  <CardTitle className="text-maroon">{selectedSamskaraData?.name}</CardTitle>
                  <CardDescription>{selectedSamskaraData?.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gold mr-2" />
                  <div>
                    <p className="font-medium">Timing</p>
                    <p className="text-sm text-gray-600">{selectedSamskaraData?.timing}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-gold mr-2" />
                  <div>
                    <p className="font-medium">Purpose</p>
                    <p className="text-sm text-gray-600">{selectedSamskaraData?.purpose}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-maroon mb-2">Details</h4>
                <p className="text-gray-600">{selectedSamskaraData?.details}</p>
              </div>

              <div>
                <h4 className="font-medium text-maroon mb-2">Significance</h4>
                <p className="text-gray-600">{selectedSamskaraData?.significance}</p>
              </div>

              <Button className="w-full bg-gradient-to-r from-saffron to-gold text-white">
                Book This Samskara
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {samskaras.map((samskara) => (
          <Card
            key={samskara.id}
            className="divine-border cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedSamskara(samskara.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <samskara.icon className="h-5 w-5 text-gold mr-2" />
                <h3 className="font-medium text-maroon text-sm">{samskara.name}</h3>
              </div>
              <p className="text-xs text-gray-600">{samskara.description}</p>
              <Badge variant="outline" className="mt-2 text-xs">
                {samskara.category}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SamskaraGuide;
