(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),s=a(9),o=a(1);var m=()=>l.a.createElement("div",null,l.a.createElement("h1",{className:"font-weight-light display-1 text-center"},"Restaurant Finder")),i=a(23),u=a.n(i).a.create({baseURL:"http://localhost:3001/api/v1/restaurants"}),d=a(7);const E=Object(n.createContext)(),p=e=>{const[t,a]=Object(n.useState)([]),[r,c]=Object(n.useState)(null);return l.a.createElement(E.Provider,{value:{restaurants:t,setRestaurants:a,addRestaurants:e=>{a([...t,e]),d.b.success("Restaurant added successfully..")},selectedRestaurant:r,setSelectedRestaurant:c}},e.children)};var g=()=>{const{addRestaurants:e}=Object(n.useContext)(E),[t,a]=Object(n.useState)(""),[r,c]=Object(n.useState)(""),[s,o]=Object(n.useState)("Price Range");return l.a.createElement("div",{className:"mb-4"},l.a.createElement("form",{action:""},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{value:t,onChange:e=>a(e.target.value),type:"text",className:"form-control",placeholder:"name"})),l.a.createElement("div",{className:"col"},l.a.createElement("input",{value:r,onChange:e=>c(e.target.value),className:"form-control",type:"text",placeholder:"location"})),l.a.createElement("div",{className:"col"},l.a.createElement("select",{value:s,onChange:e=>o(e.target.value),className:"custom-select my-1 mr-sm-2"},l.a.createElement("option",{disabled:!0},"Price Range"),l.a.createElement("option",{value:"1"},"$"),l.a.createElement("option",{value:"2"},"$$"),l.a.createElement("option",{value:"3"},"$$$"),l.a.createElement("option",{value:"4"},"$$$$"),l.a.createElement("option",{value:"5"},"$$$$$"))),l.a.createElement("button",{onClick:async a=>{a.preventDefault();try{const a=await u.post("/",{name:t,location:r,price_range:s});e(a.data.data.restaurant)}catch(n){console.log(n)}},type:"submit",className:"btn btn-primary btn-lg rounded-pill shadow",style:{backgroundColor:"#4CAF50",border:"none",padding:"10px 20px",fontWeight:"bold"}},"Add"))))};var v=e=>{let{rating:t}=e;const a=[];for(let n=1;n<=5;n++)n<=t?a.push(l.a.createElement("i",{key:n,className:"fas fa-star text-warning"})):n!==Math.ceil(t)||Number.isInteger(t)?a.push(l.a.createElement("i",{key:n,className:"far fa-star text-warning"})):a.push(l.a.createElement("i",{key:n,className:"fas fa-star-half-alt text-warning"}));return l.a.createElement(l.a.Fragment,null,a)};var b=e=>{const{restaurants:t,setRestaurants:a}=Object(n.useContext)(E);let r=Object(o.f)();Object(n.useEffect)(()=>{(async()=>{try{const e=await u.get("/");console.log("the response received after backend api call to find all restaurants---",e.data.data.restaurants),a(e.data.data.restaurants)}catch(e){console.log("found error while fetching restaurants data--",e)}})()},[]);return l.a.createElement("div",{className:"list-group",style:{maxHeight:"40rem",overflowY:"scroll"}},l.a.createElement("table",{className:"table table-hover table-dark"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"bg-primary"},l.a.createElement("th",{scope:"col"},"Restaurant"),l.a.createElement("th",{scope:"col"},"Location"),l.a.createElement("th",{scope:"col"},"Price Range"),l.a.createElement("th",{scope:"col"},"Ratings"),l.a.createElement("th",{scope:"col"},"Edit"),l.a.createElement("th",{scope:"col"},"Delete"))),l.a.createElement("tbody",null,t&&t.map(e=>(console.log("checking the restaurants to map and render---"),l.a.createElement("tr",{onClick:()=>{return t=e.id,void r.push("/restaurants/".concat(t));var t},key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.location),l.a.createElement("td",null,"$".repeat(e.price_range)),l.a.createElement("td",{role:"button",tabindex:"0"},(e=>e.count?l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{rating:e.id}),l.a.createElement("span",{className:"text-warning ml-1"},"(",e.count,")")):l.a.createElement("span",{className:"text-warning"},"0 reviews"))(e)),l.a.createElement("td",null,l.a.createElement("button",{onClick:t=>((e,t)=>{e.stopPropagation(),r.push("/restaurants/".concat(t,"/update"))})(t,e.id),className:"btn btn-warning"},"Update")),l.a.createElement("td",null,l.a.createElement("button",{onClick:n=>(async(e,n)=>{e.stopPropagation();try{204===(await u.delete("/".concat(n))).status&&(a(t.filter(e=>e.id!==n)),d.b.success("Restaurant deleted successfully!"))}catch(l){console.log("checkin error from backend while deletion--",l),d.b.error(l||"Failed to delete the restaurant. Please try again..")}})(n,e.id),className:"btn btn-danger"},"Delete"))))))))};var h=()=>l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(b,null));var f=e=>{const{id:t}=Object(o.h)();let a=Object(o.f)();const[r,c]=Object(n.useState)(""),[s,m]=Object(n.useState)(""),[i,E]=Object(n.useState)("");Object(n.useEffect)(()=>{(async()=>{const e=await u.get("/".concat(t));c(e.data.data.restaurant.name),m(e.data.data.restaurant.location),E(e.data.data.restaurant.price_range)})()},[]);return l.a.createElement("div",null,l.a.createElement("form",{action:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{value:r,onChange:e=>c(e.target.value),id:"name",className:"form-control",type:"text"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"location"},"Location"),l.a.createElement("input",{value:s,onChange:e=>m(e.target.value),id:"location",className:"form-control",type:"text"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"price_range"},"Price Range"),l.a.createElement("input",{value:i,onChange:e=>E(e.target.value),id:"price_range",className:"form-control",type:"number"})),l.a.createElement("button",{type:"submit",onClick:async e=>{console.log(" updatedRestaurant in frontend---",t),e.preventDefault();const n=await u.put("/".concat(t),{name:r,location:s,price_range:i});console.log("checking updatedRestaurant--",n),a.push("/"),d.b.success("Updated sussesfully..")},className:"btn btn-primary"},"Submit")))};var N=()=>l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center"},"Update Restaurant"),l.a.createElement(f,null));var y=e=>{let{reviews:t}=e;return l.a.createElement("div",{className:"row row-cols-3 mb-2"},t.map(e=>l.a.createElement("div",{key:e.id,className:"card text-white bg-primary mb-3 mr-4",style:{maxWidth:"30%"}},l.a.createElement("div",{className:"card-header d-flex justify-content-between"},l.a.createElement("span",null,e.name),l.a.createElement("span",null,l.a.createElement(v,{rating:e.rating}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},e.review)))))};var w=()=>{const{id:e}=Object(o.h)(),t=Object(o.g)();console.log(t);const a=Object(o.f)();console.log(e);const[r,c]=Object(n.useState)(""),[s,m]=Object(n.useState)(""),[i,d]=Object(n.useState)("Rating");return l.a.createElement("div",{className:"mb-2"},l.a.createElement("form",{action:""},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-8"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{value:r,onChange:e=>c(e.target.value),id:"name",placeholder:"name",type:"text",className:"form-control"})),l.a.createElement("div",{className:"form-group col-4"},l.a.createElement("label",{htmlFor:"rating"},"Rating"),l.a.createElement("select",{value:i,onChange:e=>d(e.target.value),id:"rating",className:"custom-select"},l.a.createElement("option",{disabled:!0},"Rating"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Review"},"Review"),l.a.createElement("textarea",{value:s,onChange:e=>m(e.target.value),id:"Review",className:"form-control"})),l.a.createElement("button",{type:"submit",onClick:async n=>{n.preventDefault();try{await u.post("/".concat(e,"/addReview"),{name:r,review:s,rating:i}),a.push("/"),a.push(t.pathname)}catch(l){console.log("found error while submitting the review---",l)}},className:"btn btn-primary"},"Submit")))};var x=()=>{const{id:e}=Object(o.h)(),{selectedRestaurant:t,setSelectedRestaurant:a}=Object(n.useContext)(E);return Object(n.useEffect)(()=>{(async()=>{try{const t=await u.get("/".concat(e));console.log(t),a(t.data.data)}catch(t){console.log(t)}})()},[]),l.a.createElement("div",null,t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-center display-1"},t.restaurant.name),l.a.createElement("div",{className:"text-center"},l.a.createElement(v,{rating:t.restaurant.average_rating}),l.a.createElement("span",{className:"text-warning ml-1"},t.restaurant.count?"(".concat(t.restaurant.count,")"):"(0)")),l.a.createElement("div",{className:"mt-3"},l.a.createElement(y,{reviews:t.reviews})),l.a.createElement(w,null)))};a(55);var R=()=>l.a.createElement(p,null,l.a.createElement("div",{className:"container"},l.a.createElement(d.a,null),l.a.createElement(s.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:h}),l.a.createElement(o.a,{exact:!0,path:"/restaurants/:id/update",component:N}),l.a.createElement(o.a,{exact:!0,path:"/restaurants/:id",component:x})))));c.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.81cc9aab.chunk.js.map