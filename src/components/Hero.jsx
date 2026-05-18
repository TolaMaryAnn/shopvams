import React from "react";
import mainbg from "../assets/mainbg.jpg";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
        <img
          src={mainbg}
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-60 animate-pulse-slow"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 flex flex-col justify-center min-h-[70vh] md:min-h-[85vh] container mx-auto px-6 md:px-16 pt-20 pb-16">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-bold tracking-wider text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full backdrop-blur-sm">
            Premium Collection 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-xl">
            Redefine <br /> Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-light">Style</span>.
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-brand-light/80 mb-10 leading-relaxed font-light">
            Discover our curated collection of sophisticated men's accessories. Elevate your everyday look with pieces that blend timeless elegance and modern craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 bg-brand hover:bg-brand-accent rounded-full shadow-[0_0_20px_rgba(166,90,70,0.4)] hover:shadow-[0_0_30px_rgba(166,90,70,0.6)] hover:-translate-y-1">
              Shop Now
            </button>
            <button className="px-8 py-4 text-sm font-bold tracking-wide text-brand-light uppercase transition-all duration-300 border border-brand-light/30 rounded-full hover:bg-brand-light/10 hover:-translate-y-1 backdrop-blur-sm">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center animate-bounce">
        <span className="text-brand-light/70 text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-light/70 to-transparent" />
      </div>
    </div>
  );
}

export default Hero;
