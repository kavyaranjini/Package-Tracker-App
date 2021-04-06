import React from "react";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Contact us</h3>
        <dev>Phone: +46783456789</dev>
        <dev>
          <p>Openning Hours: Monday to Friday (8:00 AM to 5:00 PM)</p>
        </dev>
        <dev>
          <p>
            Write us :
            <a href="mailto:parcelquery@yellow.co.se">
              {" "}
              yellowcorporation@gmail.com{" "}
            </a>
          </p>
        </dev>
      </div>
    </footer>
  );
}
