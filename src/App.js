import React from 'react';
import Notifications from 'react-notify-toast';
import Footer from './components/home/Footer';
import Menu from './components/home/Menu';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FooterBanner from './components/home/FooterBanner';

function App() {

  function  showContentMenu(routes){
    var result = null
    if(routes.length > 0){
      result = routes.map((route, index)=>{
        return(
            <Route key={index} path={route.path} exact={route.exact} component={route.main}/>  
          )
      })
    }
    return result
  } 

  return (
    <Router>   
     <Notifications/>
      <Menu/>
      <Switch>
         {showContentMenu(routes)}
      </Switch>
      <FooterBanner/>
      <Footer/>
    </Router>   
  );
}

export default App;
