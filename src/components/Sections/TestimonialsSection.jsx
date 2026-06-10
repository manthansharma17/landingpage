import TestimonialCard from "../Cards/TestimonialCard";

import avatar1 from "../../assets/images/avatar1.jpg";
import avatar2 from "../../assets/images/avatar2.jpg";
import avatar3 from "../../assets/images/avatar3.jpg";

const testimonials = [
  {
    image: avatar1,
    quote:
      "Great experience! The design was clean, modern and exactly what I needed.",
    name: "Bella",
    role: "UI/UX Designer",
    rating: "4.8",
  },
  {
    image: avatar2,
    quote:
      "Professional and easy to work with. Delivered quality results on time.",
    name: "Rony",
    role: "UI/UX Designer",
    rating: "4.8",
  },
  {
    image: avatar3,
    quote:
      "Absolutely transformed our product. Every detail was executed perfectly.",
    name: "Smoker",
    role: "UI/UX Designer",
    rating: "4.8",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold text-white">What Our</h1>

            <h1 className="text-5xl font-bold text-white/60">Clients Say</h1>
          </div>

          <div>
            <div className="flex -space-x-3 mb-3 justify-end">
              <img
                src={avatar1}
                className="w-10 h-10 rounded-full border-2 border-black"
              />
              <img
                src={avatar2}
                className="w-10 h-10 rounded-full border-2 border-black"
              />
              <img
                src={avatar3}
                className="w-10 h-10 rounded-full border-2 border-black"
              />
            </div>

            <p className="text-white/50 text-sm text-right">
              We create digital experiences
              <br />
              that solve real business problems.
            </p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              image={item.image}
              quote={item.quote}
              name={item.name}
              role={item.role}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
