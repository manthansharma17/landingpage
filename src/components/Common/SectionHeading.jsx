function SectionHeading({eyebrow,title,titleMuted,subtitle,centered,}) {
  return (
    <div className={centered ? "text-center" : ""}>

      {/* Small Heading */}
      {eyebrow && (
        <p className="text-sm text-white/40 mb-3">
          {eyebrow}
        </p>
      )}

      {/* Main Heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-white">

        {title}

        <br />

        {titleMuted && (
          <span className="text-white/50">
            {titleMuted}
          </span>
        )}

      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-white/50 mt-4 max-w-xl">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default SectionHeading;

