(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{184:function(e,t,n){n(185),n(186),e.exports=n(238)},185:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},193:function(e,t,n){e.exports=n.p+"static/media/C5.e231eca0.mp3"},194:function(e,t,n){e.exports=n.p+"static/media/D4.159a664b.mp3"},195:function(e,t,n){e.exports=n.p+"static/media/F4.0b780a91.mp3"},196:function(e,t,n){e.exports=n.p+"static/media/G4.87bcb7b2.mp3"},238:function(e,t,n){"use strict";n.r(t);var r=n(252),o=n(5),a=n.n(o),i=n(22),s=n.n(i),u=n(0),c=n.n(u),l=n(64),d=n(11),f=l.b.model({started:!1,duration:60,soundDurations:l.b.array(l.b.number)}).volatile((function(e){return{time:0,startTime:0,lastSoundTime:0,lastSoundIndex:0,failure:0,hearSound:!1,finished:!1}})).actions((function(e){return{setHearSound:function(t){e.hearSound=t},setTime:function(t){e.time=t},setFinished:function(t){var n=Object(l.a)(e).audioStore;e.finished=t,n.destroy()},setLastSoundTime:function(t){e.lastSoundTime=t},setLastSoundIndex:function(t){e.lastSoundIndex=t},resetStats:function(){e.failure=0,e.lastSoundIndex=0,e.lastSoundTime=0,e.finished=!1},increaseFailure:function(){e.failure+=1}}})).actions((function(e){var t=null,n=null;return{setSoundDurations:function(t){e.soundDurations.replace(t)},setStarted:function(r){var o=Object(l.a)(e).audioStore;if(e.started=r,r){e.setTime(0),e.startTime=Date.now(),e.resetStats();for(var a=[],i=[],s=[],u=0;u<60;u++)a.push(0);for(var c=0;c<=e.duration+1;c++)s.push(Math.random());for(var f=0;f<30;f++)i.push(0);for(var p=0;p<e.soundDurations.length;p++)i.push(p+1),a.push(p+1);t=setInterval((function(){var t=Date.now();if(e.setTime(t-e.startTime),!(e.time>1e3*e.duration)){var n=e.lastSoundTime+e.soundDurations[e.lastSoundIndex-1]-t;n>0!==e.hearSound&&Math.abs(n)>1e3&&e.increaseFailure();var r=0;e.lastSoundIndex&&t-e.lastSoundTime<5e3?r=0:!e.lastSoundIndex&&t-e.startTime>5e3?r=1+Math.floor(Math.random()*e.soundDurations.length):e.lastSoundIndex&&e.lastSoundTime+e.soundDurations[e.lastSoundIndex-1]+4e3>t?(r=a[Math.floor(s[Math.floor(e.time/1e3)]*a.length)],e.soundDurations[r-1]+t<e.lastSoundTime+e.soundDurations[e.lastSoundIndex-1]&&(r=0)):r=i[Math.floor(s[Math.floor(e.time/1e3)]*i.length)],t-e.startTime+e.soundDurations[r-1]>1e3*e.duration&&(r=0),r&&(e.setLastSoundTime(t),e.setLastSoundIndex(r),o.playSound(r-1))}}),1e3),n&&n(),n=Object(d.F)((function(){return e.time>1e3*e.duration}),(function(){o.playSound(0),o.playSound(1),clearInterval(t),e.setStarted(!1),e.setFinished(!0),n()}))}else t&&(clearInterval(t),t=null),n&&n()},setDuration:function(t){e.duration=t}}})).views((function(e){return{get result(){return 0}}})),p=l.b.model({meditation:f});function h(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p.create({meditation:{}},e));case 1:case"end":return t.stop()}}),null,null,null,Promise)}var m=n(8),y=n.n(m),g=n(10),b=n.n(g),v=n(127),S=n(85);function w(e){var t=0;if("undefined"===typeof Symbol||null==e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(t)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=n(193),x=n(194),k=n(195),I=[x,n(196),k,C],O=[15307,8855,5459,6870];v.a.setAudioModeAsync({allowsRecordingIOS:!1,interruptionModeAndroid:S.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,interruptionModeIOS:S.INTERRUPTION_MODE_IOS_DUCK_OTHERS,playThroughEarpieceAndroid:!0,playsInSilentModeIOS:!0,shouldDuckAndroid:!0,staysActiveInBackground:!1});var D=new(function(){function e(){y()(this,e),this.sounds=[]}return b()(e,[{key:"init",value:function(){var e,t,n,r,o;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:this.sounds=[],e=w(I);case 2:if((t=e()).done){i.next=11;break}return n=t.value,i.next=6,a.a.awrap(v.a.Sound.createAsync(n));case 6:r=i.sent,o=r.sound,this.sounds.push(o);case 9:i.next=2;break;case 11:case"end":return i.stop()}}),null,this,null,Promise)}},{key:"destroy",value:function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=0;e<I.length;e++)this.sounds[e]=void 0;case 1:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"playSound",value:function(e){var t,n=arguments;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=n.length>1&&void 0!==n[1]&&n[1],r.prev=1,!t){r.next=5;break}return r.next=5,a.a.awrap(this.sounds[e].setPositionAsync(O[e]-100));case 5:return r.next=7,a.a.awrap(this.sounds[e].playAsync());case 7:if(!t){r.next=12;break}return r.next=10,a.a.awrap(this.sounds[e].pauseAsync());case 10:return r.next=12,a.a.awrap(this.sounds[e].stopAsync());case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),alert(r.t0);case 17:case"end":return r.stop()}}),null,this,[[1,14]],Promise)}}]),e}()),j=n(175),T=n(3),P=n(31),R=n(61),A=n(4),M=function(e){return("000"+e).slice(-2)};var F=n(9),W=n.n(F),z=n(13),H=n.n(z),N=n(2),B=n.n(N),_=n(12),V=n.n(_),U=n(45),L=n(7);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){W()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var G=A.a.create({outerCircle:{overflow:"hidden",justifyContent:"center",alignItems:"center",backgroundColor:"#e3e3e3"},innerCircle:{overflow:"hidden",justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},leftWrap:{position:"absolute",top:0,left:0},halfCircle:{position:"absolute",top:0,left:0,borderTopRightRadius:0,borderBottomRightRadius:0,backgroundColor:"#f00"}});function $(e,t){var n=t.shadowColor;return{rotate:e.interpolate({inputRange:[0,50,50,100],outputRange:["0deg","180deg","180deg","180deg"]}),backgroundColor:n}}function q(e,t){var n=t.color,r=t.shadowColor;return{rotate:e.interpolate({inputRange:[0,50,50,100],outputRange:["0deg","0deg","180deg","360deg"]}),backgroundColor:e.interpolate({inputRange:[0,50,50,100],outputRange:[n,n,r,r]})}}function Q(e){var t=new L.a.Value(100);return{circleProgress:t,secondsElapsed:0,text:e.updateText(0,e.seconds),interpolationValuesHalfCircle1:$(t,e),interpolationValuesHalfCircle2:q(t,e)}}var Y=function(e){V()(r,e);var t,n=(t=r,function(){var e,n=B()(t);if(X()){var r=B()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return H()(this,e)});function r(e){var t;return y()(this,r),(t=n.call(this,e)).restartAnimation=function(){t.state.circleProgress.stopAnimation(),L.a.timing(t.state.circleProgress,{toValue:0,duration:1e3*t.props.seconds,easing:U.a.linear}).start()},t.renderHalfCircle=function(e){var n=e.rotate,r=e.backgroundColor,o=t.props.radius;return c.a.createElement(T.a,{style:[G.leftWrap,{width:o,height:2*o}]},c.a.createElement(L.a.View,{style:[G.halfCircle,{width:o,height:2*o,borderRadius:o,backgroundColor:r,transform:[{translateX:o/2},{rotate:n},{translateX:-o/2}]}]}))},t.state=Q(e),t}return b()(r,[{key:"componentDidUpdate",value:function(e,t){!e.started&&this.props.started&&this.setState(Q(this.props),this.restartAnimation)}},{key:"renderInnerCircle",value:function(){var e=this.props.radius-this.props.borderWidth;return c.a.createElement(T.a,{style:[G.innerCircle,K({width:2*e,height:2*e,borderRadius:e,backgroundColor:this.props.bgColor},this.props.containerStyle)]},this.props.children)}},{key:"render",value:function(){var e=this.state,t=e.interpolationValuesHalfCircle1,n=e.interpolationValuesHalfCircle2;return c.a.createElement(T.a,{style:[G.outerCircle,{width:2*this.props.radius,height:2*this.props.radius,borderRadius:this.props.radius,backgroundColor:this.props.color}]},this.renderHalfCircle(t),this.renderHalfCircle(n),this.renderInnerCircle())}}]),r}(c.a.PureComponent);Y.defaultProps={color:"#f00",shadowColor:"#999",bgColor:"#e9e9ef",borderWidth:2,seconds:10,children:null,containerStyle:null,updateText:function(e,t){return(t-e).toString()}};var Z=u.createContext(void 0);function ee(){return Object(u.useContext)(Z)}var te=n(38),ne=Object(j.a)((function(e){var t=e.duration,n=ee().meditation,r=n.failure,o=n.finished,a=n.started,i=n.time,s=n.setDuration,c=n.setStarted,l=n.setHearSound;return u.useEffect((function(){return o?(te.a.pop(),te.a.result({result:Math.round(100-100*r/t),duration:t})):(s(t),c(!0)),function(){c(!1)}}),[o]),u.createElement(R.a,{onPressIn:function(){return l(!0)},onPressOut:function(){return l(!1)},disabled:!a,style:{flex:1,alignItems:"center",backgroundColor:"black"}},u.createElement(T.a,{style:{alignItems:"center",justifyContent:"center"}},u.createElement(T.a,{style:{padding:50}},!o&&u.createElement(Y,{started:a,seconds:t,radius:125,borderWidth:8,color:"#26252A",shadowColor:"#FFA00A",bgColor:"black"},u.createElement(P.a,{style:re.textStyle},function(e){var t=Math.floor(e/60),n=Math.floor(e-60*t);return M(t)+":"+M(n)}(t-Math.round(i/1e3)))))),u.createElement(T.a,{style:{paddingBottom:50,alignItems:"center",justifyContent:"center"}},u.createElement(P.a,{style:{fontSize:16,color:"white"}},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u043f\u043e\u043a\u0430 \u0412\u044b \u0441\u043b\u044b\u0448\u0438\u0442\u0435 \u0437\u0432\u0443\u043a"),u.createElement(P.a,{style:{fontSize:16,color:"white"}},"\u041e\u0442\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u044d\u043a\u0440\u0430\u043d \u043a\u043e\u0433\u0434\u0430 \u0437\u0432\u0443\u043a\u0430 \u043d\u0435\u0442","\n","\n")))})),re=A.a.create({textStyle:{alignSelf:"center",fontFamily:"HelveticaNeue",color:"white",fontSize:60,fontWeight:"200"},myButton:{justifyContent:"center",alignItems:"center",padding:5,height:250,width:250,borderRadius:400,backgroundColor:"black",borderColor:"#FFA00A",borderWidth:10}}),oe=ne,ae=n(55),ie=function(e){var t=e.duration,n=void 0===t?15:t,r=e.size,o=void 0===r?80:r;return u.createElement(T.a,{style:{width:o+20,height:o+20,justifyContent:"center",alignItems:"center",backgroundColor:"black"}},u.createElement(R.a,{onPress:function(){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(D.playSound(0,!0));case 2:return e.next=4,a.a.awrap(D.playSound(1,!0));case 4:return e.next=6,a.a.awrap(D.playSound(2,!0));case 6:return e.next=8,a.a.awrap(D.playSound(3,!0));case 8:setTimeout((function(){return te.a.meditation({duration:n})}));case 9:case"end":return e.stop()}}),null,null,null,Promise)},style:{borderRadius:(o+6)/2,backgroundColor:"#222223",width:o+6,height:o+6,alignItems:"center",justifyContent:"center"}},u.createElement(T.a,{style:{alignItems:"center"}},u.createElement(P.a,{style:{color:"orange",fontSize:28,fontWeight:"bold"}},Math.floor(n/60)),u.createElement(P.a,{style:{color:"white",marginTop:-5,fontSize:18}},"\u043c\u0438\u043d"))))},se=A.a.create({row:{flexWrap:"wrap",flexDirection:"row"}}),ue=function(){return u.createElement(T.a,{style:{alignItems:"center",backgroundColor:"black"}},u.createElement(T.a,{style:se.row},u.createElement(ie,null),u.createElement(ie,{duration:180}),u.createElement(ie,{duration:300})),u.createElement(T.a,{style:se.row},u.createElement(ie,{duration:900}),u.createElement(ie,{duration:1800}),u.createElement(ie,{duration:3600})))},ce=function(){return u.useEffect((function(){D.init()})),u.createElement(ae.a,null,u.createElement(T.a,{style:{flex:1,alignItems:"center"}},u.createElement(T.a,{style:{padding:20,flexDirection:"row"}},u.createElement(P.a,{style:{color:"white",fontSize:20,fontWeight:"bold"}},"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u043c\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u0438"),u.createElement(P.a,{style:{padding:5,color:"gray"}},"v0.18")),u.createElement(P.a,{style:{padding:20,color:"white",fontSize:20,fontWeight:"bold"}},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),u.createElement(ue,null)))},le=function(e){var t=e.onPress,n=e.text;return u.createElement(R.a,{style:{width:280,height:60,backgroundColor:"#FFA00A",justifyContent:"center",alignItems:"center",borderRadius:20},onPress:t},u.createElement(P.a,{style:{color:"white",fontWeight:"bold",fontSize:20}},n||"\u041d\u0430\u0447\u0430\u0442\u044c"))},de=function(e){var t=e.duration,n=void 0===t?600:t,r=e.result,o=void 0===r?100:r,a=ee().meditation.setFinished;return u.useEffect((function(){return function(){a(!1)}})),u.createElement(T.a,{style:{flex:1,alignItems:"center"}},u.createElement(P.a,{style:{paddingTop:40,color:"white",fontSize:20,fontWeight:"bold"}},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),u.createElement(P.a,{style:{padding:20,color:"white",fontSize:20}},"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c: ",n/60," \u043c\u0438\u043d"),u.createElement(P.a,{style:{color:"white",fontSize:20}},"\u0412\u0430\u0448\u0430 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c: ",o,"%"),u.createElement(T.a,{style:{padding:40}},u.createElement(le,{text:"\u041e\u041a",onPress:function(){te.a.pop()}})))};var fe=function(){var e=Object(u.useState)(void 0),t=s()(e,2),n=t[0],r=t[1];return Object(u.useEffect)((function(){!function(){var e;a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(h({audioStore:D}));case 2:(e=t.sent).meditation.setSoundDurations(O),r(e);case 5:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),!!n&&u.createElement(Z.Provider,{value:n},u.createElement(te.b,{tintColor:"white",navigationBarStyle:{backgroundColor:"black"},sceneStyle:{backgroundColor:"black"}},u.createElement(te.d,{hideNavBar:!0,mode:"modal"},u.createElement(te.d,{hideNavBar:!0},u.createElement(te.c,{key:"main",component:ce}),u.createElement(te.c,{key:"meditation",component:oe,hideNavBar:!0})),u.createElement(te.c,{key:"result",component:de}))))};Object(r.a)(fe)}},[[184,1,2]]]);
//# sourceMappingURL=app.038a25ef.chunk.js.map