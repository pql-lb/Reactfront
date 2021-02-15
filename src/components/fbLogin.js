import React from 'react';

class FbLogin extends React.Component {
  loadFbApi() {
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        console.log('fb sdk loaded')
    }(document, 'script', 'facebook-jssdk'));

    const statusChangeCallback = (response) => {
        console.log(response)
        const {status} = response
        if (status === 'not_authorized' || status === 'unknown') {
            //window.FB.login()
            this.setState({
              fbButton: true
            })
        } else {
            this.setState({
              fbButton: false
        })
      }}

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
          statusChangeCallback(response)
    });
    // window.fbAsyncInit()
    }}
    componentDidMount() {
        this.loadFbApi()
    }
    checkLoginState = () => {
        window.FB.getLoginStatus(function(response) {
        // statusChangeCallback(response);
        });
    }
    handleClick = () => {
      console.log('hey')
    }
    render() {
        return (
            <React.Fragment>
                <div id="fb-root">
                  <div 
                  data-onlogin={this.handleClick}
                  className="fb-login-button" 
                  data-width="300" 
                  data-size="large" 
                  data-button-type="continue_with" 
                  data-layout="default" 
                  data-auto-logout-link="false" 
                  data-use-continue-as="false"
                  scope='read_insights,instagram_basic,pages_show_list,instagram_manage_comments,instagram_manage_insights,pages_read_engagement' 
                  >
                  </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FbLogin;