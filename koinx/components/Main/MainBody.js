"use client";
import Image from "next/image";
import TradingViewWidget from "../Charts/bitcoin";
import "./Main.css";
import MainOverview from "./MainOverview";
import MainSentiment from "./MainSentiment";
import About from "./About";

export default function MainBody() {
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
        <div className="main-right-adv">
          <div className="main-right-adv-heading">
            <p>Get Started with KoinX</p>
            <p>for FREE</p>
          </div>
          <div className="main-right-adv-description">
            <div>With our range of features that you can equip for</div>
            <div>free, KoinX allows you to be more educated and</div>
            <div>aware of your tax reports.</div>
          </div>
          <div className="main-right-adv-image">
            <Image src="/frame.svg" alt="logo" width={179} height={166} />
          </div>
          <button className="main-right-adv-button">
            Get Started for FREE
          </button>
        </div>
        <div className="main-right-trend"></div>
      </div>
    </div>
  );
}
