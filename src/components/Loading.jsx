import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-brand-dark z-50">
      <div className="relative flex items-center justify-center w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-brand-light/10 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-brand border-t-brand-accent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-2 border-brand-accent/30 border-b-brand-light rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-ping"></div>
      </div>
      <h2 className="text-xl md:text-2xl font-bold tracking-widest text-brand-light uppercase animate-pulse">
        Shop<span className="text-brand-accent text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-light">Vams</span>
      </h2>
      <p className="mt-4 text-xs font-medium tracking-widest text-brand-light/50 uppercase">
        Curating perfection...
      </p>
    </div>
  );
};

export default Loading;