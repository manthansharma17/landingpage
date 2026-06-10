function FeatureCard({ children, className = "" }) {
  return (
    <div className={`bg-[#141414] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}

export default FeatureCard;
