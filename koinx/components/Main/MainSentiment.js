import KeyEvenets from "./KeyEvenets";

export default function MainSentiment() {
  return (
    <div className="my-[24px] bg-white p-5">
      <div className="text-[24px] font-semibold">Sentiment</div>
      <KeyEvenets />
      <img src="/estimates.svg" />
    </div>
  );
}
