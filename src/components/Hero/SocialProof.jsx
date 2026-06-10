import avatar1 from "../../assets/images/avatar1.jpg";
import avatar2 from "../../assets/images/avatar2.jpg";
import avatar3 from "../../assets/images/avatar3.jpg";

function SocialProof() {
  return (
    <div className="flex items-center gap-3">

      {/* Avatars */}
      <div className="flex -space-x-3">
        <img
          src={avatar1}
          alt="User 1"
          className="w-10 h-10 rounded-full border-2 border-black object-cover"
        />

        <img
          src={avatar2}
          alt="User 2"
          className="w-10 h-10 rounded-full border-2 border-black object-cover"
        />

        <img
          src={avatar3}
          alt="User 3"
          className="w-10 h-10 rounded-full border-2 border-black object-cover"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-white font-semibold text-sm">
          500+ Happy Clients
        </h3>

        <p className="text-white/60 text-xs">
          Worldwide
        </p>
      </div>

    </div>
  );
}

export default SocialProof;
