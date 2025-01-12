"use client";
import Image from "next/image";
import TradingViewWidget from "../../data/bitcoin";
import "./Main.css";
import MainOverview from "./MainOverview";
import MainSentiment from "./MainSentiment";
import About from "./About";
import MainAdv from "./MainAdv";

export default function MainBody({ trendSum }) {
  const demo = [
    {
      id: "butthole-coin",
      name: "Butthole Coin",
      symbol: "BUTTHOLE",
      thumb:
        "https://coin-images.coingecko.com/coins/images/53183/standard/1000281355.jpg?1735563013",
      price: 0.039847745686200406,
      price_change_percentage_24h: -15.20408474434122,
    },
    {
      id: "ai16z",
      name: "ai16z",
      symbol: "AI16Z",
      thumb:
        "https://coin-images.coingecko.com/coins/images/51090/standard/AI16Z.jpg?1730027175",
      price: 1.164911931475102,
      price_change_percentage_24h: -11.503064990857832,
    },
    {
      id: "ripple",
      name: "XRP",
      symbol: "XRP",
      thumb:
        "https://coin-images.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442",
      price: 2.5318716181201,
      price_change_percentage_24h: 8.543813574378346,
    },
  ];
  return (
    <div className="main">
      <div className="main-left">
        <div className="main-left-currency-chart rounded-[8px]">
          <TradingViewWidget />
        </div>
        <MainOverview />
        <MainSentiment />
        <About />
        <div className="my-5">
          <img width={"100%"} mx-0 src="/tokenomics.svg" />
        </div>
        <div>
          <img width={"100%"} src="/team.svg" />
        </div>
      </div>
      <div className="main-right">
        <MainAdv />
        <div className="main-right-trend my-3 p-5 rounded-[16px] bg-white">
          <div className="main-right-trend-heading text-[24px] font-[600] ">
            Trending Coins (24h)
          </div>
          {demo.map((resource, idx) => {
            return (
              <div
                className="main-right-trend-item flex items-center justify-between my-4"
                key={idx}
              >
                <div className="flex items-center gap-2">
                  <img
                    className="rounded-full"
                    height={24}
                    width={24}
                    src={resource.thumb}
                  />
                  <div>{resource.name}</div>
                  <div>({resource.symbol.split("").splice(0, 3).join("")})</div>
                </div>
                {resource.price_change_percentage_24h > 0 ? (
                  <div className="text-[12px] font-[400] px-1 bg-green-300 rounded-md text-green-700 font-[600]">
                    <span>+</span>
                    {resource.price_change_percentage_24h.toFixed(2)}%
                  </div>
                ) : (
                  <div className="text-[12px] font-[400] px-1 bg-red-300 rounded-md text-red-700 font-[600]">
                    {resource.price_change_percentage_24h.toFixed(2)}%
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
