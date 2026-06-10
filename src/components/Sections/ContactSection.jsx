import { ArrowUpRight, ArrowRight } from "lucide-react";
import growthImg from "../../assets/images/growth-model.png";

function ContactSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">
            Have a question or idea?
          </h1>

          <h2 className="text-5xl font-bold text-white/60 mt-2">
            We're here to help
          </h2>

          <p className="text-white/50 mt-6 max-w-xl mx-auto">
            Tell us about your project and we'll provide the best possible
            solution.
          </p>
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Image */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src={growthImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#141414] rounded-3xl p-8">
              <div className="flex justify-end">
                <ArrowUpRight className="text-white" />
              </div>

              <h1 className="text-6xl font-bold text-white mt-8">64K</h1>

              <p className="text-white/50 mt-4">
                240 Contributions in
                <br />
                the last year
              </p>
            </div>

            <div className="bg-[#141414] rounded-3xl p-8 h-full">
              <h1 className="text-5xl font-bold text-white">65,000+</h1>

              <p className="text-white/50 mt-3">Clients</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Left Card */}
          <div className="bg-[#141414] rounded-3xl p-8">
            <p className="text-orange-500 mb-4">Step 01</p>

            <h2 className="text-3xl font-bold text-white">
              Nguyan Will Find The Best Deals
            </h2>

            <p className="text-white/50 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, molestiae.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-[#141414] rounded-3xl p-8">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-xl bg-[#222] text-white mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-[#222] text-white mb-4"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded-xl bg-[#222] text-white mb-4"
            ></textarea>

            <button className="flex items-center gap-3 bg-orange-500 px-6 py-3 rounded-full text-white">
              Submit
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
