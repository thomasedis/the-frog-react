import React from 'react';




import HomeBanner from './HomeBanner';
import Content from './Content';
import Selling from './Selling';
import Deal from './Deal';
import Tips from './Tips';
import FooterBanner from './FooterBanner';


function Home() {
  return (
    <div className="Home">
       
        <HomeBanner/>
        <div className="wrapper-content-selling">
            {/* Content */}
                <Content/>
            {/* Selling */}
                <Selling/>
        </div>
  
        <div className="backround-deal-tips">
            {/* Deal */}
            <Deal/>
            {/* Tips */}
            <Tips/>
        </div>
        {/* footer-banner */}
            <FooterBanner/>
        </div>
  );
}

export default Home;
