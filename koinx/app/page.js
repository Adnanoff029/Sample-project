"use client";
import MainBody from "@/components/Main/MainBody";
import Navbar from "@/components/Navbar/Navbar";
import Suggestions from "@/components/Footer/Suggestions";
import { useEffect, useState } from "react";

export default function Home() {
  const [trendList, setTrendList] = useState([]);
  const [trendSum, setTrendSum] = useState([]);
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
    const temp = [];
    for (let i = 0; i < 3; i++) {
      temp.push({
        id: data.coins[i].item.id,
        name: data.coins[i].item.name,
        symbol: data.coins[i].item.symbol,
        thumb: data.coins[i].item.small,
        price: data.coins[i].item.data.price,
        price_change_percentage_24h:
          data.coins[i].item.data.price_change_percentage_24h.usd,
      });
    }
    setTrendSum(temp);
  };
  useEffect(() => {
    getTrending();
  }, []);
  return (
    <>
      <Navbar />
      <MainBody trendSum={trendSum} />
      <Suggestions trendList={trendList} />
    </>
  );
}
