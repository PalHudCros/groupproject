import React from "react";

export default function Footer(props) {

  return (
    <div className="footer-wrapper shop">
      <div className="row footer shop">

        <div className="col-md-offset-2 col-md-2 footer-about-wrapper shop">
        <h3>About</h3>
        <ul>
          <li>About <span className="footer-logo shop">Fero Vino</span></li>
          <li>About the developers</li>
          <li>FAQ</li>
          <li>Partner with Us</li>
        </ul>
        </div>
        <div className="col-md-offset-4 col-md-2 footer-copyright-wrapper">
          <h6>Built by <a href="https://github.com/PalHudCros">PalHudCros</a></h6>
          <p>© Fero Vino, 2016</p>

        </div>
      </div>


    </div>
  );
}
