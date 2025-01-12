import Carousel from "./Carousel";

export default function Suggestions({trendList}) {
  return (
    <div className="w-[100%] bg-white p-[70px]">
      <div className="text-[24px] font-semibold">You May Also Like</div>
      <Carousel trending={trendList} />
      <div className="text-[24px] font-semibold">Trending</div>
      <Carousel trending={trendList} />
    </div>
  );
}
