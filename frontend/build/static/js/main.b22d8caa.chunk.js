(this.webpackJsonpuplift=this.webpackJsonpuplift||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=(a(88),a(7)),s=a(27),l=a(14),u=a(12),m=a.n(u),d=a(19),f=(a(45),a(159));function p(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var h=function(e){var t=function(){var e=Object(n.useState)(p()),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(p())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),a=t.height,c=t.width;return r.a.createElement(f.a,{outline:!0,size:.75*a<c?"lg":"sm",onClick:e.onClick,block:.75*a<c,className:e.className},e.text)},v=a(160),E=a(147),b=a(148),g=a(149),y=a(157),j=a(151),O=a(152),w=a(15),C=a.n(w);var k=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),u=l[0],m=l[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),p=f[0],h=f[1];function w(){C.a.signInWithEmailAndPassword(c,u).then((function(){h(!1),o(""),m(""),e.authenticate(),e.close()})).catch((function(){h(!0)}))}return r.a.createElement(v.a,{open:e.open,onClose:function(){o(""),m(""),h(!1),e.close()}},r.a.createElement(E.a,null,"Login"),r.a.createElement(b.a,null,r.a.createElement(g.a,{style:{display:p?"inline":"none",color:"#ED3434"}},"Invalid email or password"),r.a.createElement(y.a,{autoFocus:!0,margin:"dense",label:"Email",type:"email",fullWidth:!0,onChange:function(e){o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(w(),e.preventDefault())},value:c}),r.a.createElement(y.a,{margin:"dense",label:"Password",type:"password",fullWidth:!0,onChange:function(e){m(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(w(),e.preventDefault())},value:u})),r.a.createElement(j.a,null,r.a.createElement(O.a,{onClick:function(){o(""),m(""),h(!1),e.close()}},"Cancel"),r.a.createElement(O.a,{onClick:w},"Login")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingBottom:"2vh"}},r.a.createElement("div",null,"Don't have an account?"),r.a.createElement("button",{className:"LinkText",onClick:e.signup},"Signup")))};var x=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),u=l[0],f=l[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),w=h[0],k=h[1],x=Object(n.useState)(""),N=Object(i.a)(x,2),S=N[0],A=N[1],P=Object(n.useState)(""),B=Object(i.a)(P,2),T=B[0],L=B[1];function W(){return(W=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.stringify({username:w,email:c,uid:C.a.currentUser.uid}),fetch("/new-user",{method:"POST",headers:{"Content-Type":"application/json"},body:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=""!==c&&S===T&&S.length>=8&&T.length>=8&&""!==w,I=S===T&&S.length>=8&&T.length>=8;function U(){C.a.createUserWithEmailAndPassword(c,S).then((function(){o(""),k(""),A(""),L(""),f(!1),e.authenticate(),function(){return W.apply(this,arguments)}().then((function(){return e.close()}))})).catch((function(e){e.code,o(""),f(!0)}))}return r.a.createElement(v.a,{open:e.open,onClose:function(){o(""),k(""),A(""),L(""),f(!1),e.close()}},r.a.createElement(E.a,null,"Sign Up"),r.a.createElement(b.a,null,r.a.createElement(g.a,{style:{display:D?"none":"inline",color:"#ED3434"}},"All fields are required."," "),r.a.createElement(g.a,{style:{display:I?"none":"inline",color:"#ED3434"}},"Passwords must match and be at least 8 characters."),r.a.createElement(g.a,{style:{display:I?"inline":"none",color:"#1D800E"}},"Password is valid."),r.a.createElement("br",null),r.a.createElement(g.a,{style:{display:u?"inline":"none",color:"#ED3434"}},"Invalid Email"),r.a.createElement(y.a,{autoFocus:!0,margin:"dense",label:"Name",type:"name",fullWidth:!0,onChange:function(e){k(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&D&&(U(),e.preventDefault())},value:w}),r.a.createElement(y.a,{margin:"dense",label:"Email",type:"email",fullWidth:!0,onChange:function(e){o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&D&&(U(),e.preventDefault())},value:c}),r.a.createElement(y.a,{margin:"dense",label:"Password",type:"password",fullWidth:!0,onChange:function(e){A(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&D&&(U(),e.preventDefault())},value:S}),r.a.createElement(y.a,{margin:"dense",label:"Confirm Password",type:"password",fullWidth:!0,onChange:function(e){L(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&D&&(U(),e.preventDefault())},value:T})),r.a.createElement(j.a,null,r.a.createElement(O.a,{onClick:function(){o(""),k(""),A(""),L(""),f(!1),e.close()}},"Cancel"),r.a.createElement(O.a,{onClick:U,disabled:!D},"Sign Up")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingBottom:"2vh"}},r.a.createElement("div",null,"Already have an account?"),r.a.createElement("button",{className:"LinkText",onClick:e.login},"Login")))};var N=function(e){var t="profile"===e.to?"/profile":"/",a=Object(n.useState)(e.isAuthed),c=Object(i.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),d=m[0],f=m[1],p=Object(n.useState)(!1),v=Object(i.a)(p,2),E=v[0],b=v[1];return r.a.createElement("div",{className:"TopBar"},r.a.createElement("div",{className:"LogoContainer"},r.a.createElement("div",{className:"LeftLogoText"},"up"),r.a.createElement("div",{className:"RightLogoText"},"lift")),r.a.createElement(k,{open:d,close:function(){return f(!1)},authenticate:function(){return l(!0)},signup:function(){f(!1),b(!0)}}),r.a.createElement(x,{open:E,close:function(){return b(!1)},login:function(){b(!1),f(!0)},authenticate:function(){return l(!0)}}),r.a.createElement("div",{className:"TRButtonContainer"},o?r.a.createElement(s.b,{to:t,style:{textDecoration:"none"}},r.a.createElement(h,{text:e.to,className:"TopRightButton"})):r.a.createElement(h,{text:"login",className:"TopRightButton",onClick:function(){f(!0)}})))},S=a(146);var A=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),u=l[0],f=l[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),E=v[0],b=v[1],g=Object(n.useState)({}),j=Object(i.a)(g,2)[1],O=Object(n.useState)({}),w=Object(i.a)(O,2),k=w[0],x=w[1],A=Object(n.useState)(""),P=Object(i.a)(A,2),B=P[0],T=P[1],L=void 0===k.name||null===k.name,W=L?"add some friends to say what you love about them!":"today, i love ".concat(k.name,"'s...");function D(){return I.apply(this,arguments)}function I(){return(I=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/random-friend?self_id=".concat(C.a.currentUser.uid)).then((function(e){return e.json()}));case 3:t=e.sent,x(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function U(){return F.apply(this,arguments)}function F(){return(F=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/random-message?self_id=".concat(C.a.currentUser.uid));case 3:e.sent.text().then((function(e){return T(e)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function K(){return(K=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=6;break}return o(!1),e.next=4,new Promise((function(e){return setTimeout(e,1e3)})).then((function(){U().then((function(){return o(!0)}))}));case 4:e.next=7;break;case 6:o(!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=C.a.currentUser.uid,fetch("/to-self/".concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:E})})}catch(a){console.error(a)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=k.uid,fetch("/to/".concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:E})})}catch(a){console.error(a)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){e.isAuthed?""!==E&&(u?(!function(){R.apply(this,arguments)}(),D()):function(){M.apply(this,arguments)}(),f(!u),b("")):alert("Log in to say what you love about yourself!")}return Object(n.useEffect)((function(){e.isAuthed&&(function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/profile?uid=".concat(C.a.currentUser.uid));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,j(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()(),D(),U())}),[e.isAuthed]),r.a.createElement("div",{className:"PageContainer"},r.a.createElement(N,{to:e.to,isAuthed:e.isAuthed}),r.a.createElement("div",{className:"HomePageContainer"}," ",r.a.createElement(y.a,{id:"standard-basic",fullWidth:!0,placeholder:u?W:"today, i love my...",disabled:u&&L,value:E,onChange:function(e){return b(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&_()}}),r.a.createElement("div",{className:"InputButtons"},r.a.createElement("div",{className:"InputLeftButton"},r.a.createElement(h,{text:"get inspiration",className:"InspirationButton",onClick:e.isAuthed?function(){return K.apply(this,arguments)}:function(){alert("Login to hear what others love about you!")}})),r.a.createElement("div",{className:"InputRightButton"},r.a.createElement(h,{text:"submit",className:"TopRightButton",onClick:_})))),r.a.createElement(S.a,Object.assign({in:c},{timeout:1e3}),r.a.createElement("div",{className:"HiddenText"},'"',B,'"')))},P=a(142),B=a(150),T=a(155),L=a(156),W=a(71),D=a(153),I=a(154);var U=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1];function s(){return l.apply(this,arguments)}function l(){return(l=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.stringify({friend_email:c}),e.next=3,fetch("/add-friend/".concat(C.a.currentUser.uid),{method:"POST",headers:{"Content-Type":"application/json"},body:t});case 3:return a=e.sent,console.log(a.text()),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{style:{width:"3vw"}},r.a.createElement(v.a,{open:e.open,onClose:function(){o(""),e.close()},fullWidth:!0},r.a.createElement(E.a,null,"Add a friend"),r.a.createElement(b.a,null,r.a.createElement(y.a,{autoFocus:!0,margin:"dense",label:"Email",type:"email",fullWidth:!0,onChange:function(e){o(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(s(),e.close(),t.preventDefault())},value:c})),r.a.createElement(j.a,null,r.a.createElement(O.a,{onClick:function(){o(""),e.close()}},"Cancel"),r.a.createElement(O.a,{onClick:function(){s(),e.close()}},"Add Friend"))))},F=Object(W.a)({shadows:["none"]}),K=Object(D.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,borderColor:"#a46ddb !important",borderWidth:1,borderStyle:"solid",shadows:["none"]},list:{borderColor:"#a46ddb !important",borderWidth:1}}}));var M=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],u=K(),p=Object(n.useState)({friends:[]}),h=Object(i.a)(p,2),v=h[0],E=h[1],b=Object(n.useState)(!1),g=Object(i.a)(b,2),y=g[0],j=g[1],O=Object(l.f)();return Object(n.useEffect)((function(){e.isAuthed||O.push("/")})),Object(n.useEffect)((function(){var e=!0;return function(){var t=Object(d.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/profile?uid=".concat(C.a.currentUser.uid));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,e&&(E(n),o(Object.values(n.friends)||[])),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()(),function(){return e=!1}}),[]),r.a.createElement(I.a,{theme:F},r.a.createElement("div",{className:"PageContainer",theme:F},r.a.createElement(N,{to:e.to,isAuthed:e.isAuthed}),r.a.createElement("div",{className:"ProfileContainer"},r.a.createElement("div",{className:"NameContainer"},"name: ",v.name),r.a.createElement("div",{className:"EmailContainer"},"email: ",v.email),r.a.createElement("div",{className:"FriendsText"},"friends:"),r.a.createElement("div",{className:u.root},r.a.createElement(P.a,{style:{maxHeight:200,overflow:"auto"}},r.a.createElement("div",{className:"FriendsContainer"},r.a.createElement(B.a,{className:u.list},c.map((function(e,t){if(null!==e&&void 0!==e)return r.a.createElement(T.a,{key:t},r.a.createElement(L.a,{primary:e}))})))))),r.a.createElement(s.b,{to:"/messages",style:{textDecoration:"none"}},r.a.createElement("div",{className:"AMButtonContainer"},r.a.createElement(f.a,{className:"AllMessagesButton"},"all messages"))),r.a.createElement(U,{open:y,close:function(){return j(!1)}}),r.a.createElement("div",{className:"AMButtonContainer"},r.a.createElement(f.a,{className:"AllMessagesButton",onClick:function(){return j(!0)}},"add a friend")),r.a.createElement("div",{className:"LogoutButtonContainer"},r.a.createElement(f.a,{className:"LogoutButton",onClick:function(){C.a.signOut(),O.push("/")}},"log out")))))};function R(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var _=Object(W.a)({shadows:["none"]}),z=Object(D.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,borderColor:"#a46ddb !important",borderWidth:1,borderStyle:"solid",shadows:["none"]},list:{borderColor:"#a46ddb !important",borderWidth:1}}}));var H=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(l.f)();Object(n.useEffect)((function(){e.isAuthed||s.push("/"),function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/profile?uid=".concat(C.a.currentUser.uid)).then((function(e){return e.json()}));case 3:t=e.sent,o(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[s,e.isAuthed]);var u=function(){var e=Object(n.useState)(R()),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(R())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),f=u.height<u.width,p=z();return r.a.createElement(I.a,{theme:_},r.a.createElement("div",{className:"PageContainer"},r.a.createElement(N,{to:e.to,isAuthed:e.isAuthed}),r.a.createElement("div",{className:"MessageContainer",style:{flexDirection:f?"row":"column",alignItems:f?"flex-start":"center"}},r.a.createElement("div",{className:"SelfMessageContainer",style:{paddingLeft:f?"10vw":"0",paddingBottom:f?"0":"5vh",paddingTop:f?"0":"5vw"}},r.a.createElement("div",{className:p.root},r.a.createElement(P.a,{style:{maxHeight:"65vh",overflow:"auto",width:f?"35vw":"70vw"}},r.a.createElement("div",{className:"FriendsContainer"},r.a.createElement(B.a,{className:p.list},"messages from you:"),c.hasOwnProperty("self_messages")?Object.values(c.self_messages).map((function(e,t){return r.a.createElement(T.a,{key:t},r.a.createElement(L.a,{primary:e}))})):"")))),r.a.createElement("div",{className:"FriendMessageContainer",style:{paddingRight:f?"10vw":"0",paddingBottom:f?"0":"10vw"}},r.a.createElement("div",{className:p.root},r.a.createElement(P.a,{style:{maxHeight:"65vh",overflow:"auto",width:f?"35vw":"70vw"}},r.a.createElement("div",{className:"FriendsContainer"},r.a.createElement(B.a,{className:p.list},"messages from friends:"),c.hasOwnProperty("other_messages")?Object.values(c.other_messages).map((function(e,t){return r.a.createElement(T.a,{key:t},r.a.createElement(L.a,{primary:e}))})):"")))))))};var J=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),m=u[0],d=u[1];return Object(n.useEffect)((function(){C.a.onAuthStateChanged((function(e){e?(c(!0),d(!0)):(c(!1),d(!0))}))}),[]),m?r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(A,{to:"profile",isAuthed:a})),r.a.createElement(l.a,{path:"/profile"},r.a.createElement(M,{to:"home",isAuthed:a})),r.a.createElement(l.a,{path:"/messages"},r.a.createElement(H,{to:"profile",isAuthed:a})))):r.a.createElement("div",null)};a(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,a){var n=a(92).initializeApp({apiKey:"AIzaSyCfsjdMR80t_G8q28yXPwBT05mX7xBPLkY",authDomain:"uplift-6825c.firebaseapp.com",databaseURL:"https://uplift-6825c.firebaseio.com",projectId:"uplift-6825c",storageBucket:"uplift-6825c.appspot.com",messagingSenderId:"276669351562",appId:"1:276669351562:web:259636b64f1a3d53c3cf73"}).auth();e.exports=n},45:function(e,t,a){},83:function(e,t,a){e.exports=a(112)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.b22d8caa.chunk.js.map