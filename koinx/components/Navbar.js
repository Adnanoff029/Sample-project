import Image from "next/image";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Image src="/logo.svg" alt="logo" width={96} height={24} />
      </div>
      <div className="navbar-links">
        <div className="navbar-links-item">Crypto Taxes</div>
        <div className="navbar-links-item">Free Tools</div>
        <div className="navbar-links-item">Resource Center</div>
        <button className="navbar-links-button navbar-links-item">Get Started</button>
      </div>
    </div>
  );
}
