(this.webpackJsonphere=this.webpackJsonphere||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(20),i=n.n(s),o=(n(26),n(14)),r=n(7),l=n(8),d=n(10),u=n(9),j=(n(27),n(28),n(12)),b=n(2),g=n(1),h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.fireLogin=function(){console.log("firelogin"),window.FB.login((function(t){var n=t.authResponse;if(n){var a=n.accessToken;e.props.setAccess(a),setTimeout((function(){e.setState({redirect:!0})}),2e3)}}))},e.statusChangeCallback=function(t){var n=t.status;console.log(n),"not_authorized"===n||"unknown"===n?window.FB.login((function(t){var n=t.authResponse;if(n){var a=n.accessToken;e.props.setAccess(a),setTimeout((function(){e.setState({redirect:!0})}),2e3)}})):e.setState({redirect:!0})},e.checkLoginState=function(){return console.log(window.FB),new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))},e}return Object(l.a)(n,[{key:"loadFbApi",value:function(){return new Promise((function(e,t){!function(e,t,n){var a,c=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="//connect.facebook.net/en_US/sdk.js",c.parentNode.insertBefore(a,c))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),e()}}))}},{key:"componentDidMount",value:function(){var e=this;this.loadFbApi().then((function(){console.log("mount",e.checkLoginState),e.checkLoginState.bind(e)()})).then((function(t){e.statusChangeCallback.bind(e)(t)}))}},{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"render",value:function(){var e=this.props.loggedIn,t=this.state.redirect;return console.log("logged in",e,t),Object(g.jsxs)(c.a.Fragment,{children:[!0===t?Object(g.jsx)(b.a,{to:"/dashboard"}):null,Object(g.jsx)("div",{id:"fb-root",children:Object(g.jsx)("div",{"data-onlogin":function(){return console.log("data login")},className:"fb-login-button","data-width":"300","data-size":"large","data-button-type":"continue_with","data-layout":"default","data-auto-logout-link":"false","data-use-continue-as":"false",scope:"read_insights,instagram_basic,pages_show_list,instagram_manage_comments,instagram_manage_insights,pages_read_engagement"})})]})}}]),n}(c.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",submitRedirectFb:!1},e.handleChange=function(t){e.setState(Object(o.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){e.state.email.length>2&&e.state.password.length>2&&e.setState({submitRedirectFb:!0})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,a=t.password,s=t.submitRedirectFb;return Object(g.jsxs)(c.a.Fragment,{children:[!0===s?Object(g.jsx)(b.a,{to:"/fb"}):null,Object(g.jsx)("h1",{children:"Sign In"}),Object(g.jsx)("span",{className:"alert"}),Object(g.jsx)("label",{children:"Email:"}),Object(g.jsx)("input",{id:"email",value:n,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(g.jsx)("label",{children:"Password:"}),Object(g.jsx)("input",{id:"password",value:a,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(g.jsxs)("div",{className:"btnContain",children:[Object(g.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(g.jsxs)("div",{className:"lds-defaultTwo",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]}),Object(g.jsx)("span",{className:"loginTxt",children:"LOGIN"})]}),Object(g.jsx)("button",{className:"btn signup",children:Object(g.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(c.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loggedOut:!1},e.logout=function(){window.FB.logout((function(e){console.log("loggedout",e)})),e.props.redirectPage(!1),setTimeout((function(){e.setState({loggedOut:!0})}),2e3)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.loggedOut;return Object(g.jsxs)(c.a.Fragment,{children:[!0===e?Object(g.jsx)(b.a,{to:"/"}):null,Object(g.jsx)("button",{onClick:this.logout,children:"Logout"})]})}}]),n}(c.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=Object(o.a)({loggedIn:!1,accessToken:""},"loggedIn",!1),e.redirectPage=function(t){e.setState({loggedIn:t})},e.setAccess=function(t){e.setState({accessToken:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.loggedIn;return Object(g.jsx)(j.a,{basename:"/",children:Object(g.jsxs)(b.d,{children:[Object(g.jsx)(b.b,{exact:!0,path:"/",children:Object(g.jsx)("div",{className:"form",children:Object(g.jsx)("div",{className:"rowMine",children:Object(g.jsx)(f,{showBtn:this.showBtn})})})}),Object(g.jsx)(b.b,{path:"/fb",children:Object(g.jsx)("div",{className:"form",children:Object(g.jsx)("div",{className:"rowMine",children:Object(g.jsx)(h,{loggedIn:e,redirectPage:this.redirectPage,setAccess:this.setAccess})})})}),Object(g.jsx)(b.b,{path:"/dashboard",children:Object(g.jsx)(c.a.Fragment,{children:Object(g.jsx)(O,{redirectPage:this.redirectPage})})})]})})}}]),n}(c.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(m,{})}),document.getElementById("root")),p()}},[[35,1,2]]]);
//# sourceMappingURL=main.ccc9acd2.chunk.js.map