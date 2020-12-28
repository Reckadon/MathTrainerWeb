(this["webpackJsonpmath-trainer"]=this["webpackJsonpmath-trainer"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(1),r=n.n(i),a=n(7),c=n.n(a),u=(n(13),n(2)),o=n(3),l=n(5),h=n(4),f=(n(14),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"buttonsGrp",children:[Object(s.jsx)("h3",{id:"selectDiffLabel",children:"Select Difficulty:"}),Object(s.jsx)("button",{className:"diffButton",onClick:function(){return t.props.onDiffSelected("Easy")},children:"Easy"}),Object(s.jsx)("button",{className:"diffButton",onClick:function(){return t.props.onDiffSelected("Medium")},children:"Medium"}),Object(s.jsx)("button",{className:"diffButton",onClick:function(){return t.props.onDiffSelected("Hard")},children:"Hard"})]})}}]),n}(i.Component)),d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("nav",{className:this.getClass(),children:[this.getButton(),null===this.props.difficulty?"Math Trainer":"Difficulty: "+this.props.difficulty]})}},{key:"getClass",value:function(){return null===this.props.difficulty?null:"secondNav"}},{key:"getButton",value:function(){return null===this.props.difficulty?null:Object(s.jsx)("button",{style:{backgroundColor:"#00000000"},onClick:this.props.onBack,children:Object(s.jsxs)("svg",{height:"20",width:"20",style:{backgroundColor:"#00000000"},children:[Object(s.jsx)("line",{x1:"2",y1:"10",x2:"20",y2:"10",style:{stroke:"white",strokeWidth:2}}),Object(s.jsx)("line",{x1:"10",y1:"0",x2:"1",y2:"11",style:{stroke:"white",strokeWidth:2}}),Object(s.jsx)("line",{x1:"1",y1:"10",x2:"10",y2:"20",style:{stroke:"white",strokeWidth:2}})]})})}}]),n}(i.Component),j=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)("h2",{children:this.props.value<0?"Time's Up!!":this.props.value}),Object(s.jsx)("div",{className:"bar",children:Object(s.jsx)("div",{className:"progress",style:{width:this.getPercent()+"%"}})})]})}},{key:"getPercent",value:function(){return this.props.value/60*100}}]),n}(i.Component),b=(n(15),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={question:"",answer:null,running:!1},t}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){this.props.isStarted&&!this.state.running?(this.setState({running:!0}),this.generateQuestion()):!this.props.isStarted&&this.state.running&&this.setState({running:!1,question:"",answer:null})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h4",{children:"Question:"}),Object(s.jsx)("h2",{children:this.state.question}),Object(s.jsx)("h4",{children:"Enter Answer:"})]})}},{key:"generateQuestion",value:function(){if(this.props.isStarted){var t=this.getNum(),e=this.getNum(),n=t+"+"+e;this.setState({question:n});var s=t+e;this.setState({answer:s})}}},{key:"getNum",value:function(){return Math.floor(100*Math.random())+1}}]),n}(i.Component)),p=(n(16),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={timeLeft:60,buttonText:"START",isStarted:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)("h4",{children:"Press Start and Answer as many questions as possible before the Timer runs out of Time!"}),Object(s.jsx)(j,{value:this.state.timeLeft}),Object(s.jsx)(b,{isStarted:this.state.isStarted,diff:this.props.diff}),Object(s.jsx)("button",{disabled:this.state.isStarted,className:"startButton",onClick:function(){return t.start()},children:this.state.buttonText})]})}},{key:"start",value:function(){var t=this;if("RESET"!==this.state.buttonText){this.setState({isStarted:!0});var e=setInterval((function(){t.setState({timeLeft:t.state.timeLeft-1},(function(){t.state.timeLeft<0&&(clearInterval(e),t.setState({buttonText:"RESET",isStarted:!1}))}))}),1e3)}else this.setState({timeLeft:60,buttonText:"START"})}}]),n}(i.Component)),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={diff:null},t.handleDiffSelection=function(e){t.setState({diff:e})},t.handleBack=function(){t.setState({diff:null})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(d,{difficulty:this.state.diff,onBack:this.handleBack}),Object(s.jsx)("div",{className:"container",children:this.getContent()})]})}},{key:"getContent",value:function(){return null===this.state.diff?Object(s.jsx)(f,{onDiffSelected:this.handleDiffSelection}):Object(s.jsx)(p,{diff:this.state.diff})}}]),n}(i.Component);c.a.render(Object(s.jsx)(r.a.Fragment,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.c4d99d91.chunk.js.map