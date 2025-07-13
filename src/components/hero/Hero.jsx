const Hero = () => {
  return (
    <>
      <div className="bg-image w-full h-[780px] flex justify-center items-center">
        <div className="w-[730px] bg-[#F7F8FA] opacity-80 rounded-[2px] p-[30px] max-[750px]:w-[500px] max-[390px]:p-[1rem]">
          <div className="flex justify-center items-center flex-col">
            <p className="text-[33px] text-center">🌱</p>
            <p className="font-[Poppins] font-medium text-[40px] text-[#1D252C] text-center">
              The nature candle
            </p>
            <p className="text-[18px] text-[#1D252C] w-[540px] text-center max-[750px]:w-auto">
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments
            </p>
            <button className="bg-green-600 px-[40px] py-[10px] text-white mt-[45px] green hover:bg-white duration-300 hover:text-[green]">
              Discovery our collection
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
