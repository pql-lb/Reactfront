(this.webpackJsonphere=this.webpackJsonphere||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),s=n(23),c=n.n(s),i=(n(30),n(16)),r=n(25),l=n(7),u=n(8),d=n(10),g=n(9),h=(n(31),n(32),n(2)),b=n(12),j=n(0),p=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={redirect:!1},e.statusChangeCallback=function(t){var n=t.status;return console.log(n),new Promise((function(o,a){"not_authorized"===n||"unknown"===n?window.FB.login((function(t){e.props.setAccess(t.authResponse.accessToken),o(t.authResponse)})):(e.props.setAccess(t.authResponse.accessToken),o(t.authResponse))}))},e.checkLoginState=function(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))},e}return Object(u.a)(n,[{key:"loadFbApi",value:function(){return new Promise((function(e,t){!function(e,t,n){var o,a=e.getElementsByTagName(t)[0];e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="//connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(o,a))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()}}))}},{key:"componentDidMount",value:function(){var e=this;(console.log("mount",window.FB),window.FB)?(console.log("window exists"),this.checkLoginState.bind(this)().then((function(t){console.log("res1",t),e.statusChangeCallback.bind(e)(t).then((function(t){console.log("res2",t,e.props.accessToken),new Promise((function(e,t){window.FB.api("/me/accounts?fields=id",(function(n){console.log(n),n?e():t()}))}))}))}))):this.loadFbApi().then((function(){e.checkLoginState.bind(e)().then((function(t){console.log("res1",t),e.statusChangeCallback.bind(e)(t).then((function(t){console.log("res2",t,e.props.accessToken),new Promise((function(e,t){window.FB.api("/me/accounts?fields=id",(function(n){console.log(n),n?e():t()}))}))}))}))}))}},{key:"render",value:function(){var e=this.props.loggedIn,t=this.state.redirect;return console.log("logged in",e,t),Object(j.jsxs)(a.a.Fragment,{children:[!0===t?Object(j.jsx)(h.a,{to:"/dashboard"}):null,Object(j.jsx)("div",{id:"fb-root",children:Object(j.jsx)("div",{"data-onlogin":function(){return console.log("data login")},className:"fb-login-button","data-width":"300","data-size":"large","data-button-type":"continue_with","data-layout":"default","data-auto-logout-link":"false","data-use-continue-as":"false",scope:"read_insights,instagram_basic,pages_show_list,instagram_manage_comments,instagram_manage_insights,pages_read_engagement"})})]})}}]),n}(a.a.Component),f=n(14),m=n.n(f),O=n(21),v=n(15),x=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" "},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,o=t.password;t.invalidLogin;if(n.length>1&&o.length>1){var a={email:n,password:o};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(O.a)(m.a.mark((function t(n){var o,a,s,c,i,r,l,u,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(n,e.state.invalidLogin),!1!==e.state.invalidLogin){t.next=24;break}return"token",o=(new Date).getTime(),a=o+6e4,document.cookie="token="+n.token+";expires="+a+";path=/",s=document.cookie.match(new RegExp("(^| )token=([^;]+)")),c=s[0].split("="),i=c[1],console.log("bearer",i),r=new FormData,t.next=13,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 13:return l=t.sent,t.next=16,l.blob();case 16:u=t.sent,d=new File([u],"test.jpg",{type:"image/jpeg"}),r.append("image",d),console.log("formData",r,d),new Promise((function(t,o){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:r,headers:{Authorization:"Bearer ".concat(i)}}).then(function(){var a=Object(O.a)(m.a.mark((function a(s){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("here",s),200!==s.status){a.next=5;break}t(),a.next=11;break;case 5:if(403!==s.status){a.next=10;break}return a.next=8,s.json();case 8:n=a.sent,e.setState({errorMsg:n.Error});case 10:o();case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){setTimeout((function(){}),1e3)})).catch((function(e){return console.log(e)})),t.next=26;break;case 24:console.log("error"),e.setState({errorMsg:n.Error});case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,o=t.password,s=t.submitRedirectFb,c=t.invalidLogin,i=t.errorMsg;return Object(j.jsxs)(a.a.Fragment,{children:[!0===s&&!1===c?Object(j.jsx)(h.a,{to:"/fb"}):null,Object(j.jsx)("h1",{children:"Sign In"}),Object(j.jsx)("span",{className:"alert",children:i}),Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{id:"email",value:n,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(j.jsx)("label",{children:"Password:"}),Object(j.jsx)("input",{id:"password",value:o,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(j.jsxs)("div",{className:"btnContain",children:[Object(j.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(j.jsxs)("div",{className:"lds-defaultTwo",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]}),Object(j.jsx)("span",{className:"loginTxt",children:"LOGIN"})]}),Object(j.jsx)("button",{className:"btn signup",children:Object(j.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(a.a.Component);function w(){var e=Object(h.g)(),t=Object(h.h)();return console.log(e,t),Object(j.jsx)("div",{})}var k=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={loggedOut:!1},e.logout=function(){window.FB.logout((function(e){console.log("loggedout",e)})),e.props.redirectPage(!1),setTimeout((function(){e.setState({loggedOut:!0})}),2e3)},e}return Object(u.a)(n,[{key:"render",value:function(){this.state.loggedOut,this.props.accessToken;return console.log("at new",this.props),Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("button",{onClick:this.logout,children:"Logout"}),Object(j.jsx)(w,{})]})}}]),n}(a.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,accessToken:""},e.redirectPage=function(t){e.setState({loggedIn:t})},e.setAccess=function(t){e.setState({accessToken:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.loggedIn,n=e.accessToken,o=function(e){var t=e.component,o=Object(r.a)(e,["component"]);return Object(j.jsx)(h.b,Object(i.a)(Object(i.a)({},o),{},{render:function(e){return n.length>2?Object(j.jsx)(t,Object(i.a)({},e)):Object(j.jsx)(h.a,{to:{pathname:"/",state:{from:e.location}}})}}))};return Object(j.jsx)(b.a,{basename:"/",children:Object(j.jsxs)(h.d,{children:[Object(j.jsx)(h.b,{exact:!0,path:"/",children:Object(j.jsx)("div",{className:"form",children:Object(j.jsx)("div",{className:"rowMine",children:Object(j.jsx)(x,{showBtn:this.showBtn})})})}),Object(j.jsx)(h.b,{path:"/fb",children:Object(j.jsx)("div",{className:"form",children:Object(j.jsx)("div",{className:"rowMine",children:Object(j.jsx)(p,{loggedIn:t,redirectPage:this.redirectPage,setAccess:this.setAccess,accessToken:n})})})}),Object(j.jsx)(o,{component:k,path:"/dashboard",redirectPage:this.redirectPage,accessToken:n})]})})}}]),n}(a.a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),_()}},[[40,1,2]]]);
//# sourceMappingURL=main.67ce9c38.chunk.js.map