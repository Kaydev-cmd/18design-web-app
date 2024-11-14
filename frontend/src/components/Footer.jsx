// import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-content-wrapper">
            <div className="left-wrapper">
              <a href="">
                <img
                  src="/images/home/LogoWhite.png"
                  alt="Logo White"
                  className="white-logo"
                />
              </a>
              <h1>
                Want to recieve our
                <br />
                awesome stories?
              </h1>
              <div className="email-field">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
              <p>&copy; The 18 Design, All rights reserved</p>
            </div>

            <div className="right-wrapper">
              <div className="links">
                <div className="email-link">
                  <h4>Email</h4>
                  <p>
                    <a href="">info@the18.design</a>
                  </p>
                </div>

                <div className="middle-and-right-links">
                  <div className="middle-links">
                    <p>
                      <a href="">About Us</a>
                    </p>
                    <p>
                      <a href="">How it works</a>
                    </p>
                    <p>
                      <a href="">Pricing</a>
                    </p>
                    <p>
                      <a href="">FAQs</a>
                    </p>
                  </div>

                  <div className="right-links">
                    <p>
                      <a href="">Lead generation</a>
                    </p>
                    <p>
                      <a href="">Customer engagement</a>
                    </p>
                    <p>
                      <a href="">Customer support</a>
                    </p>
                    <p>
                      <a href="">Help Center Articles</a>
                    </p>
                    <p>
                      <a href="">Outbound Messages</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="social-icons">
                <a href="">
                  <img src="/images/home/social_fb.png" alt="Facebook" />
                </a>
                <a href="">
                  <img src="/images/home/social_tw.png" alt="Twitter" />
                </a>
                <a href="">
                  <img src="/images/home/social_gl.png" alt="Google" />
                </a>
                <a href="">
                  <img src="/images/home/social_in.png" alt="LinkedIn" />
                </a>
                <a href="">
                  <img src="/images/home/social_yt.png" alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
