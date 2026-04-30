import React from 'react';
import Image from "next/image";

export default function LaunchPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-poppins">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(145deg, #FFFFFF 0%, #F0F7FF 30%, #CCE5FF 60%, #3395FF 120%)'
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-1 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3395FF 1px, transparent 1px),
            linear-gradient(to bottom, #3395FF 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: '69px 62px'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-6xl">
        {/* Main Logo */}
        <div className="mb-[114px] scale-90 md:scale-100 flex items-center justify-center">
          <Image
            src="/Logo 1.svg"
            alt="Ofran Inc Logo"
            width={500}
            height={110}
            priority
            className="w-auto h-16 md:h-20 lg:h-24"
          />
        </div>

        {/* Message */}
        <p className="text-[20px] md:text-[25px] text-black font-normal leading-[38px] mb-[103px] max-w-4xl">
          We’re quietly working on new ways to make a bigger difference.<br className="hidden md:block" /> Updates will be shared soon.
        </p>

        {/* Subsidiary Info */}
        <div className="flex flex-col items-center gap-[7px]">
          <p className="text-lg md:text-xl font-semibold text-slate-900 tracking-wide">
            A Subsidiary entity of
          </p>
          <div className="flex items-center justify-center w-full">
            <Image
              src="/WORDMARK PNG 1 3.svg"
              alt="Velrona Group Logo"
              width={332}
              height={84}
              className="w-auto h-16 md:h-20"
            />
          </div>
        </div>
      </div>

      {/* Bottom Contact Banner */}
      <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=support@velrona.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-900/40 hover:bg-slate-900/60 transition-colors duration-300 backdrop-blur-md rounded-[19px] py-4 md:py-6 px-2 md:px-10 border border-white/20 text-center cursor-pointer"
        >
          <p className="text-white text-[11px] min-[400px]:text-sm md:text-xl font-semibold tracking-wide whitespace-nowrap">
            For queries contact us <span className="font-bold">support@velrona.com</span>
          </p>
        </a>
      </div>
    </main>
  );
}
