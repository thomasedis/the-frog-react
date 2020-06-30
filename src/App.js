import React from 'react';

import HeaderTop from './components/HeaderTop'
import Header from './components/Header';
import Menu from './components/Menu';
import HomeBanner from './components/HomeBanner';
import Content from './components/Content';
import Selling from './components/Selling';
import Deal from './components/Deal';
import Tips from './components/Tips';
import FooterBanner from './components/FooterBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
  {/* Header Top */}
  <HeaderTop />
  {/* Header */}
    <Header/>
  {/* Menu */}
    <Menu/>
  {/* Home Banner */}
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
  {/* footer */}
    <Footer/>
  </div>

    </div>
  );
}

export default App;
