(this.webpackJsonpmemecreator=this.webpackJsonpmemecreator||[]).push([[0],{121:function(e,t,a){e.exports={meme:"Meme_meme__2xLyP"}},123:function(e,t,a){e.exports=a(310)},128:function(e,t,a){},129:function(e,t,a){},13:function(e,t,a){e.exports={component:"intropage_component__2Eph7",navButton:"intropage_navButton__2JYv6",glowing:"intropage_glowing__2Y0Ic",memeSelectionContainer:"intropage_memeSelectionContainer__2bWuf",linkMemeTypes:"intropage_linkMemeTypes__3LdM_",memeTypesImg:"intropage_memeTypesImg__1jzvQ",titleExample:"intropage_titleExample__3i1C4",imgContainer:"intropage_imgContainer__1SqrB",images:"intropage_images__1BZ0z"}},144:function(e,t,a){e.exports=a.p+"static/media/memeTextInside.acf0d59b.jpg"},145:function(e,t,a){e.exports=a.p+"static/media/memeTextOutside.92bae5a2.jpg"},146:function(e,t,a){e.exports=a.p+"static/media/memeFreestyle.8d5a158d.jpg"},21:function(e,t,a){e.exports={styleOptions:"FontButtons_styleOptions__3giQ8",fontButtonContainer:"FontButtons_fontButtonContainer__1e5e0",sizeButtons:"FontButtons_sizeButtons__3xlc_",Button:"FontButtons_Button__2q4u4"}},24:function(e,t,a){e.exports={headline:"memeOptions_headline__dTpjR",removeButton:"memeOptions_removeButton__2fnZL",opacity:"memeOptions_opacity__3PPa-",cssOption:"memeOptions_cssOption__2JErP",cssOptionInput:"memeOptions_cssOptionInput__2gnl-"}},310:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(118),c=a.n(r),i=(a(128),a(129),a(25)),m=a(6),l=a(4),s=a(13),u=a.n(s),f=a(77),p=a.n(f);p.a.initializeApp({apiKey:"AIzaSyAUT429SZZhzKtWu84CWyZTlLcEVJGz8vA",authDomain:"memecreator-c2665.firebaseapp.com",databaseURL:"https://memecreator-c2665.firebaseio.com",projectId:"memecreator-c2665",storageBucket:"memecreator-c2665.appspot.com",messagingSenderId:"634063807183",appId:"1:634063807183:web:567101b2f2402719fb4dba"});var g=p.a.auth;function d(){var e=new g.GoogleAuthProvider;return g().signInWithPopup(e)}function b(){var e=new g.GithubAuthProvider;return g().signInWithPopup(e)}function E(){g().signOut()}var h=o.a.createContext(),_=function(e){var t=e.children,a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)((function(){g().onAuthStateChanged((function(e){i(e)}))}),[]);var m=!!c;return o.a.createElement(h.Provider,{value:{authorized:m,user:c}},t)},v=a(35),x=a.n(v),y=function(){var e=Object(n.useContext)(h),t=e.authorized,a=e.user;return o.a.createElement("div",{className:x.a.body},t&&o.a.createElement("span",null,a.email," ",o.a.createElement("button",{onClick:E}," Logout"))||o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"Sign in with "),o.a.createElement("button",{className:x.a.iconButton,onClick:d},o.a.createElement("img",{className:x.a.icon,src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google"})),o.a.createElement("button",{className:x.a.iconButton,onClick:b},o.a.createElement("img",{className:x.a.icon,src:"/memeCreator/src/icon/gitHub.png",alt:"github"}))))},C=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){fetch(" https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){c(e.data.memes.map((function(e){return e.url})))})).catch((function(e){}))}),[]),o.a.createElement("div",{className:u.a.component},o.a.createElement("nav",null,o.a.createElement(i.b,{to:"/memeCreator/textInOfImage"},o.a.createElement("button",{className:u.a.navButton},o.a.createElement("span",null,"Top/Bottom Text Meme"))),o.a.createElement(i.b,{to:"/memeCreator/freestyle"},o.a.createElement("button",{className:u.a.navButton},o.a.createElement("span",null,"FreeStyle Meme"))),o.a.createElement(y,null)),o.a.createElement("h1",{className:u.a.title},"Welcome to the Meme creator"),o.a.createElement("div",{className:u.a.memeSelectionContainer},o.a.createElement(i.b,{className:u.a.linkMemeTypes,to:"/memeCreator/textInOfImage"},o.a.createElement("h2",null,"Top/Bottom Text"),o.a.createElement("p",null,"Design a meme with a top and a Bottom text! You can custumize if the text is inside or Outside the meme"),o.a.createElement("div",{className:u.a.memeImgCont},o.a.createElement("img",{className:u.a.memeTypesImg,src:a(144),alt:"memeTextInside"}),o.a.createElement("img",{className:u.a.memeTypesImg,src:a(145),alt:"memeTextOutside"}))),o.a.createElement(i.b,{className:u.a.linkMemeTypes,to:"/memeCreator/freestyle"},o.a.createElement("h2",null,"FreeStyle"),o.a.createElement("p",null,"Put your text wherever you want in the meme! Try this awesome freestyle editor."),o.a.createElement("img",{className:u.a.memeTypesImg,src:a(146),alt:"serious"}))),o.a.createElement("h2",{className:u.a.titleExample},"Examples Images you can use for your memes"),o.a.createElement("div",{className:u.a.imgContainer},r.slice(0,9).map((function(e){return o.a.createElement("img",{className:u.a.images,src:e,alt:"img1"})}))))},O=a(33),N=a.n(O),j=a(5),S=a(7),T=a.n(S),B=a(21),w=a.n(B),I=function(e){return o.a.createElement("div",{className:w.a.styleOptions},o.a.createElement("div",{className:w.a.fontButtonContainer},o.a.createElement("button",{className:w.a.Button,onClick:function(){return e.setFont("Georgia, serif")},style:{fontFamily:"Georgia, serif",fontSize:"15px"}},"Georgia"),o.a.createElement("button",{className:w.a.Button,onClick:function(){return e.setFont("Arial Black")},style:{fontFamily:"Arial Black",fontSize:"13px"}},"Arial Black"),o.a.createElement("button",{className:w.a.Button,onClick:function(){return e.setFont("monospace")},style:{fontFamily:"monospace"}},"Monospace"),o.a.createElement("button",{className:w.a.Button,onClick:function(){return e.setFont("Comic Sans MS")},style:{fontFamily:"Comic Sans MS"}},"Comic Sans"),o.a.createElement("button",{className:w.a.Button,onClick:function(){return e.setFont("cursive")},style:{fontFamily:"cursive"}},"Cursive"),o.a.createElement("div",{className:w.a.sizeButtons},o.a.createElement("button",{className:w.a.Button,onClick:function(){return e.setSize(e.letterSize+1)},style:{fontSize:"15px",height:"35px"}},"A+"),o.a.createElement("button",{className:w.a.Button,onClick:function(){return e.setSize(e.letterSize-1)},style:{fontSize:"10px",height:"35px"}},"A-"))))},k=a(120),M=a(56),F=a.n(M),z=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],c=a[1];return o.a.createElement("div",{className:F.a.bodyContainer},o.a.createElement("button",{className:F.a.Button,onClick:function(){return c((function(e){return!e}))}},r?"Close":"Text Color"),o.a.createElement("div",{className:F.a.ChromePickerContainer,style:r?null:{display:"none"}},o.a.createElement(k.ChromePicker,{color:e.currentColor,onChange:function(t){return e.setColor(t.hex)}})))},P=o.a.forwardRef((function(e,t){var a=e.image,r=e.memeName,c=e.setMemeName,i=Object(n.useState)({text:"top text",inner:!0}),m=Object(l.a)(i,2),s=m[0],u=m[1],f=Object(n.useState)({text:"bottom text",inner:!0}),p=Object(l.a)(f,2),g=p[0],d=p[1],b=Object(n.useState)(""),E=Object(l.a)(b,2),h=E[0],_=E[1],v=Object(n.useState)(12),x=Object(l.a)(v,2),y=x[0],C=x[1],O=Object(n.useState)("black"),N=Object(l.a)(O,2),S=N[0],B=N[1],w=function(e,t,a){return{display:e.inner?"block":"none",color:S,fontFamily:t,fontSize:a}},k=function(e,t,a){return{display:e.inner?"none":"block",color:S,backgroundColor:e.inner?"transparent":"white",fontFamily:t,fontSize:a}};return o.a.createElement("div",{className:T.a.bodyContainer},o.a.createElement("div",{ref:t,className:T.a.memeContainer,style:{height:a.height+"px",width:a.width+"px"}},o.a.createElement("div",{style:k(s,h,y),className:T.a.textTop},s.text),o.a.createElement(R,{image:a,onClick:function(){}},o.a.createElement("div",{style:w(s,h,y),className:T.a.textTop},s.text),o.a.createElement("span",null),o.a.createElement("div",{style:w(g,h,y),className:T.a.textBottom},g.text)),o.a.createElement("div",{style:k(g,h,y),className:T.a.textBottom},g.text)),o.a.createElement("div",{className:T.a.options},o.a.createElement("label",{htmlFor:"inp",className:T.a.inp},o.a.createElement("input",{id:"inp",type:"text",value:s.text,onChange:function(e){u(Object(j.a)(Object(j.a)({},s),{},{text:e.target.value}))}}),o.a.createElement("span",{className:T.a.label},"Top Text"),o.a.createElement("span",{className:T.a.focusBg})),o.a.createElement("label",{htmlFor:"inp2",className:T.a.inp},o.a.createElement("input",{id:"inp2",type:"text",value:g.text,onChange:function(e){d(Object(j.a)(Object(j.a)({},g),{},{text:e.target.value}))}}),o.a.createElement("span",{className:T.a.label},"Bottom Text"),o.a.createElement("span",{className:T.a.focusBg})),o.a.createElement("button",{className:T.a.Button,onClick:function(){return u(Object(j.a)(Object(j.a)({},s),{},{inner:!s.inner}))}},"Top in/out"),o.a.createElement("button",{className:T.a.Button,onClick:function(){return d(Object(j.a)(Object(j.a)({},g),{},{inner:!g.inner}))}},"bottom in/out"),o.a.createElement("label",{htmlFor:"inp3",className:T.a.inp},o.a.createElement("input",{id:"inp3",type:"text",value:r,onChange:function(e){c(e.target.value)}}),o.a.createElement("span",{className:T.a.label},"Meme Name"),o.a.createElement("span",{className:T.a.focusBg}))),o.a.createElement("div",{className:T.a.fontStyleContainer},o.a.createElement(I,{setFont:_,setSize:C,letterSize:y}),o.a.createElement(z,{setColor:B,currentColor:S})))})),R=o.a.forwardRef((function(e,t){var a=e.image,n=e.children;return o.a.createElement("div",{ref:t,className:T.a.memeImage,style:{backgroundImage:"url("+a.src+")",height:a.height+"px",width:a.width+"px",position:"relative",backgroundRepeat:"no-repeat",backgroundSize:"contain"}},n)})),J=a(26),A=function(e,t){return{left:e.pageX-t.totalOffsetLeft+"px",top:e.pageY-t.totalOffsetTop+"px"}},L=function(e){for(var t=e.offsetLeft,a=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetLeft,a+=e.offsetTop;return{totalOffsetLeft:t,totalOffsetTop:a}};function Z(e,t){switch(t.type){case"addText":return G(e,t);case"setText":return U(e,t);case"removeText":return W(e,t);case"changeTextStyle":return Q(e,t);case"changePosition":return X(e,t);case"onFocus":return Y(e,t);default:console.log("default")}}var G=function(e,t){var a=t.event,n=K(a);return[].concat(Object(J.a)(e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{focus:!1})}))),[n])},W=function(e,t){var a=t.id,n=D(a,e);return[].concat(Object(J.a)(e.slice(0,n)),Object(J.a)(e.slice(n+1)))},D=function(e,t){return[0].concat(Object(J.a)(t)).reduce((function(t,a,n){return e===a.id&&n||t}))-1},U=function(e,t){var a=t.id,n=t.newText,o=D(a,e),r=e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{focus:!1})}));return r[o]=JSON.parse(JSON.stringify(r[o])),r[o].text=n,r[o].focus=!0,Object(J.a)(r)},Y=function(e,t){var a=t.id,n=D(a,e),o=e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{focus:!1})}));return o[n]=JSON.parse(JSON.stringify(o[n])),o[n].new=!1,o[n].focus=!0,Object(J.a)(o)},Q=function(e,t){var a=t.id,n=t.prop,o=t.value,r=D(a,e),c=e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{focus:!1})}));return c[r]=JSON.parse(JSON.stringify(c[r])),"fontSize"===n&&(o=parseInt(o)),c[r].style[n]=o,c[r].focus=!0,Object(J.a)(c)},X=function(e,t){var a=t.id,n=t.newPos,o=D(a,e),r=e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{focus:!1})}));return r[o]=JSON.parse(JSON.stringify(r[o])),r[o].style.left=n.left,r[o].style.top=n.top,r[o].focus=!0,Object(J.a)(r)},V=0,K=function(e){var t=function(e){var t=L(e.target);return A(e,t)}(e);return{id:V++,text:"text",style:{display:"block",position:"absolute",zIndex:"100",color:"white",cols:"4",fontSize:30,resize:"none",borderWidth:"0px",borderColor:"transparent",backgroundColor:"transparent",transform:"",left:t.left,top:t.top},new:!0,focus:!0}},H=a(57),q=a.n(H),$=a(121),ee=a.n($),te=o.a.forwardRef((function(e,t){var a=e.element,r=Object(n.useContext)(ue),c=r.reduceMemeTexts,i=r.offset,m=a.text,l=a.style,s=a.id,u=function(e){c({type:"changePosition",id:s,newPos:A(e,i)})},f=Object(n.useRef)();return Object(n.useEffect)((function(){f.current.focus()}),[]),o.a.createElement("textarea",{draggable:"true",onFocus:function(){return c({type:"onFocus",id:s})},onDrag:u,onDragEnd:u,type:"text",onChange:function(e){!function(e){e.target.rows=Math.max(1,e.target.value.split("\n").length)}(e),function(e){var t=e.target.value.split("\n").map((function(e){return e.length})).reduce((function(e,t){return Math.max(e,t)}));e.target.style.width=t+2+"ch"}(e),c({type:"setText",newText:e.target.value,id:s})},value:m,style:l,ref:f,rows:"1",cols:"4"})})),ae=function(e){var t=e.image,a=e.children,r=Object(n.useContext)(ue).reduceMemeTexts;return o.a.createElement("div",{style:{backgroundImage:"url("+t.src+")",height:t.height+"px",width:t.width+"px",position:"relative",backgroundRepeat:"no-repeat",backgroundSize:"contain"}},o.a.createElement("div",{style:{width:"inherit",height:"inherit"},onClick:function(e){r({type:"addText",event:{pageX:e.pageX,target:e.target,pageY:e.pageY}})}}),a)},ne=o.a.forwardRef((function(e,t){var a=e.image,r=e.className,c=Object(n.useContext)(ue),i=c.memeTexts,m=c.space,l=i.map((function(e,t){return o.a.createElement(te,{key:t,element:e})})),s={paddingTop:m.top+"px",backgroundColor:m.topColor},u={paddingBottom:m.bottom+"px",backgroundColor:m.bottomColor};return o.a.createElement("div",{ref:t,className:ee.a.meme+" "+r},o.a.createElement("div",{style:s}),o.a.createElement(ae,{image:a}," ",l),o.a.createElement("div",{style:u}))})),oe=a(80),re=a.n(oe),ce=a(24),ie=a.n(ce),me=function(e){var t=e.memeText,a=Object(n.useContext)(ue).reduceMemeTexts,r=t&&t.text||"no text selected",c=t&&function(){return a({type:"removeText",id:t.id})},i=t&&function(e){return function(n){return a({type:"changeTextStyle",id:t.id,prop:e,value:n.target.value})}}||function(){};return o.a.createElement("div",{className:t?"":ie.a.opacity},o.a.createElement("div",null,o.a.createElement("h5",{className:ie.a.headline},r,o.a.createElement("img",{className:ie.a.removeButton,src:"/memeCreator/src/icon/remove.png",onClick:c,alt:"remove"}))),o.a.createElement("div",null,"Set css:",["color","backgroundColor","fontSize","transform","textTransform","fontFamily"].map((function(e,a){return o.a.createElement("div",{key:a,className:ie.a.cssOption},o.a.createElement("label",{htmlFor:a+"propName"}," ",e),o.a.createElement("br",null),o.a.createElement("input",{id:a+"propName",className:ie.a.cssOptionInput,value:t&&t.style[e],onChange:i(e)}))}))))},le=function(e){var t=e.topOrBottom,a=Object(n.useContext)(ue),r=a.space,c=a.setSpace,i=t,m=t+"Color",l=function(e){return function(t){var a=Object(j.a)({},r);a[e]=t.target.value,c(a)}};return o.a.createElement("div",{className:ie.a.cssOption},"Set ",t," padding",o.a.createElement("br",null),o.a.createElement("input",{type:"range",min:"0",max:"100",value:r[i],onChange:l(i),className:ie.a.cssOptionInput}),o.a.createElement("br",null),"color:",o.a.createElement("br",null),o.a.createElement("input",{className:ie.a.cssOptionInput,type:"text",value:r[m],onChange:l(m)}))};var se=function(e){var t=e.setMemeName,a=e.memeName,r=e.className,c=Object(n.useContext)(ue).memeTexts.filter((function(e){return e.focus}))[0];return o.a.createElement("div",{className:re.a.options+" "+r},o.a.createElement("label",{htmlFor:"inp"}," Meme Name: "),o.a.createElement("input",{id:"inp",type:"text",value:a,onChange:function(e){t(e.target.value)}}),o.a.createElement(le,{topOrBottom:"top"}),o.a.createElement("div",{className:re.a.memeTextsButtons},o.a.createElement(me,{memeText:c})),o.a.createElement(le,{topOrBottom:"bottom"}))},ue=o.a.createContext([]),fe=o.a.forwardRef((function(e,t){var a=e.image,r=e.setMemeName,c=e.memeName,i=Object(n.useReducer)(Z,[]),m=Object(l.a)(i,2),s=m[0],u=m[1],f=ge(s,t);pe(s,u);var p=Object(n.useState)({top:"0",topColor:"white",bottom:"0",bottomColor:"white"}),g=Object(l.a)(p,2),d=g[0],b=g[1];return o.a.createElement("div",{className:q.a.body},o.a.createElement(ue.Provider,{value:{space:d,setSpace:b,memeTexts:s,reduceMemeTexts:u,offset:f}},o.a.createElement("div",{className:q.a.secondFlex},o.a.createElement(ne,{ref:t,image:a})),o.a.createElement(se,{className:q.a.fistFlex,memeImageRef:t,setMemeName:r,memeName:c})))})),pe=function(e,t){var a=Object(n.useContext)(h).authorized;Object(n.useEffect)((function(){o()}),[e]);var o=function(){!a&&e.length&&(t({type:"removeText",id:e[0].id}),alert("cant use pro version of meme editor without being logged in"))}},ge=function(e,t){var a=Object(n.useState)({totalOffsetLeft:0,totalOffsetTop:0}),o=Object(l.a)(a,2),r=o[0],c=o[1];Object(n.useEffect)((function(){i()}),[e]);var i=function(){t.current&&c(L(t.current))};return r},de=fe,be=a(42),Ee=a.n(be),he=a(122),_e=a.n(he);var ve=function(e,t){_e.a.toPng(e).then((function(e){!function(e,t){var a=document.createElement("a");a.download=t&&t+".jpg"||"meme.jpg",a.href=e,a.click()}(e,t)})).catch((function(e){console.error("oops, something went wrong!",e)}))},xe=function(e){var t=e.imageNodeRef,a=e.getImage,r=e.memeName,c=Object(n.useState)(!1),i=Object(l.a)(c,2),s=i[0],u=i[1];return o.a.createElement("div",{className:Ee.a.navContainer},s&&o.a.createElement(m.a,{to:"/memeCreator/"}),o.a.createElement("button",{className:Ee.a.navButton,onClick:function(){return u(!s)}},"Home"),o.a.createElement("button",{className:Ee.a.navButton},o.a.createElement("label",{htmlFor:"files"},"Upload an Image")),o.a.createElement("input",{id:"files",type:"file",name:"load image",accept:"image/png, image/jpeg",onChange:a,style:{display:"none"}}),o.a.createElement("button",{className:Ee.a.navButton,onClick:function(){ve(t.current,r)}},"Download Meme"),o.a.createElement(y,null))},ye=new Image;ye.src="/memeCreator/images/AngrySection.jpeg";var Ce=function(e,t){var a=t||500;if(e.height>a||e.width>a){var n=e.height/e.width;e.height>e.width?(e.height=a,e.width=a/n):(e.width=a,e.height=a*n)}return e},Oe=function(e){var t=e.handleMemeSelector,a=Object(n.useState)([]),r=Object(l.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)((function(){fetch(" https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){setTimeout((function(){var t=e.data.memes.map((function(e){var t=new Image;return t.src=e.url,Ce(t,100)}));i(t)}),0)})).catch((function(e){console.log(e)}))}),[]);var m=c.map((function(e,a){return o.a.createElement("img",{key:a,className:N.a.imgMeme,onClick:t,src:e.src,style:{width:e.width+"px",height:e.height+"px"},alt:"img"})}));return o.a.createElement("div",{className:N.a.egMemeContainer},o.a.createElement("div",{className:N.a.egMemeContainerChild}," ",m))},Ne=function(){var e=function(){var e=Object(n.useState)(ye),t=Object(l.a)(e,2),a=t[0],o=t[1],r=function(e){setTimeout((function(){e=Ce(e),setTimeout((function(){o(e)}),0)}))};return{image:a,getImage:function(e){var t=new FileReader;t.onload=function(e){var t=new Image;t.src=e.target.result,r(t)},t.readAsDataURL(e.target.files[0])},setImage:o,resizeImg:r}}(),t=e.image,a=e.getImage,r=e.resizeImg,c=Object(m.g)().memeType,i=Object(n.useState)("meme"),s=Object(l.a)(i,2),u=s[0],f=s[1],p=Object(n.useRef)();return document.title="Make Your Own Meme!",o.a.createElement("div",{className:N.a.editor},o.a.createElement(xe,{className:N.a.nav,imageNodeRef:p,getImage:a,memeName:u}),o.a.createElement(Oe,{handleMemeSelector:function(e){r({src:e.target.src,height:100*e.target.height,width:100*e.target.width})}}),o.a.createElement("div",{className:N.a.bodyContainer},"freestyle"===c&&o.a.createElement(de,{ref:p,setMemeName:f,memeName:u,image:t})||o.a.createElement(P,{ref:p,setMemeName:f,memeName:u,image:t})))};var je=function(){return o.a.createElement(_,null,o.a.createElement(i.a,null,o.a.createElement(m.d,null,o.a.createElement(m.b,{path:"/memeCreator/:memeType"},o.a.createElement(Ne,null)),o.a.createElement(m.b,{path:"/memeCreator"},o.a.createElement(C,null)),o.a.createElement(m.b,{path:"*"},o.a.createElement(m.a,{to:"/memeCreator"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){e.exports={editor:"MemeEditor_editor__2BjEE",nav:"MemeEditor_nav__2g9DJ",bodyContainer:"MemeEditor_bodyContainer__3Uf20",header:"MemeEditor_header__eMX6P",egMemeContainer:"MemeEditor_egMemeContainer__3Q8rE",egMemeContainerChild:"MemeEditor_egMemeContainerChild__zVxCf",imgMeme:"MemeEditor_imgMeme__1yGOA"}},35:function(e,t,a){e.exports={signInContainer:"FireBaseSignIn_signInContainer__nwEZE",body:"FireBaseSignIn_body__1VlKH",icon:"FireBaseSignIn_icon__3hzhW",iconButton:"FireBaseSignIn_iconButton__3mxlz"}},42:function(e,t,a){e.exports={navContainer:"Nav_navContainer__2DiNd",navButton:"Nav_navButton__3Jmjx",glowing:"Nav_glowing__1oXh-"}},56:function(e,t,a){e.exports={bodyContainer:"ColorPicker_bodyContainer__3T7Ny",Button:"ColorPicker_Button__cSZSI"}},57:function(e,t,a){e.exports={bodyContainer:"FreeStyle_bodyContainer__2ikDo",fistFlex:"FreeStyle_fistFlex__3ZhOQ",secondFlex:"FreeStyle_secondFlex__jV0QO",body:"FreeStyle_body__2ZB-l"}},7:function(e,t,a){e.exports={bodyContainer:"TextImage_bodyContainer__2eZhu",memeContainer:"TextImage_memeContainer__1VIBd",memeImage:"TextImage_memeImage__3Xo2G",fontStyleContainer:"TextImage_fontStyleContainer__2pW-U",textBottom:"TextImage_textBottom__33Coj",textTop:"TextImage_textTop__1T53J",options:"TextImage_options__21MDm",styleOptions:"TextImage_styleOptions__3K-AI",Button:"TextImage_Button__2jUhz",inp:"TextImage_inp__1EQ_5",label:"TextImage_label__25c6R",focusBg:"TextImage_focusBg__3JZZE"}},80:function(e,t,a){e.exports={options:"Options_options__3L89k"}}},[[123,1,2]]]);
//# sourceMappingURL=main.57951c89.chunk.js.map