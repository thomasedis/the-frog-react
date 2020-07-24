import React, {useEffect} from 'react';
import Notifications from 'react-notify-toast';
import Footer from './components/home/Footer';
import Menu from './components/home/Menu';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import FooterBanner from './components/home/FooterBanner';
import MessengerCustomerChat from 'react-messenger-customer-chat';
function App() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
      <MessengerCustomerChat
      pageId="103209014809754"
      appId="1176651109373972"
      htmlRef="<REF_STRING>"
    />
    </Router>   
  );
}

export default App;
