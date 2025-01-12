"use client";
import MainBody from "@/components/Main/MainBody";
import Navbar from "@/components/Navbar";
import Suggestions from "@/components/Suggestions";
import { useEffect, useState } from "react";

const params = {
  ids: "bitcoin",
  vs_currencies: "usd,inr",
  include_24h_change: "true",
};
export default function Home() {
  const [trendList, setTrendList] = useState([]);
  const getPrice = async () => {
    const data = await fetch(
      `${process.env.COIN_URI}simple/price?${process.env.API_KEY}&ids=${params.ids}&vs_currencies=${params.vs_currencies}&include_24hr_change=${params.include_24h_change}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => err);
  };
  //   getTrending();
  const getTrending = async () => {
    const data = await fetch(
      `${process.env.COIN_URI}search/trending?${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => err);
    setTrendList(data.coins);
  };
  useEffect(() => {
    // getTrending();
  }, []);
  return (
    <>
      <Navbar />
      <MainBody trendList={trendList} />
      <Suggestions trendList={trendList} />
    </>
  );
}
