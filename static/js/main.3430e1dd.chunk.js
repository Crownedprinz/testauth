(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var o=n(9),i=n(10),l=n(15),a=n(11),c=n(16),u=n(2),s=n.n(u),r=n(12),p=n.n(r),h=(n(23),n(3)),d=function(e){function t(e){return Object(o.a)(this,t),console.log("call constructor"),Object(l.a)(this,Object(a.a)(t).call(this,e))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setupStitch(),console.log("component Did mount running")}},{key:"setupStitch",value:function(){console.log("setup stitch latest");var e="authentication_test-htbrq",t=h.b.hasAppClient(e)?h.b.defaultAppClient:h.b.initializeDefaultAppClient(e);if(t.auth.hasRedirectResult()&&t.auth.handleRedirectResult().then(function(e){console.log(e)}),t.auth.isLoggedIn)console.log("stitch client logged in"),console.log(t.auth.user.profile),this.setState({user:t.auth.user.profile});else{var n=new h.a;h.b.defaultAppClient.auth.loginWithRedirect(n)}}},{key:"componentDidUpdate",value:function(){console.log("component updated")}},{key:"render",value:function(){return s.a.createElement("div",{className:"user"},s.a.createElement("pre",null,this.state.user))}}]),t}(s.a.Component);p.a.render(s.a.createElement(d,null),document.getElementById("root"))},23:function(e,t,n){}},[[17,2,1]]]);
//# sourceMappingURL=main.3430e1dd.chunk.js.map