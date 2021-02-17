import React from 'react';
import {Redirect} from 'react-router-dom';

class FbLogin extends React.Component {
  state = {
    redirect: false
  }

   checkLoginState = () => {
     return new Promise((res, rej) => {
        window.FB.getLoginStatus(function(response) {
            res(response)
        });
      })
    }
  loadFbApi() {
    return new Promise((res, rej) => {
      if (!window.FB) { 
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
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
              console.log('fired')
              res()
        } 
      } else {
          res()
      }
      })
    }
    login = () => {
      return new Promise((resolve2, rej) => {
        window.FB.login(function(res) {
          console.log('logged in', res.authResponse.accessToken)
          let access = res.authResponse.accessToken;
          resolve2(access)
        })
      })
    }
    statusChange = (response) => {
      return new Promise(async (resolve, rej) => {
        if (response.status === 'unknown'||response.status === 'not_authorized') {  
            this.login()
            .then(access => {
              this.props.redirectPageLogout(false)
              this.props.setAccess(access)
              localStorage.setItem('access', access)
              resolve(access)
            })
        } else {
          //Should NOT be showing btn in this condition
            this.props.redirectPageLogout(false)
            this.props.setAccess(response.authResponse.accessToken)
            localStorage.setItem('access', response.authResponse.accessToken)
            resolve(response.authResponse.accessToken)
        }            
      })
    }
    testAPI = () => {
      return new Promise((res, rej) => {
        window.FB.getLoginStatus(resp => {
          console.log(resp)
            window.FB.api('/me/accounts?fields=id', {access_token: resp.authResponse.accessToken}, (response) => {
                console.log('RESPONSE',response)
                if (response) {
                  res()
                } else {
                  rej()
                }
            })
        })
      })
    }

    componentDidMount() {
      //THIS SHOULD ONLY FIRE IS THERE IS A COOKIE
      let cookie = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
      if (cookie) {
        this.loadFbApi()
        .then(() => {
          let fire = this.checkLoginState.bind(this)
          fire()
          .then(async (response) => {
            let fire2 = this.statusChange.bind(this)
            fire2(response)
            .then(access => {
            console.log('a',access)
            if (access) {
              this.testAPI()
              .then(() => {
                if(this.props.accessToken.length > 1) {
                  console.log('here')
                  this.props.redirectPage(true)
                  console.log('redirect', this.props.login)
                  setTimeout(() => {this.forceUpdate()}, 1000)
                }
              })
              .catch(err => console.log('err with test call', err))
            }
          })
          .catch(err => console.log('err with status change', err))
        })
        .catch(err => console.log('err with check login', err))
      })
     }
    }



    render() {
      const {loggedIn} = this.props;
      console.log('You are on fb page, loggedIn:', loggedIn)
      let cookie = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
      if (cookie) {
        return (
            <React.Fragment>
              {loggedIn === true ? <Redirect to="/dashboard" /> : null}
                <div id="fb-root">
                  {/* <div onClick={this.handleClick}>FACEBOOK */}
                  <div 
                  data-onlogin={() => console.log('data login')}
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
      } else {
        return (
          <div>No cookie exists please login first</div>
        )
      }
    }
}

export default FbLogin;