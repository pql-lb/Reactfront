import React from 'react';
import Hashtags from './hashtags';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import {loadFbApi, testAPI, checkLoginState} from '../utils/helpers'; 



class Logout extends React.Component {
    state = {
        loggedOut: false
    }
    logout = async () => {
        checkLoginState()
        .then(resp => {
            if (resp) {
                window.FB.logout(res => {console.log('loggedout', res)})
            }
        })
        //DESTROY COOKIE AND ACCESS IN LS??
        let name = "token"; let expires =  "Thu, 01 Jan 1970 00:00:01 GMT";
        let cookie = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
        document.cookie = name + "=" + cookie[0] + ";expires=" + expires + ";path=/"
        localStorage.removeItem('access');
        this.props.redirectPage(false)
        setTimeout(() => {
            this.props.redirectPageLogout(true)
        }, 2000)
    }
    componentDidMount() {
        // Reloaded dashboard as cookie exists but no window.FB
        if (!window.FB) {
            loadFbApi()
            .then(() => checkLoginState())
            .then(resp => {
                if (resp) {
                    console.log('You are logged in to fb')
                    this.forceUpdate()
                } else {
                    new Error('You are not logged in to fb')
                }
            })
            .catch(err => console.log('Component did mount', err))
        }
    }
    render() {
    //   const {loggedOut} = this.state;
      const {accessToken, loggedOut} = this.props;
      console.log('at new', this.props, this.state)
        return (
            <React.Fragment>
              {loggedOut === true ? <Redirect to="/" /> : null}
                <div className="btnContainLog">
                <button
                className="btn"
                onClick={this.logout}
                >Logout</button>
                </div>

                <div className="dash">
                    {window.FB &&
                        <Hashtags />
                    }
                </div>
                
            </React.Fragment>
        )
    }
}

export default Logout;