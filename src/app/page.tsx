"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Ofran() {
  return (
    <div className="w-full min-h-screen font-['Anek_Latin',sans-serif] bg-[#0B1C3F] overflow-x-hidden">
      {/* Import Font */}
      <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Navbar - White Background */}
      <header className="w-full bg-[#FFFFFF] py-4 px-6 md:px-[30px] flex items-center justify-between sticky top-0 z-50">
        <Link href="/">
          <Image
            src="/LOGO 2 1.svg"
            alt="Ofran Logo"
            width={160}
            height={40}
            className="h-[30px] md:h-[40px] w-auto object-contain"
          />
        </Link>

        {/* Right Side - Nav & Button */}
        <div className="flex items-center gap-8 xl:gap-12">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-black font-medium text-[16px] xl:text-[20px]">
            <Link href="/company-registration" className="hover:text-[#3395FF] transition-colors">Company Registration</Link>
            <Link href="/community" className="hover:text-[#3395FF] transition-colors">Community</Link>
            <Link href="/programs" className="hover:text-[#3395FF] transition-colors">Programs</Link>
            <Link href="/resource" className="hover:text-[#3395FF] transition-colors">Resource</Link>
          </nav>

          {/* Action Button */}
          <Link href="/incorporated" className="hidden sm:flex items-center justify-center w-[160px] h-[45px] md:w-[204px] md:h-[51px] bg-[#3395FF] text-white font-semibold text-[16px] md:text-[20px] rounded-[5px] border border-[#3395FF] hover:bg-blue-600 transition-colors">
            Get Incorporated
          </Link>
        </div>
      </header>

      {/* Hero Section - Dark Blue */}
      <section className="w-full bg-[#0B1C3F] px-6 md:px-[30px] py-[60px] md:py-[100px] lg:py-[130px] flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[100px]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left z-10 w-full lg:max-w-[600px]">
          <h1 className="text-[#FFFFFF] font-semibold text-[40px] md:text-[50px] leading-[48px] md:leading-[55px] mb-6">
            Make it official.<br />
            <span className="text-[#3395FF]">Get Incorporated.</span>
          </h1>
          <p className="text-[#FFFFFF] font-normal text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] mb-10 max-w-[556px]">
            Seamless Company Registration service for early-stage founder at the lowest fees.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[20px] w-full">
            <Link href="/incorporated" className="flex items-center justify-center gap-2 w-full sm:w-[257px] h-[51px] bg-[#3395FF] border border-[#3395FF] rounded-[5px] hover:bg-blue-600 transition-colors">
              <span className="font-semibold text-[18px] md:text-[20px] text-white">Register your Business</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <Link href="#learn-more" className="flex items-center justify-center gap-2 w-full sm:w-[163px] h-[51px] border border-[#FFFFFF] rounded-[5px] hover:bg-white/10 transition-colors">
              <span className="font-semibold text-[18px] md:text-[20px] text-white">Learn more</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* Right Images Grid */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 gap-4 w-full max-w-[660px]">
            <div className="bg-white aspect-[322/490] w-full h-full row-span-2"></div>
            <div className="bg-white aspect-[322/235] w-full h-full"></div>
            <div className="bg-white aspect-[322/235] w-full h-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - White */}
      <section className="w-full bg-[#FFFFFF] px-6 md:px-[30px] py-[60px] md:py-[100px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[50px]">
        {/* Left Content */}
        <div className="flex flex-col gap-4 max-w-[568px]">
          <h2 className="font-semibold text-[40px] md:text-[50px] leading-[48px] md:leading-[55px] text-black">
            What is <span className="text-[#3395FF]">Ofran Inc?</span>
          </h2>
          <p className="font-normal text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-black">
            An exclusive early-stage startup program that empowers founders by fostering vibrant communities, providing seamless company incorporation services & offering dedicated startup building programs & resources.
          </p>
        </div>

        {/* Right Stats */}
        <div className="flex flex-wrap lg:flex-nowrap gap-[40px] md:gap-[60px] lg:gap-[80px]">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[40px] md:text-[50px] leading-[1.1] text-[#3395FF]">100+</span>
            <span className="font-normal text-[18px] md:text-[20px] leading-[22px] text-black max-w-[134px]">Founders in the Community</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[40px] md:text-[50px] leading-[1.1] text-[#3395FF]">25+</span>
            <span className="font-normal text-[18px] md:text-[20px] leading-[22px] text-black max-w-[134px]">Company Registrations</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[40px] md:text-[50px] leading-[1.1] text-[#3395FF]">2</span>
            <span className="font-normal text-[18px] md:text-[20px] leading-[22px] text-black max-w-[134px]">Rize-backed YC Startups</span>
          </div>
        </div>
      </section>

      {/* Registration Section - Dark Blue */}
      <section className="w-full bg-[#0B1C3F] px-6 md:px-[30px] py-[80px] md:py-[100px] flex flex-col gap-[60px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-[828px]">
            <h2 className="font-semibold text-[40px] md:text-[50px] leading-[48px] md:leading-[55px] text-white">
              Hassel-free <span className="text-[#3395FF]">Company Registration</span>
            </h2>
            <p className="font-normal text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-white">
              Choose from the most popular company types and get seamless registration at <span className="font-semibold">No Hidden Charges</span>
            </p>
          </div>
          <Link href="/incorporated" className="flex shrink-0 items-center justify-center gap-2 w-full sm:w-[257px] h-[51px] bg-[#3395FF] border border-[#3395FF] rounded-[5px] hover:bg-blue-600 transition-colors">
            <span className="font-semibold text-[18px] md:text-[20px] text-white">Register your Business</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        {/* Cards container */}
        <div className="flex flex-col gap-8 w-full">
          {/* Card 1 */}
          <div className="w-full bg-[#172E5D] rounded-[10px] p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="bg-white w-full max-w-[282px] aspect-square shrink-0"></div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8">
              <h3 className="font-normal text-[30px] md:text-[40px] leading-[36px] md:leading-[44px] text-white lg:max-w-[266px] ml-[100px]">
                Private Limited Company
              </h3>
              <p className="font-normal text-[16px] md:text-[20px] leading-[24px] text-white lg:max-w-[361px]">
                Suitable for startups and small businesses that require limited liability, with the flexibility to raise capital and introduce ESOPs as they scale.
              </p>
              <Link href="#learn-more" className="flex shrink-0 items-center justify-center w-full sm:w-[131px] h-[51px] border border-[#FFFFFF] rounded-[5px] hover:bg-white/10 transition-colors">
                <span className="font-semibold text-[20px] text-white">Learn more</span>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-[#172E5D] rounded-[10px] p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="bg-white w-full max-w-[282px] aspect-square shrink-0"></div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8">
              <h3 className="font-normal text-[30px] md:text-[40px] leading-[36px] md:leading-[44px] text-white lg:max-w-[266px] ml-[100px]">
                Limited Liability Company
              </h3>
              <p className="font-normal text-[16px] md:text-[20px] leading-[24px] text-white lg:max-w-[361px]">
                Ideal for professional service firms that need limited liability with minimal post-incorporation compliance requirements.
              </p>
              <Link href="#learn-more" className="flex shrink-0 items-center justify-center w-full sm:w-[131px] h-[51px] border border-[#FFFFFF] rounded-[5px] hover:bg-white/10 transition-colors">
                <span className="font-semibold text-[20px] text-white">Learn more</span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-[#172E5D] rounded-[10px] p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="bg-white w-full max-w-[282px] aspect-square shrink-0"></div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8">
              <h3 className="font-normal text-[30px] md:text-[40px] leading-[36px] md:leading-[44px] text-white lg:max-w-[266px] ml-[100px]">
                One Person Company
              </h3>
              <p className="font-normal text-[16px] md:text-[20px] leading-[24px] text-white lg:max-w-[361px]">
                Suitable for small businesses and franchises seeking limited liability with a single-owner structure.
              </p>
              <Link href="#learn-more" className="flex shrink-0 items-center justify-center w-full sm:w-[131px] h-[51px] border border-[#FFFFFF] rounded-[5px] hover:bg-white/10 transition-colors">
                <span className="font-semibold text-[20px] text-white">Learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section - White */}
      <section className="w-full bg-[#FFFFFF] px-6 md:px-[30px] py-[80px] md:py-[100px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[40px]">
        <div className="flex flex-col gap-4 max-w-[568px]">
          <h2 className="font-semibold text-[40px] md:text-[50px] leading-[48px] md:leading-[55px] text-black">
            <span className="text-[#3395FF]">Ofran Communities:<br /></span>Curated for every founder
          </h2>
          <p className="font-normal text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-black">
            Collaborate, learn, and scale within a curated network of 100+ founders, mentors, and industry experts—all on a single platform.
          </p>
        </div>
        <Link href="/community" className="flex shrink-0 items-center justify-center gap-2 w-full sm:w-[285px] h-[51px] bg-[#3395FF] border border-[#3395FF] rounded-[5px] hover:bg-blue-600 transition-colors">
          <span className="font-semibold text-[18px] md:text-[20px] text-white">Explore our Communities</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </Link>
      </section>

      {/* Bottom Image Blocks - Dark Blue */}
      <section className="w-full bg-[#0B1C3F] px-6 md:px-[50px] py-[80px] md:py-[100px]">
        <div className="w-full max-w-[1340px] mx-auto flex flex-col lg:flex-row gap-6 items-center justify-center">
          {/* Left Block */}
          <div className="w-full lg:w-[336px] h-[378px] bg-[#FFFFFF] shrink-0"></div>
          
          {/* Center Blocks */}
          <div className="flex flex-col gap-6 w-full lg:w-[628px] shrink-0">
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className="w-full sm:w-[304px] h-[177px] bg-[#FFFFFF]"></div>
              <div className="w-full sm:w-[304px] h-[177px] bg-[#FFFFFF]"></div>
            </div>
            <div className="w-full h-[180px] bg-[#FFFFFF]"></div>
          </div>

          {/* Right Block */}
          <div className="w-full lg:w-[336px] h-[378px] bg-[#FFFFFF] shrink-0"></div>
        </div>
      </section>
    </div>
  );
}
