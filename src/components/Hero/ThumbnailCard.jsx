import heroBg from "../../assets/images/hero-bg.png";

function ThumbnailCard({ src = heroBg, alt = "Thumbnail" }) {
  return (
    <div className="w-60 h-60 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shrink-0">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export default ThumbnailCard;
