(this["webpackJsonpblogapp-frontend"]=this["webpackJsonpblogapp-frontend"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(17),i=n.n(a),o=n(2),s=n(5),u=n(3),l=n(0),d=function(e){var t=e.blog,n=e.handleLikeClick,c=e.handleRemoveClick,a=e.user,i=Object(r.useState)(!1),o=Object(u.a)(i,2),s=o[0],d=o[1],b={display:s?"none":""},j={display:s?"":"none"},f={display:t.user.username===a.username?"":"none"},p=function(){d(!s)};return Object(l.jsxs)("div",{className:"blogDiv",style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(l.jsxs)("div",{children:[t.title," ",t.author,Object(l.jsx)("button",{style:b,onClick:p,children:"view"}),Object(l.jsx)("button",{style:j,onClick:p,children:"hide"})]}),Object(l.jsxs)("div",{style:j,className:"expandable",children:[Object(l.jsx)("div",{children:t.url}),Object(l.jsxs)("div",{children:["likes ",t.likes," ",Object(l.jsx)("button",{id:t.id,onClick:n,children:"like"})]}),Object(l.jsx)("div",{children:t.user.name||""}),Object(l.jsx)("button",{style:f,onClick:c,children:"remove"})]})]})},b=n(6),j=n.n(b),f="/api/blogs",p=null,O=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},e.next=3,j.a.post(f,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("".concat(f,"/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},e.next=3,j.a.delete("".concat(f,"/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={getAll:function(){return j.a.get(f).then((function(e){return e.data}))},setToken:function(e){p="bearer ".concat(e)},create:O,update:h,remove:v},x=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={login:x},k=function(e){var t=e.message,n=e.style;return null===t?null:Object(l.jsx)("div",{className:n,children:t})},w=function(e){var t=e.createBlog,n=Object(r.useState)(""),c=Object(u.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(""),s=Object(u.a)(o,2),d=s[0],b=s[1],j=Object(r.useState)(""),f=Object(u.a)(j,2),p=f[0],O=f[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"create new"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:a,author:d,url:p}),b(""),i(""),O("")},children:[Object(l.jsxs)("div",{children:["title ",Object(l.jsx)("input",{id:"title",value:a,onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("div",{children:["author ",Object(l.jsx)("input",{id:"author",value:d,onChange:function(e){b(e.target.value)}})]}),Object(l.jsxs)("div",{children:["url ",Object(l.jsx)("input",{id:"url",value:p,onChange:function(e){O(e.target.value)}})]}),Object(l.jsx)("button",{id:"create-button",type:"submit",children:"create"})]})]})},y=function(e){var t=e.handleLogin,n=e.handleUsernameChange,r=e.handlePasswordChange,c=e.username,a=e.password;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsxs)("div",{children:["username",Object(l.jsx)("input",{id:"username",type:"text",value:c,name:"Username",onChange:n})]}),Object(l.jsxs)("div",{children:["password",Object(l.jsx)("input",{id:"password",type:"password",value:a,name:"Password",onChange:r})]}),Object(l.jsx)("button",{id:"login-button",type:"submit",children:"login"})]})})},C=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),c=Object(u.a)(n,2),a=c[0],i=c[1],o={display:a?"none":""},s={display:a?"":"none"},d=function(){i(!a)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:d}})),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:o,children:Object(l.jsx)("button",{onClick:d,children:e.buttonLabel})}),Object(l.jsxs)("div",{style:s,children:[e.children,Object(l.jsx)("button",{onClick:d,children:"cancel"})]})]})}));C.displayName="Togglable";var S=C,T=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),i=Object(u.a)(a,2),b=i[0],j=i[1],f=Object(r.useState)(""),p=Object(u.a)(f,2),O=p[0],h=p[1],v=Object(r.useState)(""),x=Object(u.a)(v,2),C=x[0],T=x[1],B=Object(r.useState)(""),L=Object(u.a)(B,2),E=L[0],N=L[1],U=Object(r.useState)(null),I=Object(u.a)(U,2),R=I[0],A=I[1],J=Object(r.useRef)();Object(r.useEffect)((function(){g.getAll().then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBloglistUser");if(e){var t=JSON.parse(e);A(t),g.setToken(t.token)}}),[]);var D=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J.current.toggleVisibility(),e.prev=1,e.next=4,g.create(t);case 4:r=e.sent,c(n.concat(r)),h("notification"),j("a new blog ".concat(t.title," by ").concat(t.author," added")),setTimeout((function(){j(null)}),5e3),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),h("error"),j("Error: ".concat(e.t0.message)),setTimeout((function(){j(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=n.find((function(e){return e.id===t.target.id}))).likes=r.likes+1,e.prev=2,e.next=5,g.update(r);case 5:h("notification"),j("You liked ".concat(r.title," by ").concat(r.author)),setTimeout((function(){j(null)}),5e3),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),h("error"),j("Error: ".concat(e.t0.message)),setTimeout((function(){j(null)}),5e3);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Remove blog ".concat(t.title," by ").concat(t.autho))){e.next=15;break}return e.prev=1,e.next=4,g.remove(t.id);case 4:c(n.filter((function(e){return e.id!==t.id}))),h("notification"),j("Blog ".concat(t.title," removed")),setTimeout((function(){j(null)}),5e3),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),h("error"),j("Error: ".concat(e.t0.message)),setTimeout((function(){j(null)}),5e3);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m.login({username:C,password:E});case 4:n=e.sent,window.localStorage.setItem("loggedBloglistUser",JSON.stringify(n)),g.setToken(n.token),A(n),T(""),N(""),h("notification"),j("logged in succesfully"),setTimeout((function(){j(null)}),5e3),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),h("error"),j("wrong username or password"),setTimeout((function(){j(null)}),5e3);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return null===R?Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Log in to application"}),Object(l.jsx)(k,{message:b,style:O}),Object(l.jsx)(y,{username:C,password:E,handleUsernameChange:function(e){var t=e.target;return T(t.value)},handlePasswordChange:function(e){var t=e.target;return N(t.value)},handleLogin:V})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"blogs"}),Object(l.jsx)(k,{message:b,style:O}),Object(l.jsxs)("p",{children:[R.name," logged in ",Object(l.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedBloglistUser"),A(null),g.setToken(null),h("notification"),j("logged out succesfully"),setTimeout((function(){j(null)}),5e3)},children:"logout"})]}),Object(l.jsx)(S,{buttonLabel:"create new blog",ref:J,children:Object(l.jsx)(w,{createBlog:D})}),n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(l.jsx)(d,{blog:e,user:R,handleLikeClick:P,handleRemoveClick:function(){return z(e)}},e.id)}))]})};n(42);i.a.render(Object(l.jsx)(T,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9cb93711.chunk.js.map