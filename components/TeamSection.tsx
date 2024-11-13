"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function TeamSection({ team }) {
  return (
    <section className="bg-[#1B352B] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#F5EFE7] text-5xl font-serif text-center mb-16">
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
