(this["webpackJsonpwebsocket-streamer"]=this["webpackJsonpwebsocket-streamer"]||[]).push([[0],{11:function(e,a,r){e.exports=r(21)},16:function(e,a,r){},21:function(e,a,r){"use strict";r.r(a);var c=r(1),s=r.n(c),t=r(5),l=r.n(t),o=(r(16),r(6)),n=r(7),u=r(10),d=r(9),C=r(8),P=(r(20),function(e){Object(u.a)(r,e);var a=Object(d.a)(r);function r(e){var c;return Object(o.a)(this,r),(c=a.call(this,e)).state={currentData:[]},c.ws=new WebSocket("ws://127.0.0.1:8888/"),c}return Object(n.a)(r,[{key:"render",value:function(){var e=this;this.ws.onopen=function(){console.log("Opened Connection!")},this.ws.onmessage=function(a){e.setState({currentData:JSON.parse(a.data)})},this.ws.onclose=function(){console.log("Closed Connection!")};return console.log(this.state.currentData),s.a.createElement("div",{className:"App"},s.a.createElement(C.a,{data:this.state.currentData,columns:[{Header:"CTimeStamp",accessor:"CTimeStamp"},{Header:"CallAveragePrice",accessor:"CallAveragePrice"},{Header:"CallBidQty",accessor:"CallBidQty"},{Header:"CallBidPrice",accessor:"CallBidPrice"},{Header:"CallAskQty",accessor:"CallAskQty"},{Header:"CallAskPrice",accessor:"CallAskPrice"},{Header:"CallOpen",accessor:"CallOpen"},{Header:"CallHigh",accessor:"CallHigh"},{Header:"CallLow",accessor:"CallLow"},{Header:"CallClose",accessor:"CallClose"},{Header:"CallVeta",accessor:"CallVeta"},{Header:"CallVolga",accessor:"CallVolga"},{Header:"CallColor",accessor:"CallColor"},{Header:"CallZomma",accessor:"CallZomma"},{Header:"CallSpeed",accessor:"CallSpeed"},{Header:"CallCharm",accessor:"CallCharm"},{Header:"CallVanna",accessor:"CallVanna"},{Header:"CallGamma",accessor:"CallGamma"},{Header:"CallVega",accessor:"CallVega"},{Header:"CallTheta",accessor:"CallTheta"},{Header:"CallDelta",accessor:"CallDelta"},{Header:"CallPrevIV",accessor:"CallPrevIV"},{Header:"CallVolume",accessor:"CallVolume"},{Header:"CallOIChange",accessor:"CallOIChange"},{Header:"CallOI",accessor:"CallOI"},{Header:"CallIV",accessor:"CallIV"},{Header:"CallLtpChange",accessor:"CallLtpChange"},{Header:"CallLtp",accessor:"CallLtp"},{Header:"Strike",accessor:"Strike"},{Header:"PutLtp",accessor:"PutLtp"},{Header:"PutLtpChange",accessor:"PutLtpChange"},{Header:"PutIV",accessor:"PutIV"},{Header:"PutOI",accessor:"PutOI"},{Header:"PutOIChange",accessor:"PutOIChange"},{Header:"PutVolume",accessor:"PutVolume"},{Header:"PutDelta",accessor:"PutDelta"},{Header:"PutTheta",accessor:"PutTheta"},{Header:"PutVega",accessor:"PutVega"},{Header:"PutGamma",accessor:"PutGamma"},{Header:"PutPrevIV",accessor:"PutPrevIV"},{Header:"PutVanna",accessor:"PutVanna"},{Header:"PutCharm",accessor:"PutCharm"},{Header:"PutSpeed",accessor:"PutSpeed"},{Header:"PutZomma",accessor:"PutZomma"},{Header:"PutColor",accessor:"PutColor"},{Header:"PutVolga",accessor:"PutVolga"},{Header:"PutVeta",accessor:"PutVeta"},{Header:"PutOpen",accessor:"PutOpen"},{Header:"PutHigh",accessor:"PutHigh"},{Header:"PutLow",accessor:"PutLow"},{Header:"PutClose",accessor:"PutClose"},{Header:"PutAskPrice",accessor:"PutAskPrice"},{Header:"PutAskQty",accessor:"PutAskQty"},{Header:"PutBidPrice",accessor:"PutBidPrice"},{Header:"PutBidQty",accessor:"PutBidQty"},{Header:"PutAveragePrice",accessor:"PutAveragePrice"},{Header:"FuturePrice",accessor:"FuturePrice"},{Header:"FutureOrFairPrice",accessor:"FutureOrFairPrice"},{Header:"FTimeStamp",accessor:"FTimeStamp"}]}))}}]),r}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.9899020b.chunk.js.map