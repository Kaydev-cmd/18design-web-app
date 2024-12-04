import React from "react";
import "./PricingCards.css";

const PricingCards = () => {
  return (
    <>
      {/* Pricing Cards */}
      <div className="pricing-cards">
        <div className="container">
          <div className="pricing-cards-wrapper">
            <div className="pricing-card white first-card">
              <div className="amount-and-plan">
                <h5>
                  <span>$</span>
                  <h6>49</h6>
                  <p>per month</p>
                </h5>
              </div>
              <p>A pay-once license, just for you</p>
              <div className="card-list">
                <ul>
                  <li>The Mac app - yours to keep</li>
                  <li>Beautiful White_level</li>
                  <li>One year of saving to Cloud</li>
                </ul>
              </div>
              <button>Join</button>
            </div>

            <div className="pricing-card black">
              <div className="amount-and-plan">
                <h5>
                  <span>$</span>
                  <h6>99</h6>
                  <p>per month</p>
                </h5>
              </div>
              <p>Pro account, just for you</p>
              <div className="card-list">
                <ul>
                  <li>The Mac app - yours to keep</li>
                  <li>One year of Mac app updates</li>
                  <li>One year of saving to Cloud</li>
                  <li>A personal Cloud workspace</li>
                  <li>All tools, just for you</li>
                </ul>
              </div>
              <button>Join</button>
            </div>

            <div className="pricing-card white last-card">
              <div className="amount-and-plan">
                <h5>
                  <span>$</span>
                  <h6>299</h6>
                  <p>per month</p>
                </h5>
              </div>
              <p>A subscription for the whole team</p>
              <div className="card-list">
                <ul>
                  <li>Access to the Mac app for all</li>
                  <li>A shared Cloud workspace</li>
                  <li>Free Cloud access to unlim</li>
                  <li>Easy team management</li>
                  <li>No license key required</li>
                </ul>
              </div>
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
