(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(9),i=n.n(c),s=n(16),r=n(7),l=n(3),u={aadResponse:null},h=Object(l.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AAD_LOGIN_SUCCESS":return Object(r.a)({},e,{aadResponse:t.payload});case"AAD_LOGOUT_SUCCESS":return Object(r.a)({},e,{aadResponse:null});default:return e}}),d=(n(28),n(13)),f=n(14),p=n(17),m=n(15),b=n(18),g=(n(29),n(30),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).getSchoolDetails=function(){fetch("http://localhost:5000/getSchoolName?username=sushant@ecinfosolutions.com").then(function(e){return e.text()}).then(function(e){console.log("results @@ "+e),n.setState({schoolName:e})}).catch(function(e){console.log("error @@ "+JSON.stringify(e))})},n.state={schoolName:""},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getSchoolDetails()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Your School name is : ",this.state.schoolName)))}}]),t}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(s.a,{store:h},a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,n){"use strict";n.r(t);var o=n(2),a={tenant:"0b860171-b0f1-45fe-a224-d66f23c2d639",clientId:"72ed5f17-7eaa-4e8a-bfbe-49b67071e900",endpoints:{api:"1744a733-db16-4fc1-8255-d5b886c0c7f4"},cacheLocation:"localStorage"},c=new o.AuthenticationContext(a);Object(o.withAdalLogin)(c,a.endpoints.api);Object(o.runWithAdal)(c,function(){n(31)},!1)}},[[19,1,2]]]);
//# sourceMappingURL=main.a59cc1d3.chunk.js.map