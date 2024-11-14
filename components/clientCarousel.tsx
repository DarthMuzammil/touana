"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface Client {
  name: string;
  company: string;
  testimonial: string;
  logo: React.ReactNode;
}

const KrishaliLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="45" fill="#F5EFE7" />
    <text
      x="50"
      y="50"
      fontFamily="Arial"
      fontSize="40"
      fill="#1B352B"
      textAnchor="middle"
      dominantBaseline="central"
    >
      K
    </text>
  </svg>
);

const PlatinumPoolsLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="100" height="100" fill="#F5EFE7" />
    <path
      d="M20 80 Q50 20 80 80"
      stroke="#1B352B"
      strokeWidth="8"
      fill="none"
    />
    <circle cx="50" cy="50" r="10" fill="#1B352B" />
  </svg>
);

const clients: any = [
  {
    name: "Krishali Website",
    company: "Krishali",
    testimonial:
      "Our partnership with Krishali has been incredible. The quality of service and attention to detail is unmatched.",
    url: "https://www.krishaligroup.com",
  },
  {
    name: "Platinum Pools UAE",
    company: "Platinumpoolsuae",
    testimonial:
      "Working with Platinum has elevated our pool services. Their expertise and professionalism are truly commendable.",
      url : "http://platinumpoolsuae.com/"
  },
];

export default function ClientCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-primary py-24 relative border-t-4 border-b-4 border-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary animate-gradient"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-primary-foreground text-5xl font-serif text-center mb-16">
          Our Clients
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-4 sm:px-6 md:px-8"
                >
                  <div className="bg-[#1B352B] rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex flex-col sm:flex-row items-center mb-6">
                      <div className="w-24 h-24 relative overflow-hidden rounded-full mb-4 sm:mb-0 sm:mr-6">
                        {client.logo}
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-white text-2xl font-semibold">
                          {client.name}
                        </h3>
                        <p className="text-gray-300 text-lg">
                          {client.company}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute top-0 left-0 text-white/20 w-12 h-12 -translate-x-1/2 -translate-y-1/2" />
                      <p className="text-gray-100 text-lg italic leading-relaxed pl-6">
                        "<a href={client?.url} target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-secondary">
                          {client.testimonial}
                        </a>"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
          </div>

          <button
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1B352B] text-white flex items-center justify-center transition-all",
              "hover:bg-[#2C5647] focus:outline-none focus:ring-2 focus:ring-[#4A7A68] shadow-lg",
              !prevBtnEnabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1B352B] text-white flex items-center justify-center transition-all",
              "hover:bg-[#2C5647] focus:outline-none focus:ring-2 focus:ring-[#4A7A68] shadow-lg",
              !nextBtnEnabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
