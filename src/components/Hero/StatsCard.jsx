import { TrendingUp, ArrowRight } from "lucide-react";
import GlassCard from "../Common/GlassCard";

function StatsCard({
  badge = "Business Growth",
  stat = "567+",
  label = "Expert Solutions",
}) {
  return (
    <GlassCard className="rounded-3xl p-6 min-w-60 flex flex-col justify-between">
      <div>

        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-3 w-fit mb-6">
          <TrendingUp className="text-orange-500 w-4 h-4" />

          <span className="text-xs font-bold text-white uppercase">
            {badge}
          </span>
        </div>

        {/* Number */}
        <h1 className="text-4xl font-bold text-white">
          {stat}
        </h1>

        {/* Label */}
        <p className="text-xs text-white mt-2 uppercase">
          {label}
        </p>

      </div>

      {/* Button */}
      <div className="mt-4">
        <button className="bg-white text-orange-500 rounded-full p-2 hover:scale-110 transition">

          <ArrowRight className="w-6 h-6" />

        </button>
      </div>

    </GlassCard>
  );
}

export default StatsCard;

