(this.webpackJsonphere=this.webpackJsonphere||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(23),c=n.n(s),r=(n(30),n(17)),i=n(25),l=n(8),u=n(9),d=n(11),h=n(10),g=(n(31),n(32),n(2)),b=n(14),j=n(7),p=n.n(j),f=n(13),m=n(0),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={redirect:!1},e.checkLoginState=function(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))},e}return Object(u.a)(n,[{key:"loadFbApi",value:function(){return new Promise((function(e,t){!function(e,t,n){var a,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()}}))}},{key:"componentDidMount",value:function(){var e=this;this.loadFbApi().then((function(){e.checkLoginState.bind(e)().then(function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(f.a)(p.a.mark((function t(a,o){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("unknown"!==n.status&&"not_authorized"!==n.status){t.next=5;break}console.log("here"),new Promise((function(e,t){window.FB.login((function(t){console.log("logged in",t.authResponse.accessToken);var n=t.authResponse.accessToken;e(n)}))})).then((function(t){e.props.setAccess(t),a(t)})),t.next=9;break;case 5:return console.log("already logged in",n),t.next=8,e.props.setAccess(n.authResponse.accessToken);case 8:a(n.authResponse.accessToken);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()).then((function(t){console.log("a",t),t&&new Promise((function(e,t){window.FB.getLoginStatus((function(n){console.log(n),window.FB.api("/me/accounts?fields=id",{access_token:n.authResponse.accessToken},(function(n){console.log("RESPONSE",n),n?e():t()}))}))})).then((function(){e.props.accessToken.length>1&&(console.log("here"),e.setState({redirect:!0}),console.log("redirect",e.state.redirect),setTimeout((function(){e.forceUpdate()}),1e3))})).catch((function(e){return console.log(e)}))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))}},{key:"render",value:function(){var e=this.props.loggedIn,t=this.state.redirect;return console.log("new",e,t),Object(m.jsxs)(o.a.Fragment,{children:[!0===t?Object(m.jsx)(g.a,{to:"/dashboard"}):null,Object(m.jsx)("div",{id:"fb-root",children:Object(m.jsx)("div",{"data-onlogin":function(){return console.log("data login")},className:"fb-login-button","data-width":"300","data-size":"large","data-button-type":"continue_with","data-layout":"default","data-auto-logout-link":"false","data-use-continue-as":"false",scope:"read_insights,instagram_basic,pages_show_list,instagram_manage_comments,instagram_manage_insights,pages_read_engagement"})})]})}}]),n}(o.a.Component),v=n(16),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" "},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,a=t.password;t.invalidLogin;if(n.length>1&&a.length>1){var o={email:n,password:a};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(f.a)(p.a.mark((function t(n){var a,o,s,c,r,i,l,u,d,h;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.Error,console.log(n,e.state.invalidLogin,a),!1!==e.state.invalidLogin||a){t.next=25;break}return"token",o=(new Date).getTime(),s=o+6e4,document.cookie="token="+n.token+";expires="+s+";path=/",c=document.cookie.match(new RegExp("(^| )token=([^;]+)")),r=c[0].split("="),i=r[1],console.log("bearer",i),l=new FormData,t.next=14,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 14:return u=t.sent,t.next=17,u.blob();case 17:d=t.sent,h=new File([d],"test.jpg",{type:"image/jpeg"}),l.append("image",h),console.log("formData",l,h),new Promise((function(t,a){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:l,headers:{Authorization:"Bearer ".concat(i)}}).then(function(){var o=Object(f.a)(p.a.mark((function o(s){return p.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(console.log("here",s),200!==s.status){o.next=5;break}t(),o.next=11;break;case 5:if(403!==s.status){o.next=10;break}return o.next=8,s.json();case 8:n=o.sent,e.setState({errorMsg:n.Error});case 10:a();case 11:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){setTimeout((function(){e.setState({submitRedirectFb:!0})}),1e3)})).catch((function(e){return console.log(e)})),t.next=27;break;case 25:console.log("error"),e.setState({errorMsg:n.Error});case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly."})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,a=t.password,s=t.submitRedirectFb,c=t.invalidLogin,r=t.errorMsg;return Object(m.jsxs)(o.a.Fragment,{children:[!0===s&&!1===c?Object(m.jsx)(g.a,{to:"/fb"}):null,Object(m.jsx)("h1",{children:"Sign In"}),Object(m.jsx)("span",{className:"alert",children:r}),Object(m.jsx)("label",{children:"Email:"}),Object(m.jsx)("input",{id:"email",value:n,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(m.jsx)("label",{children:"Password:"}),Object(m.jsx)("input",{id:"password",value:a,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(m.jsxs)("div",{className:"btnContain",children:[Object(m.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(m.jsxs)("div",{className:"lds-defaultTwo",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]}),Object(m.jsx)("span",{className:"loginTxt",children:"LOGIN"})]}),Object(m.jsx)("button",{className:"btn signup",children:Object(m.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(o.a.Component);function w(){var e=Object(g.g)(),t=Object(g.h)();return console.log(e,t),Object(m.jsx)("div",{})}var k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={loggedOut:!1},e.logout=function(){window.FB.logout((function(e){console.log("loggedout",e)})),e.props.redirectPage(!1),setTimeout((function(){e.setState({loggedOut:!0})}),2e3)},e}return Object(u.a)(n,[{key:"render",value:function(){this.state.loggedOut,this.props.accessToken;return console.log("at new",this.props),Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)("button",{onClick:this.logout,children:"Logout"}),Object(m.jsx)(w,{})]})}}]),n}(o.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={loggedIn:!1,accessToken:""},e.redirectPage=function(t){e.setState({loggedIn:t})},e.setAccess=function(t){e.setState({accessToken:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.loggedIn,n=e.accessToken,a=function(e){var t=e.component,a=Object(i.a)(e,["component"]);return Object(m.jsx)(g.b,Object(r.a)(Object(r.a)({},a),{},{render:function(e){return n.length>2?Object(m.jsx)(t,Object(r.a)({},e)):Object(m.jsx)(g.a,{to:{pathname:"/",state:{from:e.location}}})}}))};return Object(m.jsx)(b.a,{basename:"/",children:Object(m.jsxs)(g.d,{children:[Object(m.jsx)(g.b,{exact:!0,path:"/",children:Object(m.jsx)("div",{className:"form",children:Object(m.jsx)("div",{className:"rowMine",children:Object(m.jsx)(x,{showBtn:this.showBtn})})})}),Object(m.jsx)(g.b,{path:"/fb",children:Object(m.jsx)("div",{className:"form",children:Object(m.jsx)("div",{className:"rowMine",children:Object(m.jsx)(O,{loggedIn:t,redirectPage:this.redirectPage,setAccess:this.setAccess,accessToken:n})})})}),Object(m.jsx)(a,{component:k,path:"/dashboard",redirectPage:this.redirectPage,accessToken:n})]})})}}]),n}(o.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),S()}},[[40,1,2]]]);
//# sourceMappingURL=main.c0f15b1b.chunk.js.map