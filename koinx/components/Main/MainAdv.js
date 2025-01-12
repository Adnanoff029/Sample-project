import Image from "next/image";

export default function MainAdv() {
  return (
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
      <button className="main-right-adv-button">Get Started for FREE</button>
    </div>
  );
}
