import { ArrowRight } from "lucide-react";

function CTAButton({ label }) {
  return (
    <button className="flex items-center gap-3 bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300">

      <span className="text-white font-semibold">
        {label}
      </span>

      <div className="bg-white rounded-full p-2 transition-transform duration-300 hover:translate-x-1">
        <ArrowRight className="text-orange-500" size={18} />
      </div>

    </button>
  );
}

export default CTAButton;
