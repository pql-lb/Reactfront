(this.webpackJsonphere=this.webpackJsonphere||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(21),o=n.n(a),i=(n(28),n(15)),r=n(23),l=n(12),d=n(7),u=n(8),j=n(10),b=n(9),g=(n(29),n(30),n(2)),h=n(13),O=n(0),f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={redirect:!1},e.statusChangeCallback=function(t){var n=t.status;return console.log(n),new Promise((function(s,c){"not_authorized"===n||"unknown"===n?window.FB.login((function(t){e.props.setAccess(t.authResponse.accessToken),s(t.authResponse)})):(e.props.setAccess(t.authResponse.accessToken),s(t.authResponse))}))},e.checkLoginState=function(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))},e}return Object(u.a)(n,[{key:"loadFbApi",value:function(){return new Promise((function(e,t){!function(e,t,n){var s,c=e.getElementsByTagName(t)[0];e.getElementById(n)||((s=e.createElement(t)).id=n,s.src="//connect.facebook.net/en_US/sdk.js",c.parentNode.insertBefore(s,c))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()}}))}},{key:"componentDidMount",value:function(){var e=this;(console.log("mount",window.FB),window.FB)?(console.log("window exists"),this.checkLoginState.bind(this)().then((function(t){console.log("res1",t),e.statusChangeCallback.bind(e)(t).then((function(t){console.log("res2",t,e.props.accessToken),e.props.accessToken.length>1&&(console.log("here"),e.setState({redirect:!0}),console.log("redirect",e.state.redirect),setTimeout((function(){e.forceUpdate()}),1e3))}))}))):this.loadFbApi().then((function(){e.checkLoginState.bind(e)().then((function(t){console.log("res1",t),e.statusChangeCallback.bind(e)(t).then((function(t){console.log("res2",t,e.props.accessToken),e.props.accessToken.length>1&&(console.log("here"),e.setState({redirect:!0}),console.log("redirect",e.state.redirect),setTimeout((function(){e.forceUpdate()}),1e3))}))}))}))}},{key:"render",value:function(){var e=this.props.loggedIn,t=this.state.redirect;return console.log("logged in",e,t),Object(O.jsxs)(c.a.Fragment,{children:[!0===t?Object(O.jsx)(g.a,{to:"/dashboard"}):null,Object(O.jsx)("div",{id:"fb-root",children:Object(O.jsx)("div",{"data-onlogin":function(){return console.log("data login")},className:"fb-login-button","data-width":"300","data-size":"large","data-button-type":"continue_with","data-layout":"default","data-auto-logout-link":"false","data-use-continue-as":"false",scope:"read_insights,instagram_basic,pages_show_list,instagram_manage_comments,instagram_manage_insights,pages_read_engagement"})})]})}}]),n}(c.a.Component),p=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",submitRedirectFb:!1},e.handleChange=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){e.state.email.length>2&&e.state.password.length>2&&e.setState({submitRedirectFb:!0})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,s=t.password,a=t.submitRedirectFb;return Object(O.jsxs)(c.a.Fragment,{children:[!0===a?Object(O.jsx)(g.a,{to:"/fb"}):null,Object(O.jsx)("h1",{children:"Sign In"}),Object(O.jsx)("span",{className:"alert"}),Object(O.jsx)("label",{children:"Email:"}),Object(O.jsx)("input",{id:"email",value:n,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(O.jsx)("label",{children:"Password:"}),Object(O.jsx)("input",{id:"password",value:s,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(O.jsxs)("div",{className:"btnContain",children:[Object(O.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(O.jsxs)("div",{className:"lds-defaultTwo",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]}),Object(O.jsx)("span",{className:"loginTxt",children:"LOGIN"})]}),Object(O.jsx)("button",{className:"btn signup",children:Object(O.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(c.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={loggedOut:!1},e.logout=function(){window.FB.logout((function(e){console.log("loggedout",e)})),e.props.redirectPage(!1),setTimeout((function(){e.setState({loggedOut:!0})}),2e3)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.loggedOut,t=this.props.accessToken;return console.log("at",t,window.FB),Object(O.jsxs)(c.a.Fragment,{children:[!0===e?Object(O.jsx)(g.a,{to:"/"}):null,Object(O.jsx)("button",{onClick:this.logout,children:"Logout"})]})}}]),n}(c.a.Component),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state=Object(l.a)({loggedIn:!1,accessToken:""},"loggedIn",!1),e.redirectPage=function(t){e.setState({loggedIn:t})},e.setAccess=function(t){e.setState({accessToken:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.loggedIn,n=e.accessToken,s=function(e){var t=e.component,s=Object(r.a)(e,["component"]);return Object(O.jsx)(g.b,Object(i.a)(Object(i.a)({},s),{},{render:function(e){return void 0!==n?Object(O.jsx)(t,Object(i.a)({},e)):Object(O.jsx)(g.a,{to:{pathname:"/",state:{from:e.location}}})}}))};return Object(O.jsx)(h.a,{basename:"/",children:Object(O.jsxs)(g.d,{children:[Object(O.jsx)(g.b,{exact:!0,path:"/",children:Object(O.jsx)("div",{className:"form",children:Object(O.jsx)("div",{className:"rowMine",children:Object(O.jsx)(p,{showBtn:this.showBtn})})})}),Object(O.jsx)(g.b,{path:"/fb",children:Object(O.jsx)("div",{className:"form",children:Object(O.jsx)("div",{className:"rowMine",children:Object(O.jsx)(f,{loggedIn:t,redirectPage:this.redirectPage,setAccess:this.setAccess,accessToken:n})})})}),Object(O.jsx)(s,{path:"/dashboard",component:m})]})})}}]),n}(c.a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),x()}},[[37,1,2]]]);
//# sourceMappingURL=main.1838d743.chunk.js.map