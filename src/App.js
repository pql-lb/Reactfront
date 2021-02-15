import './App.css';
import React from 'react';

class App extends React.Component {
  loadFbApi() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            console.log('fb sdk loaded')
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function() {
          let FB_APP_ID = 1796391010517069;
          window.FB.init({
              appId      : FB_APP_ID,
              cookie     : true, 
              // the session
              xfbml      : true, 
              version    : 'v9.0' 
          })
          window.FB.AppEvents.logPageView();
          window.FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response)
          });
          // window.fbAsyncInit()
 
        }
  }
  statusChangeCallback(response) {
    console.log(response)
  }
  componentDidMount() {
    this.loadFbApi()
  }


  render() {
  return (
    <div className="App">

    Here


    </div>
  )
  }
}

export default App;
