import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      
      <div>
      <section class="carousel_bottom" aria-label="Gallery">
        <ol class="carousel_bottom__viewport">
          <li id="carousel_bottom__slide1"
            tabindex="0"
            class="carousel_bottom__slide">
            <div class="carousel_bottom__snapper"
            >

            </div>
          </li>
          <li id="carousel_bottom__slide2"
            tabindex="0"
            class="carousel_bottom__slide">
            <div class="carousel_bottom__snapper"></div>
            <a href="#carousel_bottom__slide1"
              class="carousel_bottom__prev"> </a>
            <a href="#carousel_bottom__slide3"
              class="carousel_bottom__next"> </a>
          </li>
          <li id="carousel_bottom__slide3"
            tabindex="0"
            class="carousel_bottom__slide"
          >
            <div class="carousel_bottom__snapper"></div>
            <a href="#carousel_bottom__slide2"
              class="carousel_bottom__prev"> </a>
            <a href="#carousel_bottom__slide4"
              class="carousel_bottom__next"> </a>
          </li>
          <li id="carousel_bottom__slide4"
            tabindex="0"
            class="carousel_bottom__slide">
            <div class="carousel_bottom__snapper"></div>
            <a href="#carousel_bottom__slide3"
              class="carousel_bottom__prev"> </a>
            <a href="#carousel_bottom__slide1"
              class="carousel_bottom__next"></a>
          </li>
        </ol>
      </section>
      </div>

      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="express"
            src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="discover"
            src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
