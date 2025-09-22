import React, { useState } from "react";
import "../css/Home.css";
import logo from "../assets/PT_TM_FLOWTEC.png";

function Home() {
  const [activeButton, setActiveButton] = useState("login"); // default aktif = login

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>
        <div className="nav-buttons">
          <button
            className={`login ${activeButton === "login" ? "active" : ""}`}
            onClick={() => setActiveButton("login")}
          >
            Login
          </button>
          <button
            className={`signup ${activeButton === "signup" ? "active" : ""}`}
            onClick={() => setActiveButton("signup")}
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Lessons and insights <br />
            <span>from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="register">Register</button>
        </div>
        <div className="hero-image">
          <img
            src="https://ouch-cdn2.icons8.com/8svvtQW6XJ7q_8S8CGFQFFClXHL5Rf3WbdmgV6Pp1NQ/rs:fit:512:456/czM6Ly9pY29uczgv/c3RhdGljL3BuZy9p/Y29uL2VkaXRvcl9p/bGx1c3RyYXRpb24t/bWFuLnBuZw.png"
            alt="Illustration"
          />
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="client-logos">
          <img src="https://dummyimage.com/50x50/000/fff&text=A" alt="logo1" />
          <img src="https://dummyimage.com/50x50/000/fff&text=B" alt="logo2" />
          <img src="https://dummyimage.com/50x50/000/fff&text=C" alt="logo3" />
          <img src="https://dummyimage.com/50x50/000/fff&text=D" alt="logo4" />
          <img src="https://dummyimage.com/50x50/000/fff&text=E" alt="logo5" />
        </div>
      </section>
    </div>
  );
}

export default Home;
