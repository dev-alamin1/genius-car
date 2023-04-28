import { useRef } from "react";
import slide0 from "./../../../assets/images/banner/1.jpg";
import slide1 from "./../../../assets/images/banner/2.jpg";
import slide2 from "./../../../assets/images/banner/3.jpg";
import slide3 from "./../../../assets/images/banner/4.jpg";
import slide4 from "./../../../assets/images/banner/5.jpg";
import slide5 from "./../../../assets/images/banner/6.jpg";

const slidesData = [
  { src: slide0, prev: 5, next: 1 },
  { src: slide1, prev: 0, next: 2 },
  { src: slide2, prev: 1, next: 3 },
  { src: slide3, prev: 2, next: 4 },
  { src: slide4, prev: 3, next: 5 },
  { src: slide5, prev: 4, next: 0 },
];

const BannerCarousel = () => {
  const carouselRef = useRef(null);

  const goToSlide = (index) => {
    const carousel = carouselRef.current;
    const slideWidth = carousel.offsetWidth;
    carousel.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  return (
    <div className="carousel w-full h-[90vh] relative mb-10 mt-10 rounded-md" ref={carouselRef} >
      {slidesData.map((slide, index) => (
        <>
          <div key={index} className="carousel-item relative w-full">
            {/* overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-800 to-transparent"
              style={{ pointerEvents: "none" }}
            ></div>

            <div className="absolute top-[45%] md:top-1/3 left-16 ">
              <h1 className="text-white text-lg md:text-4xl lg:text-6xl font-inter font-bold">
                Affordable <br /> Price for <br /> Car Services{" "}
              </h1>
              <p className="text-white text-xs md:text-xl mt-5 font-inter">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>

              <div className="flex gap-2 mt-5 font-inter">
                <button className="bg-[#FF3811] text-white md:px-3 md:py-1 px-2 py-1">
                  Discover More
                </button>
                <button className="text-white border border-white md:px-3 md:py-1 px-2 py-1">
                  Latest Project
                </button>
              </div>
            </div>

            <img src={slide.src} className="w-full" />
            <div className="absolute flex justify-end transform right-5 bottom-16 gap-5 ">
              <button
                onClick={() => goToSlide(slide.prev)}
                className="btn btn-circle bg-green-400 border-none"
              >
                ❮
              </button>
              <button
                onClick={() => goToSlide(slide.next)}
                className="btn btn-circle bg-orange-600 border-none hover:bg-white hover:text-black"
              >
                ❯
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default BannerCarousel;
