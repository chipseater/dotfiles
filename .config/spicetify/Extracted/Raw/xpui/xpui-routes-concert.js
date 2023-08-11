"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7288],{73829:(e,t,n)=>{n.d(t,{Z:()=>N});n(90511);var r=n(59496),a=n(10506),o=n(94064),i=n(17249),c=n(88843),s=n(26294),l=n(32572),u=n(45402),d=n(69952),f=n(48450);const m="MUiWCNTfb6FcSwVPvQ1V",g="UAk3bMhekwJTV_wIyfsT",h="X9w6LPfKsZHMCs38sVIQ",p="NXn5KjeUOjLGlAfS1Gao",v="N0wgFMDDvCiby4QB5kLJ",y="nloNe2BLRHjz9dxlwfLU",x="FyD0hF1e2PKzRxQ6sYDQ",j="JzXND83mXvcEuntCNR34",w="GR08E4L_rOGljyQQX30R";var b=n(4637);const N=(0,r.memo)((function(e){var t=e.concert,n=e.isVirtual,r=e.enableFirstPartyBadge,N=e.onClick,D=t.venue,k=t.location,C=t.artists[0],_=(0,d.CH)(t.startDate.localDate);return(0,b.jsxs)(c.Link,{to:"/concert/".concat(t.id),className:m,"data-testid":"concert-card",onClick:N,children:[C.imageUri&&(0,b.jsx)(s.Z,{children:(0,b.jsx)("div",{role:"img",className:w,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(".concat(C.imageUri,")")}})}),(0,b.jsx)("time",{className:g,dateTime:t.startDate.localDate,children:(0,b.jsx)(a.D,{as:"div",variant:"mestoBold",children:(0,d.jx)(_)})}),(0,b.jsxs)("div",{className:h,dir:"auto",children:[(0,b.jsxs)(a.D,{as:"p",className:j,variant:"mesto",children:[(0,l.FO)(_)," • ",(0,d.hK)(_)]}),(0,b.jsx)(a.D,{as:"h2",variant:"cello",weight:"bold",className:p,children:(0,f.ij)(t)}),(0,b.jsxs)("div",{className:v,children:[r&&(0,u.$R)(t)&&(0,b.jsx)("span",{className:x,children:(0,b.jsx)(o.V,{iconSize:16})}),(0,b.jsx)(a.D,{as:"span",className:y,variant:"mesto","data-testid":"location-name",children:n?D:[D,k].join(i.ag.getSeparator())})]})]})]})}))},45402:(e,t,n)=>{n.d(t,{$R:()=>u,DF:()=>g,Vv:()=>f,ie:()=>h,k9:()=>l,pm:()=>m,sk:()=>d,yI:()=>c});n(16366),n(31781),n(15089),n(69109),n(82088),n(72304),n(22369),n(40265),n(30246),n(43125),n(27639),n(96669),n(61235),n(69724),n(39965),n(83001),n(71756),n(39975),n(59538),n(79611);var r=n(85487),a=n(67898);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e,t){if(!e)return"/concerts";var n=null==t?void 0:t.normalize().replaceAll(/\W+/g,"-");return n?"/concerts/location/".concat(e,"-").concat(n):"/concerts/location/".concat(e)},s=10;function l(e){if(0===e.length)return[];if(0===e[0].events.length)return[];var t,n=[],r={date:e[0].events[0].openingDate.slice(0,s),events:[]},a=o(e);try{for(a.s();!(t=a.n()).done;){var i,c=o(t.value.events);try{for(c.s();!(i=c.n()).done;){var l=i.value,u=l.openingDate.slice(0,s);r.date!==u&&(n.push(r),r={date:u,events:[]}),r.events.push(l)}}catch(e){c.e(e)}finally{c.f()}}}catch(e){a.e(e)}finally{a.f()}return n.push(r),n}var u=function(e){return e.ticketers.some((function(e){return"spotify"===e.partnerDisplayName.toLowerCase()}))},d=function(e){return e.concerts.some((function(e){var t=e.concert;return u(t)}))},f=function(e){var t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));var n=new Date(t);return n.setDate(t.getDate()+1),{from:t,to:n}},m=function(e){var t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));var n=new Date(t);n.setDate(t.getDate()+7);var r=new Date(n);return r.setDate(n.getDate()+1),{from:n,to:r}},g=function(e,t){return!!(null!=e&&e.from&&null!=e&&e.to&&null!=t&&t.from&&null!=t&&t.to)&&((0,r.Z)(e.from,t.from)&&(0,r.Z)(e.to,t.to))},h=function(e){return(0,a.Z)(e,{representation:"date"})}},90706:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$e});var r=n(39130),a=n(8850),o=(n(162),n(10995)),i=n.n(o),c=n(9102),s=n(61740),l=n(41177),u=n(17249),d=n(68833),f=n(60808),m=n(31185),g=function(){var e=(0,a.Z)(i().mark((function e(t,n){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.checkConcertInCollection)(f.b.getInstance(),t,n);case 2:return a=e.sent,e.abrupt("return",null===(r=a.body)||void 0===r?void 0:r.found[0]);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(e){var t=(0,r.Z)(e.queryKey,2),n=(t[0],t[1]),a=n.username,o=n.concertUri;return g(a,o)},p=n(29893),v=(n(94562),n(59496)),y=n(10506),x=n(65660),j=n(8618),w=n(17386),b=n(60817),N=n(23006),D=n(35833),k=n(61996),C=n(8161),_=n(20188),I=n(45389),P=(n(83001),n(22369),n(27639),n(71756),n(70238),n(45880),n(69109),n(84875)),S=n.n(P),Z=n(94320),A=n(89597),U=n(57035),O=n(38674),L=n(56075),T=n(14255),F=n(78142),K=n(46700),M=n(38430),E=n(3285),V=n(4637),z=v.memo((function(e){var t=e.uri,n=(0,K.T)(t).spec;return(0,V.jsx)(F.ZP,{value:"concert",children:(0,V.jsxs)(T.v,{children:[(0,V.jsx)(M.q,{children:(0,V.jsx)(E.Jx,{spec:n,uri:t,displayText:u.ag.get("context-menu.copy-concert-link")})}),(0,V.jsx)(E.h$,{spec:n,uri:t})]})})})),R=n(88843),H=n(55118),Q=n(47552),W=n(9683);const Y="Qy5TW6J4tm8_aomy4Shi";var q=(0,v.memo)((function(e){var t=(0,_.fU)(H.w,{}),n=t.spec,r=t.logger,a=(0,W.a4)(e.followers,(function(e,t){r.logInteraction(n.planMemberFactory({uri:e,identifier:t}).hitUiNavigate({destination:e}))}));return(0,V.jsxs)("div",{className:Y,children:[(0,V.jsx)(Q.D,{followers:e.followers,spec:n}),(0,V.jsx)(y.D,{as:"p",variant:"mesto",children:a})]})})),X=n(10785),J=n(47982),G=n(71062),B=n(69670),$=n(90775),ee=n(77451),te=n(97422);const ne="rvw6x7R5AiAT48dSkFl9",re="JRuVlk6wpKk6ok7zuW6l",ae="YpfopxY2udneDY34uzRN",oe="KI_0F1jtTR5tWgl7gZ1E",ie="gKtc3TdowDTXBaVESi1D",ce="V8TIr8yJq4tYZfPEzm12",se="VvL91cIRcCi1hJh0K845",le="vKcnOO1GNYoLKHg4T4lK",ue="LdW0YNvo_Y77hgqhL4zY",de="cTkykhjfHxkEGKbxSxXw",fe="XgeTnLs82tTjczDR6oKn",me="P3fE7wn6Tqnibn3gljKV",ge="A8LG_5Dvp7IiXDtdR571",he="OVY7plwgy_AKAzhgoCAF",pe="O0PSSw8ttrMn9lzq_L16",ve="D_ffrfn62aOgZKOFfZVr",ye="OH4mOZCual2ejIodzIkL",xe="se_ixDV6hBf7lve861oU",je="YDAJHPP5lDmg71SdvJZC",we="lKQxSRsi8KcoYx5D7mjh",be="LUMel_X4gQK0J1i6X0sC",Ne="s1jEHgfOLzeY3WugmaoT";const De=(0,v.memo)((function(e){var t=e.concertUri,n=e.position,r=e.ticketer,a=e.spec,o=(0,_.$P)(),i=(0,$.o)(),c=(0,v.useMemo)((function(){return a.ticketProviderCellFactory({identifier:r.partnerDisplayName,position:n,uri:r.url})}),[a,r.partnerDisplayName,n,r.url]),s=(0,_.Wi)(c);return(0,V.jsxs)(R.default,{to:r.url,className:fe,onClick:function(){var e=c.hitNavigateToExternalUri({destination:r.url});o.logInteraction(e),i({targetUri:t,intent:"find-concert",type:"click"})},ref:s,children:[(0,V.jsx)("div",{className:me,children:(0,V.jsx)(te.Ee,{loading:"eager",srcSet:r.imageURL,src:r.imageURL,height:"100%",width:"100%",children:(0,V.jsx)(B.i,{className:ge,iconSize:24})})}),(0,V.jsxs)("div",{className:pe,children:[(0,V.jsx)(y.D.span,{children:r.partnerDisplayName}),(0,V.jsx)(ee.h,{className:he,iconSize:24})]})]},r.url)}));var ke=n(69952),Ce=(0,v.memo)((function(e){var t=e.concert,n=e.onClick,r=t.category,a=t.venue,o=t.location,i=t.lat,c=t.lon;if("ONLINE"===r)return(0,V.jsx)(y.D,{as:"h3",variant:"canon",children:a});var s=new URL("https://maps.google.com/");return s.searchParams.set("q","".concat(a,",").concat(o)),s.searchParams.set("ll","".concat(i,",").concat(c)),(0,V.jsx)(R.default,{to:s.href,target:"_blank",onClick:function(){return n(s.href)},children:(0,V.jsxs)(y.D,{as:"h3",variant:"canon",children:[a,", ",o]})})}));const _e=(0,v.memo)((function(e){var t=e.concert,n=e.ticketAvailabilityTranslated,a=e.entitySpec,o=e.isConcertSaved,i=e.isAnonymous,c=e.onInterestedClick,s=e.followers,l=(0,v.useMemo)((function(){return a.ticketProviderListFactory()}),[a]),d=(0,_.$P)(),g=(0,_.Wi)(l),h=(0,v.useMemo)((function(){return a.interestedButtonFactory()}),[a]),p=(0,_.Wi)(h),x=(0,ke.CH)(t.date),j="spotify:concert:".concat(t.id),w=(0,v.useState)(o),b=(0,r.Z)(w,2),N=b[0],D=b[1],k=(0,O.W6)(X.tp);if(0===t.ticketers.length)return null;if((0,ke.OF)(t.date))return(0,V.jsxs)("div",{className:ue,children:[(0,V.jsx)(y.D,{as:"h3",variant:"canon",children:u.ag.get("concert_event_ended")}),(0,V.jsx)(y.D,{variant:"ballad",children:(0,V.jsx)(R.default,{to:"spotify:concerts",children:u.ag.get("concert_past_message")})})]});var C;return(0,V.jsxs)("div",{className:ue,ref:g,children:[(0,V.jsx)(y.D,{as:"h3",variant:"canon",children:(0,V.jsx)(Ce,{concert:t,onClick:function(e){var t=a.venueMapLinkFactory().hitNavigateToExternalUri({destination:e});d.logInteraction(t)}})}),(0,V.jsxs)(y.D,{as:"h3",variant:"mesto",className:je,children:[(0,ke.xE)(x)," • ",(0,ke.hK)(x)]}),(0,V.jsx)(y.D,{as:"h3",className:le,variant:"mesto",children:(C=t.ticketers,0===C.length?null:1===C.length?u.ag.get("concert.header.tickets_from_1",C[0].partnerDisplayName):2===C.length?u.ag.get("concert.header.tickets_from_2",C[0].partnerDisplayName,C[1].partnerDisplayName):3===C.length?u.ag.get("concert.header.tickets_from_3",C[0].partnerDisplayName,C[1].partnerDisplayName,C[2].partnerDisplayName):u.ag.get("concert.header.tickets_from_4",C[0].partnerDisplayName,C[1].partnerDisplayName,C[2].partnerDisplayName,C.length-3))}),s&&s.length>0&&(0,V.jsx)(_.Nh,{spec:a,children:(0,V.jsx)(q,{followers:s})}),n&&(0,V.jsx)(y.D,{as:"h3",className:le,variant:"mesto",children:n}),(0,V.jsxs)("div",{className:re,children:[!i&&k&&(0,V.jsx)(G.w,{label:u.ag.get("concerts_interested_tooltip"),placement:"top-end",children:(0,V.jsx)(Z.P,{buttonSize:"sm",iconLeading:N?A.N:U.S,className:S()(be,(0,I.Z)({},ne,N)),onClick:function(){var e=h.hitUiElementToggle();d.logInteraction(e),N?((0,m.unsaveConcert)(f.b.getInstance(),t.id),c(!0,u.ag.get("concerts_removed-from-your-saved-events")),d.logInteraction(h.hitRemoveInterest())):((0,m.saveConcert)(f.b.getInstance(),t.id),c(!0,u.ag.get("concerts_added-to-your-saved-events")),d.logInteraction(h.hitAddInterest())),D(!N)},ref:p,children:u.ag.get("concerts_interested")})}),(0,V.jsx)(J.yj,{menu:(0,V.jsx)(z,{uri:j}),onShow:function(){var e=a.contextMenuButtonFactory().hitUiReveal();d.logInteraction(e)},children:(0,V.jsx)(L.z,{size:32})})]}),(0,V.jsx)(y.D.h3,{variant:"canon",children:u.ag.get("concert.header.available_tickets_from")}),(0,V.jsx)("div",{className:de,children:t.ticketers.map((function(e,t){return(0,V.jsx)(De,{concertUri:j,ticketer:e,position:t,spec:l},t)}))})]})}));n(29543),n(70969),n(30246);var Ie=n(83014),Pe=n(36299),Se=n(54658),Ze=n(48547),Ae=n(26294);const Ue="bnxKFmECExdcmyBXx9f_",Oe="UrPgHWUndGwAWPfONuwd",Le="pF2W693VDIpPdVTVCsDg",Te="YGVuy3Qzaam0CJPc_s4K",Fe="r5Kj2xQVLHK0hf_J00US",Ke="qCN2f5PHVrzAPLvQ0lNc";var Me=(0,v.memo)((function(e){var t=e.entity,n=e.headliner,r=e.onClick,a=t.imageUri,o=t.name,i=t.uri;return(0,V.jsxs)(R.Link,{to:i,className:Ue,onClick:r,children:[a?(0,V.jsx)(Ae.Z,{children:(0,V.jsx)("div",{"data-testid":"image-container",className:Ke,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(".concat(a,")")}})}):null,(0,V.jsxs)("div",{className:Oe,children:[n&&(0,V.jsx)("div",{className:Te,children:(0,V.jsx)(y.D,{as:"h4",variant:"mestoBold",className:Fe,weight:"bold",children:u.ag.get("concert.label.headliner")})}),(0,V.jsx)(y.D,{as:"h2",variant:"alto",className:Le,children:o})]})]})}));const Ee=Me;const Ve=(0,v.memo)((function(e){var t=e.artist,n=e.albums,r=e.position,a=e.lineupArtistsSpec,o=(0,v.useMemo)((function(){return a.artistRowFactory({position:r,uri:t.uri})}),[a,r,t.uri]),i=(0,_.$P)(),c=0===r,s="".concat((0,Ze.GJ)(t.id),":discography");return(0,V.jsx)(F.ZP,{value:"headered-grid",index:r,children:(0,V.jsx)(_.Nh,{spec:o||null,children:(0,V.jsx)(Se.P,{title:c?u.ag.get("concert_lineup"):"",total:n.length+2,seeAllUri:s,seeAllLabel:u.ag.get("artist-page.show-discography"),onClickShelfSeeAll:function(){var e=o.seeDiscographyLinkFactory().hitUiNavigate({destination:s});i.logInteraction(e)},children:[(0,V.jsx)(Ee,{entity:t,headliner:c,onClick:function(){var e=o.artistCardFactory().hitUiNavigate({destination:t.uri});i.logInteraction(e)}},"ConcertArtistCard-".concat(t.id)),null].concat((0,Ie.Z)(n.map((function(e,n){return(0,V.jsx)(Pe.r,{index:n,artists:[{uri:t.uri,name:t.name}],images:[{url:e.imageUri,width:100,height:100}],name:e.name,uri:e.uri,sharingInfo:null},e.uri)}))))})})},t.uri)}));const ze=(0,v.memo)((function(e){var t=e.albums,n=e.artists,r=e.entitySpec,a=(0,v.useMemo)((function(){return r.lineupArtistsFactory()}),[r]),o=(0,_.Wi)(a),i=(0,v.useMemo)((function(){var e={};return t.forEach((function(t){var n=t.artistName;e[n]?e[n].push(t):e[n]=[t]})),e}),[t]);return(0,V.jsx)("div",{className:ve,ref:o,"data-testid":"concert-lineup",children:n.map((function(e,t){return(0,V.jsx)(Ve,{artist:e,albums:i[e.name]||[],position:t,lineupArtistsSpec:a},e.uri)}))})})),Re="y4xsX4QR_wfM40vOhsQ4",He="TPdGbM0PhSqxmhkxP9n2",Qe="y33j8HV43EGq3BPkZrLA";const We=(0,v.memo)((function(e){return(0,V.jsxs)(R.Link,{to:"spotify:concerts",className:Re,onClick:e.onClick,children:[(0,V.jsx)(Ae.Z,{children:(0,V.jsx)("div",{className:Qe,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(".concat("https://concerts.spotifycdn.com/ConcertHubCard.png",")")}})}),(0,V.jsx)("div",{className:He,children:(0,V.jsx)(y.D,{as:"h2",variant:"canon",children:u.ag.get("concerts_browse_more")})})]})}));var Ye=n(73829);const qe=(0,v.memo)((function(e){var t=(0,v.useMemo)((function(){return e.entitySpec.recommendedConcertsFactory()}),[e.entitySpec]),n=(0,_.$P)(),r=(0,_.Wi)(t),a=e.upcomingConcerts;if(!a||a.length<1)return null;var o=a.map((function(e,r){var a="spotify:concert:".concat(e.concert.id);return(0,V.jsx)(Ye.Z,{concert:e.concert,onClick:function(){var e=t.concertCardFactory({position:r,uri:a}).hitUiNavigate({destination:a});n.logInteraction(e)}},e.concert.id)}));return(0,V.jsx)("div",{className:xe,ref:r,"data-testid":"concert-recommendations",children:(0,V.jsx)(F.ZP,{value:"headered-grid",children:(0,V.jsxs)(Se.P,{title:u.ag.get("concerts_more_events"),total:a.length+1,className:we,showSeeAll:!0,seeAllUri:"spotify:concerts",seeAllLabel:u.ag.get("view.see-all"),children:[(0,V.jsx)(We,{onClick:function(){var e=t.browseCardFactory().hitUiNavigate({destination:"spotify:concerts"});n.logInteraction(e)}}),o]})})})}));var Xe=n(48450);const Je=(0,v.memo)((function(e){var t=e.data,n=e.isAnonymous,a=e.isConcertSaved,o=e.followers,i=t.artists,c=t.albums,s=t.upcomingConcerts,l=t.concert.concert,u=(0,v.useState)(!1),d=(0,r.Z)(u,2),f=d[0],m=d[1],g=(0,v.useState)(""),h=(0,r.Z)(g,2),p=h[0],I=h[1],P=(0,_.fU)(j.q,{data:{identifier:l.id,uri:"spotify:concert:".concat(l.id)}}).spec;return(0,C.Y)(t.color),(0,V.jsxs)("section",{className:ce,children:[(0,V.jsx)(b.$,{children:(0,Xe.Yl)(l)}),(0,V.jsxs)(N.gF,{backgroundImages:[{url:t.headerImageUri,width:100,height:100}],backgroundColor:t.color,children:[(0,V.jsxs)(N.sP,{children:[(0,V.jsx)(N.T0,{children:(0,V.jsx)("div",{className:ae,children:(0,V.jsx)(y.D,{as:"h3",variant:"canon",className:oe,children:(0,ke.jx)((0,ke.CH)(l.date))})})}),(0,V.jsx)(N.xd,{children:(0,Xe.Yl)(l)})]}),(0,V.jsx)(D.W,{children:(0,V.jsx)("div",{className:ye,children:(0,V.jsx)(k.i,{text:(0,Xe.Yl)(l)})})})]}),(0,V.jsxs)("div",{className:ie,children:[(0,V.jsx)(w.I,{backgroundColor:t.color}),(0,V.jsxs)("div",{className:se,children:[(0,V.jsx)(_e,{onInterestedClick:function(e,t){m(e),I(t),setTimeout((function(){return m(!1)}),1e4)},concert:l,ticketAvailabilityTranslated:t.ticketAvailabilityTranslated,entitySpec:P,isAnonymous:n,isConcertSaved:a,followers:o}),(0,V.jsx)(ze,{artists:i,albums:c,entitySpec:P}),(0,V.jsx)(qe,{upcomingConcerts:s,entitySpec:P})]})]}),f&&(0,V.jsx)(x.A9,{colorSet:"invertedLight",className:Ne,children:p})]})}));var Ge=n(91914),Be=function(){var e=(0,a.Z)(i().mark((function e(t){var n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,r.Z)(t.queryKey,2),n[0],a=n[1],e.next=3,(0,m.getConcert)(f.b.getInstance(),a);case 3:return o=e.sent,e.abrupt("return",o.body);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();const $e=function(){var e,t,n,r=(0,l.UO)().concertId,a=void 0===r?"":r,o=(0,c.useQuery)(["concert",a],Be,{staleTime:6e5}),i=o.data,f=o.isLoading,m=(0,s.v9)(p.n5),g=(e={username:m,concertUri:"spotify:concert:".concat(a)},t=["concertInCollection",e],(0,c.useQuery)(t,h,{keepPreviousData:!1,retry:!1})),v=(null==g?void 0:g.data)||!1,y=(0,s.v9)(p.Gg).isAnonymous,x=null==i?void 0:i.artists.map((function(e){return e.uri}));n={artists:x},(0,c.useQuery)(["family-duo-concert-followers-aa-test",n],Ge.g,{enabled:(0,O.W6)(X.hj)});var j=function(e){return(0,c.useQuery)(["family-duo-concert-followers",e],Ge.g,{enabled:(0,O.W6)(X.YC),retry:!1})}({artists:x}),w=j.data,b=j.isLoading;return f||b?(0,V.jsx)(d.h,{hasError:!1,errorMessage:""}):i?(0,V.jsx)(Je,{data:i,isAnonymous:y,isConcertSaved:v,followers:null==w?void 0:w.followers}):(0,V.jsx)(d.h,{hasError:!0,errorMessage:u.ag.get("concert.error.concert_not_found_title")})}},91914:(e,t,n)=>{n.d(t,{g:()=>g,P:()=>m});var r=n(39130),a=n(8850),o=n(10995),i=n.n(o),c=n(60808),s=n(45389),l=(n(89620),n(95675),n(61235),n(62780),n(22369),n(7845),n(29543),n(70969),n(66715),n(30479),n(75341),n(32953));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=function(e,t){return e.build().withMethod("GET").withHost(l.gH).withPath("/concerts/").withEndpointIdentifier("/cooper/concerts").withQueryParameters(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t&&{geonameId:t})).withoutMarket().send()},f=function(e,t){return e.build().withMethod("POST").withHost(l.gH).withPath("/followers/").withEndpointIdentifier("/cooper/followers").withHeaders([{key:"content-type",value:"application/json"},{key:"accept",value:"application/json"}]).withBody(JSON.stringify({artists:t})).withoutMarket().send()},m=function(){var e=(0,a.Z)(i().mark((function e(t){var n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,r.Z)(t.queryKey,2),n[0],a=n[1].geonameId,e.next=3,d(c.b.getInstance(),a);case 3:return o=e.sent,e.abrupt("return",o.body);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)(i().mark((function e(t){var n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,r.Z)(t.queryKey,2),n[0],a=n[1].artists,e.next=3,f(c.b.getInstance(),a);case 3:return o=e.sent,e.abrupt("return",o.body);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},47552:(e,t,n)=>{n.d(t,{D:()=>u});n(162);var r=n(59496),a=n(20188);const o="g4AhdK8faqTe7v8VqC3x";var i=n(4637),c=(0,r.memo)((function(e){var t=e.alt;return(0,i.jsxs)("svg",{height:8,width:8,"aria-hidden":"true",viewBox:"-8 -8 32 32",className:o,children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("path",{d:"M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"})]})}));const s="WCQhjx2ZwtN1mwka_4wj";var l=function(e){var t,n,o=(0,a.$P)(),s="spotify:user:".concat(e.follower.username);return(0,r.useEffect)((function(){o.logImpression(e.spec.planMemberFactory({identifier:e.follower.memberId,uri:s}).impression())})),e.follower.profileImageUrl?(0,i.jsx)("img",{src:e.follower.profileImageUrl,alt:null!==(n=e.follower.displayName)&&void 0!==n?n:e.follower.username},"follower-".concat(null!==(t=e.follower.displayName)&&void 0!==t?t:e.follower.username)):(0,i.jsx)(c,{alt:e.follower.displayName},"follower-".concat(e.follower.displayName))},u=(0,r.memo)((function(e){return(0,i.jsx)("div",{className:s,children:e.followers.map((function(t,n){return(0,i.jsx)(l,{follower:t,spec:e.spec},"follower-".concat(n))}))})}))},9683:(e,t,n)=>{n.d(t,{FV:()=>c,a4:()=>s,ij:()=>i});var r=n(83014),a=(n(162),n(30246),n(69109),n(17249)),o=n(4637),i=function(e){if(function(e){return!!e.title&&(e.festival||!e.artists.length)}(e))return e.title;var t=function(e){return e.artists.map((function(e){return e.name}))}(e);return 1===t.length?a.ag.get.apply(a.ag,["concert.header.upcoming_concert_title_1"].concat((0,r.Z)(t))):2===t.length?a.ag.get.apply(a.ag,["concert.header.upcoming_concert_title_2"].concat((0,r.Z)(t))):3===t.length?a.ag.get.apply(a.ag,["concert.header.upcoming_concert_title_3"].concat((0,r.Z)(t))):4===t.length?a.ag.get.apply(a.ag,["concert.header.upcoming_concert_title_4"].concat((0,r.Z)(t))):t.length>4?a.ag.get.apply(a.ag,["concert.header.upcoming_concert_title_more"].concat((0,r.Z)(t))):""},c=function(e){var t;return 1===e.length?a.ag.get("web-player.family-duo-concerts-shelf.X-follows",null!==(t=e[0].displayName)&&void 0!==t?t:e[0].username):a.ag.get("web-player.family-duo-concerts-shelf.X-of-your-family-follow",e.length)},s=function(e,t){var n=e.map((function(e,n){var r,a="spotify:user:".concat(e.username);return(0,o.jsx)("a",{onClick:function(){return t(a,e.memberId)},href:a,children:null!==(r=e.displayName)&&void 0!==r?r:e.username},"follower-name-".concat(n))}));return 1===e.length?a.ag.get("web-player.family-duo-concerts-shelf.X-follows",n[0]):2===e.length?a.ag.get.apply(a.ag,["web-player.family-duo-concerts-shelf.2-follow"].concat((0,r.Z)(n))):3===e.length?a.ag.get.apply(a.ag,["web-player.family-duo-concerts-shelf.3-follow"].concat((0,r.Z)(n))):4===e.length?a.ag.get.apply(a.ag,["web-player.family-duo-concerts-shelf.4-follow"].concat((0,r.Z)(n))):a.ag.get.apply(a.ag,["web-player.family-duo-concerts-shelf.5-follow"].concat((0,r.Z)(n)))}}}]);
//# sourceMappingURL=xpui-routes-concert.js.map