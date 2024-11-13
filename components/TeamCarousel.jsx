"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TeamCarousel({ team }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
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
    <section className="bg-[#1B352B] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#F5EFE7] text-5xl font-serif text-center mb-16">
          Our Team
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                    index === 0 && "ml-8" // Adds margin-left only for the first item
                  )}
                >
                  <div className="group relative">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-[#F5EFE7]/10">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="text-[#F5EFE7] text-xl font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-[#F5EFE7]/80 mt-1">
                        {member.title}
                      </p>
                    </div>
                    
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#1B352B]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F5EFE7] text-[#1B352B] flex items-center justify-center transition-all",
              "hover:bg-[#F5EFE7]/90 focus:outline-none focus:ring-2 focus:ring-[#F5EFE7]/50",
              !prevBtnEnabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F5EFE7] text-[#1B352B] flex items-center justify-center transition-all",
              "hover:bg-[#F5EFE7]/90 focus:outline-none focus:ring-2 focus:ring-[#F5EFE7]/50",
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
