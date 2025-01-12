"use client";
import Image from "next/image";
import TradingViewWidget from "../../data/bitcoin";
import "./Main.css";
import MainOverview from "./MainOverview";
import MainSentiment from "./MainSentiment";
import About from "./About";
import MainAdv from "./MainAdv";

export default function MainBody({trendList, setTrendList}) {
  return (
    <div className="main">
      <div className="main-left">
        <div className="main-left-currency-chart">
          <TradingViewWidget />
        </div>
        <MainOverview />
        <MainSentiment />
        <About />
        <div></div>
        <div></div>
      </div>
      <div className="main-right">
        <MainAdv />
        <div className="main-right-trend"></div>
      </div>
    </div>
  );
}
