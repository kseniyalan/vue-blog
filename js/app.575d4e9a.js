(function(t){function e(e){for(var n,o,c=e[0],i=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-blog/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0068":function(t,e,r){},"0c8e":function(t,e,r){"use strict";r("0068")},5566:function(t,e,r){"use strict";r("d07c")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"white",elevation:"2"}},[r("v-app-bar-title",[r("h3",{staticClass:"text-h4 amber--text text--darken-3"},[t._v("Just Food")])]),r("v-spacer"),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("router-link",{attrs:{to:"/posts"}},[t._v("Posts")]),r("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)],1),r("v-main",[r("router-view")],1)],1)},s=[],o=(r("5c0b"),r("2877")),c=r("6544"),i=r.n(c),l=r("7496"),u=r("40dc"),p=r("bb78"),d=r("f6c4"),f=r("2fa4"),v={},m=Object(o["a"])(v,a,s,!1,null,null,null),h=m.exports;i()(m,{VApp:l["a"],VAppBar:u["a"],VAppBarTitle:p["a"],VMain:d["a"],VSpacer:f["a"]});var g=r("f309");n["a"].use(g["a"]);var b=new g["a"]({}),_=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",[r("h2",{staticClass:"text-center text-h3 py-3"},[t._v("There will be 4 wide elements")])])],1),t.loading?r("v-row",{staticClass:"d-flex justify-center mb-6"},[r("v-col",{attrs:{md:"4"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"amber darken-3"}})],1)],1):t._e(),t.ready?r("v-row",{staticClass:"posts-list"},t._l(t.posts,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"4",lg:"4",xl:"3"},on:{click:function(r){return t.clickOnPost(e.id)}}},[r("v-card",{staticClass:"posts-list-item"},[r("v-img",{staticClass:"mb-6",attrs:{height:"250",src:e.img}}),r("div",{staticClass:"text-caption text-uppercase"},[t._v(t._s(e.typeText))]),r("v-card-title",{staticClass:"d-flex justify-center"},[r("h3",{staticClass:"text-h6 text-xl-h5"},[t._v(t._s(e.title))])]),r("v-row",{staticClass:"d-flex justify-center"},[r("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4",xl:"4"}},[r("v-divider")],1)],1),r("v-card-text",{staticClass:"text-body-2 text-xl-body-1"},[r("p",{staticClass:"mb-3"},[t._v(t._s(e.description_short))]),r("p",{staticClass:"font-weight-bold"},[t._v("Read more")])])],1)],1)})),1):t._e()],1)},O=[],y=r("5530"),w=r("2f62"),S={name:"PostsList",props:{},data:function(){return{}},computed:Object(y["a"])(Object(y["a"])({},Object(w["c"])({loading:function(t){return t.posts.loading},ready:function(t){return t.posts.ready}})),Object(w["b"])({posts:"posts/getPosts"})),methods:{clickOnPost:function(t){var e="/posts/".concat(t);this.$router.push(e)},getPostsList:function(){this.$store.dispatch("posts/getPostsListAction")}},created:function(){this.getPostsList()}},C=S,T=(r("5566"),r("b0af")),P=r("99d9"),j=r("62ad"),R=r("a523"),k=r("ce7e"),I=r("adda"),L=r("490a"),V=r("0fd9"),A=Object(o["a"])(C,x,O,!1,null,null,null),E=A.exports;i()(A,{VCard:T["a"],VCardText:P["a"],VCardTitle:P["b"],VCol:j["a"],VContainer:R["a"],VDivider:k["a"],VImg:I["a"],VProgressCircular:L["a"],VRow:V["a"]});var D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fluid fill-height"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h1",{staticClass:"text-h1 mb-7 amber--text text--darken-3"},[t._v(" Just Food ")]),r("h4",{staticClass:"text-h4 mb-4 brown--text text--darken-1"},[t._v(" The Best Food Blog ")])])],1)],1)},N=[],G={name:"Home",data:function(){return{}}},$=G,M=Object(o["a"])($,D,N,!1,null,null,null),U=M.exports;i()(M,{VCol:j["a"],VContainer:R["a"],VRow:V["a"]});var B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact"},[r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("h1",[t._v("This is a contact page")])])}],J={name:"Contact",data:function(){return{}}},F=J,q=Object(o["a"])(F,B,H,!1,null,null,null),z=q.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",[r("v-card",{attrs:{loading:t.loading}},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"amber darken-3",height:"3",indeterminate:""}})],1),r("v-parallax",{staticClass:"d-flex",attrs:{height:"400",src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"}}),r("div",{staticClass:"post-type mb-8"},[r("div",{staticClass:"type-text"},[t._v(t._s(t.postItem.typeText))])]),r("h2",{staticClass:"text-h4 mb-2 text-left pl-12 pr-4"},[t._v(t._s(t.postItem.title))]),r("v-card-text",[r("div",{staticClass:"font-weight-bold font-italic amber lighten-4 highlighted"},[t._v(" "+t._s(t.postItem.description_short)+" ")]),r("div",{staticClass:"font-weight-light text-left mb-7",domProps:{innerHTML:t._s(t.postItem.description)}}),r("v-img",{staticClass:"d-flex align-end",attrs:{height:"350",src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"}})],1)],2)],1)],1)],1)},Q=[],W={name:"PostView",props:{},data:function(){return{}},computed:Object(y["a"])(Object(y["a"])({},Object(w["c"])({loading:function(t){return t.post.loading},ready:function(t){return t.post.ready}})),Object(w["b"])({postItem:"post/getSinglePost"})),methods:{clickOnImage:function(){},getSinglePost:function(){var t=this.$route.params.postId;this.$store.dispatch("post/getSinglePostAction",t)}},created:function(){this.getSinglePost()}},X=W,Y=(r("0c8e"),r("8b9c")),Z=r("8e36"),tt=Object(o["a"])(X,K,Q,!1,null,null,null),et=tt.exports;i()(tt,{VCard:T["a"],VCardText:P["a"],VCol:j["a"],VContainer:R["a"],VImg:I["a"],VParallax:Y["a"],VProgressLinear:Z["a"],VRow:V["a"]}),n["a"].use(_["a"]);var rt=[{path:"/",name:"Home",component:U},{path:"/posts/:postId",name:"PostView",component:et},{path:"/posts",name:"PostsList",component:E},{path:"/contact",name:"Contact",component:z}],nt=new _["a"]({mode:"history",base:"/vue-blog/",routes:rt}),at=nt,st=r("1da1"),ot=(r("d81d"),r("96cf"),r("bc3a")),ct=r.n(ot),it=window.location.host,lt=window.location.protocol,ut=lt+"//"+it,pt=ct.a.create({baseURL:ut}),dt=function(){var t=Object(st["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt.get("posts.json");case 3:e=t.sent,console.log("response: ",e),t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),new Error("Posts loading failed");case 10:return t.abrupt("return",e.data);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),ft=function(){var t=Object(st["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="post_".concat(e,".json"),t.prev=1,t.next=4,pt.get(r);case 4:n=t.sent,console.log("single response: ",n),t.next=11;break;case 8:throw t.prev=8,t.t0=t["catch"](1),new Error("Single post loading failed");case 11:return t.abrupt("return",n.data);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),vt={namespaced:!0,state:{ready:!1,loading:!1,posts:[]},mutations:{POSTS_LIST_LOADING_START:function(t){t.ready=!1,t.loading=!0,t.posts=[]},POSTS_LIST_LOADING_ERROR:function(t){t.ready=!1,t.loading=!1},POSTS_LIST_LOADING_SUCCESS:function(t,e){t.loading=!1,t.posts=e.posts,t.ready=!0}},actions:{getPostsListAction:function(t){return Object(st["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("POSTS_LIST_LOADING_START"),e.prev=2,e.next=5,dt();case 5:return n=e.sent,e.abrupt("return",r("POSTS_LIST_LOADING_SUCCESS",n));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",r("POSTS_LIST_LOADING_ERROR"));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()}},getters:{getPosts:function(t){return t.posts.map((function(t){switch(t.type){case 1:t.typeText="main dish";break;case 2:t.typeText="Dessert";break;default:t.typeText="No type";break}return t}))}}},mt={namespaced:!0,state:{ready:!1,loading:!1,post:{}},mutations:{POST_LOADING_START:function(t){t.ready=!1,t.loading=!0,t.post={}},POST_LOADING_ERROR:function(t){t.ready=!1,t.loading=!1},POST_LOADING_SUCCESS:function(t,e){t.loading=!1,t.post=e.post,t.ready=!0}},actions:{getSinglePostAction:function(t,e){return Object(st["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,n("POST_LOADING_START"),r.prev=2,r.next=5,ft(e);case 5:return a=r.sent,r.abrupt("return",n("POST_LOADING_SUCCESS",a));case 9:return r.prev=9,r.t0=r["catch"](2),r.abrupt("return",n("POST_LOADING_ERROR"));case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))()}},getters:{getSinglePost:function(t){var e=t.post;switch(e.type){case 1:e.typeText="main dish";break;case 2:e.typeText="Dessert";break;default:e.typeText="No type";break}return e}}};n["a"].use(w["a"]);var ht=new w["a"].Store({modules:{posts:vt,post:mt}}),gt=ht;n["a"].config.productionTip=!1,new n["a"]({vuetify:b,router:at,store:gt,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},d07c:function(t,e,r){}});
//# sourceMappingURL=app.575d4e9a.js.map