function TestimonialCard(props) {
  return (
    <div className="bg-linear-to-b from-[#2a1010] to-[#c0380a] rounded-3xl p-6 min-w-[320px] h-85">

      <div className="flex gap-5">

        <img
          src={props.image}
          alt={props.name}
          className="w-28 h-36 rounded-2xl object-cover"
        />

        <p className="text-white mt-2">
          "{props.quote}"
        </p>

      </div>

      <div className="flex justify-between items-end mt-6">

        <div>
          <h3 className="text-white font-bold">
            {props.name}
          </h3>

          <p className="text-white/60 text-sm">
            {props.role}
          </p>
        </div>

        <div className="bg-orange-500 px-4 py-2 rounded-full text-white">
          {props.rating} ★
        </div>

      </div>

    </div>
  );
}

export default TestimonialCard;