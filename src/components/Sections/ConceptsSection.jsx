import CTAButton from "../Buttons/CTAButton";
import bgImage from "../../assets/images/concept4.png";

function ConceptsSection() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center -80px",
      }}
    >
      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
        <h2 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
          From Concepts
          <br />
          <span className="text-white/90">Into Interaction</span>
        </h2>

        <p className="mt-6 max-w-lg text-white/60 text-base md:text-lg leading-relaxed">
          Crafting intuitive digital interfaces through purposeful design and
          user-centered research.
        </p>

        <div className="mt-10">
          <CTAButton label="Get Started" />
        </div>
      </div>
    </section>
  );
}

export default ConceptsSection;
