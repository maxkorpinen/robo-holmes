(this["webpackJsonprobo-holmes-react"]=this["webpackJsonprobo-holmes-react"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"domain":"roboholmes.eu.auth0.com","clientId":"u5uZErMmCShYBp1kd6roABIPH4y49i9W"}')},40:function(e,t,n){e.exports=n(82)},45:function(e,t,n){},46:function(e,t,n){},50:function(e,t,n){},79:function(e,t){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),o=n.n(c),l=(n(45),n(46),n(1)),i=n.n(l),u=n(9),s=n(39),m=n(35),d=n.n(m),f=function(){return window.history.replaceState({},document.title,window.location.pathname)},p=r.a.createContext(),b=function(){return Object(a.useContext)(p)},h=n(3),v=n(4),g=n(6),w=n(5),E=n(7),k=(n(50),n(36)),O=n.n(k)()("http://10.100.104.67:3000");var j={forward:function(){return O.emit("forward",""),console.log("forward"),!1},stop:function(){return O.emit("stop",""),console.log("stop"),!1},left:function(){return O.emit("left",""),console.log("left"),!1},right:function(){return O.emit("right",""),console.log("right"),!1},reverse:function(){return O.emit("reverse",""),console.log("back"),!1},moveup:function(){return O.emit("moveup",""),console.log("camera up"),!1},movedown:function(){return O.emit("movedown",""),console.log("camera down"),!1},on:function(){return O.emit("on",""),!1},off:function(){return O.emit("off",""),!1}},C=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"far fa-arrow-alt-circle-up",id:"forward",onClick:j.forward}),r.a.createElement("br",null),r.a.createElement("i",{className:"far fa-arrow-alt-circle-left",id:"left",onClick:j.left}),r.a.createElement("i",{className:"far fa-stop-circle",id:"stop",onClick:j.stop}),r.a.createElement("i",{className:"far fa-arrow-alt-circle-right",id:"right",onClick:j.right}),r.a.createElement("br",null),r.a.createElement("i",{className:"far fa-arrow-alt-circle-down",id:"reverse",onClick:j.reverse}))}}]),t}(a.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cameracontrols"},r.a.createElement("i",{className:"fas fa-angle-double-up",id:"up",onClick:j.moveup}),r.a.createElement("br",null),r.a.createElement("i",{className:"fas fa-lightbulb",onClick:j.on}),r.a.createElement("i",{className:"far fa-lightbulb",id:"empty"}),r.a.createElement("i",{className:"far fa-lightbulb",onClick:j.off}),r.a.createElement("br",null),r.a.createElement("i",{className:"fas fa-angle-double-down",id:"down",onClick:j.movedown}))}}]),t}(a.Component),N=n(37),x=n.n(N),W=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){new x.a.VideoElement(".videoWrapper","ws://"+document.location.hostname+":8082/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"videoWrapper"})}}]),t}(a.Component),S=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Robo-Holmes"),r.a.createElement(W,null),r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"movement"},r.a.createElement(C,null)),r.a.createElement("div",{className:"camera"},r.a.createElement(y,null))))}}]),t}(a.Component),R=function(){var e=b(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement("div",{className:"navbar"},!t&&r.a.createElement("div",null,r.a.createElement("div",{className:"haamudiv"}),r.a.createElement("button",{className:"button1",onClick:function(){return n({})}},"Log in")),t&&r.a.createElement("button",{className:"button2",onClick:function(){return a()}},"Log out"),t&&r.a.createElement(S,null))};var I=function(){return b().loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(19),T=n(38),A=Object(T.a)();o.a.render(r.a.createElement((function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?f:n,o=Object(s.a)(e,["children","onRedirectCallback"]),l=Object(a.useState)(),m=Object(u.a)(l,2),b=m[0],h=m[1],v=Object(a.useState)(),g=Object(u.a)(v,2),w=g[0],E=g[1],k=Object(a.useState)(),O=Object(u.a)(k,2),j=O[0],C=O[1],y=Object(a.useState)(!0),N=Object(u.a)(y,2),x=N[0],W=N[1],S=Object(a.useState)(!1),R=Object(u.a)(S,2),I=R[0],P=R[1];Object(a.useEffect)((function(){!function(){var e,t,n,a,r;i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,i.a.awrap(d()(o));case 2:if(e=l.sent,C(e),!window.location.search.includes("code=")){l.next=10;break}return l.next=7,i.a.awrap(e.handleRedirectCallback());case 7:t=l.sent,n=t.appState,c(n);case 10:return l.next=12,i.a.awrap(e.isAuthenticated());case 12:if(a=l.sent,h(a),!a){l.next=19;break}return l.next=17,i.a.awrap(e.getUser());case 17:r=l.sent,E(r);case 19:W(!1);case 20:case"end":return l.stop()}}))}()}),[]);return r.a.createElement(p.Provider,{value:{isAuthenticated:b,user:w,loading:x,popupOpen:I,loginWithPopup:function(){var e,t,n=arguments;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:{},P(!0),a.prev=2,a.next=5,i.a.awrap(j.loginWithPopup(e));case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),console.error(a.t0);case 10:return a.prev=10,P(!1),a.finish(10);case 13:return a.next=15,i.a.awrap(j.getUser());case 15:t=a.sent,E(t),h(!0);case 18:case"end":return a.stop()}}),null,null,[[2,7,10,13]])},handleRedirectCallback:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return W(!0),t.next=3,i.a.awrap(j.handleRedirectCallback());case 3:return t.next=5,i.a.awrap(j.getUser());case 5:e=t.sent,W(!1),h(!0),E(e);case 9:case"end":return t.stop()}}))},getIdTokenClaims:function(){return j.getIdTokenClaims.apply(j,arguments)},loginWithRedirect:function(){return j.loginWithRedirect.apply(j,arguments)},getTokenSilently:function(){return j.getTokenSilently.apply(j,arguments)},getTokenWithPopup:function(){return j.getTokenWithPopup.apply(j,arguments)},logout:function(){return j.logout.apply(j,arguments)}}},t)}),{domain:P.domain,client_id:P.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){A.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.f11ad4b8.chunk.js.map