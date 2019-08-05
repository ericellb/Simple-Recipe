(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{282:function(e,t,n){e.exports=n(474)},438:function(e,t,n){},471:function(e,t,n){},474:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(56),c=n.n(i),s=n(29),o=n(66),l=n(246),u=n(21),p=n(22),d=n(24),m=n(23),h=n(25),f=n(273),b=n(69),v=n(496),g=n(491),E=n(482),S=n(60),k=n(492),y=n(35),O=Object(y.b)(),I=n(490),x=n(81),C=n.n(x),j=n(15),w=n.n(j),A=n(20),R=n(28),N=n.n(R),T="https://simple-recipe-api.herokuapp.com",D=function(e,t,n){return function(){var a=Object(A.a)(w.a.mark(function a(r){var i,c;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t||(t=0),i="".concat(T,"/recipes?foodFilter=").concat(e,"&from=").concat(t),a.next=4,N.a.get(i);case 4:c=a.sent,r({type:"FETCH_RECIPES",payload:c.data,newFetch:n});case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},_={isLoading:!1,results:[],value:"",id:null},L=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=_,n.componentDidMount=function(){n.props.fetchDictionary()},n.componentDidUpdate=function(e,t){t.id!==n.state.id&&null!==n.state.id&&n.props.fetchRecipe(n.state.id)},n.handleSearchSelect=function(e,t){var a=t.result;"/"!==O.location.hash&&O.push("/"),n.setState({id:a._id}),n.setState({foodFilter:null})},n.handleSearchChange=function(e,t){var a=t.value;n.setState({isLoading:!0,value:a}),setTimeout(function(){if(n.state.value.length<1)return n.setState(_);var e=new RegExp(C.a.escapeRegExp(n.state.value),"i"),t=C.a.filter(n.props.dictionary.dictionary,function(t){return e.test(t.title)}).slice(0,4);t<=0&&(t=C.a.filter(n.props.dictionary.dictionary,function(t){return e.test(t.type)}).slice(0,4)),t<=0&&(t=C.a.filter(n.props.dictionary.dictionary,function(t){return e.test(t.description)}).slice(0,4)),n.setState({isLoading:!1,results:t})},300)},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(I.a,{className:"recipe-search-bar",placeholder:"Search recipes...",aligned:"left",loading:this.state.isLoading,onResultSelect:this.handleSearchSelect,onSearchChange:C.a.debounce(this.handleSearchChange,500,{leading:!0}),results:this.state.results,value:this.state.value})}}]),t}(a.Component),F=Object(s.b)(function(e){return{dictionary:e.dictionary}},{fetchRecipe:function(e){return function(){var t=Object(A.a)(w.a.mark(function t(n){var a,r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(T,"/recipes?id=").concat(e),t.next=3,N.a.get(a);case 3:r=t.sent,n({type:"FETCH_RECIPE",payload:r.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchDictionary:function(){return function(){var e=Object(A.a)(w.a.mark(function e(t){var n,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(T,"/recipes?dictionary=1"),e.next=3,N.a.get(n);case 3:a=e.sent,t({type:"FETCH_RECIPES_DICTIONARY",payload:a.data});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(L),M=n(487),U=[{key:"1",text:"None",value:null},{key:"2",text:"Chicken",value:"chicken"},{key:"3",text:"Beef",value:"beef"},{key:"4",text:"Pork",value:"pork"},{key:"5",text:"Fish",value:"fish"},{key:"6",text:"Vegetarian",value:"vegetarian"},{key:"7",text:"American",value:"american"},{key:"8",text:"Chinese",value:"chinese"},{key:"9",text:"Mexican",value:"mexican"},{key:"10",text:"Italian",value:"italian"},{key:"11",text:"Japanese",value:"japanese"},{key:"12",text:"Greek",value:"greek"},{key:"13",text:"French",value:"french"},{key:"14",text:"Thai",value:"thai"},{key:"15",text:"Indian",value:"indian"}],B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={foodFilter:null},n.componentDidUpdate=function(e,t){t.foodFilter!==n.state.foodFilter&&null!==n.state.foodType&&n.props.fetchRecipes(n.state.foodFilter,null,!0)},n.handleFilterByChange=function(e,t){var a=t.value;"/"!==O.location.hash&&O.push("/"),n.setState({foodFilter:a}),n.setState({id:null})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,{placeholder:"Filter by...",search:!0,selection:!0,options:U,onChange:this.handleFilterByChange})}}]),t}(a.Component),H=Object(s.b)(null,{fetchRecipes:D})(B),P=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={activeItem:"home",sidebarVisible:!1},n.componentDidUpdate=function(e,t){e.isSignedIn!==n.props.isSignedIn&&n.props.getAdmin(n.props.userId)},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n.onAuthChange=function(e){if(e){var t=n.auth.currentUser.get().getBasicProfile(),a=t.Eea,r=t.ig,i=t.U3;n.props.signIn(a,r,i)}else n.props.signOut(n.auth.currentUser.get().getId())},n.handleNavigation=function(e){"home"===e?O.push("/"):"submit"===e?O.push("/submit"):"admin"===e&&O.push("/admin"),"login"===e?n.props.isSignedIn?n.onSignOutClick():n.onSignInClick():n.setState({activeItem:e})},n.handleItemClick=function(e,t){var a=t.name;n.handleSideBarHide(),n.handleNavigation(a)},n.handleSideBarShow=function(){n.setState({sidebarVisible:!0})},n.handleSideBarHide=function(){n.setState({sidebarVisible:!1})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"607332079220-hhs6rhoaq44p29150j4thfdgoj7c5k59.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(function(){e.onAuthChange(e.auth.isSignedIn.get())})})})}},{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement("div",null,r.a.createElement(v.a,{as:g.a,minWidth:854,attached:!0,borderless:!0,className:"top-menu"},r.a.createElement(E.a,{className:"menu-container"},r.a.createElement(g.a.Item,{name:"burger",onClick:this.handleSideBarShow},r.a.createElement(S.a,{name:"bars"})),r.a.createElement(g.a.Item,null,"Simple Recipe"),r.a.createElement(g.a.Menu,{className:"top-menu",position:"right"},r.a.createElement(g.a.Item,null,r.a.createElement(F,null)),r.a.createElement(g.a.Item,null,r.a.createElement(H,null)),r.a.createElement(g.a.Item,{name:"login",onClick:this.handleItemClick},r.a.createElement(S.a,{className:"google icon"}),this.props.isSignedIn?"Sign Out":"Sign In")))),r.a.createElement(v.a,{as:g.a,attached:!0,borderless:!0,maxWidth:853,size:"massive",className:"top-menu"},r.a.createElement(g.a.Item,{name:"burger",onClick:this.handleSideBarShow},r.a.createElement(S.a,{name:"bars"})),r.a.createElement(g.a.Item,{className:"top-menu-title"},"Simple Recipe"),r.a.createElement(g.a.Menu,{className:"top-menu",position:"right"},r.a.createElement(g.a.Item,{name:"login",onClick:this.handleItemClick},r.a.createElement(S.a,{className:"google icon"}),this.props.isSignedIn?"Sign Out":"Sign In"))),r.a.createElement(k.a,{className:"sidebar-overlay",as:g.a,animation:"overlay",icon:"labeled",onHide:this.handleSideBarHide,vertical:!0,visible:this.state.sidebarVisible,width:"thin",inverted:!0},r.a.createElement(g.a.Item,{name:"home",active:"home"===e,onClick:this.handleItemClick},r.a.createElement(S.a,{name:"home"}),"Home"),this.props.isSignedIn?r.a.createElement(g.a.Item,{name:"submit",active:"submit"===e,onClick:this.handleItemClick},r.a.createElement(S.a,{name:"edit"})," Submit Recipe"):null,this.props.isAdmin?r.a.createElement(g.a.Item,{name:"admin",active:"admin"===e,onClick:this.handleItemClick},r.a.createElement(S.a,{name:"user secret"})," Admin Panel"):null,r.a.createElement(v.a,{maxWidth:853},r.a.createElement(g.a.Item,null,r.a.createElement(F,null)),r.a.createElement(g.a.Item,null,r.a.createElement(H,null)))))}}]),t}(a.Component),z=Object(s.b)(function(e){return{dictionary:e.dictionary,isSignedIn:e.auth.isSignedIn,userId:e.auth.userId,isAdmin:e.auth.isAdmin}},{getAdmin:function(e){return function(){var t=Object(A.a)(w.a.mark(function t(n){var a,r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(T,"/auth?userId=").concat(e),t.next=3,N.a.get(a);case 3:r=t.sent,n({type:"GET_ADMIN",payload:r.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},signIn:function(e,t,n){return function(){var a=Object(A.a)(w.a.mark(function a(r){var i;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i="".concat(T,"/users?userId=").concat(e,"&name=").concat(t,"&email=").concat(n),a.next=3,N.a.post(i);case 3:r({type:"SIGN_IN",payload:e});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},signOut:function(e){return{type:"SIGN_OUT",payload:e}}})(P),G=n(483),V=n(489),Y=n(475),J=n(47),W=n(486),X=n(495),q=n(274),$="https://simple-recipe-api.herokuapp.com",K=function(e){function t(e){var n,a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.setState({ratingStars:a.renderRating()})},a.componentDidUpdate=function(e,t){a.props!==e&&a.setState({link:a.props.link,id:a.props.id,src:a.props.src,title:a.props.title,description:a.props.description,extra:a.props.extra,rating:a.props.rating,buttons:a.props.buttons,ratingStars:a.renderRating()})},a.handleRateRecipe=function(){var e=Object(A.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setState({popupShow:!0}),!a.props.isSignedIn){e.next=8;break}return e.next=4,N.a.patch("".concat($,"/recipes?userId=").concat(a.props.userId,"&recipeId=").concat(a.state.id,"&rating=").concat(t));case 4:200===e.sent.status?(n=a.renderRating(t),a.setState({popupContent:"Recipe rated ".concat(t," star(s) ")}),a.setState({ratingStars:n})):a.setState({popupContent:"Database error, please try again later!"}),e.next=9;break;case 8:a.setState({popupContent:"Please Sign in to rate recipes!"});case 9:setTimeout(function(){a.setState({popupShow:!1})},2500);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.renderRating=function(e){var t=a.props.rating;void 0!==e&&(t=e),t=Math.floor(t);for(var n=[],i=function(e){e<t+1?n.push(r.a.createElement(S.a,{name:"star",color:"yellow",key:e,onClick:function(){return a.handleRateRecipe(e)}})):n.push(r.a.createElement(S.a,{name:"star outline",key:e,onClick:function(){return a.handleRateRecipe(e)}}))},c=1;c<6;c++)i(c);return n},a.renderExtra=function(){return r.a.createElement("div",{className:"card-extra"},r.a.createElement("div",null,a.state.extra),r.a.createElement(W.a,{content:a.state.popupContent,trigger:r.a.createElement("div",null,a.state.ratingStars),open:a.state.popupShow,on:"click",position:"right center",hideOnScroll:!0}),a.state.buttons?r.a.createElement("div",{className:"submission-section"},r.a.createElement(Y.a,{color:"green",onClick:function(){return a.props.onClick(a.state.id,"add")}},"Approve"),r.a.createElement(Y.a,{color:"red",onClick:function(){return a.props.onClick(a.state.id,"delete")}},"Deny")):"")},a.state=(n={link:e.link,id:e.id,src:e.src,title:e.title,description:e.description,extra:e.extra,rating:e.rating,buttons:e.buttons,ratingStars:[],popupShow:!1,popupContent:null},Object(J.a)(n,"popupShow",!1),Object(J.a)(n,"visible",!1),n),setTimeout(function(){a.setState({visible:!0})}),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.link,n=e.src,a=e.title,i=e.description,c=e.visible;return r.a.createElement(X.a,{visible:c,animation:"horizontal flip",duration:500},r.a.createElement(V.a,null,r.a.createElement(q.a,{href:t,target:"_blank",src:n,ui:!0}),r.a.createElement(V.a.Content,null,r.a.createElement(V.a.Header,{href:t,target:"_blank"},a),r.a.createElement(V.a.Description,null,i)),r.a.createElement(V.a.Content,{extra:!0},this.renderExtra())))}}]),t}(a.Component),Q=Object(s.b)(function(e){return{userId:e.auth.userId,isSignedIn:e.auth.isSignedIn}})(K),Z=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n.handleLoadMoreRecipes=function(){var e=n.props.recipes.recipes.length,t=n.props.recipes.recipes[0].type;console.log(t),n.props.fetchRecipes(t,e,!1)},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchRecipes("chicken")}},{key:"componentDidUpdate",value:function(e,t){e!==this.props&&this.setState({loading:!1})}},{key:"renderRecipeList",value:function(){return void 0!==this.props.recipes.recipes?this.props.recipes.recipes.map(function(e){return r.a.createElement(Q,{key:e._id,className:"card-container",link:e.link,id:e._id,src:e.src,title:e.title,description:e.description,extra:e.extra,rating:e.ratingAvg})}):r.a.createElement("div",null)}},{key:"render",value:function(){return r.a.createElement(E.a,{className:"recipe-list"},r.a.createElement(G.a,{active:this.state.loading,content:"The server is feeling a little grumpy... He's working on building some recipes."}),r.a.createElement(V.a.Group,{centered:!0,className:"recipe-card-group"},this.renderRecipeList()),r.a.createElement("div",{className:"recipe-list-load-container"},r.a.createElement(Y.a,{size:"massive",onClick:this.handleLoadMoreRecipes},"Load more...")))}}]),t}(a.Component),ee=Object(s.b)(function(e){return{recipes:e.recipes}},{fetchRecipes:D})(Z),te=n(484),ne="https://simple-recipe-api.herokuapp.com",ae=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.isAdmin||O.push("/")},n.componentDidUpdate=function(e,t){e.isAdmin!==n.props.isAdmin&&O.push("/")},n.state={title:null,description:null,link:null,src:null,type:null,extra:null,titleError:!1,descriptionError:!1,linkError:!1,srcError:!1,typeError:!1,extraError:!1,submitShow:!1,submitError:!1,popupContent:null},n.validateInput=Object(A.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:["title","description","link","src","type","extra"].forEach(function(e){n.state[e]?("link"===e||"src"===e)&&!1===RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/).test(n.state[e])?n.setState(Object(J.a)({},"".concat(e,"Error"),"Invalid ".concat(e))):n.setState(Object(J.a)({},"".concat(e,"Error"),!1)):n.setState(Object(J.a)({},"".concat(e,"Error"),"Invalid ".concat(e)))});case 1:case"end":return e.stop()}},e)})),n.handleInputChange=function(e,t){var a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n.handleSubmitShow=function(e){200===e?(n.setState({popupContent:"Successfully submitted recipe!"}),n.setState({submitError:!1})):(n.setState({popupContent:"Server Error:  either offline or invalid params"}),n.setState({submitError:!0})),n.setState({submitShow:!0}),setTimeout(function(){n.setState({submitShow:!1})},2500)},n.handleFormSubmit=Object(A.a)(w.a.mark(function e(){var t,a,r,i,c,s,o,l;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.validateInput();case 2:if(t=n.state,a=t.titleError,r=t.descriptionError,i=t.linkError,c=t.srcError,s=t.typeError,o=t.extraError,a||r||i||c||s||o){e.next=8;break}return e.next=6,n.handleApiCall();case 6:l=e.sent,n.handleSubmitShow(l.status);case 8:case"end":return e.stop()}},e)})),n.handleApiCall=Object(A.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.post("".concat(ne,"/recipeSubmissions"),{params:{title:n.state.title,description:n.state.description,src:n.state.src,link:n.state.link,type:n.state.type,extra:n.state.extra}}).then(function(e){return e}).catch(function(e){return e}));case 1:case"end":return e.stop()}},e)})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{fluid:!0,className:"recipe-list"},r.a.createElement(V.a.Group,{centered:!0},r.a.createElement(V.a,null,r.a.createElement(q.a,{src:this.state.src,wrapped:!0,ui:!1}),r.a.createElement(V.a.Content,null,r.a.createElement(V.a.Header,null,this.state.title),r.a.createElement(V.a.Meta,null,r.a.createElement("span",null,this.state.description))),r.a.createElement(V.a.Content,{extra:!0},r.a.createElement(te.a,{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-container"},r.a.createElement(te.a.Input,{label:"Recipe Title",type:"text",placeholder:"Recipe Title...",name:"title",onChange:this.handleInputChange,error:this.state.titleError}),r.a.createElement(te.a.Input,{label:"Recipe Description",type:"text",placeholder:"Recipe Description...",name:"description",onChange:this.handleInputChange,error:this.state.descriptionError}),r.a.createElement(te.a.Input,{label:"Recipe Type",type:"text",placeholder:"Recipe Type...",name:"type",onChange:this.handleInputChange,error:this.state.typeError}),r.a.createElement(te.a.Input,{label:"Recipe Calories",type:"text",placeholder:"Recipe Calories...",name:"extra",onChange:this.handleInputChange,error:this.state.extraError}),r.a.createElement(te.a.Input,{label:"Recipe Link",type:"text",placeholder:"Recipe Link...",name:"link",onChange:this.handleInputChange,error:this.state.linkError}),r.a.createElement(te.a.Input,{label:"Recipe Image Src",type:"text",placeholder:"Recipe Image Src...",name:"src",onChange:this.handleInputChange,error:this.state.srcError}),r.a.createElement(W.a,{content:this.state.popupContent,className:this.state.submitError?"error":"success",open:this.state.submitShow,on:"click",position:"top center",trigger:r.a.createElement(te.a.Button,{className:"form-submit-button",align:"right",color:"green",content:"Submit Recipe"})})))))))}}]),t}(a.Component),re=Object(s.b)(function(e){return{isAdmin:e.auth.isAdmin}})(ae),ie=(n(438),n(488)),ce="https://simple-recipe-api.herokuapp.com",se=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={users:[],admins:[],popupContent:null,popupAction:null,popupShow:!1},n.getListOfUsers=Object(A.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.userId,e.next=3,N.a.get("".concat(ce,"/users?userId=").concat(t));case 3:a=e.sent,n.setState({users:a.data});case 5:case"end":return e.stop()}},e)})),n.getListOfAdmins=Object(A.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.userId,e.next=3,N.a.get("".concat(ce,"/admin?userId=").concat(t));case 3:a=e.sent,n.setState({admins:a.data});case 5:case"end":return e.stop()}},e)})),n.addToAdmins=function(){var e=Object(A.a)(w.a.mark(function e(t){var a,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.userId,e.next=3,N.a.post("".concat(ce,"/admin?userId=").concat(a,"&newAdminId=").concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.delFromAdmins=function(){var e=Object(A.a)(w.a.mark(function e(t){var a,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.userId,e.next=3,N.a.delete("".concat(ce,"/admin?userId=").concat(a,"&newAdminId=").concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.componentDidMount=function(){null!==n.props.userId&&(n.getListOfUsers(),n.getListOfAdmins())},n.isUserAdmin=function(e){var t=!1;for(var a in n.state.admins)e.userId===n.state.admins[a].userId&&(t=!0);return t},n.handlePopupClose=function(){setTimeout(function(){n.setState({popupShow:!1})},2500)},n.handlePopupConfirm=function(){var e=Object(A.a)(w.a.mark(function e(t){var a,r,i;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.popupAction,r=a.type,i=a.userId,!t){e.next=14;break}if("add"!==r){e.next=9;break}return e.next=5,n.addToAdmins(i);case 5:return e.next=7,n.getListOfAdmins();case 7:e.next=14;break;case 9:if("del"!==r){e.next=14;break}return e.next=12,n.delFromAdmins(i);case 12:return e.next=14,n.getListOfAdmins();case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleUserOnClick=function(){var e=Object(A.a)(w.a.mark(function e(t,a){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"add"===a?n.setState({popupContent:"Are you sure you want to add ".concat(t.email," to Admins?"),popupAction:{type:"add",userId:t.userId}}):"delete"===a&&n.setState({popupContent:"Are you sure you want to remove ".concat(t.email," from Admins ?"),popupAction:{type:"del",userId:t.userId}});case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.renderButtons=function(){return r.a.createElement("div",{className:"popup-container"},r.a.createElement("div",{className:"admin-popup-content"},n.state.popupContent),r.a.createElement("div",{className:"admin-popup-buttons"},r.a.createElement(Y.a,{color:"red",onClick:function(){return n.handlePopupConfirm(!1)}},r.a.createElement(S.a,{name:"remove"})," No"),r.a.createElement(Y.a,{color:"green",onClick:function(){return n.handlePopupConfirm(!0)}},r.a.createElement(S.a,{name:"checkmark"})," Yes")))},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"Admin List",r.a.createElement("br",null),r.a.createElement(ie.a,{celled:!0,relaxed:!0,verticalAlign:"middle"},this.state.users.map(function(t){return r.a.createElement("div",{className:"user-list-container",key:t.userId},e.isUserAdmin(t)?r.a.createElement(S.a,{size:"large",name:"user secret"}):r.a.createElement(S.a,{size:"large",name:"user"}),r.a.createElement("div",null,t.email),r.a.createElement(W.a,{content:e.renderButtons,trigger:e.isUserAdmin(t)?r.a.createElement(Y.a,{onClick:function(){return e.handleUserOnClick(t,"delete")},color:"red",className:"admin-button",floated:"right"},"Delete"):r.a.createElement(Y.a,{onClick:function(){return e.handleUserOnClick(t,"add")},color:"green",className:"admin-button",floated:"right"},"Add"),on:"click",position:"right center",hideOnScroll:!0}))})))}}]),t}(a.Component),oe=Object(s.b)(function(e){return{userId:e.auth.userId}})(se),le=n(485),ue="https://simple-recipe-api.herokuapp.com",pe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipes:[],modalText:null,modalShow:!1,modalAction:null},n.getSubmissionsList=Object(A.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat(ue,"/recipeSubmissions"));case 2:t=e.sent,n.setState({recipes:t.data});case 4:case"end":return e.stop()}},e)})),n.addSubmission=function(){var e=Object(A.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.patch("".concat(ue,"/recipeSubmissions?id=").concat(t,"&action=add"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.delSubmission=function(){var e=Object(A.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.patch("".concat(ue,"/recipeSubmissions?id=").concat(t,"&action=delete"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleModalConfirm=function(){var e=Object(A.a)(w.a.mark(function e(t){var a,r,i;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.modalAction,r=a.type,i=a.submissionId,!t){e.next=18;break}if("add"!==r){e.next=10;break}return e.next=5,n.addSubmission(i);case 5:return e.next=7,n.getSubmissionsList();case 7:n.setState({modalShow:!1}),e.next=16;break;case 10:if("del"!==r){e.next=16;break}return e.next=13,n.delSubmission(i);case 13:return e.next=15,n.getSubmissionsList();case 15:n.setState({modalShow:!1});case 16:e.next=19;break;case 18:n.setState({modalShow:!1});case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleSubmissionClick=function(e,t){"add"===t?n.setState({modalShow:!0,modalText:"Are you sure you want to add ".concat(e," to Admins?"),modalAction:{type:"add",submissionId:e}}):"delete"===t&&n.setState({modalShow:!0,modalText:"Are you sure you want to remove ".concat(e," from Admins ?"),modalAction:{type:"del",submissionId:e}})},n.renderButtons=function(){return r.a.createElement("div",null,r.a.createElement(Y.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return n.handleModalConfirm(!1)}},r.a.createElement(S.a,{name:"remove"})," No"),r.a.createElement(Y.a,{color:"green",inverted:!0,onClick:function(){return n.handleModalConfirm(!0)}},r.a.createElement(S.a,{name:"checkmark"})," Yes"))},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getSubmissionsList()}},{key:"renderRecipeList",value:function(){var e=this;return console.log(this.state.recipes),void 0!==this.state.recipes?this.state.recipes.map(function(t){return r.a.createElement(Q,{key:t._id,className:"card-container",link:t.link,id:t._id,src:t.src,title:t.title,description:t.description,extra:t.extra,onClick:function(t,n){return e.handleSubmissionClick(t,n)},buttons:!0})}):r.a.createElement("div",null)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Recipe Submissions"),r.a.createElement(V.a.Group,{centered:!0},this.renderRecipeList()),r.a.createElement(le.a,{open:this.state.modalShow,basic:!0,size:"small",header:"Admin Confirmation",content:this.state.modalText,actions:this.renderButtons}))}}]),t}(a.Component),de=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.isAdmin||O.push("/")},n.componentDidUpdate=function(e,t){e.isAdmin!==n.props.isAdmin&&O.push("/")},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"admin-flex-container"},r.a.createElement("div",{className:"users-list flex-item"},r.a.createElement(oe,null)),r.a.createElement("div",{className:"submission-list flex-item"},r.a.createElement(pe,null)))}}]),t}(a.Component),me=Object(s.b)(function(e){return{isAdmin:e.auth.isAdmin}})(de),he=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"content-footer footer-left"},"Data fueled by ",r.a.createElement("a",{href:"http://hellofresh.com"},"Hellofresh")," and ",r.a.createElement("a",{href:"http://allrecipes.com"}," Allrecipes ")),r.a.createElement("div",{className:"content-footer footer-right"},r.a.createElement("a",{href:"https://github.com/shmeegie",className:"github-icon-link"},r.a.createElement(S.a,{link:!0,"aria-hidden":"true",size:"big",name:"github"}))))}}]),t}(a.Component),fe=(n(471),n(472),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f.a,null,r.a.createElement(z,null),r.a.createElement(b.a,{path:"/",exact:!0,component:ee}),r.a.createElement(b.a,{path:"/submit",exact:!0,component:re}),r.a.createElement(b.a,{path:"/admin",exact:!0,component:me}),r.a.createElement(he,null)))}}]),t}(a.Component)),be=n(172),ve=n(52),ge={recipes:[]},Ee={},Se={isSignedIn:!1,userId:null,isAdmin:!1},ke=Object(o.c)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RECIPES":return t.newFetch?Object(ve.a)({},e,{recipes:t.payload}):Object(ve.a)({},e,{recipes:[].concat(Object(be.a)(e.recipes),Object(be.a)(t.payload))});case"FETCH_RECIPE":return Object(ve.a)({},e,{recipes:t.payload});default:return e}},dictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RECIPES_DICTIONARY":return Object(ve.a)({},e,{dictionary:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(ve.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(ve.a)({},e,{isSignedIn:!1,userId:null});case"GET_ADMIN":return Object(ve.a)({},e,{isAdmin:t.payload});default:return e}}}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Oe=Object(o.e)(ke,ye(Object(o.a)(l.a)));c.a.render(r.a.createElement(s.a,{store:Oe},r.a.createElement(fe,null)),document.getElementById("root"))}},[[282,1,2]]]);
//# sourceMappingURL=main.36e5628c.chunk.js.map