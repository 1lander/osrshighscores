(this.webpackJsonposrshighscores=this.webpackJsonposrshighscores||[]).push([[0],{67:function(e,a,n){e.exports=n(79)},72:function(e,a,n){},73:function(e,a,n){},79:function(e,a,n){"use strict";n.r(a);var l=n(0),t=n.n(l),r=n(8),i=n.n(r),o=(n(72),n(54)),c=(n(73),n(25)),m=n(26),s=n(30),p=n(29),u=n(117),v=n(81),d=n(116),h=n(114),g=n(122),k=n(123),x=n(112),f=n(28),b=Object(x.a)({root:{height:"20px",color:"#ccbebe"},barColorPrimary:{backgroundColor:function(e){return e.color}},level:{padding:"10px",margin:"10px"}});function E(e){var a=0;return e.map((function(e){99===e.level?a+=13034431:a+=e.xp})),a/2997919.13}function y(e){var a=b(e);return t.a.createElement(g.a,{display:"flex",alignItems:"center"},t.a.createElement(g.a,{width:"100%",mr:1},t.a.createElement(h.a,{classes:{root:a.root,barColorPrimary:a.barColorPrimary},variant:"determinate",value:e.xp})),t.a.createElement(g.a,{minWidth:50},t.a.createElement(d.a,null,"".concat(Math.round(e.xp),"%"))))}function j(e){var a,n,l=b(e);return t.a.createElement(v.a,{className:l.level,square:!0},t.a.createElement(u.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},t.a.createElement(u.a,{item:!0,xs:2},t.a.createElement(d.a,{variant:"h6"},e.name)),t.a.createElement(u.a,{item:!0,xs:1},t.a.createElement(d.a,{variant:"h5"},e.level)),t.a.createElement(u.a,{item:!0,xs:8},t.a.createElement(y,{xp:(a=e.xp,n=99,99===n?(a>13034431&&(a=13034431),a/130344.31):200===n?a/2e6:void 0),color:e.color})),t.a.createElement(u.a,{item:!0,xs:1},t.a.createElement(f.b,{style:{textDecoration:"none"},to:{pathname:"/skillinfo",skillProps:{skill:e.skill}}},t.a.createElement(k.a,null,"more")))))}function O(e){var a=b(e);return t.a.createElement(v.a,{className:a.level,square:!0},t.a.createElement(u.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},t.a.createElement(u.a,{item:!0,xs:2},t.a.createElement(d.a,{variant:"h5"},e.rsn)),t.a.createElement(u.a,{item:!0,xs:1},t.a.createElement(d.a,{variant:"h5"},e.level)),t.a.createElement(u.a,{item:!0,xs:9},t.a.createElement(y,{xp:e.formattedXp,color:e.color}))),t.a.createElement(u.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},t.a.createElement(u.a,{item:!0,xs:!0},t.a.createElement(d.a,null,"Maxed stats: ",e.achievments.amountMaxed.all),t.a.createElement(d.a,null,"Maxed combat skills: ",e.achievments.amountMaxed.combat),t.a.createElement(d.a,null,"Maxed gather skills: ",e.achievments.amountMaxed.gathering),t.a.createElement(d.a,null,"Maxed artisan skills: ",e.achievments.amountMaxed.artisan),t.a.createElement(d.a,null,"Maxed support skills: ",e.achievments.amountMaxed.support),t.a.createElement(d.a,null,"All stats are ",e.achievments.minSkill,"+"),t.a.createElement(d.a,null,"This player can access ",e.achievments.minTotallvl," total worlds"),t.a.createElement(d.a,null,"This player has achieved a minimum of ",e.achievments.minTotalxp," xp"))))}var M=function(e){Object(s.a)(n,e);var a=Object(p.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.playerData.overall,a=this.props.playerData.achievments,n=this.props.playerData.skills,r=this.props.playerData.name;return n.sort((function(e,a){return parseFloat(a.xp)-parseFloat(e.xp)})),t.a.createElement(l.Fragment,null,t.a.createElement(O,{rsn:r,key:e.id,name:e.name,level:e.level,xp:e.xp,rank:e.rank,color:e.color,formattedXp:E(n),achievments:a}),n.map((function(e){return t.a.createElement(j,{key:e.id,name:e.name,level:e.level,xp:e.xp,rank:e.rank,skill:e,color:e.color})})))}}]),n}(t.a.Component),P=n(42),w=n(118),T=n(119),S=Object(x.a)((function(e){return{colorPrimary:{backgroundColor:"#5d616b"},title:Object(P.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"})}}));function C(){var e=S();return t.a.createElement(w.a,{position:"static",classes:{colorPrimary:e.colorPrimary}},t.a.createElement(T.a,null,t.a.createElement(d.a,{className:e.title,variant:"h6",noWrap:!0},"Max calculator")))}var D=Object(x.a)((function(e){return{root:{marginTop:50,height:100},colorPrimary:{backgroundColor:"#5d616b"},title:Object(P.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"})}}));function N(){var e=D();return t.a.createElement(w.a,{position:"static",classes:{colorPrimary:e.colorPrimary,root:e.root}},t.a.createElement(T.a,null,t.a.createElement(d.a,{className:e.title,variant:"h6",noWrap:!0},"Made by lander")))}var F=n(36),I=n(121),q=n(120),B={name:"N/A",achievments:{minSkill:0,minTotalxp:0,minTotallvl:0,amountMaxed:{all:0,combat:0,artisan:0,support:0,gathering:0}},overall:{id:1,name:"overall",level:0,xp:0,rank:null,color:"black"},skills:[{id:2,name:"attack",level:1,xp:0,rank:null,color:""},{id:3,name:"defence",level:1,xp:0,rank:null,color:""},{id:4,name:"strength",level:1,xp:0,rank:null,color:""},{id:5,name:"hitpoints",level:10,xp:1154,rank:null,color:""},{id:6,name:"ranged",level:1,xp:0,rank:null,color:""},{id:7,name:"prayer",level:1,xp:0,rank:null,color:""},{id:8,name:"magic",level:1,xp:0,rank:null,color:""},{id:9,name:"cooking",level:1,xp:0,rank:null,color:""},{id:10,name:"woodcutting",level:1,xp:0,rank:null,color:""},{id:11,name:"fletching",level:1,xp:0,rank:null,color:""},{id:12,name:"fishing",level:1,xp:0,rank:null,color:""},{id:13,name:"firemaking",level:1,xp:0,rank:null,color:""},{id:14,name:"crafting",level:1,xp:0,rank:null,color:""},{id:15,name:"smithing",level:1,xp:0,rank:null,color:""},{id:16,name:"mining",level:1,xp:0,rank:null,color:""},{id:17,name:"herblore",level:1,xp:0,rank:null,color:""},{id:18,name:"agility",level:1,xp:0,rank:null,color:""},{id:19,name:"thieving",level:1,xp:0,rank:null,color:""},{id:20,name:"slayer",level:1,xp:0,rank:null,color:""},{id:21,name:"farming",level:1,xp:0,rank:null,color:""},{id:22,name:"runecraft",level:1,xp:0,rank:null,color:""},{id:23,name:"hunter",level:1,xp:0,rank:null,color:""},{id:24,name:"construction",level:1,xp:0,rank:null,color:""}]},L=function(e){Object(s.a)(n,e);var a=Object(p.a)(n);function n(e){var l;return Object(c.a)(this,n),(l=a.call(this,e)).state={rsn:"",pressed:!1},l.handleSubmit=l.handleSubmit.bind(Object(F.a)(l)),l.handlechange=l.handlechange.bind(Object(F.a)(l)),l}return Object(m.a)(n,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.setState({pressed:!0}),this.props.setPlayerdata(B),fetch("http://localhost:8080/stats/".concat(this.state.rsn)).then((function(e){return a.setState({pressed:!1}),e.ok?e.json():Promise.reject("This player does not exist or is not on the highscores")})).then((function(e){var n=e.main.skills,l=[],t=[500,750,1250,1500,1750,2e3,2200,2277],r=[1e6,1e7,5e7,1e8,15e7,2e8],i={combat:["attack","strength","defence","magic","ranged","prayer","hitpoints"],gathering:["mining","fishing","woodcutting","hunter","farming"],artisan:["cooking","smithing","fletching","firemaking","herblore","crafting","runecraft","construction"],support:["agility","thieving","slayer"]},o={all:0,combat:0,artisan:0,support:0,gathering:0};for(var c in n){for(var m in i)i[m].includes(c)&&99===n[c].level&&(o[m]++,o.all++);l.push({level:n[c].level,name:c})}for(var s=20;s<100;s+=10)if(24===l.filter((function(e){return e.level>=s})).length)var p=s;for(s=0;s<t.length;s++)if(n.overall.level>t[s])var u=t[s];for(s=0;s<r.length;s++)if(n.overall.xp>r[s])var v=r[s];a.props.setPlayerdata({name:a.state.rsn,achievments:{minSkill:p,minTotalxp:v,minTotallvl:u,amountMaxed:o},overall:{id:1,name:"overall",level:n.overall.level,xp:n.overall.xp,rank:n.overall.rank,color:"black"},skills:[{id:2,name:"attack",level:n.attack.level,xp:n.attack.xp,rank:n.attack.rank,color:"#9b2007"},{id:3,name:"defence",level:n.defence.level,xp:n.defence.xp,rank:n.defence.rank,color:"#6277be"},{id:4,name:"strength",level:n.strength.level,xp:n.strength.xp,rank:n.strength.rank,color:"#04955a"},{id:5,name:"hitpoints",level:n.hitpoints.level,xp:n.hitpoints.xp,rank:n.hitpoints.rank,color:"#837e7e"},{id:6,name:"ranged",level:n.ranged.level,xp:n.ranged.xp,rank:n.ranged.rank,color:"#6d9017"},{id:7,name:"prayer",level:n.prayer.level,xp:n.prayer.xp,rank:n.prayer.rank,color:"#9f9323"},{id:8,name:"magic",level:n.magic.level,xp:n.magic.xp,rank:n.magic.rank,color:"#3250c1"},{id:9,name:"cooking",level:n.cooking.level,xp:n.cooking.xp,rank:n.cooking.rank,color:"#702386"},{id:10,name:"woodcutting",level:n.woodcutting.level,xp:n.woodcutting.xp,rank:n.woodcutting.rank,color:"#348c25"},{id:11,name:"fletching",level:n.fletching.level,xp:n.fletching.xp,rank:n.fletching.rank,color:"#038d7d"},{id:12,name:"fishing",level:n.fishing.level,xp:n.fishing.xp,rank:n.fishing.rank,color:"#6a84a4"},{id:13,name:"firemaking",level:n.firemaking.level,xp:n.firemaking.xp,rank:n.firemaking.rank,color:"#bd7819"},{id:14,name:"crafting",level:n.crafting.level,xp:n.crafting.xp,rank:n.crafting.rank,color:"#976e4d"},{id:15,name:"smithing",level:n.smithing.level,xp:n.smithing.xp,rank:n.smithing.rank,color:"#6c6b52"},{id:16,name:"mining",level:n.mining.level,xp:n.mining.xp,rank:n.mining.rank,color:"#5d8fa7"},{id:17,name:"herblore",level:n.herblore.level,xp:n.herblore.xp,rank:n.herblore.rank,color:"#078509"},{id:18,name:"agility",level:n.agility.level,xp:n.agility.xp,rank:n.agility.rank,color:"#3a3c89"},{id:19,name:"thieving",level:n.thieving.level,xp:n.thieving.xp,rank:n.thieving.rank,color:"#6c3457"},{id:20,name:"slayer",level:n.slayer.level,xp:n.slayer.xp,rank:n.slayer.rank,color:"#646464"},{id:21,name:"farming",level:n.farming.level,xp:n.farming.xp,rank:n.farming.rank,color:"#65983f"},{id:22,name:"runecraft",level:n.runecraft.level,xp:n.runecraft.xp,rank:n.runecraft.rank,color:"#a4881b"},{id:23,name:"hunter",level:n.hunter.level,xp:n.hunter.xp,rank:n.hunter.rank,color:"#5c5941"},{id:24,name:"construction",level:n.construction.level,xp:n.construction.xp,rank:n.construction.rank,color:"#82745f"}]})})).catch((function(e){return console.log("error is",e)}))}},{key:"handlechange",value:function(e){this.setState({rsn:e.target.value})}},{key:"render",value:function(){return t.a.createElement("form",{onSubmit:this.handleSubmit},t.a.createElement(u.a,{container:!0},t.a.createElement(u.a,{item:!0},t.a.createElement(I.a,{id:"rsnInput",label:"rsn",variant:"outlined",value:this.state.rsn,onChange:this.handlechange})),t.a.createElement(u.a,{item:!0},this.state.pressed?t.a.createElement(q.a,{color:"inherit",size:50}):t.a.createElement(l.Fragment,null))),t.a.createElement(u.a,{container:!0,style:{paddingTop:"15px"}},t.a.createElement(k.a,{variant:"contained",color:"default",type:"submit"},"Lookup")))}}]),n}(t.a.Component),W=function(e){Object(s.a)(n,e);var a=Object(p.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props.location.skillProps)}},{key:"render",value:function(){var e=this.props.location.skillProps.skill;return t.a.createElement(l.Fragment,null,t.a.createElement(d.a,null,e.name),t.a.createElement(d.a,null,e.level),t.a.createElement(f.b,{to:{pathname:"/"}},"Back"))}}]),n}(t.a.Component),A=n(10),G=Object(x.a)((function(){return{paper:{padding:10,marginTop:20,marginLeft:150,marginRight:150,backgroundColor:"#dedcdc"},paper2:{paddingTop:15,paddingBottom:15,marginTop:20,marginLeft:150,marginRight:150,backgroundColor:"#ffffff"}}}));var J=function(){var e=Object(l.useState)(B),a=Object(o.a)(e,2),n=a[0],r=a[1],i=G();return t.a.createElement(l.Fragment,null,t.a.createElement(C,null),t.a.createElement(v.a,{className:i.paper2,square:!0,elevation:0},t.a.createElement(L,{setPlayerdata:r,playerData:n})),t.a.createElement(v.a,{className:i.paper,square:!0},t.a.createElement(f.a,null,t.a.createElement(A.c,null,t.a.createElement(A.a,{exact:!0,path:"/osrshighscore"},t.a.createElement(M,{playerData:n})),t.a.createElement(A.a,{exact:!0,path:"/skillinfo",component:W})))),t.a.createElement(N,null))};i.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(J,null)),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.598ae007.chunk.js.map