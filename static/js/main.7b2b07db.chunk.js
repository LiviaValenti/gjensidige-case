(this["webpackJsonpsommerstudent-case"]=this["webpackJsonpsommerstudent-case"]||[]).push([[0],{28:function(n,e,t){"use strict";t.r(e);var a,c,i,r,o=t(1),s=t(13),d=t.n(s),p=t(4),l=t(2),u=t(3),x=t(7),b=t(0);function g(n,e){return n/e*100}var f,h,m=function(n){var e=n.value,t=n.max;return Object(b.jsxs)(w,{children:[Object(b.jsx)(j,{children:Object(b.jsx)(O,{children:Object(b.jsx)(v,{progress:g(e,t)})})}),Object(b.jsx)("p",{children:e})]})},j=u.b.div(a||(a=Object(l.a)(["\n  height: 10px;\n  width: 100%;\n  border-radius: 10px;\n  position: relative;\n  background: #7e6d57;\n  overflow: hidden;\n  filter: drop-shadow(2px 1px 4px #14141440);\n"]))),O=u.b.span(c||(c=Object(l.a)(["\n  width: 100%;\n  position: relative;\n  display: block;\n  height: 100%;\n  filter: drop-shadow(1px 0px 4px #14141486);\n"]))),v=u.b.span(i||(i=Object(l.a)(["\n  display: block;\n  border-radius: 10px;\n  height: 100%;\n  background: linear-gradient(0deg, #135713 20%, #1fa81f 60%, #18830e 80%);\n  width: ","%;\n  transition: 0.3s;\n"])),(function(n){return n.progress})),w=u.b.div(r||(r=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"])));function k(n){switch(n){case"hp":return 255;case"attack":return 190;case"defense":return 250;case"special-attack":return 194;case"special-defense":return 250;case"speed":return 200}return 0}var y,C,A,I,P,z,B,F,S,X,T,E,_,D,G,H,J=function(n){var e=n.stats;if(e){var t=e.map((function(n){return Object(b.jsxs)(o.Fragment,{children:[Object(b.jsx)("p",{children:(e=n.stat.name,"special-attack"===e?"Sp.Atk":"special-defense"===e?"Sp.Def":e)}),Object(b.jsx)(M,{value:n.base_stat,max:k(n.stat.name)})]},n.stat.name);var e}));return Object(b.jsx)(L,{children:t})}return Object(b.jsx)("p",{children:"Loading stats..."})},L=u.b.div(f||(f=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 80px 150px;\n  grid-template-rows: auto;\n  text-transform: capitalize;\n  & p {\n    margin: 5px;\n    text-align: right;\n    align-self: center;\n    font-weight: 500;\n  }\n  @media only screen and (max-width: 1200px) {\n    grid-template-columns: 80px 110px;\n    & p {\n      margin: 5px 5px 0 5px;\n    }\n  }\n  @media only screen and (max-width: 830px) {\n    grid-template-columns: 80px 110px;\n    & p {\n      margin: 0 5px 0 5px;\n    }\n  }\n"]))),M=Object(u.b)(m)(h||(h=Object(l.a)(["\n  align-self: center;\n"]))),N=t.p+"static/media/wear.9b5656f2.png",q=t(11),K=t.n(q),Q=t(17),R=function(){var n=Object(Q.a)(K.a.mark((function n(e){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(n){if(200===n.status)return n.json();throw new Error("Got HTTP status code ".concat(n.status,", when HTTP status code ").concat(200," was expected"))})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),U=function(n){var e=230,t=20,a=80;return new Map([["normal","".concat(e,"deg, #A8A878 ").concat(t,"% ,#645D23 ").concat(a,"%")],["fire","".concat(e,"deg, #F08030 ").concat(t,"% ,#a04009 ").concat(a,"%")],["water","".concat(e,"deg, #49b9db ").concat(t,"% ,#2249A8 ").concat(a,"%")],["grass","".concat(e,"deg, #50ec65 ").concat(t,"% ,#26a822 ").concat(a,"%")],["electric","".concat(e,"deg, #eeca2c ").concat(t,"% ,#c0a114 ").concat(a,"%")],["ice","".concat(e,"deg, #5eb8d3 ").concat(t,"% ,#27bdc2 ").concat(a,"%")],["fighting","".concat(e,"deg, #f87a7a ").concat(t,"% ,#c23838 ").concat(a,"%")],["poison","".concat(e,"deg, #A040A0 ").concat(t,"% ,#660c66 ").concat(a,"%")],["ground","".concat(e,"deg, #b1a434 ").concat(t,"% ,#908542 ").concat(a,"%")],["flying","".concat(e,"deg, #c580fd ").concat(t,"% ,#8138d4 ").concat(a,"%")],["psychic","".concat(e,"deg, #d4259f ").concat(t,"% ,#e68b24 ").concat(a,"%")],["bug","".concat(e,"deg, #b4e21f ").concat(t,"% ,#88a52a ").concat(a,"%")],["rock","".concat(e,"deg, #88835b ").concat(t,"% ,#6e6b54 ").concat(a,"%")],["ghost","".concat(e,"deg, #611bb1 ").concat(t,"% ,#44384e ").concat(a,"%")],["dark","".concat(e,"deg, #58452c ").concat(t,"% ,#2f2114 ").concat(a,"%")],["dragon","".concat(e,"deg, #6e28dd ").concat(t,"% ,#4f1bdd ").concat(a,"%")],["steel","".concat(e,"deg, #b8b8b8 ").concat(t,"% ,#777777 ").concat(a,"%")],["fairy","".concat(e,"deg, #f3bbfa ").concat(t,"% ,#ce61c8 ").concat(a,"%")]]).get(n)||"230deg, #252525 10%, #666666 80%"},V=function(n){var e=n.image,t=n.name,a=n.gradientBackground;return Object(b.jsxs)(Y,{gradientBackground:a,children:[Object(b.jsx)(W,{src:e,alt:"".concat(t," illustration")}),Object(b.jsx)("h1",{children:t})]})},W=u.b.img(y||(y=Object(l.a)(["\n  max-width: 240px;\n  max-height: 160px;\n  filter: drop-shadow(2px 1px 7px #1414148f);\n  @media only screen and (max-width: 1200px) {\n    max-width: 150px;\n    max-height: 100px;\n  }\n"]))),Y=u.b.div(C||(C=Object(l.a)(["\n  display: grid;\n  box-shadow: 0px -15px 10px rgba(0, 0, 0, 0.5);\n  grid-template-rows: 185px 30px;\n  place-items: center;\n  width: 330px;\n  height: 230px;\n  background: linear-gradient(",");\n  & h1 {\n    font-size: 2em;\n    text-transform: capitalize;\n    color: white;\n  }\n  @media only screen and (max-width: 1200px) {\n    width: 250px;\n    height: 160px;\n    grid-template-rows: 115px 30px;\n    & h1 {\n      font-size: 1.5em;\n    }\n  }\n"])),(function(n){return n.gradientBackground})),Z=function(n){var e=n.type,t=n.gradientBackground;return Object(b.jsx)(nn,{gradientBackground:t,children:Object(b.jsx)($,{src:"/images/".concat(e,".svg"),alt:"".concat(e,"icon")})})},$=u.b.img(A||(A=Object(l.a)(["\n  padding: 5px;\n  width: 20px;\n"]))),nn=u.b.div(I||(I=Object(l.a)(["\n  align-self: flex-end;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(",");\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  color: white;\n  text-transform: uppercase;\n"])),(function(n){return n.gradientBackground})),en=function(){return Object(b.jsx)(an,{children:Object(b.jsx)("img",{src:"/images/ball.svg",alt:"Loading..."})})},tn=Object(u.c)(P||(P=Object(l.a)(["\nfrom {\n  transform: rotate(0deg);\n}\nto {\n  transform: rotate(359deg);\n}\n"]))),an=u.b.div(z||(z=Object(l.a)(["\n  width: 100px;\n  animation: "," 2s infinite linear;\n"])),tn),cn=function(n){var e=n.pokemon,t=n.rotation,a=n.onClick,c=n.isActiveCard,i=n.isChosen,r=n.hoverIcon;if(e){var o=U(e.types[0].type.name),s=e.types.map((function(n){return Object(b.jsx)(Z,{gradientBackground:U(n.type.name),type:n.type.name},n.type.name)}));return Object(b.jsxs)(dn,{onClick:a,isActiveCard:c||!1,isChosen:i||!1,rotation:t||0,children:[Object(b.jsx)(V,{image:e.sprites.other.dream_world.front_default,name:e.name,gradientBackground:o}),Object(b.jsx)(rn,{children:s}),Object(b.jsx)(sn,{wearImage:N}),Object(b.jsx)(J,{stats:e.stats}),Object(b.jsx)(on,{hoverIcon:r||"",isChosen:i||!1})]})}return Object(b.jsx)(en,{})},rn=u.b.div(B||(B=Object(l.a)(["\n  width: 100%;\n  margin: -20px 10px 0 0;\n  display: flex;\n  justify-content: flex-end;\n  & > * {\n    margin: 5px;\n  }\n"]))),on=u.b.div(F||(F=Object(l.a)(["\n  &::before {\n    content: '';\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    background: url(",");\n    background-position: center center;\n    background-size: 150px;\n    background-repeat: no-repeat;\n  }\n  transition: 0.4s;\n  filter: opacity(0);\n  z-index: 2;\n  height: 525px;\n  width: 330px;\n  position: absolute;\n  background-color: ",";\n"])),(function(n){return n.hoverIcon}),(function(n){return n.isChosen?"#8a2424":"#16b718"})),sn=u.b.div(S||(S=Object(l.a)(["\n  mix-blend-mode: multiply;\n  filter: opacity(0.8);\n  height: 525px;\n  width: 330px;\n  position: absolute;\n  background-image: url(",");\n  background-size: 330px 525px;\n"])),(function(n){return n.wearImage})),dn=u.b.div(X||(X=Object(l.a)(["\n  transform: rotate(","deg);\n  z-index: ",";\n  filter: brightness(",")\n    blur(",");\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  background-color: #d8d8d8;\n  color: #272727;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);\n  height: 500px;\n  width: 300px;\n  border-radius: 25px;\n\n  // Shine-effect\n  transition: 0.3s;\n  &::before {\n    width: 30%;\n    height: 100%;\n    content: '';\n    position: absolute;\n    background: rgba(255, 255, 255, 0.5);\n    filter: blur(30px);\n    transform: translateX(-60px) skewX(-20deg);\n    transition: 0.3s;\n  }\n  &::after {\n    width: 10%;\n    height: 100%;\n    content: '';\n    position: absolute;\n    background: rgba(255, 255, 255, 0.2);\n    filter: blur(10px);\n    transform: translateX(-120px) skewX(-20deg);\n    transition: 0.3s;\n  }\n  &:hover {\n    transform: scale(1.1)\n      rotate3d(1, 2, 2, ","deg);\n    cursor: pointer;\n    "," {\n      filter: opacity(0.8);\n    }\n    &::before,\n    &::after {\n      transform: translateX(100px) skewX(-20deg);\n    }\n  }\n  @media only screen and (max-width: 1200px) {\n      width: 250px;\n      height: 400px;\n  }\n  @media only screen and (max-width: 830px) {\n      width: 220px;\n      min-height: 350px;\n      display: ",";\n  }\n  \n"])),(function(n){return n.rotation}),(function(n){return n.isActiveCard?1:0}),(function(n){return n.isActiveCard?1:.3}),(function(n){return!n.isActiveCard&&"3px"}),(function(n){return n.isActiveCard&&!n.isChosen&&20}),on,(function(n){return!n.isActiveCard&&"none"})),pn=function(n){var e=n.favoritePokemon,t=n.setFavoritePokemon;return Object(b.jsx)(ln,{children:e.length?e.map((function(n){return Object(b.jsx)(cn,{isActiveCard:!0,hoverIcon:"/images/trash.svg",isChosen:!0,pokemon:n,onClick:function(){return function(n){t((function(e){return Object(x.a)(e.filter((function(e){return e.name!==n.name})))}))}(n)}},n.name)})):Object(b.jsx)("p",{children:"Click a card to add it as a favorite!"})})},ln=u.b.div(T||(T=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-items: center;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 80%;\n  height: 560px;\n  border-radius: 20px;\n  box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.6);\n  background-color: #312414;\n  padding: 10px;\n  margin-top: 60px;\n  @media only screen and (min-width: 1400px) {\n    width: 90%;\n  }\n  @media only screen and (max-width: 1200px) {\n    height: auto;\n    width: 100%;\n    padding: 20px 0;\n  }\n  @media only screen and (max-width: 830px) {\n    height: auto;\n    width: 100%;\n    flex-direction: column;\n    border-radius: 0;\n    padding: 10px 0;\n  }\n"]))),un=function(n){var e=n.favoritePokemon,t=n.setFavoritePokemon,a=Object(o.useState)(1),c=Object(p.a)(a,2),i=c[0],r=c[1],s=Object(o.useState)(),d=Object(p.a)(s,2),l=d[0],u=d[1],g=Object(o.useState)(),f=Object(p.a)(g,2),h=f[0],m=f[1],j=Object(o.useState)(),O=Object(p.a)(j,2),v=O[0],w=O[1];Object(o.useEffect)((function(){i>1&&R(i-1).then((function(n){return m(n)})),R(i).then((function(n){return u(n)})),i<150&&R(i+1).then((function(n){return w(n)}))}),[i]);var k=function(n){e.length<3&&!e.some((function(e){return e.name===n.name}))&&t((function(e){return[].concat(Object(x.a)(e),[n])}))};return Object(b.jsxs)(gn,{children:[1===i?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(cn,{rotation:0,isActiveCard:!0,pokemon:l,hoverIcon:"/images/plus-circle-fill.svg",onClick:function(){l&&k(l)}}),Object(b.jsx)(cn,{rotation:20,pokemon:v,hoverIcon:"/images/right-arrow.svg",onClick:function(){r((function(n){return n+1}))}})]}):150===i?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(cn,{rotation:20,pokemon:h,hoverIcon:"/images/left-arrow.svg",onClick:function(){r((function(n){return n-1}))}}),Object(b.jsx)(cn,{rotation:0,isActiveCard:!0,pokemon:l,hoverIcon:"/images/plus-circle-fill.svg",onClick:function(){l&&k(l)}})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(cn,{rotation:-20,pokemon:h,hoverIcon:"/images/left-arrow.svg",onClick:function(){1!==i&&r((function(n){return n-1}))}}),Object(b.jsx)(cn,{isActiveCard:!0,pokemon:l,hoverIcon:"/images/plus-circle-fill.svg",onClick:function(){l&&k(l)}}),Object(b.jsx)(cn,{rotation:20,pokemon:v,hoverIcon:"/images/right-arrow.svg",onClick:function(){i<151&&r((function(n){return n+1}))}})]}),Object(b.jsxs)(xn,{children:[Object(b.jsx)(bn,{disabled:1===i,onClick:function(){i>1&&r((function(n){return n-1}))},children:"Previous"}),Object(b.jsx)(bn,{disabled:151===i,onClick:function(){i<151&&r((function(n){return n+1}))},children:"Next"})]})]})},xn=u.b.div(E||(E=Object(l.a)(["\n  display: flex;\n"]))),bn=u.b.button(_||(_=Object(l.a)(["\n  background-color: ",";\n  font-family: 'Poppins', sans-serif;\n  border-radius: 10px;\n  border: none;\n  width: 100px;\n  color: white;\n  font-size: 16px;\n  text-align: center;\n  padding: 15px;\n  margin: 10px;\n  text-decoration: none;\n  transition: 0.3s;\n  cursor: ",";\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.disabled?"gray":"#1b60e0"}),(function(n){return n.disabled?"default":"pointer"}),(function(n){return n.disabled?"gray":"#1b60e0"})),gn=u.b.div(D||(D=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  isolation: isolate;\n  flex-direction: row;\n  & "," {\n    display: none;\n  }\n  @media only screen and (max-width: 830px) {\n    flex-direction: column;\n    & "," {\n      display: block;\n    }\n  }\n"])),bn,bn),fn=Object(u.a)(G||(G=Object(l.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n  height: 100%;\n\n    background: linear-gradient(110deg, #123456 20%, #134e8a 40%, #123456 80%);\n  }\n"]))),hn=function(){var n=Object(o.useState)([]),e=Object(p.a)(n,2),t=e[0],a=e[1];return Object(b.jsxs)(mn,{children:[Object(b.jsx)(fn,{}),Object(b.jsxs)("h1",{children:["Pok\xe9mon! Gotta ",Object(b.jsx)("i",{children:"fetch"})," them all"]}),Object(b.jsx)("h2",{children:"Choose 3 favorites by clicking on the cards"}),Object(b.jsx)(un,{favoritePokemon:t,setFavoritePokemon:a}),Object(b.jsx)(pn,{setFavoritePokemon:a,favoritePokemon:t})]})},mn=u.b.div(H||(H=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Poppins', sans-serif;\n  color: white;\n  & > h1 {\n    font-size: 2em;\n    margin: 20px 0 0 0;\n  }\n  & > h2 {\n    margin: 0 0 35px 0;\n    font-size: 1.3em;\n    font-weight: 400;\n  }\n  @media only screen and (max-width: 1200px) {\n    & > h1 {\n      font-size: 1.2em;\n      margin: 20px 0 0 0;\n    }\n    & > h2 {\n      margin: 0 0 35px 0;\n      font-size: 1em;\n      font-weight: 400;\n    }\n  }\n"])));d.a.render(Object(b.jsx)(hn,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.7b2b07db.chunk.js.map