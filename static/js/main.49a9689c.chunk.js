(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),i=(a(75),a(8)),c=a(9),s=a(11),u=a(10),p=a(12),m=(a(76),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.bookInfo._id},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-2",style:{display:"inline-table"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"badge badge-dark"},r.a.createElement("img",{style:{width:300,height:"100%"},src:this.props.bookInfo.url,alt:"Logo"}),r.a.createElement("h5",{className:"card-title"},"Book Name: ",this.props.bookInfo.title),r.a.createElement("p",{className:"card-text"},"Course: ",this.props.bookInfo.course),r.a.createElement("p",null,"Price: ",this.props.bookInfo.price))))}}]),t}(n.Component)),h=a(14),d=a.n(h),f=a(143),g=a(64),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],intervalIsSet:null,display:[],input:"",searchType:"title"},a.getDataFromDb=function(){fetch(a.props.api+"/getData").then(function(e){return e.json()}).then(function(e){return a.setState({data:e.data})})},a.deleteByIdFromDB=function(e){d.a.delete(a.props.api+"/deleteByIdData",{data:{id:e}})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.getDataFromDb(),setTimeout(function(){e.setState({display:e.state.data})},200),!this.state.intervalIsSet){var t=setInterval(this.getDataFromDb,1e3);this.setState({intervalIsSet:t})}}},{key:"componentWillUnmount",value:function(){this.state.intervalIsSet&&(clearInterval(this.state.intervalIsSet),this.setState({intervalIsSet:null}))}},{key:"search",value:function(e,t){var a=[];this.state.data.map(function(n){n[e]&&n[e].toLowerCase().includes(t)&&a.push(n)}),this.setState({display:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{paddingLeft:"40%"}},r.a.createElement(f.a,{title:this.state.searchType,id:"basic-nav-dropdown"},r.a.createElement(f.a.Item,{href:"#action/3.1",onClick:function(){e.setState({searchType:"title"})}},"title"),r.a.createElement(f.a.Item,{href:"#action/3.2",onClick:function(){e.setState({searchType:"course"})}},"course")),r.a.createElement("input",{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(t){e.setState({input:t.target.value})}}),r.a.createElement(g.a,{style:{margin:"5px"},variant:"outline-primary",onClick:function(){e.search(e.state.searchType,e.state.input)}},"Search"),r.a.createElement(g.a,{style:{margin:"5px"},variant:"outline-primary",onClick:function(){e.setState({display:e.state.data})}},"Reset")),r.a.createElement("hr",null),r.a.createElement("div",null,this.state.display.map(function(t){return r.a.createElement(m,{key:t._id,bookInfo:t,api:e.props.api})})))}}]),t}(n.Component),b=(a(111),a(142)),v=a(144),y=a(141),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:null,price:null,course:null,url:null,owner:null},a.putDataToDB=function(e){d.a.post(a.props.api+"/putData",e).then(function(e){console.log(e),console.log(e.data)}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{padding:"10px",display:"grid"}},r.a.createElement("label",null,"Book title:",r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({title:t.target.value})},placeholder:"",style:{width:"200px"}})),r.a.createElement("label",null,"Book Price:",r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({price:t.target.value})},placeholder:"",style:{width:"200px"}})),r.a.createElement("label",null,"Course:",r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({course:t.target.value})},placeholder:"",style:{width:"200px"}})),r.a.createElement("label",null,"Image URL:",r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({url:t.target.value})},placeholder:"",style:{width:"200px"}})),r.a.createElement("button",{style:{width:"200px"},onClick:function(){e.putDataToDB({title:e.state.title,price:e.state.price,course:e.state.course,url:e.state.url,owner:e.props.username})}},"ADD"))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:a.props.user.firstname,email:a.props.user.email,currentSellingBook:[],intervalIsSet:null,userInfo:[{Header:"Username",accessor:"name"},{Header:"Email",accessor:"email"}]},a.getMyCurrentSellingBook=function(){d.a.post(a.props.api+"/search",{owner:a.props.user.username}).then(function(e){a.setState({currentSellingBook:e.data.data})}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if(this.getMyCurrentSellingBook(),!this.state.intervalIsSet){var e=setInterval(this.getMyCurrentSellingBook,1e3);this.setState({intervalIsSet:e})}}},{key:"componentWillUnmount",value:function(){this.state.intervalIsSet&&(clearInterval(this.state.intervalIsSet),this.setState({intervalIsSet:null}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Welcome ",this.props.user.firstname+" "+this.props.user.lastname),r.a.createElement("table",{style:{textAlign:"center"}},r.a.createElement("tr",null,r.a.createElement("th",null,"Your username"),r.a.createElement("th",null,"Your account email")),r.a.createElement("tr",null,r.a.createElement("td",null,this.props.user.username),r.a.createElement("td",null,this.props.user.email))),r.a.createElement("hr",null),r.a.createElement("h2",{style:{textAlign:"center"}},"Here is the book you are currently selling"),r.a.createElement("div",null,this.state.currentSellingBook.map(function(t){return r.a.createElement(m,{key:t._id,bookInfo:t,api:e.props.api})})),r.a.createElement(x,{username:this.props.user.username,api:this.props.api}))}}]),t}(n.Component),k=a(22),S=a(23);function j(){var e=Object(k.a)(["\n  width: 220px;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background: #ff0000;\n  border-radius: 15px;\n  margin: 10px auto;\n  text-align: center;\n"]);return j=function(){return e},e}function C(){var e=Object(k.a)(["\n  display: block;\n  width: 260px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 10px;\n  margin: 10px auto;\n  color: #777;\n  margin-bottom: 10px;\n"]);return C=function(){return e},e}function O(){var e=Object(k.a)(["\n  width: 320px;\n  height: 370px;\n  background: radial-gradient(\n    ellipse farthest-corner at center top,\n    #1e90ff 0%,\n    #a9bcd0 100%\n  );\n  padding: 50px 30px;\n  color: white;\n  box-sizing: border-box;\n  text-align: center;\n  vertical-align: middle;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 7px;\n"]);return O=function(){return e},e}function D(){var e=Object(k.a)(["\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return D=function(){return e},e}var I=S.a.div(D()),B=S.a.div(O()),N=S.a.input(C()),T=S.a.button(j()),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:null,password:null},a.LogintoDB=function(e){d.a.post(a.props.api+"/login",e).then(function(e){if(null==e.data.user)return console.log({success:!1,message:"user not found."}),alert("User not found"),0;a.props.login(e.data.user)}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,r.a.createElement(B,null,r.a.createElement("h1",null,"Login Page"),r.a.createElement("label",null,"Username:",r.a.createElement(N,{type:"text",onChange:function(t){return e.setState({username:t.target.value})},placeholder:"username"})),r.a.createElement("label",null,"Password:",r.a.createElement(N,{type:"password",onChange:function(t){return e.setState({password:t.target.value})},placeholder:"password"})),r.a.createElement(T,{onClick:function(){return e.LogintoDB({username:e.state.username,password:e.state.password})}},"Login to System"))))}}]),t}(n.Component);function R(){var e=Object(k.a)(["\n  width: 255px;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background: #ff0000;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n"]);return R=function(){return e},e}function A(){var e=Object(k.a)(["\n  display: block;\n  width: 140%;\n  margin-bottom: 10px;\n"]);return A=function(){return e},e}function L(){var e=Object(k.a)(["\n  width: 320px;\n  height: 550px;\n  background: radial-gradient(\n    ellipse farthest-corner at center top,\n    #1e90ff 0%,\n    #a9bcd0 100%\n  );\n  padding: 50px 30px;\n  color: white;\n  box-sizing: border-box;\n  vertical-align: middle;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 7px;\n"]);return L=function(){return e},e}function U(){var e=Object(k.a)(["\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return U=function(){return e},e}var F=S.a.div(U()),H=S.a.div(L()),M=S.a.input(A()),J=S.a.button(R()),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:null,email:null,firstname:null,lastname:null,password:null},a.putDataToUserDB=function(e){d.a.post(a.props.api+"/putUser",e).then(function(t){t.data.success?(alert("Register Successfully"),a.props.login(e)):alert("User already exist."),console.log(t)}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null,r.a.createElement(H,null,r.a.createElement("h1",null," Register Page"),r.a.createElement("label",null,"Username:",r.a.createElement(M,{type:"text",onChange:function(t){return e.setState({username:t.target.value})},placeholder:"username"})),r.a.createElement("label",null,"Email:",r.a.createElement(M,{type:"text",onChange:function(t){return e.setState({email:t.target.value})},placeholder:"email"})),r.a.createElement("label",null,"Firstname:",r.a.createElement(M,{type:"text",onChange:function(t){return e.setState({firstname:t.target.value})},placeholder:"firstname"})),r.a.createElement("label",null,"Lastname:",r.a.createElement(M,{type:"text",onChange:function(t){return e.setState({lastname:t.target.value})},placeholder:"lastname"})),r.a.createElement("label",null,"Password:",r.a.createElement(M,{type:"password",onChange:function(t){return e.setState({password:t.target.value})},placeholder:"password"})),r.a.createElement(J,{onClick:function(){return e.putDataToUserDB({username:e.state.username,email:e.state.email,firstname:e.state.firstname,lastname:e.state.lastname,password:e.state.password})}},"Register"))))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={input:null,user:null,topRight:null},a.setTopRight=function(e){a.setState({topRight:e})},a.login=function(e){return null==e?(a.props.setContent(r.a.createElement(P,{login:a.login,api:a.props.api})),0):(a.setState({user:e}),a.props.setContent(r.a.createElement(w,{user:e,api:a.props.api})),a.setTopRight(r.a.createElement(g.a,{style:{margin:"5px"},variant:"outline-primary",onClick:function(){return a.signOut()}},"Sign Out")),1)},a.signOut=function(){a.props.setContent(r.a.createElement(E,{api:a.props.api})),a.setState({user:null}),a.setTopRight(r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{margin:"5px"},variant:"outline-primary",onClick:function(){return a.props.setContent(r.a.createElement(P,{login:a.login,api:a.props.api}))}},"Login"),r.a.createElement(g.a,{style:{margin:"5px"},variant:"outline-primary",onClick:function(){return a.props.setContent(r.a.createElement(W,{login:a.login,api:a.props.api}))}},"Register")))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setTopRight(r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{margin:"5px"},variant:"outline-primary",onClick:function(){return e.props.setContent(r.a.createElement(P,{login:e.login,api:e.props.api}))}},"Login"),r.a.createElement(g.a,{style:{margin:"5px"},variant:"outline-primary",onClick:function(){return e.props.setContent(r.a.createElement(W,{login:e.login,api:e.props.api}))}},"Register")))}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{bg:"navbar navbar-dark bg-dark",expand:"lg",style:{marginBottom:10}},r.a.createElement(b.a.Brand,{href:"#home"},"UB Platform",r.a.createElement("img",{src:"https://img.icons8.com/doodle/48/000000/books.png",style:{width:30}})),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(v.a.Link,{href:"#home",onSelect:function(){e.props.setContent(r.a.createElement(E,{api:e.props.api}))}},">Home"),r.a.createElement(v.a.Link,{href:"#accountPage",onSelect:function(){e.login(e.state.user)}},"Account")),r.a.createElement(y.a,{inline:!0},this.state.topRight)))}}]),t}(n.Component),$=(a(130),a(138),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("footer",{className:"page-footer bg-dark"},r.a.createElement("div",{className:"container-fluid text-center text-md-left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-md-0 mt-3",style:{color:"white"}},r.a.createElement("h5",{className:"text-uppercase"},"Contact US"),r.a.createElement("p",null,"Email: Please contact us xliu72@buffalo.edu"),r.a.createElement("p",null,"Phone: 4152839557")),r.a.createElement("hr",{className:"clearfix w-100 d-md-none pb-3"}),r.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},r.a.createElement("h5",{className:"text-uppercase",style:{color:"white"}},"Career Page"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Join Team")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Seek Career")))),r.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},r.a.createElement("h5",{className:"text-uppercase",style:{color:"white"}},"See Team"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Post Question")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Seek Question")))))),r.a.createElement("div",{className:"footer-copyright text-center py-3",style:{color:"white"}},r.a.createElement("p",null,"\xa9 2019 Copyright"),r.a.createElement("a",{href:"https://www.google.com/"}," www.ubplatform.com"))))}}]),t}(n.Component)),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={api:"http://localhost:3001/api",content:null,deleteByIdFromDB:null,book:[{title:"Harry Potter",price:"$2",course:"CSE442",url:"https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"},{title:"Harry Potter",price:"$20",course:"CSE442",url:"https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg"}]},a.deleteAll=function(){a.state.data.forEach(function(e){d.a.delete(a.state.api+"/deleteByIdData",{data:{id:e._id}})})},a.addAll=function(e){e.forEach(function(e){d.a.post(a.state.api+"/putData",e)})},a.setContent=function(e){a.setState({content:e})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({content:r.a.createElement(E,{api:this.state.api})})}},{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"#D8D8D8"}},r.a.createElement(_,{setContent:this.setContent,api:this.state.api}),this.state.content,r.a.createElement($,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(139);o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,a){e.exports=a(140)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.49a9689c.chunk.js.map