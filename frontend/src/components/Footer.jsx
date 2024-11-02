// import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-content-wrapper">
            {/* Left Wrapper */}
            <div className="footer-left-content-wrapper">
              <div className="footer-left-content">
                <div className="footer-logo-wrapper">
                  <div className="footer-logo">
                    <img src="/images/home/LogoWhite.png" alt="White Logo" />
                  </div>
                </div>
                <div className="footer-text-wrapper">
                  <div className="footer-text">
                    <h1>
                      Want to recieve our
                      <br />
                      awesome stories?
                    </h1>
                  </div>
                </div>
                <div className="footer-subscribe-field-wrapper">
                  <form>
                    <div className="footer-subscribe-field">
                      <input type="text" placeholder="Enter your email" />
                      <div className="subscribe-btn-wrapper">
                        <button>Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="footer-copyright-text-wrapper">
                  <div className="footer-copyright-text">
                    <p>&copy; The 18 Design, All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Wrapper */}
            <div className="footer-right-content-wrapper">
              <div className="footer-right-upper-content-wrapper">
                <div className="footer-right-upper-content">
                  <div className="footer-right-upper-content-email-wrapper">
                    <div className="footer-right-upper-content-email">
                      <h4>Email</h4>
                      <p>
                        <a href="">info@the18.design</a>
                      </p>
                    </div>
                  </div>
                  <div className="footer-right-upper-content-links-wrapper">
                    <div className="footer-right-upper-content-links">
                      {/* Left Links */}
                      <div className="footer-right-upper-content-left-links-wrapper">
                        <div className="footer-right-upper-content-left-links">
                          <ul>
                            <li>
                              <a href="">About us</a>
                            </li>
                            <li>
                              <a href="">How it works</a>
                            </li>
                            <li>
                              <a href="">Pricing</a>
                            </li>
                            <li>
                              <a href="">FAQs</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Links */}
                      <div className="footer-right-upper-content-left-links-wrapper">
                        <div className="footer-right-upper-content-left-links">
                          <ul>
                            <li>
                              <a href="">Lead generation</a>
                            </li>
                            <li>
                              <a href="">Customer engagement</a>
                            </li>
                            <li>
                              <a href="">Customer support</a>
                            </li>
                            <li>
                              <a href="">Help Center Articles</a>
                            </li>
                            <li>
                              <a href="">Outbound Messages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Right Wrapper */}
              <div className="footer-left-lower-content-wrapper">
                <div className="footer-left-lower-content">
                  <div className="footer-left-lower-content-icons-wrapper">
                    <div className="footer-left-lower-content-icons">
                      <a href="">
                        <img
                          src="/images/home/social_fb.png"
                          alt="Facebook Icon"
                        />
                      </a>
                      <a href="">
                        <img
                          src="/images/home/social_tw.png"
                          alt="Twitter Icon"
                        />
                      </a>
                      <a href="">
                        <img
                          src="/images/home/social_gl.png"
                          alt="Google Icon"
                        />
                      </a>
                      <a href="">
                        <img
                          src="/images/home/social_in.png"
                          alt="LinkedIn Icon"
                        />
                      </a>
                      <a href="">
                        <img
                          src="/images/home/social_yt.png"
                          alt="Youtube Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
