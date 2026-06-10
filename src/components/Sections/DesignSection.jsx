import CTAButton from "../Buttons/CTAButton";
import bucketHatImg from "../../assets/images/bucket-hat.png";

function BarChart() {
  return (
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
      <rect x="0" y="40" width="14" height="20" rx="3" fill="#FF4D00" />
      <rect x="18" y="28" width="14" height="32" rx="3" fill="#FF4D00" />
      <rect x="36" y="16" width="14" height="44" rx="3" fill="#FF4D00" />
      <rect x="54" y="4" width="14" height="56" rx="3" fill="#FF4D00" />
    </svg>
  );
}

function DesignSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">Design that works</h1>

          <h2 className="text-5xl font-bold text-white/60">
            Simple. Effective.
          </h2>

          <p className="text-white/50 mt-5">
            We design simple and effective digital experiences.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Left Card */}
          <div className="bg-[#141414] rounded-3xl p-6">
            <div className="flex justify-between items-start">
              <BarChart />

              <p className="text-white/50 text-sm text-right">
                +52% <br />
                Performance
              </p>
            </div>

            <h2 className="text-white text-2xl font-bold mt-10">
              Measure real impact
            </h2>

            <p className="text-white/50 mt-3">
              Track progress through meaningful metrics and user insights.
            </p>
          </div>

          {/* Center Image */}
          <div className="rounded-3xl p-6overflow-hidden">
            <img
              src={bucketHatImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Card */}
          <div className="bg-[#141414] rounded-3xl p-6 flex flex-col justify-between">
            <h1 className="text-7xl font-bold text-white">70%</h1>

            <div>
              <h2 className="text-2xl text-white font-bold">
                Track Your Rewards
              </h2>

              <p className="text-white/50 mt-3">
                Know when to book to get the lowest prices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="mt-6">
          <div className="bg-[#141414] rounded-3xl max-w-2xl mx-auto p-6 text-center">
            <h2 className="text-2xl font-bold text-white">
              Start your next digital experience
            </h2>

            <p className="text-white/50 mt-4 mb-8">
              Elevate your brand with human-centered design that combines
              clarity and creativity.
            </p>

            {/* Center Button */}
            <div className="flex justify-center">
              <CTAButton label="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignSection;
