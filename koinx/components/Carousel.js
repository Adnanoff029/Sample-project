"use client";
import { useEffect, useRef, useState } from "react";
export default function Carousel({trending}) {
  const releventData = trending.map((item) => {

    const data = {
      id: item.item.id,
      name: item.item.name,
      symbol: item.item.symbol,
      image: item.item.thumb,
      price: item.item.data.price,
      price_change_percentage_24h:
        item.item.data.price_change_percentage_24h.usd,
      sparkline: item.item.data.sparkline,
    };
    return data;
  });

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-5 mx-auto h-[150px]">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-[50%]">
          <button
            onClick={movePrev}
            className="relative top-9 w-10 disabled:opacity-50 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <img src="/left.svg" alt="left" />
          </button>
          <button
            onClick={moveNext}
            className="relative top-9 w-10 disabled:opacity-50 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <img src="/right.svg" alt="left" />
          </button>
        </div>
        <div
          ref={carousel}
          className="h-[150px] carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {releventData.map((resource, index) => {
            return (
              <div key={index} className="carousel-item relative w-64 h-64 ">
                <div className="h-[150px] w-[250px] p-3 border border-gray-200 rounded-[12px]">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <img
                        src={resource.image}
                        alt={resource.symbol}
                        className="w-[26px] h-[26px] rounded-full"
                      />
                      <div className="text-[16px] font-[400]">
                        {resource.symbol}
                      </div>
                      {resource.price_change_percentage_24h > 0 ? (
                        <div className="text-[12px] font-[400] px-1 bg-green-300 rounded-sm text-green-700 font-[600]">
                          <span>+</span>
                          {resource.price_change_percentage_24h.toFixed(2)}%
                        </div>
                      ) : (
                        <div className="text-[12px] font-[400] px-1 bg-red-300 rounded-sm text-red-700 font-[600]">
                          {resource.price_change_percentage_24h.toFixed(2)}%
                        </div>
                      )}
                    </div>
                    <div className="text-[20px] font-[500] my-1">
                      ${resource.price.toFixed(3)}
                    </div>
                    <div className="flex itemx-center justify-center my-1">
                      <img src={resource.sparkline} alt="sparkline" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
