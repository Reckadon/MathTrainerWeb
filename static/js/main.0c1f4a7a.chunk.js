(this["webpackJsonpmath-trainer"]=this["webpackJsonpmath-trainer"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),s=n.n(r),c=n(7),a=n.n(c),l=(n(13),n(2)),o=n(3),u=n(5),f=n(4),h=(n(14),function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{className:"buttonsGrp",children:[Object(i.jsx)("h3",{id:"selectDiffLabel",children:"Select Difficulty:"}),Object(i.jsx)("button",{className:"diffButton",onClick:function(){return t.props.onDiffSelected("Easy")},children:"Easy"}),Object(i.jsx)("button",{className:"diffButton",onClick:function(){return t.props.onDiffSelected("Medium")},children:"Medium"}),Object(i.jsx)("button",{className:"diffButton",onClick:function(){return t.props.onDiffSelected("Hard")},children:"Hard"})]})}}]),n}(r.Component)),j=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("nav",{className:this.getClass(),children:[this.getButton(),null===this.props.difficulty?"Math Trainer":"Difficulty: "+this.props.difficulty]})}},{key:"getClass",value:function(){return null===this.props.difficulty?null:"secondNav"}},{key:"getButton",value:function(){return null===this.props.difficulty?null:Object(i.jsx)("button",{style:{backgroundColor:"#00000000"},onClick:this.props.onBack,children:Object(i.jsxs)("svg",{height:"20",width:"20",style:{backgroundColor:"#00000000"},children:[Object(i.jsx)("line",{x1:"2",y1:"10",x2:"20",y2:"10",style:{stroke:"white",strokeWidth:2}}),Object(i.jsx)("line",{x1:"10",y1:"0",x2:"1",y2:"11",style:{stroke:"white",strokeWidth:2}}),Object(i.jsx)("line",{x1:"1",y1:"10",x2:"10",y2:"20",style:{stroke:"white",strokeWidth:2}})]})})}}]),n}(r.Component),d=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)("h2",{children:this.props.value<0?"Times Up!":this.props.value}),Object(i.jsx)("div",{className:"bar",children:Object(i.jsx)("div",{className:"progress",style:{width:this.getPercent()+"%"}})})]})}},{key:"getPercent",value:function(){return this.props.value/60*100}}]),n}(r.Component),b=(n(15),function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={timeLeft:60},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)("h4",{children:"Press Start and Answer as many questions as possible before the Timer runs out of Time!"}),Object(i.jsx)(d,{value:this.state.timeLeft}),Object(i.jsx)("button",{className:"startButton",onClick:function(){return t.start()},children:"START"})]})}},{key:"start",value:function(){var t=this;setInterval((function(){t.setState({timeLeft:t.state.timeLeft-1},(function(){0===t.state.timeLeft&&clearInterval()}))}),1e3)}}]),n}(r.Component)),p=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={diff:null},t.handleDiffSelection=function(e){t.setState({diff:e})},t.handleBack=function(){t.setState({diff:null})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)(j,{difficulty:this.state.diff,onBack:this.handleBack}),Object(i.jsx)("div",{className:"container",children:this.getContent()})]})}},{key:"getContent",value:function(){return null===this.state.diff?Object(i.jsx)(h,{onDiffSelected:this.handleDiffSelection}):Object(i.jsx)(b,{})}}]),n}(r.Component);a.a.render(Object(i.jsx)(s.a.Fragment,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c1f4a7a.chunk.js.map