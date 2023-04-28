import Services from "./Services";

const Service = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col justify-center items-center font-inter">
        <h4 className="text-[#FF3811] font-semibold text-lg md:text-2xl mb-5">Services</h4>
        <h2 className="text-2xl md:text-4xl font-bold mb-5">Our Service Area</h2>
        <p className="w-1/2 text-center tracking-wide">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

        {/* services container */}

         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
               <Services/>
        </div>

    </div>
  );
};

export default Service;
