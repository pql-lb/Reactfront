  statusChangeCallback = (response) => {
    const {status} = response;
    console.log(status)
    return new Promise((res, rej) => {
      if (status === 'not_authorized' || status === 'unknown') {
        console.log('not connected', window.FB, this)
        return window.FB.login((response2) => {
          console.log('response', response2)
          this.props.setAccess(response2.authResponse.accessToken)
          return res(response2.authResponse)  
        })
      } else {
        console.log('connect')
        //Should not be showing button in this scenario - just process access token and quickly redirect
        this.props.setAccess(response.authResponse.accessToken)
        res(response.authResponse)
      }
   })
  }









  if (window.FB) {
    console.log('window exists')
    //Could set state to make custom button appear
    //FB button likely not appearing due to window.FB?
      let fire = this.checkLoginState.bind(this)
      fire()
      .then((response) => {
        console.log('res1', response)
        let fire2 = this.statusChangeCallback.bind(this)
        fire2(response)
        .then(res => {
          console.log('res2', res, this.props.accessToken)
          //TEST API CALL
          new Promise((res, rej) => {
              window.FB.api('/me/accounts?fields=id', (response) => {
                  console.log('res',response)
                  if (response) {
                    res()
                  } else {
                    rej()
                  }
              })
          })
          .then(() => {
            if(this.props.accessToken.length > 1) {
              console.log('here')
              this.setState({redirect: true})
              console.log('redirect', this.state.redirect)
              setTimeout(() => {this.forceUpdate()}, 1000)
            }
          })
          
        })
      })
  } else {