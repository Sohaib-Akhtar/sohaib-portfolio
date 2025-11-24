"use client";

import { GraduationCap, Award, BookOpen, MapPin, Calendar } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { EDUCATION_DATA, CERTIFICATIONS_DATA, LEARNING_DATA } from "@/constants";

export default function Education() {
  return (
    <section id="education" className="section bg-secondary/30 relative overflow-hidden">
      <DottedGlowBackground
        className="pointer-events-none absolute inset-0 z-0"
        opacity={1}
        gap={15}
        radius={1.6}
        colorLightVar="--color-indigo-400"
        glowColorLightVar="--color-purple-400"
        colorDarkVar="--color-indigo-300"
        glowColorDarkVar="--color-pink-300"
        backgroundOpacity={0}
        speedMin={0.2}
        speedMax={1.2}
        speedScale={0.8}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Education & Certifications</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            My academic journey and professional certifications that have shaped my expertise.
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/9]"
            icon={<GraduationCap className="h-4 w-4 text-black dark:text-neutral-400" />}
            title={EDUCATION_DATA[0].degree}
            description={
              <div className="space-y-2">
                <div className="font-medium">{EDUCATION_DATA[0].institution}</div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {EDUCATION_DATA[0].location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {EDUCATION_DATA[0].period}
                  </div>
                </div>
                <p className="text-sm">{EDUCATION_DATA[0].description}</p>
              </div>
            }
            logo={EDUCATION_DATA[0].logo}
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/9]"
            icon={<GraduationCap className="h-4 w-4 text-black dark:text-neutral-400" />}
            title={EDUCATION_DATA[1].degree}
            description={
              <div className="space-y-2">
                <div className="font-medium">{EDUCATION_DATA[1].institution}</div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {EDUCATION_DATA[1].location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {EDUCATION_DATA[1].period}
                  </div>
                </div>
                <p className="text-sm">{EDUCATION_DATA[1].description}</p>
              </div>
            }
            logo={EDUCATION_DATA[1].logo}
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:1/9/2/13]"
            icon={<Award className="h-4 w-4 text-black dark:text-neutral-400" />}
            title={CERTIFICATIONS_DATA[0].name}
            description={
              <div className="space-y-2">
                <div className="font-medium">{CERTIFICATIONS_DATA[0].organization}</div>
                <div className="text-sm">{CERTIFICATIONS_DATA[0].date}</div>
              </div>
            }
            logo={CERTIFICATIONS_DATA[0].logo}
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:2/9/3/13]"
            icon={<BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />}
            title={LEARNING_DATA.title}
            description={
              <div className="space-y-2">
                <p className="text-sm">{LEARNING_DATA.description}</p>
              </div>
            }
            logo={LEARNING_DATA.logo}
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  logo?: string;
}

const GridItem = ({ area, icon, title, description, logo }: GridItemProps) => {
  return (
    <li className={`min-h-[10rem] list-none relative z-20 ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-5 bg-black dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
              {logo && (
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative shadow-sm shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/35 via-purple-500/35 to-pink-500/35" />
                  <img 
                    src={logo} 
                    alt="Institution logo" 
                    className="w-full h-full object-contain relative z-10 bg-white rounded-lg p-1"
                  />
                </div>
              )}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-base/[1.125rem] font-semibold text-balance text-black md:text-lg/[1.375rem] dark:text-white">
                {title}
              </h3>
              <div className="font-sans text-xs/[1rem] text-black md:text-sm/[1.125rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};