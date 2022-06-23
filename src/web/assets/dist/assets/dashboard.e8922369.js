import{V as I,a as F,b as T,c as H,s as M,p as x,_ as D}from"./purify.es.2e87fe3f.js";import{c as R,g as A,n as p}from"./vueComponentNormalizer.9fe6193d.js";import{A as U,a as V}from"./vue-apexcharts.e34f1946.js";var $={exports:{}};(function(t,n){(function(e,r){t.exports=r()})(R,function(){return function(e){function r(a){if(h[a])return h[a].exports;var o=h[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var h={};return r.m=e,r.c=h,r.d=function(a,o,f){r.o(a,o)||Object.defineProperty(a,o,{configurable:!1,enumerable:!0,get:f})},r.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(o,"a",o),o},r.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},r.p="",r(r.s=0)}([function(e,r,h){Object.defineProperty(r,"__esModule",{value:!0});var a=h(1);h.d(r,"Confetti",function(){return a.a}),r.default={install:function(o,f){this.installed||(this.installed=!0,o.prototype.$confetti=new a.a(f))}}},function(e,r,h){function a(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")}var o=h(2),f=function(){function i(s,c){for(var l=0;l<c.length;l++){var u=c[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}return function(s,c,l){return c&&i(s.prototype,c),l&&i(s,l),s}}(),d=function(){function i(){a(this,i),this.initialize(),this.onResizeCallback=this.updateDimensions.bind(this)}return f(i,[{key:"initialize",value:function(){this.canvas=null,this.ctx=null,this.W=0,this.H=0,this.particles={},this.droppedCount=0,this.particlesPerFrame=1.5,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.maxParticlesPerFrame=2,this.animationId=null}},{key:"createParticles",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.particles=new o.a({ctx:this.ctx,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0,shape:s.shape||"circle",colors:{opts:s.colors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],idx:0,step:10,get color(){return this.opts[(this.idx++/this.step|0)%this.opts.length]}}})}},{key:"createContext",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.style.display="block",this.canvas.style.position="fixed",this.canvas.style.pointerEvents="none",this.canvas.style.top=0,this.canvas.style.width="100vw",this.canvas.style.height="100vh",this.canvas.id="confetti-canvas",document.querySelector("body").appendChild(this.canvas)}},{key:"start",value:function(s){this.ctx||this.createContext(),this.animationId&&cancelAnimationFrame(this.animationId),this.createParticles(s),this.updateDimensions(),this.particlesPerFrame=this.maxParticlesPerFrame,this.animationId=requestAnimationFrame(this.mainLoop.bind(this)),window.addEventListener("resize",this.onResizeCallback)}},{key:"stop",value:function(){this.particlesPerFrame=0,window.removeEventListener("resize",this.onResizeCallback)}},{key:"remove",value:function(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&document.body.removeChild(this.canvas),this.initialize()}},{key:"updateDimensions",value:function(){this.W===window.innerWidth&&this.H===window.innerHeight||(this.W=this.particles.opts.W=this.canvas.width=window.innerWidth,this.H=this.particles.opts.H=this.canvas.height=window.innerHeight)}},{key:"mainLoop",value:function(s){for(this.updateDimensions(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.W,this.H),this.windSpeed=Math.sin(s/8e3)*this.windSpeedMax,this.wind=this.particles.opts.wind+=this.windChange;this.droppedCount<this.particlesPerFrame;)this.droppedCount+=1,this.particles.add();this.droppedCount-=this.particlesPerFrame,this.particles.update(),this.particles.draw(),this.particles.items.length&&(this.animationId=requestAnimationFrame(this.mainLoop.bind(this)))}}]),i}();r.a=d},function(e,r,h){function a(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")}var o=h(3),f=function(){function i(s,c){for(var l=0;l<c.length;l++){var u=c[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}return function(s,c,l){return c&&i(s.prototype,c),l&&i(s,l),s}}(),d=function(){function i(s){a(this,i),this.items=[],this.pool=[],this.opts=s}return f(i,[{key:"update",value:function(){for(var s=0;s<this.items.length;s++)this.items[s].update()===!0&&this.pool.push(this.items.splice(s--,1)[0])}},{key:"draw",value:function(){for(var s=0;s<this.items.length;s++)this.items[s].draw()}},{key:"add",value:function(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.opts)):this.items.push(new o.a().setup(this.opts))}}]),i}();r.a=d},function(e,r,h){function a(d,i){if(!(d instanceof i))throw new TypeError("Cannot call a class as a function")}var o=function(){function d(i,s){for(var c=0;c<s.length;c++){var l=s[c];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(i,l.key,l)}}return function(i,s,c){return s&&d(i.prototype,s),c&&d(i,c),i}}(),f=function(){function d(){a(this,d)}return o(d,[{key:"setup",value:function(i){var s=i.ctx,c=i.W,l=i.H,u=i.colors,v=i.wind,m=i.windPosCoef,g=i.windSpeedMax,S=i.count,k=i.shape;return this.ctx=s,this.W=c,this.H=l,this.wind=v,this.shape=k,this.windPosCoef=m,this.windSpeedMax=g,this.x=this.rand(-35,c+35),this.y=this.rand(-30,-35),this.d=this.rand(150)+10,this.r=this.rand(10,30),this.color=u.color,this.tilt=this.randI(10),this.tiltAngleIncremental=(this.rand(.08)+.04)*(this.rand()<.5?-1:1),this.tiltAngle=0,this.angle=this.rand(2*Math.PI),this.count=S++,this}},{key:"randI",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i+(i=0);return Math.random()*(s-i)+i|0}},{key:"rand",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i+(i=0);return Math.random()*(s-i)+i}},{key:"update",value:function(){return this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+3+this.r/2)/2,this.x+=Math.sin(this.angle),this.x+=Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3),this.y>this.H}},{key:"drawCircle",value:function(){this.ctx.arc(0,0,this.r/2,0,2*Math.PI,!1),this.ctx.fill()}},{key:"drawRect",value:function(){this.ctx.fillRect(0,0,this.r,this.r/2)}},{key:"drawHeart",value:function(){var i=this,s=function(c,l,u,v,m,g){i.ctx.bezierCurveTo(c/i.r*2,l/i.r*2,u/i.r*2,v/i.r*2,m/i.r*2,g/i.r*2)};this.ctx.moveTo(37.5/this.r,20/this.r),s(75,37,70,25,50,25),s(20,25,20,62.5,20,62.5),s(20,80,40,102,75,120),s(110,102,130,80,130,62.5),s(130,62.5,130,25,100,25),s(85,25,75,37,75,40),this.ctx.fill()}},{key:"draw",value:function(){this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y),this.shape==="circle"?this.drawCircle():this.shape==="rect"?this.drawRect():this.shape==="heart"&&this.drawHeart()}}]),d}();r.a=f}])})})($);var L=A($.exports),N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main")},O=[];const P=window.Vue;P.use(L);const E=P.extend({mounted:function(){this.$confetti.start({shape:"rect",colors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout(()=>{this.$confetti.stop()},5e3)},methods:{}}),y={};var z=p(E,N,O,!1,j,null,null,null);function j(t){for(let n in y)this[n]=y[n]}var B=function(){return z.exports}(),W=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:t.chartOptions,series:t.series}})},q=[];const G=t=>t.map(function(n){return Math.max.apply(null,n)}),X=t=>({baseURL:t,headers:{"X-Requested-With":"XMLHttpRequest"}}),K=(t,n,e,r)=>{t.get(n,{params:e}).then(h=>{r&&r(h.data)}).catch(h=>{console.error(h)})},J={components:{apexcharts:U},props:{title:{type:String,default:""},subTitle:{type:String,default:""},range:{type:String,default:""},siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:3},apiUrl:{type:String,default:""}},data:function(){return{chartOptions:{chart:{id:"vuechart-dashboard",type:"area",height:160,sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},yaxis:{min:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}]}},created(){this.getSeriesData()},mounted(){this.refreshIntervalSecs&&setInterval(()=>{this.getSeriesData()},this.refreshIntervalSecs*1e3)},methods:{getSeriesData:async function(){const t=V.create(X(this.apiUrl));await K(t,"",{range:this.range,siteId:this.siteId},n=>{if(n[0]!==void 0){const e=Math.round(G([n[0].data])[0]+1.5);this.chartOptions={...this.chartOptions,yaxis:{min:0,max:e,labels:{show:!1,minHeight:"20px"}},xaxis:{categories:n[0].labels,type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},labels:n[0].labels},this.series=n}})}}},w={};var Q=p(J,W,q,!1,Y,null,null,null);function Y(t){for(let n in w)this[n]=w[n]}var Z=function(){return Q.exports}(),tt=[{name:"__checkbox",titleClass:"center aligned",dataClass:"center aligned"},{name:"__component:file-not-found-url",sortField:"redirectSrcUrl",title:"404 File Not Found URL",titleClass:"center",dataClass:"center"},{name:"referrerUrl",sortField:"referrerUrl",title:"Last Referrer URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"remoteIp",sortField:"remoteIp",title:"Remote IP",titleClass:"center",dataClass:"center",callback:"ipFormatter"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"handledByRetour",sortField:"handledByRetour",title:"Handled",titleClass:"text-center",dataClass:"text-center",callback:"boolFormatter"},{name:"addLink",sortField:"addLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"addUrlFormatter"}],et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a",{staticClass:"go",attrs:{href:t.linkHref,title:t.linkTitle}},[t._v(t._s(t.rowData.redirectSrcUrl))])])},it=[];const st={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number,default:0}},computed:{linkHref:function(){let t=this.rowData.redirectSrcUrl;return typeof t=="undefined"||t===""?"":(!new RegExp("^(?:[a-z]+:)?//","i").test(t)&&!t.includes("$")&&(t=Craft.getSiteUrl(t)),t)},linkTitle:function(){let t="";return t+="User Agent: "+this.rowData.userAgent+`

`,t+="Message: "+this.rowData.exceptionMessage+`

`,t+="File Path: "+this.rowData.exceptionFilePath+`

`,t+="Line No.: "+this.rowData.exceptionFileLine,t}}},_={};var at=p(st,et,it,!1,nt,null,null,null);function nt(t){for(let n in _)this[n]=_[n]}var rt=function(){return at.exports}(),ot=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.numSelected!==0,expression:"numSelected !== 0"}]},[e("form",{attrs:{"accept-charset":"UTF-8",method:"post"}},[e("input",{attrs:{name:t.csrfTokenName,type:"hidden"},domProps:{value:t.csrfTokenValue}}),t._l(t.selectedIds,function(r){return e("input",{key:r,attrs:{name:"statisticIds[]",type:"hidden"},domProps:{value:r}})}),e("label",{staticClass:"text-gray-600"},[t._v(t._s(t.numSelected)+" statistic"),t.numSelected!==1?e("span",[t._v("s")]):t._e(),t._v(":")]),t._m(0)],2)]),e("vuetable-filter-bar",{directives:[{name:"show",rawName:"v-show",value:t.numSelected===0,expression:"numSelected === 0"}],attrs:{"initial-filter-text":t.filterText}}),e("div",{staticClass:"vuetable-pagination clearafter"},[e("vuetable-pagination-info",{ref:"paginationInfoTop"}),e("div",{staticClass:"floated left pl-3 pt-3 text-gray-600"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.retourHandled,expression:"retourHandled"}],staticClass:"fieldtoggle",attrs:{"data-target-prefix":"retour-handled-",name:"retourHandled"},on:{change:function(r){var h=Array.prototype.filter.call(r.target.options,function(a){return a.selected}).map(function(a){var o="_value"in a?a._value:a.value;return o});t.retourHandled=r.target.multiple?h:h[0]}}},[e("option",{attrs:{selected:"",value:"all"}},[t._v(" All ")]),e("option",{attrs:{value:"handled"}},[t._v(" Handled ")]),e("option",{attrs:{value:"nothandled"}},[t._v(" Not Handled ")])])])]),e("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}}),e("div",{staticClass:"floated left vuetable-pagination-info py-3"},[e("div",{staticClass:"inline pl-3 text-gray-600"},[t._v(" Per-page: ")]),e("div",{staticClass:"inline pl-3 text-gray-600"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"fieldtoggle",attrs:{"data-target-prefix":"per-page-",name:"perPage"},on:{change:function(r){var h=Array.prototype.filter.call(r.target.options,function(a){return a.selected}).map(function(a){var o="_value"in a?a._value:a.value;return o});t.perPage=r.target.multiple?h:h[0]}}},[e("option",{attrs:{selected:"",value:"20"}},[t._v(" 20 ")]),e("option",{attrs:{value:"50"}},[t._v(" 50 ")]),e("option",{attrs:{value:"100"}},[t._v(" 100 ")]),e("option",{attrs:{value:"500"}},[t._v(" 500 ")])])])])])],1),e("vuetable",{ref:"vuetable",attrs:{"api-url":t.apiUrl,"append-params":t.moreParams,css:t.css,fields:t.fields,"per-page":t.perPage,"sort-order":t.sortOrder},on:{"vuetable:pagination-data":t.onPaginationData}}),e("div",{staticClass:"vuetable-pagination clearafter"},[e("vuetable-pagination-info",{ref:"paginationInfo"}),e("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)},lt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btngroup inline"},[e("div",{staticClass:"btn menubtn",attrs:{"data-icon":"settings"}}),e("div",{staticClass:"menu",attrs:{"data-align":"right"}},[e("ul",[e("li",[e("a",{staticClass:"formsubmit",attrs:{"data-action":"retour/statistics/delete-statistics"}},[t._v("Delete")])])])])])}];const ct=window.Vue;ct.component("FileNotFoundUrl",rt);const ht={components:{vuetable:I,"vuetable-pagination":F,"vuetable-pagination-info":T,"vuetable-filter-bar":H},mixins:[M],props:{siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:3},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId},css:{tableClass:"data fullwidth retour-dashboard",ascendingIcon:"menubtn retour-menubtn-asc",descendingIcon:"menubtn retour-menubtn-desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:tt,numSelected:0,perPage:20,selectedIds:[],retourHandled:"all",filterText:""}},computed:{csrfTokenName:function(){return window.Craft.csrfTokenName},csrfTokenValue:function(){return window.Craft.csrfTokenValue}},watch:{retourHandled:function(){this.moreParams={siteId:this.siteId},this.moreParams={siteId:this.siteId,filter:this.filterText,handled:this.retourHandled},this.$events.fire("refresh-table",this.$refs.vuetable)},perPage:function(){this.$events.fire("refresh-table",this.$refs.vuetable)}},mounted(){this.$events.$on("filter-set",t=>this.onFilterSet(t)),this.$events.$on("filter-reset",()=>this.onFilterReset()),this.$refs.vuetable.$on("vuetable:checkbox-toggled",(t,n)=>this.onCheckboxToggled(t,n)),this.$refs.vuetable.$on("vuetable:checkbox-toggled-all",t=>this.onCheckboxToggled(t,null)),this.refreshIntervalSecs&&setInterval(()=>{typeof this.$refs.pagination!="undefined"&&this.$refs.pagination.isOnFirstPage&&typeof this.$refs.vuetable!="undefined"&&this.$refs.vuetable.refresh()},this.refreshIntervalSecs*1e3)},methods:{getSaveStateConfig(){return{cacheKey:"retour-dashboard-state-"+Craft.username+Craft.siteId,ignoreProperties:["numSelected","selectedIds","moreParams"]}},onFilterSet(t){this.filterText=t,this.moreParams={filter:this.filterText,handled:this.retourHandled,siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.filterText="",this.moreParams={filter:this.filterText,handled:this.retourHandled,siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage(t){this.$refs.vuetable.changePage(t)},onCheckboxToggled(){this.numSelected=0,this.selectedIds=[],this.$refs.vuetable!==void 0&&this.$refs.vuetable.selectedTo!==void 0&&(this.numSelected=this.$refs.vuetable.selectedTo.length,this.selectedIds=this.$refs.vuetable.selectedTo)},urlFormatter(t){return t===""?"":(t=x.sanitize(t),`
                <a class="go" href="${t}" title="${t}" target="_blank" rel="noopener">${t}</a>
                `)},ipFormatter(t){return t===""?"":(t=x.sanitize(t),`
                <a class="go" href="https://whatismyipaddress.com/ip/${t}" title="Lookup ${t}" target="_blank" rel="noopener">${t}</a>
                `)},boolFormatter(t){return t==1?`
                <span style="color: green;">&#x2714;</span>
                `:`
                <span style="color: red;">&#x2716;</span>
                `},addUrlFormatter(t){return t===""?"":`
                <a class="add icon" href="${t}" title="Add"></a>
                `}}},C={};var ut=p(ht,ot,lt,!1,dt,null,null,null);function dt(t){for(let n in C)this[n]=C[n]}var ft=function(){return ut.exports}();const b=window.Vue;b.use(D);new b({el:"#cp-nav-content",components:{ConfettiParty:B,DashboardChart:Z,DashboardTable:ft},data:{},mounted(){this.$events.$on("refresh-table",t=>this.onTableRefresh(t))},methods:{onTableRefresh(t){b.nextTick(()=>t.refresh())}}});
//# sourceMappingURL=dashboard.e8922369.js.map
