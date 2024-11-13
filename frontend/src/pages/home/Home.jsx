// import React from "react";
import "./Home.css";

// Refactor Pricing Cards section

/* 
  Push the navbar first, followed by the hero, the about us, the how it works section, then
  pricing section.
*/

// Ticket #2: Check the margin spacing between the sections throughout the project!!
// Ticket #3: Handle the responsiveness for the pricing and common section and the footer!!
// Ticket #4: Check button transitions for buttons throughout the project!!
// Ticket #5: Change the bullet points for the pricing cards to squares!!
// Ticket #6: Check font families for the text throughout the project!!
// Ticket #7: Change the bullet points for the about us section to squares!!

const Home = () => {
  return (
    <>
      {/* Hero Section */}

      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-left-wrapper">
              <h1>
                Always Track &#38;
                <br />
                Analyze Your Business
                <br />
                Statistics To Succeed.
              </h1>
              <p>
                A better way to manage your sales, team, clients &#38; marketing
                <br />- on a single platform. Powerful, affordable &#38; easy.
              </p>
              <div className="hero-form">
                <form>
                  <input type="text" placeholder="Enter Your Email" />
                  <button className="get-started-btn">Get Started</button>
                </form>
              </div>
              <div className="hero-icons">
                <img src="/images/home/m_visa.png" alt="Visa Icon" />
                <img
                  src="/images/home/m_mastercard.png"
                  alt="Mastercard Icon"
                />
                <img src="/images/home/m_paypall.png" alt="Paypal Icon" />
              </div>
            </div>
            <img src="/images/home/Illustration_1.png" alt="Hero Banner" />
          </div>
        </div>
      </section>

      {/* About Us Section */}

      <section className="about-us">
        <div className="container">
          <div className="about-us-wrapper">
            <img src="/images/home/Illustration_2.png" alt="About us banner" />
            <div className="about-us-right-wrapper">
              <button className="about-us-btn">About Us</button>
              <h1>
                Faster, friendlier feedback
                <br />
                loops make life easier.
              </h1>
              <p>
                Add a Viewer to your team so that they can see everything you
                share, or invite
                <br />
                people to individual documents. It&apos;s up to you.
                Stakeholders can check
                <br />
                out designs in their web browser, test prototypes and leave
                feedback for free.
              </p>
              <div className="about-us-list">
                <ul>
                  <li>Shared Cloud Librabries, for single source of truth</li>
                  <li>Prototype previews for user testing and research</li>
                  <li>Easy organization with projects</li>
                  <li>Free developer handoff, right inside the browser</li>
                  <li>Two factor authentication and SSO</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works-wrapper">
            <div className="how-it-works-left-wrapper">
              <button className="how-it-works-btn">How It Works</button>
              <h1>
                Building the best space
                <br />
                for collaboration.
              </h1>

              {/* Shared Cloud Libraries */}
              <div className="shared-cloud-libraries-wrapper">
                <img
                  src="/images/home/icon_1.png"
                  alt="shared cloud libraries icon"
                />
                <div className="heading-and-description">
                  <h4>Shared Cloud Libraries</h4>
                  <p>
                    Navigate to the Your work panel in the left sidebar.
                    <br />
                    Select the library you want to share. Select the Share
                    <br />
                    icon in the upper right to share the library.
                  </p>
                </div>
              </div>

              {/* Develop Handoff */}
              <div className="developer-handoff-wrapper">
                <img
                  src="/images/home/icon_2.png"
                  alt="developer handoff icon"
                />
                <div className="heading-and-description">
                  <h4>Free developer handoff, right inside</h4>
                  <p>
                    Cloud Inspector makes it easy for developers to get
                    <br />
                    the information they need to turn pixels into code -
                    <br />
                    all in the browser and, most importantly, for free.
                  </p>
                </div>
              </div>

              {/* Real time collaborative editing */}
              <div className="real-time-collaborative-editing-wrapper">
                <img
                  src="/images/home/icon_3.png"
                  alt="real time collaborative editing icon"
                />
                <div className="heading-and-description">
                  <h4>Real-time collaborative editing</h4>
                  <p>
                    Room Service helps you build real-time
                    <br />
                    collaborative features. Add real-time data sync! Let
                    <br />
                    users edit the same data at the same time.
                  </p>
                </div>
              </div>

              {/* Cloud API */}
              <div className="cloud-api-wrapper">
                <img src="/images/home/icon_4.png" alt="cloud api icon" />
                <div className="heading-and-description">
                  <h4>Integrations with the Cloud API</h4>
                  <p>
                    Unlocking that value requires an IPaaS that delivers
                    <br />
                    the transformation power of APIs and integration.
                  </p>
                </div>
              </div>
            </div>

            {/* How it works banner */}
            <img
              src="/images/home/Illustration_3.png"
              alt="How It Works banner"
            />
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <div className="pricing-wrapper">
            <img src="/images/home/Illustration_4.png" alt="Pricing banner" />
            <div className="pricing-right-wrapper">
              <button className="pricing-btn">Pricing</button>
              <h1>
                Select a membership level
                <br />
                the right price for you.
              </h1>
              <p>
                Prices listed in USD. Taxes may apply.
                <br />
                By using this program you agree to our terms and policies.
              </p>
            </div>
          </div>

          <div className="pricing-cards">
            <div className="pricing-cards-wrapper">
              <div className="pricing-card-wrapper">
                <div className="pricing-card">
                  <div className="pricing-card-amount-and-plan-wrapper">
                    <div className="pricing-card-amount-wrapper">
                      <div className="pricing-card-amount">
                        <h5>
                          <span>$</span>
                          <p>49</p>
                        </h5>
                      </div>
                    </div>
                    <div className="pricing-card-plan-wrapper">
                      <div className="pricing-card-plan">
                        <p>per month</p>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-card-description-wrapper">
                    <div className="pricing-card-description">
                      <p>A pay-once license, just for you</p>
                    </div>
                  </div>
                  <div className="pricing-card-list-wrapper">
                    <div className="pricing-card-list">
                      <ul>
                        <li>The Mac app - yours to keep</li>
                        <li>Beautiful White_level</li>
                        <li>One year of saving to Cloud</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-card-btn-wrapper">
                    <div className="pricing-card-btn">
                      <button>Join</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Black Card */}
              <div className="pricing-card-wrapper pricing-card-wrapper-black-card">
                <div className="pricing-card">
                  <div className="pricing-card-amount-and-plan-wrapper">
                    <div className="pricing-card-amount-wrapper">
                      <div className="pricing-card-amount">
                        <h5>
                          <span>$</span>
                          <p>99</p>
                        </h5>
                      </div>
                    </div>
                    <div className="pricing-card-plan-wrapper">
                      <div className="pricing-card-plan">
                        <p>per month</p>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-card-description-wrapper">
                    <div className="pricing-card-description">
                      <p>Pro account, just for you</p>
                    </div>
                  </div>
                  <div className="pricing-card-list-wrapper">
                    <div className="pricing-card-list">
                      <ul>
                        <li>The Mac app - yours to keep</li>
                        <li>One year of Mac app updates</li>
                        <li>One year of saving to Cloud</li>
                        <li>A personal Cloud workspace</li>
                        <li>All tools, just for you</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-card-btn-wrapper">
                    <div className="pricing-card-btn">
                      <button>Join</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-card-wrapper last-card">
                <div className="pricing-card">
                  <div className="pricing-card-amount-and-plan-wrapper">
                    <div className="pricing-card-amount-wrapper">
                      <div className="pricing-card-amount">
                        <h5>
                          <span>$</span>
                          <p>299</p>
                        </h5>
                      </div>
                    </div>
                    <div className="pricing-card-plan-wrapper">
                      <div className="pricing-card-plan">
                        <p>per month</p>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-card-description-wrapper">
                    <div className="pricing-card-description">
                      <p>A subscription for the whole team</p>
                    </div>
                  </div>
                  <div className="pricing-card-list-wrapper">
                    <div className="pricing-card-list">
                      <ul>
                        <li>Access to the Mac app for all</li>
                        <li>A shared Cloud workspace</li>
                        <li>Free Cloud access for unlim</li>
                        <li>Easy team management</li>
                        <li>No license key required</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-card-btn-wrapper">
                    <div className="pricing-card-btn">
                      <button>Join</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}

      <section className="faqs">
        <div className="container">
          <div className="faqs-wrapper">
            <div className="faqs-left-wrapper">
              <div className="faqs-left-btn-wrapper">
                <div className="faqs-left-btn">
                  <button>FAQs</button>
                </div>
              </div>
              <div className="faqs-left-heading-wrapper">
                <div className="faqs-left-heading">
                  <h1>Common Questions.</h1>
                </div>
              </div>
              <div className="faqs-left-description-wrapper">
                <div className="faqs-left-description">
                  <p>
                    The online form also provides links to a set of frequently
                    <br />
                    asked questions, other information materials related to
                    <br />
                    the financial disclosure programme.
                  </p>
                </div>
              </div>
              <div className="faqs-left-dropdown-descriptions-wrapper">
                <div className="faqs-left-dropdown-descriptions">
                  <div className="faqs-left-dropdown-description-wrapper">
                    <div className="faqs-left-dropdown-description">
                      <div className="faqs-left-dropdown-description-heading-and-icon-wrapper">
                        <div className="faqs-left-dropdown-description-heading-and-icon">
                          <h3>How much does a Teams subscription cost?</h3>
                          <div className="faqs-left-dropdown-description-icon">
                            <img
                              src="/images/home/i_plus.png"
                              alt="Plus icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="faqs-left-dropdown-description-text-wrapper">
                      <div className="faqs-left-dropdown-description-text">
                        <p>
                          Contributors are members of your team who need access
                          to use
                          <br />
                          the Mac app to create and edit Sketch documents. These
                          prices dont include sales
                          <br />
                          tax, which may still apply. Head over to our pricing
                          page to get full details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="faqs-left-dropdown-description">
                    <div className="faqs-left-dropdown-description-heading-and-icon-wrapper">
                      <div className="faqs-left-dropdown-description-heading-and-icon">
                        <h3>
                          Do I still need to purchase licenses for the Mac app?
                        </h3>
                        <div className="faqs-left-dropdown-description-icon">
                          <img src="/images/home/i_minus.png" alt="Plus icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="faqs-left-dropdown-description">
                    <div className="faqs-left-dropdown-description-heading-and-icon-wrapper">
                      <div className="faqs-left-dropdown-description-heading-and-icon">
                        <h3>
                          What are the differences between Contributors and
                          Viewers?
                        </h3>
                        <div className="faqs-left-dropdown-description-icon">
                          <img src="/images/home/i_minus.png" alt="Plus icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="faqs-left-dropdown-description">
                    <div className="faqs-left-dropdown-description-heading-and-icon-wrapper">
                      <div className="faqs-left-dropdown-description-heading-and-icon">
                        <h3>
                          How long does the free Teams subscription trial last?
                        </h3>
                        <div className="faqs-left-dropdown-description-icon">
                          <img src="/images/home/i_minus.png" alt="Plus icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="faqs-left-dropdown-description">
                    <div className="faqs-left-dropdown-description-heading-and-icon-wrapper">
                      <div className="faqs-left-dropdown-description-heading-and-icon">
                        <h3>
                          Will program for Teams replace volume licensing?
                        </h3>
                        <div className="faqs-left-dropdown-description-icon">
                          <img src="/images/home/i_minus.png" alt="Plus icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="faqs-right-wrapper">
              <div className="faqs-banner-wrapper">
                <div className="faqs-banner">
                  <img
                    src="/images/home/Illustration_5.png"
                    alt="FAQs banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
