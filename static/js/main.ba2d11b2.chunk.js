(this.webpackJsonpmemecreator=this.webpackJsonpmemecreator||[]).push([[0],{111:function(e,t,n){e.exports={bodyContainer:"FreeStyleMeme_bodyContainer__2hq6B"}},113:function(e,t,n){e.exports=n(287)},118:function(e,t,n){},119:function(e,t,n){},16:function(e,t,n){e.exports={styleOptions:"FontButtons_styleOptions__1GwGY",fontButtonContainer:"FontButtons_fontButtonContainer__3WLZY",sizeButtons:"FontButtons_sizeButtons__67_gS",Button:"FontButtons_Button__2tFEV"}},20:function(e,t,n){e.exports={component:"MemeTypes_component__1k1p0",typeContainer:"MemeTypes_typeContainer__1qMtZ",linkMemeTypes:"MemeTypes_linkMemeTypes__1-_Bb",memeTypesImg:"MemeTypes_memeTypesImg__1auLp"}},26:function(e,t,n){e.exports={editor:"MemeEditor_editor__3qzpR",nav:"MemeEditor_nav__2jvco",header:"MemeEditor_header__3OIIM",bodyContainer:"MemeEditor_bodyContainer__Jb7Bl",egMemeContainer:"MemeEditor_egMemeContainer__29g_j",imgMeme:"MemeEditor_imgMeme__1Nxub"}},287:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(108),c=n.n(o),i=(n(118),n(119),n(19)),m=n(4),l=n(3),s=n(45),u=n.n(s),f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){fetch(" https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){console.log(e),o(e.data.memes.map((function(e){return e.url})))})).catch((function(e){}))}),[]),r.a.createElement("div",{className:u.a.component},r.a.createElement("br",null),r.a.createElement("nav",null,r.a.createElement("button",null,"Categories"),r.a.createElement("button",null,"Sign In")," "),r.a.createElement("br",null),r.a.createElement("h1",null,"Welcome to the Meme creator"),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/memeCreator/memetypes",className:u.a.Link},"Get Started"),r.a.createElement("br",null),r.a.createElement("div",{className:u.a.imgContainer},n.slice(0,20).map((function(e){return r.a.createElement("img",{src:e,alt:"img1"})}))))},p=n(26),g=n.n(p),d=n(5),h=n(8),b=n.n(h),E=n(16),x=n.n(E),y=function(e){return r.a.createElement("div",{className:x.a.styleOptions},r.a.createElement("div",{className:x.a.fontButtonContainer},r.a.createElement("button",{className:x.a.Button,onClick:function(){return e.setFont("Georgia, serif")},style:{fontFamily:"Georgia, serif",fontSize:"15px"}},"Georgia"),r.a.createElement("button",{className:x.a.Button,onClick:function(){return e.setFont("Arial Black")},style:{fontFamily:"Arial Black",fontSize:"13px"}},"Arial Black"),r.a.createElement("button",{className:x.a.Button,onClick:function(){return e.setFont("monospace")},style:{fontFamily:"monospace"}},"Monospace"),r.a.createElement("button",{className:x.a.Button,onClick:function(){return e.setFont("Comic Sans MS")},style:{fontFamily:"Comic Sans MS"}},"Comic Sans"),r.a.createElement("button",{className:x.a.Button,onClick:function(){return e.setFont("cursive")},style:{fontFamily:"cursive"}},"Cursive"),r.a.createElement("div",{className:x.a.sizeButtons},r.a.createElement("button",{className:x.a.Button,onClick:function(){return e.setSize(e.letterSize+1)},style:{fontSize:"15px",height:"35px"}},"A+"),r.a.createElement("button",{className:x.a.Button,onClick:function(){return e.setSize(e.letterSize-1)},style:{fontSize:"10px",height:"35px"}},"A-"))))},_=n(110),v=n(46),C=n.n(v),O=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",{className:C.a.bodyContainer},r.a.createElement("button",{className:C.a.Button,onClick:function(){return c((function(e){return!e}))}},o?"Close":"Text Color"),r.a.createElement("div",{className:C.a.ChromePickerContainer,style:o?null:{display:"none"}},r.a.createElement(_.ChromePicker,{color:e.currentColor,onChange:function(t){return e.setColor(t.hex)}})))},j=r.a.forwardRef((function(e,t){var n=e.image,o=(e.setImage,e.getImage,Object(a.useState)({text:"top text",inner:!0})),c=Object(l.a)(o,2),i=c[0],m=c[1],s=Object(a.useState)({text:"bottom text",inner:!0}),u=Object(l.a)(s,2),f=u[0],p=u[1],g=Object(a.useState)(""),h=Object(l.a)(g,2),E=h[0],x=h[1],_=Object(a.useState)(12),v=Object(l.a)(_,2),C=v[0],j=v[1],k=Object(a.useState)("black"),T=Object(l.a)(k,2),S=T[0],w=T[1],B=function(e,t,n){return{display:e.inner?"block":"none",color:S,fontFamily:t,fontSize:n}},I=function(e,t,n){return{display:e.inner?"none":"block",color:S,backgroundColor:e.inner?"transparent":"white",fontFamily:t,fontSize:n}};return r.a.createElement("div",{className:b.a.bodyContainer},r.a.createElement("div",{className:b.a.memeContainer,style:{height:n.height+"px",width:n.width+"px"}},r.a.createElement("div",{style:I(i,E,C),className:b.a.textTop},i.text),r.a.createElement(N,{ref:t,image:n,onClick:function(){}},r.a.createElement("div",{style:B(i,E,C),className:b.a.textTop},i.text),r.a.createElement("span",null),r.a.createElement("div",{style:B(f,E,C),className:b.a.textBottom},f.text)),r.a.createElement("div",{style:I(f,E,C),className:b.a.textBottom},f.text)),r.a.createElement("div",{className:b.a.options},r.a.createElement("label",{htmlFor:"inp",className:b.a.inp},r.a.createElement("input",{id:"inp",type:"text",value:i.text,onChange:function(e){m(Object(d.a)(Object(d.a)({},i),{},{text:e.target.value}))}}),r.a.createElement("span",{className:b.a.label},"Top Text"),r.a.createElement("span",{className:b.a.focusBg})),r.a.createElement("label",{htmlFor:"inp2",className:b.a.inp},r.a.createElement("input",{id:"inp2",type:"text",value:f.text,onChange:function(e){p(Object(d.a)(Object(d.a)({},f),{},{text:e.target.value}))}}),r.a.createElement("span",{className:b.a.label},"Bottom Text"),r.a.createElement("span",{className:b.a.focusBg})),r.a.createElement("button",{className:b.a.Button,onClick:function(){return m(Object(d.a)(Object(d.a)({},i),{},{inner:!i.inner}))}},"Top in/out"),r.a.createElement("button",{className:b.a.Button,onClick:function(){return p(Object(d.a)(Object(d.a)({},f),{},{inner:!f.inner}))}},"bottom in/out")),r.a.createElement("div",{className:b.a.fontStyleContainer},r.a.createElement(y,{setFont:x,setSize:j,letterSize:C}),r.a.createElement(O,{setColor:w,currentColor:S})))})),N=r.a.forwardRef((function(e,t){var n=e.image,a=e.children;return r.a.createElement("div",{ref:t,className:b.a.memeImage,style:{backgroundImage:"url("+n.src+")",height:n.height+"px",width:n.width+"px",position:"relative",backgroundRepeat:"no-repeat",backgroundSize:"contain"}},a)})),k=n(21),T=function(e,t){return{left:e.pageX-t.totalOffsetLeft+"px",top:e.pageY-t.totalOffsetTop+"px"}},S=function(e){for(var t=e.offsetLeft,n=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetLeft,n+=e.offsetTop;return{totalOffsetLeft:t,totalOffsetTop:n}};function w(e,t){switch(t.type){case"addText":return B(e,t);case"setText":return F(e,t);case"removeText":return I(e,t);case"changeTextStyle":return R(e,t);case"changePosition":return L(e,t);case"onFocus":return z(e,t);default:console.log("default")}}var B=function(e,t){var n=t.event,a=A(n);return[].concat(Object(k.a)(e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{focus:!1})}))),[a])},I=function(e,t){var n=t.id,a=M(n,e);return[].concat(Object(k.a)(e.slice(0,a)),Object(k.a)(e.slice(a+1)))},M=function(e,t){return[0].concat(Object(k.a)(t)).reduce((function(t,n,a){return e===n.id&&a||t}))-1},F=function(e,t){var n=t.id,a=t.newText,r=M(n,e),o=e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{focus:!1})}));return o[r]=JSON.parse(JSON.stringify(o[r])),o[r].text=a,o[r].focus=!0,Object(k.a)(o)},z=function(e,t){var n=t.id,a=M(n,e),r=e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{focus:!1})}));return r[a]=JSON.parse(JSON.stringify(r[a])),r[a].new=!1,r[a].focus=!0,Object(k.a)(r)},R=function(e,t){var n=t.id,a=t.prop,r=t.value,o=M(n,e),c=e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{focus:!1})}));return c[o]=JSON.parse(JSON.stringify(c[o])),"fontSize"===a&&(r=parseInt(r)),c[o].style[a]=r,c[o].focus=!0,Object(k.a)(c)},L=function(e,t){var n=t.id,a=t.newPos,r=M(n,e),o=e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{focus:!1})}));return o[r]=JSON.parse(JSON.stringify(o[r])),o[r].style.left=a.left,o[r].style.top=a.top,o[r].focus=!0,Object(k.a)(o)},V=0,A=function(e){var t=function(e){var t=S(e.target);return T(e,t)}(e);return{id:V++,text:"text",style:{display:"block",position:"absolute",zIndex:"100",color:"white",cols:"4",fontSize:30,resize:"none",borderWidth:"0px",borderColor:"transparent",backgroundColor:"transparent",transform:"",left:t.left,top:t.top},new:!0,focus:!0}},P=n(111),G=n.n(P),J=r.a.forwardRef((function(e,t){var n=e.element,o=Object(a.useContext)(ee),c=o.reduceMemeTexts,i=o.offset,m=n.text,l=n.style,s=n.id,u=function(e){c({type:"changePosition",id:s,newPos:T(e,i)})},f=Object(a.useRef)();return Object(a.useEffect)((function(){f.current.focus()}),[]),r.a.createElement("textarea",{draggable:"true",onFocus:function(){return c({type:"onFocus",id:s})},onDrag:u,onDragEnd:u,type:"text",onChange:function(e){!function(e){e.target.rows=Math.max(1,e.target.value.split("\n").length)}(e),function(e){var t=e.target.value.split("\n").map((function(e){return e.length})).reduce((function(e,t){return Math.max(e,t)}));e.target.style.width=t+2+"ch"}(e),c({type:"setText",newText:e.target.value,id:s})},value:m,style:l,ref:f,rows:"1",cols:"4"})})),Y=function(e){var t=e.image,n=e.children,o=Object(a.useContext)(ee).reduceMemeTexts;return r.a.createElement("div",{style:{backgroundImage:"url("+t.src+")",height:t.height+"px",width:t.width+"px",position:"relative",backgroundRepeat:"no-repeat",backgroundSize:"contain"}},r.a.createElement("div",{onClick:function(e){o({type:"addText",event:{pageX:e.pageX,target:e.target,pageY:e.pageY}})},style:{width:"inherit",height:"inherit"}}),n)},X=r.a.forwardRef((function(e,t){var n=e.onImageClick,o=e.image,c=Object(a.useContext)(ee).memeTexts.map((function(e,t){return r.a.createElement(J,{key:t,element:e})}));return r.a.createElement("div",{ref:t},r.a.createElement(Y,{image:o,onClick:n},c))})),q=n(69),K=n.n(q),D=n(112),Z=n.n(D);var W=function(e,t){Z.a.toPng(e).then((function(e){!function(e,t){var n=document.createElement("a");n.download=t&&t+".jpg"||"meme.jpg",n.href=e,n.click()}(e,t)})).catch((function(e){console.error("oops, something went wrong!",e)}))},H=n(70),U=n.n(H),$=function(e){var t=e.memeText,n=Object(a.useContext)(ee).reduceMemeTexts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h5",{className:U.a.headline},t.text,r.a.createElement("img",{className:U.a.removeButton,src:"/memeCreator/src/icon/remove.png",onClick:function(){return n({type:"removeText",id:t.id})},alt:"remove"}))),r.a.createElement("div",null,["color","backgroundColor","fontSize","transform","textTransform"].map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("label",{htmlFor:a+"propName"},"Set css ",e),r.a.createElement("br",null),r.a.createElement("input",{id:a+"propName",value:t.style[e],onChange:function(a){return n({type:"changeTextStyle",id:t.id,prop:e,value:a.target.value})}}))}))))};var Q=function(e){e.memeImageRef,e.getImage;var t=Object(a.useContext)(ee).memeTexts;return r.a.createElement("div",{className:K.a.options},r.a.createElement("div",{className:K.a.memeTextsButtons},t.filter((function(e){return e.focus})).map((function(e,t){return r.a.createElement($,{key:t,memeText:e})}))))},ee=r.a.createContext([]),te=r.a.forwardRef((function(e,t){e.selectedMeme;var n=e.image,o=e.getImage,c=(e.setImage,Object(a.useReducer)(w,[])),i=Object(l.a)(c,2),m=i[0],s=i[1],u=Object(a.useState)({totalOffsetLeft:0,totalOffsetTop:0}),f=Object(l.a)(u,2),p=f[0],g=f[1];return Object(a.useEffect)((function(){t.current&&g(S(t.current))}),[m]),r.a.createElement("div",{className:G.a.bodyContainer},r.a.createElement(ee.Provider,{value:{memeTexts:m,reduceMemeTexts:s,offset:p}},r.a.createElement(X,{ref:t,image:n}),r.a.createElement(Q,{memeImageRef:t,getImage:o})))})),ne=n(47),ae=n.n(ne),re=function(e){var t=e.imageNodeRef,n=e.getImage,o=e.memeName,c=Object(a.useState)(!1),i=Object(l.a)(c,2),s=i[0],u=i[1];return r.a.createElement("div",{className:ae.a.navContainer},s&&r.a.createElement(m.a,{to:"/memeCreator/"}),r.a.createElement("button",{onClick:function(){return u(!s)}},"Home"),r.a.createElement("label",{htmlFor:"files",className:ae.a.Button},"Upload an Image"),r.a.createElement("input",{id:"files",type:"file",name:"load image",accept:"image/png, image/jpeg",onChange:n,style:{display:"none"}}),r.a.createElement("button",{className:ae.a.Button,onClick:function(){W(t.current,o)}},"Download Meme"),r.a.createElement("a",null,"Share"),r.a.createElement("a",null,"Sign in"))},oe=Math.floor(100*Math.random()),ce=function(){var e=function(){var e=Object(a.useState)({src:""}),t=Object(l.a)(e,2),n=t[0],r=t[1],o=function(e){setTimeout((function(){if(e.height>500||e.width>500){var t=e.height/e.width;e.height>e.width?(e.height=500,e.width=500/t):(e.width=500,e.height=500*t)}setTimeout((function(){r(e)}),0)}))},c=new Image;c.src="/memeCreator/images/AngrySection.jpeg",Object(a.useEffect)((function(){o(c)}),[]);return[n,function(e){var t=new FileReader;t.onload=function(e){c.src=e.target.result,console.log(c.height),o(c)},t.readAsDataURL(e.target.files[0])},r]}(),t=Object(l.a)(e,3),n=t[0],o=t[1],c=t[2],i=Object(m.g)().memeType,s=Object(a.useState)([]),u=Object(l.a)(s,2),f=u[0],p=u[1],d=Object(a.useState)(),h=Object(l.a)(d,2),b=h[0],E=h[1],x=Object(a.useState)("meme"),y=Object(l.a)(x,2),_=y[0],v=y[1];Object(a.useEffect)((function(){fetch(" https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){p(e.data.memes.map((function(e){var t=new Image;t.src=e.url;if(t.height>500||t.width>500){var n=t.height/t.width;t.height>t.width?(t.height=500,t.width=500/n):(t.width=500,t.height=500*n)}return t})))})).catch((function(e){}))}),[]);var C=function(e){E({src:e.target.src,height:5*e.target.height,width:5*e.target.width})};Object(a.useEffect)((function(){b&&c(b)}),[b]);var O=Object(a.useRef)();return r.a.createElement("div",{className:g.a.editor},r.a.createElement(re,{className:g.a.nav,imageNodeRef:O,getImage:o,memeName:_}),r.a.createElement("div",{className:g.a.header},r.a.createElement("h3",null,"Make Your Own Meme! ")),r.a.createElement("div",{className:g.a.egMemeContainer},f.slice(oe,oe+6).map((function(e,t){return r.a.createElement("img",{key:t,className:g.a.imgMeme,onClick:C,src:e.src,style:{width:.2*e.width+"px",height:.2*e.height+"px"},alt:"img"})}))),r.a.createElement("div",{className:g.a.bodyContainer},r.a.createElement("label",{htmlFor:"inp"}," Meme Name: "),r.a.createElement("input",{id:"inp",type:"text",value:_,onChange:function(e){v(e.target.value)}}),"freestyle"===i&&r.a.createElement(te,{ref:O,image:n,getImage:o,setImage:c,selectedMeme:b}),"freestyle"!==i&&r.a.createElement(j,{ref:O,image:n,getImage:o,setImage:c,selectedMeme:b})))},ie=n(20),me=n.n(ie),le=function(){return r.a.createElement("div",{className:me.a.component},r.a.createElement("nav",null,r.a.createElement("button",null,"Categories"),r.a.createElement("button",null,"Sign In")," "),r.a.createElement("h2",null,"This is the memetypes page"),r.a.createElement("br",null),r.a.createElement("div",{className:me.a.typeContainer},r.a.createElement(i.b,{className:me.a.linkMemeTypes,to:"/memeCreator/memetypes/textInOfImage"},"Text in image",r.a.createElement("img",{className:me.a.memeTypesImg,src:"https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",alt:"funny"})),r.a.createElement(i.b,{className:me.a.linkMemeTypes,to:"/memeCreator/memetypes/freestyle"},r.a.createElement("h3",null,"Editor 2"),r.a.createElement("img",{className:me.a.memeTypesImg,src:"https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",alt:"serious"})),r.a.createElement(i.b,{className:me.a.linkMemeTypes,to:"/memeCreator/memetypes/angry"},"Memetype angry",r.a.createElement("img",{className:me.a.memeTypesImg,src:"https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",alt:"angry"}))))};var se=function(){return r.a.createElement(i.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/memeCreator/memetypes/:memeType"},r.a.createElement(ce,null)),r.a.createElement(m.b,{path:"/memeCreator/memetypes"},r.a.createElement(le,null)),r.a.createElement(m.b,{path:"/memeCreator"},r.a.createElement(f,null)),r.a.createElement(m.b,{path:"/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){e.exports={component:"intropage_component__1fiFS",Link:"intropage_Link__3kmr_",imgContainer:"intropage_imgContainer__2D5vi"}},46:function(e,t,n){e.exports={bodyContainer:"ColorPicker_bodyContainer__3K1tb",Button:"ColorPicker_Button__2H8Gq"}},47:function(e,t,n){e.exports={navContainer:"Nav_navContainer__3iqIV"}},69:function(e,t,n){e.exports={options:"Options_options__3NG31"}},70:function(e,t,n){e.exports={headline:"MemeTextOptions_headline__3-spi",removeButton:"MemeTextOptions_removeButton__1M9K0"}},8:function(e,t,n){e.exports={bodyContainer:"TextImage_bodyContainer__17IC1",memeContainer:"TextImage_memeContainer__2dkYt",memeImage:"TextImage_memeImage__18Kam",fontStyleContainer:"TextImage_fontStyleContainer__38l8I",textBottom:"TextImage_textBottom__2Sq_X",textTop:"TextImage_textTop__1OC6q",options:"TextImage_options__2wz8d",styleOptions:"TextImage_styleOptions__3NlbL",Button:"TextImage_Button__3DXSp",inp:"TextImage_inp__oYKOa",label:"TextImage_label__1t2Z8",focusBg:"TextImage_focusBg__2OC-F"}}},[[113,1,2]]]);
//# sourceMappingURL=main.ba2d11b2.chunk.js.map