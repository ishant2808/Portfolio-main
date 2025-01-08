import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_socials">
            <a href="https://github.com/ishant2808" className="footer_social_link" target="_blank" rel="noreferrer">
                <i class="uil uil-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ishant-singh-b3171b251/" className="footer_social_link" target="_blank" rel="noreferrer">
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://x.com/IshantSingh0" className="footer_social_link" target="_blank" rel="noreferrer">
                <i class="bx bxl-twitter"></i>
            </a>
        </div>

        <span className="footer_copy">
            &#169;Ishant Singh. All rights reserved 2024
        </span>

      </div>
    </footer>
  );
}
