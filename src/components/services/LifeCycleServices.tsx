
import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import PreBirthServices from './lifecycle/PreBirthServices';
import BirthServices from './lifecycle/BirthServices';
import YouthServices from './lifecycle/YouthServices';
import MarriageServices from './lifecycle/MarriageServices';
import GrihasthaServices from './lifecycle/GrihasthaServices';
import VanaprasthaServices from './lifecycle/VanaprasthaServices';
import DeathServices from './lifecycle/DeathServices';

const LifeCycleServices = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-maroon mb-4">Complete Hindu Lifecycle Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          From conception to the final journey, we provide comprehensive services for all 16 samskaras (sacraments) 
          that mark the important stages of human life according to Hindu shastras.
        </p>
      </div>

      <PreBirthServices />
      
      <Separator className="my-8" />
      
      <BirthServices />
      
      <Separator className="my-8" />
      
      <YouthServices />
      
      <Separator className="my-8" />
      
      <MarriageServices />
      
      <Separator className="my-8" />
      
      <GrihasthaServices />
      
      <Separator className="my-8" />
      
      <VanaprasthaServices />
      
      <Separator className="my-8" />
      
      <DeathServices />
    </div>
  );
};

export default LifeCycleServices;
