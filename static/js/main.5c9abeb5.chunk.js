(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(1),u=n(2),d=n(4),l=n(3),s=n(5),p=(n(7),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).drag=function(e){e.dataTransfer.setData("text",e.target.id)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container purple card",onClick:this.props.onClick},this.props.unicode)}}]),t}(r.a.Component)),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).drag=function(e){e.dataTransfer.setData("id",e.target.id),e.dataTransfer.setData("sourceId",e.target.parentNode.id)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.card,t=e.unicode,n="card "+e.color;return r.a.createElement("div",{draggable:"true",id:t,onDragStart:this.drag,className:n},t)}}]),t}(r.a.Component),m=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.card?r.a.createElement("div",{className:"container",id:"pile"},r.a.createElement(b,{card:this.props.card})):r.a.createElement("div",{className:"container"})}}]),t}(r.a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"stock-side"},r.a.createElement(p,{unicode:this.props.unicode,stackLength:this.props.stackLength,onClick:this.props.onStackClick}),r.a.createElement(m,{card:this.props.card}))}}]),t}(r.a.Component),f=[{type:"spade",number:"1",color:"black",unicode:"\ud83c\udca1"},{type:"spade",number:"2",color:"black",unicode:"\ud83c\udca2"},{type:"spade",number:"3",color:"black",unicode:"\ud83c\udca3"},{type:"spade",number:"4",color:"black",unicode:"\ud83c\udca4"},{type:"spade",number:"5",color:"black",unicode:"\ud83c\udca5"},{type:"spade",number:"6",color:"black",unicode:"\ud83c\udca6"},{type:"spade",number:"7",color:"black",unicode:"\ud83c\udca7"},{type:"spade",number:"8",color:"black",unicode:"\ud83c\udca8"},{type:"spade",number:"9",color:"black",unicode:"\ud83c\udca9"},{type:"spade",number:"10",color:"black",unicode:"\ud83c\udcaa"},{type:"spade",number:"11",color:"black",unicode:"\ud83c\udcab"},{type:"spade",number:"12",color:"black",unicode:"\ud83c\udcad"},{type:"spade",number:"13",color:"black",unicode:"\ud83c\udcae"},{type:"club",number:"1",color:"black",unicode:"\ud83c\udcd1"},{type:"club",number:"2",color:"black",unicode:"\ud83c\udcd2"},{type:"club",number:"3",color:"black",unicode:"\ud83c\udcd3"},{type:"club",number:"4",color:"black",unicode:"\ud83c\udcd4"},{type:"club",number:"5",color:"black",unicode:"\ud83c\udcd5"},{type:"club",number:"6",color:"black",unicode:"\ud83c\udcd6"},{type:"club",number:"7",color:"black",unicode:"\ud83c\udcd7"},{type:"club",number:"8",color:"black",unicode:"\ud83c\udcd8"},{type:"club",number:"9",color:"black",unicode:"\ud83c\udcd9"},{type:"club",number:"10",color:"black",unicode:"\ud83c\udcda"},{type:"club",number:"11",color:"black",unicode:"\ud83c\udcdb"},{type:"club",number:"12",color:"black",unicode:"\ud83c\udcdd"},{type:"club",number:"13",color:"black",unicode:"\ud83c\udcde"},{type:"diamond",number:"1",color:"red",unicode:"\ud83c\udcc1"},{type:"diamond",number:"2",color:"red",unicode:"\ud83c\udcc2"},{type:"diamond",number:"3",color:"red",unicode:"\ud83c\udcc3"},{type:"diamond",number:"4",color:"red",unicode:"\ud83c\udcc4"},{type:"diamond",number:"5",color:"red",unicode:"\ud83c\udcc5"},{type:"diamond",number:"6",color:"red",unicode:"\ud83c\udcc6"},{type:"diamond",number:"7",color:"red",unicode:"\ud83c\udcc7"},{type:"diamond",number:"8",color:"red",unicode:"\ud83c\udcc8"},{type:"diamond",number:"9",color:"red",unicode:"\ud83c\udcc9"},{type:"diamond",number:"10",color:"red",unicode:"\ud83c\udcca"},{type:"diamond",number:"11",color:"red",unicode:"\ud83c\udccb"},{type:"diamond",number:"12",color:"red",unicode:"\ud83c\udccd"},{type:"diamond",number:"13",color:"red",unicode:"\ud83c\udcce"},{type:"heart",number:"1",color:"red",unicode:"\ud83c\udcb1"},{type:"heart",number:"2",color:"red",unicode:"\ud83c\udcb2"},{type:"heart",number:"3",color:"red",unicode:"\ud83c\udcb3"},{type:"heart",number:"4",color:"red",unicode:"\ud83c\udcb4"},{type:"heart",number:"5",color:"red",unicode:"\ud83c\udcb5"},{type:"heart",number:"6",color:"red",unicode:"\ud83c\udcb6"},{type:"heart",number:"7",color:"red",unicode:"\ud83c\udcb7"},{type:"heart",number:"8",color:"red",unicode:"\ud83c\udcb8"},{type:"heart",number:"9",color:"red",unicode:"\ud83c\udcb9"},{type:"heart",number:"10",color:"red",unicode:"\ud83c\udcba"},{type:"heart",number:"11",color:"red",unicode:"\ud83c\udcbb"},{type:"heart",number:"12",color:"red",unicode:"\ud83c\udcbd"},{type:"heart",number:"13",color:"red",unicode:"\ud83c\udcbe"}],y=n(6),k=n.n(y),v=function(e){return f.find(function(t){return t.unicode===e})},O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).allowDrop=function(e){e.preventDefault()},n.getFoundationIndex=function(e){return+e.split("-")[1]},n.isSourceFoundation=function(e){return e.startsWith("foundation")},n.drop=function(e){e.preventDefault();var t=e.dataTransfer.getData("id"),a=e.dataTransfer.getData("sourceId"),r=v(t),o=n.getFoundationIndex(n.props.id);if(n.props.addToFoundation(o,r),n.isSourceFoundation(a)){var c=n.getFoundationIndex(a);return n.props.removeFromFoundation(c)}n.props.removeFromPile()},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=k.a.last(this.props.foundation);return e?r.a.createElement("div",{id:this.props.id,onDragOver:this.allowDrop,onDrop:this.drop,className:"container"},r.a.createElement(b,{card:e})):r.a.createElement("div",{onDragOver:this.allowDrop,onDrop:this.drop,className:"container"})}}]),t}(r.a.Component),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).createFoundations=function(e){var t=n.props.foundations;return r.a.createElement(O,{id:"foundation-"+e,addToFoundation:n.props.addToFoundation,removeFromFoundation:n.props.removeFromFoundation,removeFromPile:n.props.removeFromPile,foundation:t[e]})},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=[0,1,2,3].map(this.createFoundations.bind(this));return r.a.createElement("div",{className:"foundations"},e)}}]),t}(r.a.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"createCards",value:function(e){return e.map(function(e){return r.a.createElement("div",{className:"tableau-card-container"},r.a.createElement(b,{key:e.unicode,card:e}))})}},{key:"render",value:function(){var e=this.props.cards;return r.a.createElement("div",{className:"tableau"},this.createCards(e))}}]),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"createTableaus",value:function(e){return e.map(function(e){return r.a.createElement(F,{cards:e})})}},{key:"render",value:function(){var e=this.props.tableaus;return r.a.createElement("div",{className:"tableaus"},this.createTableaus(e))}}]),t}(r.a.Component),D=function e(t,n,a,r){Object(i.a)(this,e),this.type=t,this.number=n,this.unicode=a,this.color=r},E=function(e){function t(e){var n;Object(i.a)(this,t);var a=(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).createDeck(),r=n.createTableausFromDeck(k.a.cloneDeep(a)),o=r.stack,c=r.tableaus;return n.state={tableaus:c,stack:o,foundations:[[],[],[],[]],pile:[]},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"createDeck",value:function(){var e=f.map(function(e){return new D(e.type,e.number,e.unicode,e.color)});return k.a.shuffle(e)}},{key:"createTableausFromDeck",value:function(e){for(var t=[],n=k.a.cloneDeep(e),a=1;a<=7;a++){var r=n.splice(-a);t.push(r)}return{stack:n,tableaus:t}}},{key:"removeFromPile",value:function(){this.setState(function(e){var t=k.a.cloneDeep(e.pile);return t.shift(),{pile:t}})}},{key:"removeFromFoundation",value:function(e){this.setState(function(t){var n=k.a.cloneDeep(t.foundations);return n[e].pop(),{foundations:n}})}},{key:"addToFoundation",value:function(e,t){this.setState(function(n){var a=k.a.cloneDeep(n.foundations);return a[e].push(t),{foundations:a}})}},{key:"addToPile",value:function(e){this.setState(function(t){var n=k.a.cloneDeep(t.pile);return n.unshift(e),{pile:n}})}},{key:"drawCard",value:function(){var e=k.a.last(this.state.stack);this.setState(function(e){e.stack.pop()}),this.addToPile(e)}},{key:"reloadStack",value:function(){this.setState(function(e){return{stack:k.a.cloneDeep(e.pile),pile:[]}})}},{key:"getDetailsForStack",value:function(){var e=this.drawCard.bind(this),t="\ud83c\udca0";return 0===this.state.stack.length&&(e=this.reloadStack.bind(this),t="\u21bb"),{onStackClick:e,unicode:t}}},{key:"render",value:function(){var e=this.getDetailsForStack(),t=e.onStackClick,n=e.unicode;return r.a.createElement("main",null,r.a.createElement("div",{className:"upper-side"},r.a.createElement(h,{onStackClick:t,unicode:n,stackLength:this.state.stack.length,card:k.a.head(this.state.pile)}),r.a.createElement(j,{foundation:this.state.foundations,addToFoundation:this.addToFoundation.bind(this),removeFromFoundation:this.removeFromFoundation.bind(this),removeFromPile:this.removeFromPile.bind(this),foundations:this.state.foundations})),r.a.createElement(g,{tableaus:this.state.tableaus}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.5c9abeb5.chunk.js.map