import CTAButton from "../Buttons/CTAButton";
import worldMapImg from "../../assets/images/world-map.png";

function FooterSection() {
  return (
    <section
      className="min-h-screen flex items-end bg-black bg-no-repeat bg-contain bg-bottom"
      style={{
        backgroundImage: `url(${worldMapImg})`,
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Nguyan</h1>

            <p className="text-white/50 mb-6">
              Enjoy seamless booking and smarter travel with personalized
              experiences.
            </p>

            <CTAButton label="Read More" />
          </div>

          {/* Middle */}
          <div>
            <h2 className="text-orange-500 font-semibold mb-4">Menu</h2>

            <ul className="space-y-2 text-white/50">
              <li>How It Works</li>
              <li>Help & Support</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-orange-500 font-semibold mb-4">Follow Us</h2>

            <ul className="space-y-2 text-white/50">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
