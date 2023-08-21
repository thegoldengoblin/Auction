import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import '../css/About.css';
import img from '../images/about.png'

const AboutUs = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: '40px' }}>
      
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
    <div class="imgContainer">
     
      <img class="mainImg" src="https://i.ibb.co/vktW6ZG/Salesprint-logos-black.png"/>
    </div>
    <div class="responsive-container-block textSide">
      <p class="text-blk heading">
        About Us
      </p>
      <p class="text-blk subHeading">
      At our Auction Site, we bring buyers and sellers together in an exciting and dynamic online marketplace. Our platform offers a unique and engaging experience, where users can participate in thrilling auctions and discover a wide range of items up for bid.
</p>
<p class="text-blk subHeading">
Our mission is to provide a secure and user-friendly environment that fosters trust and transparency. We value the satisfaction and safety of our users above all else, ensuring a smooth and enjoyable auction experience for everyone.
      </p>
      
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="https://i.ibb.co/6gd0tTz/value.png"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            True Value
          </p>
          <p class="text-blk cardSubHeading">
            We thrive to give maximum price
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="https://i.ibb.co/q1p80ts/search.png"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
          Transparency 
          </p>
          <p class="text-blk cardSubHeading">
            Realtime bidding,no more middlemens.
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="https://i.ibb.co/M6vzcjv/global-connection.png"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            Global
          </p>
          <p class="text-blk cardSubHeading">
           Connect with wast community
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="https://i.ibb.co/7bydY4P/verify.png"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            Verified
          </p>
          <p class="text-blk cardSubHeading">
            Certified products,no more frauds.
          </p>
        </div>
      </div>
      <a>
      </a>
    </div>
  </div>
</div>
          
      
    </Container>
  );
};

export default AboutUs;
