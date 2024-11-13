"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, reviews, teamMembers } from "@/lib/constants";
import ClientCarousel from "./clientCarousel";

export function BlockPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#f3f0e8] font-serif">
      {/* Header */}
      <header className="bg-[#0c3c2d] text-[#e1d9c6] py-4 fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex  items-center  justify-evenly">
            <div className="w-1/8 flex justify-start">
              <Button
                className="text-[#e1d9c6]"
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-widest text-center flex-1"
              style={{ fontFamily: "Times New Roman', serif" }}
            >
              TOUANA
            </Link>
          </div>
        </div>
      </header>
      {/* Hamburger Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-y-0 right-0 w-64 bg-[#0c3c2d] text-[#e1d9c6] p-4 z-50"
          >
            <div className="flex justify-end">
              <Button
                className="text-[#e1d9c6]"
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              <Link
                href="#"
                className="text-lg hover:text-[#c1b9a6] transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-[#c1b9a6] transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-[#c1b9a6] transition-colors"
              >
                Clients
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-[#c1b9a6] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[#0c3c2d] opacity-50" />
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury IT Background"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#e1d9c6] mb-6">
              Precision in IT Excellence
            </h1>
            <p className="text-xl md:text-2xl text-[#c1b9a6] mb-12 font-light">
              Crafting bespoke technology solutions for discerning enterprises
            </p>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-24 bg-[#0c3c2d]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-[#e1d9c6] text-center mb-16">
            Our Premium IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="bg-[#f3f0e8] border-none rounded-none"
              >
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-[#0c3c2d] mb-4" />
                  <h3 className="text-xl font-semibold text-[#0c3c2d] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#4a5c4e]">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Client Reviews Section */}
      {/* <section className="py-24 bg-[#f3f0e8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-[#0c3c2d] text-center mb-16">
            Client Testimonials
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-[#0c3c2d] text-[#e1d9c6] rounded-none">
              <CardContent className="p-8">
                <blockquote className="text-xl italic mb-4">
                  "{reviews[currentReview].quote}"
                </blockquote>
                <div className="text-right">
                  <p className="font-semibold">{reviews[currentReview].name}</p>
                  <p className="text-[#c1b9a6]">
                    {reviews[currentReview].position}
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-3 w-3 rounded-full mx-2 ${
                    currentReview === index ? "bg-[#0c3c2d]" : "bg-[#c1b9a6]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}
      {/* our clients */}
      <ClientCarousel />
      {/* CTA Section */}
      <section className="py-24 bg-[#f3f0e8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#0c3c2d] mb-6">
            Elevate Your IT Infrastructure
          </h2>
          <p className="text-xl text-[#0c3c2d] mb-12 max-w-2xl mx-auto">
            Experience the pinnacle of technological excellence with Touana.
          </p>
        </div>
      </section>
    </div>
  );
}
