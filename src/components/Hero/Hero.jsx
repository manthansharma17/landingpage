import heroBg from "../../assets/images/hero-bg.png";
import CTAButton from "../Buttons/CTAButton";
import SocialProof from "./SocialProof";
import ThumbnailCard from "./ThumbnailCard";
import StatsCard from "./StatsCard";

function Hero() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "50% 60%",
          }}
        />
        <div className="absolute inset-0 bg-linear-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>
<br /> <br /> 
      {/* Hero Content */}
      <div className="relative z-10 grow flex flex-col justify-center px-6 md:px-12 py-12 pt-32">
        {/* "We are" decoration */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none hidden md:flex">
          <div className="w-23 h-23 border-2 border-dashed border-white rounded-full mt-2 animate-pulse-slow" />
          </div>
          <div className="text-white/40 text-sm font-medium tracking-widest flex flex-col items-center">
            <span>We are</span>
          
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-[120px] font-bold leading-[0.8] tracking-tighter mb-8 max-w-5xl">
          <span className="text-white">Creative </span>
          <span className="bg-linear-to-r from-white to-white/30 bg-clip-text text-transparent">
            Agency
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-2xl md:text-3xl font-light text-white/80 max-w-lg mb-10 leading-tight">
          Unlock Your Business <br />
          Potential With Our Experts
        </p>

        {/* CTA + Social Proof */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-16 md:mb-20">
          <CTAButton label="Read More" />
          <SocialProof />
        </div>

        {/* Bottom Widgets */}
        <div className="flex flex-col sm:flex-row gap-6 mt-auto">
          <ThumbnailCard />
          <StatsCard />
        </div>
      </div>
    </main>
  );
}

export default Hero;
