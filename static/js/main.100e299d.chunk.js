(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{122:function(e,t,c){},123:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},148:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),r=c.n(s),i=c(49),l=(c(122),c(36)),o=c(38),d=Object(o.c)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1}}}),j=(d.actions.increment,d.reducer),b=c(44),u=c.n(b),m=c(32),x=c(61),O="https://api.jikan.moe/v3",h={getSeasonAnimes:"".concat(O,"/season"),getCurrentSeason:"".concat(O,"/season"),getTopAiringAnimes:"".concat(O,"/top/anime/1/airing")},f={getFeaturedNewsList:"".concat("https://damp-peak-01691.herokuapp.com","/news")},p={currentSeason:{data:void 0,loading:!1,error:void 0},topAiringAnimes:{data:[],loading:!1,error:void 0}},g=Object(o.b)("anime/getCurrentSeason",Object(x.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h.getCurrentSeason);case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",Object(m.a)(Object(m.a)({},c),{},{anime:c.anime.slice(0,24)}));case 7:case"end":return e.stop()}}),e)})))),v=Object(o.b)("anime/getTopAiringAnimes",Object(x.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h.getTopAiringAnimes);case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c.top.slice(0,24));case 7:case"end":return e.stop()}}),e)})))),N=Object(o.c)({name:"anime",initialState:p,reducers:{},extraReducers:function(e){e.addCase(g.pending,(function(e){e.currentSeason.loading=!0})),e.addCase(g.fulfilled,(function(e,t){var c=t.payload;e.currentSeason.data=c,e.currentSeason.loading=!1})),e.addCase(g.rejected,(function(e,t){e.currentSeason.loading=!1,alert("error"),console.log(t)})),e.addCase(v.pending,(function(e){e.topAiringAnimes.loading=!0})),e.addCase(v.fulfilled,(function(e,t){var c=t.payload;e.topAiringAnimes.data=c,e.topAiringAnimes.loading=!1})),e.addCase(v.rejected,(function(e,t){e.topAiringAnimes.loading=!1,alert("error"),console.log(t)}))}}),y=function(e){return e.anime.currentSeason},w=function(e){return e.anime.topAiringAnimes},A=N.reducer,k={featuredNewsList:{data:void 0,loading:!1,error:void 0}},C=Object(o.b)("news/getFeaturedNewsList",Object(x.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f.getFeaturedNewsList);case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))),L=Object(o.c)({name:"news",initialState:k,reducers:{},extraReducers:function(e){e.addCase(C.pending,(function(e){e.featuredNewsList.loading=!0})),e.addCase(C.fulfilled,(function(e,t){var c=t.payload;e.featuredNewsList.data=c,e.featuredNewsList.loading=!1})),e.addCase(C.rejected,(function(e,t){e.featuredNewsList.loading=!1,alert("error"),console.log(t)}))}}),S=function(e){return e.news.featuredNewsList},E=L.reducer,T=Object(l.c)({counter:j,anime:A,news:E}),R=Object(o.a)({reducer:T}),M=c(108),I=c(19),F=c(54),B=c(151),_=(c(123),c(5)),D=B.a.Text,W=function(e){var t=e.anime,c=Object(F.a)(e,["anime"]);return Object(_.jsxs)("div",Object(m.a)(Object(m.a)({},c),{},{className:"anime-card",children:[Object(_.jsx)("img",{src:t.image_url,alt:"",className:"anime-card-image"}),Object(_.jsx)("div",{className:"anime-card-title-container py-1 px-2",children:Object(_.jsx)(D,{strong:!0,className:"anime-card-title",children:t.title})})]}))},Y=c(35),P=c(155),U=c(156),V=c(150),X=c(154),G={xl:{min:1200},lg:{min:992,max:1199},md:{min:768,max:991},sm:{min:576,max:767},xs:{max:575}},H=function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])},z=function(){var e=Object(n.useState)({lastScrollTop:0,bodyOffset:document.body.getBoundingClientRect(),scrollY:document.body.getBoundingClientRect().top,scrollX:document.body.getBoundingClientRect().left,scrollDirection:""}),t=Object(Y.a)(e,2),c=t[0],a=t[1],s=Object(n.useCallback)((function(e){a((function(e){var t=e.lastScrollTop,c=document.body.getBoundingClientRect();return{lastScrollTop:-c.top,bodyOffset:c,scrollY:-c.top,scrollX:c.left,scrollDirection:t>-c.top?"down":"up"}}))}),[]);return Object(n.useEffect)((function(){var e=function(e){s(e)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[s]),{scrollY:c.scrollY,scrollX:c.scrollX,scrollDirection:c.scrollDirection}},J=function(){var e=Object(n.useState)({width:0,height:0}),t=Object(Y.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c},Q=(c(127),B.a.Title),q=B.a.Link,K=function(e){var t=e.title,c=e.animes,a=e.loading,s=J().width,r=Object(n.useState)(6),i=Object(Y.a)(r,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){s<=G.lg.max?o(4):o(6)}),[s]),Object(_.jsxs)("div",{className:"mb-5",children:[Object(_.jsxs)(P.a,{gutter:{xs:0,md:32},align:"middle",className:"mb-3",children:[Object(_.jsx)(U.a,{children:Object(_.jsx)(Q,{level:3,children:t})}),Object(_.jsx)(U.a,{flex:"auto",className:"desktop",children:Object(_.jsx)(V.a,{})}),Object(_.jsx)(U.a,{className:"desktop",children:Object(_.jsx)(q,{strong:!0,children:"VIEW MORE"})})]}),s<=G.md.max?Object(_.jsx)("div",{className:"anime-cards-section-swiper",children:a?Array.from(Array(6).keys()).map((function(e){return Object(_.jsx)("div",{className:"anime-cards-section-swiper-card-container mr-2",children:Object(_.jsx)(X.a.Button,{active:!0,className:"skeleton-anime-card"},e)},e)})):c.map((function(e,t){return Object(_.jsx)("div",{className:"anime-cards-section-swiper-card-container mr-2",children:Object(_.jsx)(W,{anime:e})},t)}))}):Object(_.jsx)(ae,{dots:!1,showArrows:!a,className:"anime-cards-section-carousel mb-1",children:Array.from(Array(Math.ceil((a?6:c.length)/6)).keys()).map((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)(P.a,{gutter:6*l,className:"anime-cards-section-slide",children:Array.from(Array(l).keys()).map((function(t){return Object(_.jsx)(U.a,{span:24/l,children:a?Object(_.jsx)(X.a.Button,{active:!0,className:"skeleton-anime-card"},e):c[e*l+t]&&Object(_.jsx)(W,{onClick:function(){return window.open(c[e*l+t].url,"_blank")},anime:c[e*l+t]})},"".concat(e).concat(t))}))})},e)}))}),Object(_.jsx)(P.a,{justify:"end",className:"mobile mt-2",children:Object(_.jsx)(U.a,{children:Object(_.jsx)(q,{strong:!0,children:"VIEW MORE"})})})]})},Z=c(157),$=c(41),ee=(c(128),B.a.Paragraph),te=B.a.Title,ce=function(e){var t=e.newsList,c=e.loading,a=Object(n.useState)(0),s=Object(Y.a)(a,2),r=s[0],i=s[1],l=Object(n.useState)(!0),o=Object(Y.a)(l,2),d=o[0],j=o[1];H((function(){d&&b()}),4e3);var b=function(){r===t.length-1?i(0):i(r+1)};return Object(_.jsxs)("div",{className:"banner-carousel-wrapper",children:[!c&&t.map((function(e,c){return Object(_.jsx)("img",{src:t[c].image_url,alt:"",className:"banner-carousel-background-image ".concat(r===c?"selected":"")},c)})),Object(_.jsx)("div",{className:"content-container pt-4 pb-5",children:Object(_.jsxs)("div",{onMouseEnter:function(){return j(!1)},onMouseLeave:function(){return j(!0)},className:"banner-carousel-cards-container",children:[c?Object(_.jsx)("div",{className:"banner-carousel-card selected loading",children:Object(_.jsxs)(P.a,{className:"banner-carousel-card-content-container",children:[Object(_.jsx)(U.a,{md:14,xs:24,children:Object(_.jsx)(X.a.Button,{active:!0,className:"skeleton-stretch"})}),Object(_.jsx)(U.a,{md:10,xs:24,className:"banner-carousel-card-info-container p-3",children:Object(_.jsx)(X.a,{active:!0})})]})}):t.map((function(e,c){return Object(_.jsx)("div",{onClick:function(){return window.open(e.link,"_blank")},className:"banner-carousel-card ".concat(r===c?"selected":""),children:Object(_.jsxs)(P.a,{children:[Object(_.jsx)(U.a,{md:14,xs:24,children:Object(_.jsx)("img",{src:e.image_url,alt:"",className:"banner-carousel-card-image"})}),Object(_.jsxs)(U.a,{md:10,xs:24,className:"banner-carousel-card-info-container p-3",children:[Object(_.jsxs)("div",{children:[Object(_.jsxs)(P.a,{className:"mb-2",children:[Object(_.jsx)(U.a,{children:Object(_.jsx)(Z.a,{color:"blue",children:"FEATURED"})}),Object(_.jsx)(U.a,{children:Object(_.jsx)(Z.a,{color:"blue",children:"NEWS"})})]}),Object(_.jsx)(te,{level:2,ellipsis:{rows:3},className:"mb-2",children:e.title}),Object(_.jsx)(ee,{ellipsis:{rows:5},className:"desktop mb-2",children:e.description})]}),Object(_.jsx)(P.a,{gutter:8,children:t.map((function(e,t){return Object(_.jsx)(U.a,{children:Object(_.jsx)("div",{className:"banner-carousel-pointer ".concat(r===t?"selected":"")})},t)}))})]})]})},c)})),!c&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)($.a,{onClick:function(){i(0===r?t.length-1:r-1)},className:"banner-carousel-left-icon"}),Object(_.jsx)($.b,{onClick:b,className:"banner-carousel-right-icon"})]})]})})]})},ne=c(152),ae=(c(129),function(e){var t=e.showArrows,c=void 0===t||t,a=Object(F.a)(e,["showArrows"]),s=Object(n.useRef)();return Object(_.jsxs)("div",{className:"carousel-wrapper",children:[Object(_.jsx)(ne.a,Object(m.a)(Object(m.a)({},a),{},{ref:function(e){s.current=e}})),c&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)($.a,{onClick:function(){var e;null===(e=s.current)||void 0===e||e.prev()},className:"carousel-left-icon"}),Object(_.jsx)($.b,{onClick:function(){var e;null===(e=s.current)||void 0===e||e.next()},className:"carousel-right-icon"})]})]})}),se=c(89),re=c.p+"static/media/apple-store-badge.6d21b830.png",ie=c.p+"static/media/google-play-badge.d2b386b1.png",le=[[{text:"About"},{text:"Press Room"},{text:"Support"},{text:"Advertising"},{text:"FAQ"}],[{text:"Terms"},{text:"Privacy"},{text:"Cookie"},{text:"Notice at Collection"},{text:"Sitemap"}]],oe=(c(141),B.a.Text),de=B.a.Link,je=function(){return Object(_.jsx)("div",{className:"footer-wrapper",children:Object(_.jsxs)("div",{className:"content-container py-4",children:[Object(_.jsxs)(P.a,{justify:"space-between",className:"row-vertical-sm",children:[Object(_.jsx)(U.a,{children:Object(_.jsxs)(P.a,{gutter:[{xs:0,md:40},16],className:"row-vertical-sm",children:[Object(_.jsx)(U.a,{className:"centered-flex-sm",children:Object(_.jsx)(oe,{type:"secondary",className:"footer-logo",children:"MAL"})}),le.map((function(e,t){return Object(_.jsx)(U.a,{children:Object(_.jsx)(P.a,{gutter:[0,8],className:"row-vertical",children:e.map((function(e,t){return Object(_.jsx)(U.a,{className:"centered-flex-sm",children:Object(_.jsx)(de,{type:"secondary",children:e.text})},t)}))})},t)}))]})}),Object(_.jsx)(V.a,{className:"mobile my-4"}),Object(_.jsx)(U.a,{children:Object(_.jsxs)(P.a,{gutter:{xs:0,md:40},className:"row-vertical-sm",children:[Object(_.jsx)(U.a,{className:"centered-flex-sm",children:Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"mb-1",children:Object(_.jsx)(oe,{type:"secondary",className:"typography-fade mb-1",children:"Follow Us"})}),Object(_.jsxs)(P.a,{gutter:16,children:[Object(_.jsx)(U.a,{children:Object(_.jsx)(se.a,{className:"footer-social-media-icon"})}),Object(_.jsx)(U.a,{children:Object(_.jsx)(se.b,{className:"footer-social-media-icon"})})]})]})}),Object(_.jsx)(V.a,{className:"mobile my-4"}),Object(_.jsx)(U.a,{className:"centered-flex-sm",children:Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"mb-1",children:Object(_.jsx)(oe,{type:"secondary",className:"typography-fade",children:"Get the App"})}),Object(_.jsx)("div",{className:"mb-1",children:Object(_.jsx)("img",{src:re,alt:"",className:"footer-app-download-badge"})}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:ie,alt:"",className:"footer-app-download-badge"})})]})})]})})]}),Object(_.jsx)(V.a,{className:"my-4"}),Object(_.jsxs)("div",{children:[Object(_.jsx)(oe,{type:"secondary",className:"typography-fade",children:"MyAnimeList.net is a property of MyAnimeList Co.,Ltd"}),Object(_.jsx)("br",{}),Object(_.jsx)(oe,{type:"secondary",className:"typography-fade",children:"\xa92021 All Rights Reserved."})]})]})})},be=c(158),ue=c(153),me=c(110),xe=c(107),Oe=(c(142),B.a.Title),he=B.a.Text,fe=B.a.Link,pe=[{text:"ANIME"},{text:"MANGA"},{text:"COMMUNITY"},{text:"INDUSTRY"},{text:"WATCH"},{text:"READ"},{text:"HELP"}],ge=function(){var e=Object(n.useState)(""),t=Object(Y.a)(e,2),c=t[0],a=t[1],s=z().scrollY;return Object(n.useEffect)((function(){}),[s]),Object(_.jsx)("div",{className:"navbar-wrapper ".concat(s>60?"float":""," py-2"),children:Object(_.jsx)("div",{className:"content-container",children:Object(_.jsxs)(P.a,{align:"middle",justify:"space-between",children:[Object(_.jsx)(U.a,{children:Object(_.jsx)(Oe,{type:"secondary",level:3,className:"navbar-logo",children:"MyAnimeList"})}),Object(_.jsx)(U.a,{className:"desktop",children:Object(_.jsxs)(P.a,{gutter:16,align:"middle",children:[pe.map((function(e,t){return Object(_.jsx)(be.a,{placement:"bottomLeft",content:Object(_.jsxs)("div",{className:"py-2",children:[Object(_.jsx)("div",{className:"navbar-popover-option-container py-1 px-3",children:Object(_.jsx)(he,{children:"Option"})}),Object(_.jsx)("div",{className:"navbar-popover-option-container py-1 px-3",children:Object(_.jsx)(he,{children:"Option Long"})}),Object(_.jsx)("div",{className:"navbar-popover-option-container py-1 px-3",children:Object(_.jsx)(he,{children:"Option"})})]}),children:Object(_.jsx)(U.a,{children:Object(_.jsx)(fe,{type:"secondary",strong:!0,children:e.text})})},t)})),Object(_.jsx)(U.a,{children:Object(_.jsx)(ue.a,{value:c,onChange:function(e){return a(e.target.value)},suffix:Object(_.jsx)($.d,{className:"navbar-search-icon"}),className:"navbar-search ".concat(c?"expanded":"")})}),Object(_.jsx)(U.a,{children:Object(_.jsx)(me.a,{type:"default",icon:Object(_.jsx)(xe.a,{className:"mr-1"}),children:"SIGN IN"})})]})})]})})})},ve=(c(143),B.a.Title),Ne=B.a.Text,ye=function(e){var t=e.story,c=Object(F.a)(e,["story"]),n=t.title,a=t.image_url,s=J().width;return Object(_.jsxs)(P.a,Object(m.a)(Object(m.a)({},c),{},{className:"story-card",children:[Object(_.jsx)(U.a,{xs:8,md:12,children:Object(_.jsx)("img",{src:a,alt:"",className:"story-card-image"})}),Object(_.jsxs)(U.a,{xs:16,md:12,className:"story-card-info-container p-2",children:[Object(_.jsx)(ve,{level:4,ellipsis:{rows:s<G.md.min?3:4},children:n}),Object(_.jsxs)(P.a,{gutter:4,children:[Object(_.jsx)(U.a,{className:"centered-flex",children:Object(_.jsx)($.c,{className:"story-card-calendar-icon"})}),Object(_.jsx)(U.a,{children:Object(_.jsx)(Ne,{children:"12/03/2021"})})]})]})]}))},we=(c(144),B.a.Title),Ae=B.a.Link,ke=function(e){var t=e.stories,c=e.loading;return Object(_.jsxs)("div",{className:"mb-5",children:[Object(_.jsxs)(P.a,{gutter:{xs:0,md:32},align:"middle",className:"mb-3",children:[Object(_.jsx)(U.a,{children:Object(_.jsx)(we,{level:3,children:"Anime & Manga News"})}),Object(_.jsx)(U.a,{flex:"auto",className:"desktop",children:Object(_.jsx)(V.a,{})}),Object(_.jsx)(U.a,{className:"desktop",children:Object(_.jsx)(Ae,{strong:!0,children:"VIEW MORE"})})]}),Object(_.jsx)(P.a,{gutter:[{md:24,xl:40},{xs:8,sm:8,md:24,xl:40}],children:c?Array.from(Array(4).keys()).map((function(e){return Object(_.jsx)(U.a,{xs:24,lg:12,children:Object(_.jsxs)(P.a,{className:"story-card loading",children:[Object(_.jsx)(U.a,{xs:8,md:12,children:Object(_.jsx)(X.a.Button,{active:!0,className:"skeleton-stretch"})}),Object(_.jsx)(U.a,{xs:16,md:12,className:"p-2",children:Object(_.jsx)(X.a,{active:!0})})]})},e)})):t.map((function(e,t){return Object(_.jsx)(U.a,{xs:24,lg:12,children:Object(_.jsx)(ye,{onClick:function(){return window.open(e.link,"_blank")},story:e})},t)}))}),Object(_.jsx)(P.a,{justify:"end",className:"mobile mt-2",children:Object(_.jsx)(U.a,{children:Object(_.jsx)(Ae,{strong:!0,children:"VIEW MORE"})})})]})},Ce=(c(145),function(){var e,t=Object(i.b)(),c=Object(i.c)(S),a=Object(i.c)(y),s=Object(i.c)(w);return Object(n.useEffect)((function(){t(C()),t(g()),t(v())}),[t]),Object(_.jsxs)("div",{children:[Object(_.jsx)(ce,{loading:c.loading,newsList:c.data||[]}),Object(_.jsx)("div",{className:"centered-flex",children:Object(_.jsxs)("div",{className:"content-container py-5",children:[Object(_.jsx)(K,{loading:a.loading,title:a.data?"".concat(a.data.season_name," ").concat(a.data.season_year," Anime"):"",animes:(null===(e=a.data)||void 0===e?void 0:e.anime)||[]}),Object(_.jsx)(K,{loading:s.loading,title:"Top Airing Anime",animes:s.data}),Object(_.jsx)(ke,{loading:c.loading,stories:c.data||[]})]})}),Object(_.jsx)(je,{})]})}),Le=(c(146),function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(ge,{}),Object(_.jsx)(M.a,{children:Object(_.jsx)(I.c,{children:Object(_.jsx)(I.a,{exact:!0,path:"/",children:Object(_.jsx)(Ce,{})})})})]})}),Se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,159)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(i.a,{store:R,children:Object(_.jsx)(Le,{})})}),document.getElementById("root")),Se()}},[[148,1,2]]]);
//# sourceMappingURL=main.100e299d.chunk.js.map