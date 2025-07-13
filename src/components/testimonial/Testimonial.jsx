import { STARS } from "../../static/index";

const Testimonial = () => {
  return (
    <div className="bg-[#dff0e7] py-[90px] max-[990px]:py-[30px]">
      <div className="container">
        <p className="text-center text-[40px] font-medium text-[#0B254B]">
          Testimonials
        </p>
        <p className="text-center text-[#999] text-[18px] font-medium">
          Some quotes from our happy customers
        </p>
        <div className="grid grid-cols-3 gap-[30px] max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
          {STARS.map((item) => {
            return (
              <div
                key={item.id}
                className="p-[30px] flex justify-center items-center flex-col bg-white rounded-[4px] mt-[30px]"
              >
                <img src={item.image} alt={item.name} />
                <img src={item.stars} />
                <p className="text-center text-[#1D293F] font-semibold text-[22px] mt-[22px]">
                  {item.desc}
                </p>
                <p className="text-[#7C8087] text-center">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
