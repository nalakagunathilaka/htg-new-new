webpackJsonp([1],{"/ijm":function(t,e){},0:function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[a("v-icon",[t._v("golf_course")])],1),t._v(" "),a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[a("v-list",[a("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[a("v-list-tile-action",[a("v-icon",[t._v("compare_arrows")])],1),t._v(" "),a("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),a("v-footer",{attrs:{fixed:t.fixed,app:""}},[a("span",[t._v("© CSE'15")])])],1)},staticRenderFns:[]},n=a("VU/8")({data:function(){return{clipped:!1,drawer:!0,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Hit The Grounds 2018"}},name:"App"},r,!1,null,null,null).exports,i=a("/ocq"),o=a("DmT9")("https://cse-htg.herokuapp.com/");o.on("connect",function(){return console.log("Connected")});var c={data:function(){return{matches:[],scorecard:!1,headers:[{text:"Team Name",value:"name"},{text:"Company Name",value:"company"},{text:"Played",value:"played"},{text:"Won",value:"won"},{text:"Lost",value:"lost"},{text:"N/R",value:"nr"}],teams:[],teams1:[],teams2:[],scorecardHeaders1:[{text:"Player",value:"name"},{text:"Score",value:"score"},{text:"Overs",value:"overs",sortable:!1},{text:"Wickets",value:"wickets"}],scorecardHeaders2:[{text:"Player",value:"name"},{text:"Score",value:"score"},{text:"Overs",value:"overs",sortable:!1},{text:"Wickets",value:"wickets"}]}},methods:{loadLeadboard:function(){}},mounted:function(){var t=this;o.emit("getTeams",function(e,a){if(e)return console.log(e);a.forEach(function(e){t.teams.push(e)})}),o.emit("getLiveMatches",function(e,a){if(e)return console.log(e);a.forEach(function(e){t.matches.push(e)})})}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-slide-y-transition",{attrs:{mode:"out-in"}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("img",{staticClass:"mb-5",staticStyle:{width:"300px",height:"300px"},attrs:{src:a("vCoc"),alt:"Vuetify.js"}}),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",[s("div",[s("span",{staticClass:"red--text"},[s("h2",[t._v("LIVE")])]),s("br")])]),t._v(" "),s("v-card-actions",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-alert",{directives:[{name:"show",rawName:"v-show",value:0===t.matches.length,expression:"matches.length === 0"}],attrs:{type:"info"}},[t._v("\n                Currently there are no live matches.\n              ")]),t._v(" "),t._l(t.matches,function(e){return s("v-flex",{key:e.name,attrs:{xs6:""}},[s("v-card",{attrs:{flat:""}},[s("v-container",{staticStyle:{"min-height":"0","min-width":"500px"},attrs:{fixed:"","grid-list-lg":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("span",[s("h3",[t._v(t._s(t.teams.filter(function(t){return t._id==e.teams[0].teamId})[0].name)+" vs "+t._s(t.teams.filter(function(t){return t._id==e.teams[1].teamId})[0].name))])]),s("br"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("span",[s("h3",[t._v(t._s(t.teams.filter(function(t){return t._id==e.teams[0].teamId})[0].name)+" - "+t._s(e.teams[0].score)+" / "+t._s(e.teams[0].wicket))])]),s("br"),t._v(" "),s("v-spacer"),t._v(" "),s("span",[t._v("(Overs: "+t._s(e.teams[0].overs)+")")])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("span",[s("h3",[t._v(t._s(t.teams.filter(function(t){return t._id==e.teams[1].teamId})[0].name)+" - "+t._s(e.teams[1].score)+" / "+t._s(e.teams[1].wicket))])]),s("br"),t._v(" "),s("v-spacer"),t._v(" "),s("span",[t._v("(Overs: "+t._s(e.teams[1].overs)+")")])],1)],1)])],1)],1)],1)],1)],1)],1)})],2)],1)],1)],1)],1)],1),t._v(" "),s("br"),t._v(" "),s("h3",{staticClass:"display-2 layout justify-center"},[t._v(" Leadboard")]),t._v(" "),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.teams},scopedSlots:t._u([{key:"items",fn:function(e){return[s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.companyName))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.won+e.item.lost))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.won))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.lost))]),t._v(" "),s("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.nr))])]}}])})],1)},staticRenderFns:[]};var v=a("VU/8")(c,l,!1,function(t){a("/ijm")},"data-v-529f8633",null).exports;s.a.use(i.a);var u=new i.a({routes:[{path:"/",name:"HelloWorld",component:v}]}),m=a("3EgV"),d=a.n(m);a("7zck");s.a.use(d.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:u,components:{App:n},template:"<App/>"})},vCoc:function(t,e,a){t.exports=a.p+"static/img/finalfinal.0395e6f.png"}},["NHnr"]);
//# sourceMappingURL=app.023d1107c0f2912cef85.js.map