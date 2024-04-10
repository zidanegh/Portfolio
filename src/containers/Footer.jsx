import React from "react";
import Github from "../components/Logo/Github";
import Twitter from "../components/Logo/Twitter";

function Footer() {
  return (
    <footer>
      <h1 id="contact">Rejoignez-moi</h1>
      <div className="footer-logo">
        <a
          href="https://github.com/zidanegh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://twitter.com/veilleurfront"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </div>
      <p>© 2024 Zidane Portfolio</p>
    </footer>
  );
}
export default Footer;
