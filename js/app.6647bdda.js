(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("4160"),a("a15b"),a("d81d"),a("b64b"),a("d3b7"),a("159b"),a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("db4d"),a("2e94");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:e.$root.dark}},[a("v-toolbar",{attrs:{app:"","clipped-left":"",color:"primary"}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){t.stopPropagation(),e.$root.drawer=!e.$root.drawer}}}),a("v-toolbar-title",{staticClass:"white--text"},[e._v(e._s(e.$root.title))])],1),a("v-navigation-drawer",{ref:"drawer",staticStyle:{overflow:"hidden"},attrs:{app:"",clipped:"","mobile-break-point":960},model:{value:e.$root.drawer,callback:function(t){e.$set(e.$root,"drawer",t)},expression:"$root.drawer"}},[a("v-toolbar",{staticClass:"hidden-md-and-up",attrs:{flat:""}},[a("v-toolbar-title",[e._v(e._s(e.$root.title))])],1),a("v-list",[a("v-list-tile",{on:{click:function(t){return e.$router.push({path:"/"})}}},[a("v-list-tile-action",[a("v-icon",[e._v("home")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Home")])],1)],1),a("v-list-group",{attrs:{"active-class":"","prepend-icon":"language","no-action":""},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[e._v("Domains")])],1)],1)]},proxy:!0}]),model:{value:e.$root.domains_expand,callback:function(t){e.$set(e.$root,"domains_expand",t)},expression:"$root.domains_expand"}},e._l(e.$root.domains,(function(t){return a("v-list-tile",{key:t.domain,attrs:{to:t.prevent?"":"/domain/"+t.domain,value:e.$route.params.domain==t.domain}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v(e._s(t.domain.toUpperCase()))])],1),t.icon?a("v-list-tile-action",[a("v-icon",{attrs:{title:t.info}},[e._v(e._s(t.icon))])],1):e._e()],1)})),1)],1)],1),a("v-content",[a("router-view")],1)],1)},r=[],i=a("2877"),l=a("6544"),s=a.n(l),c=a("7496"),u=a("549c"),d=a("132d"),p=a("8860"),v=a("56b0"),m=a("ba95"),f=a("40fe"),h=a("5d23"),y=a("f774"),b=a("71d9"),x=a("706c"),g=a("2a7f"),_={},w=Object(i["a"])(_,o,r,!1,null,null,null),k=w.exports;s()(w,{VApp:c["a"],VContent:u["a"],VIcon:d["a"],VList:p["a"],VListGroup:v["a"],VListTile:m["a"],VListTileAction:f["a"],VListTileContent:h["a"],VListTileTitle:h["b"],VNavigationDrawer:y["a"],VToolbar:b["a"],VToolbarSideIcon:x["a"],VToolbarTitle:g["a"]});var S=a("8c4f"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"pa-2"},[a("v-layout",{attrs:{wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12class:"pa-2"}},[a("v-alert",{staticClass:"mb-2",attrs:{value:!0,type:"info",outline:""}},[e._v(" API Proxy is a server endpoint that forwards your request to the Namecheap API endpoint. "),a("br"),e._v(" It's intended to get rid of IP restrictions. Remember to add ClientIP as the POST parameter when you're writing your own proxy! ")]),a("v-alert",{staticClass:"mb-2",attrs:{value:!0,type:"warning",outline:""}},[e._v(' It\'s not OK to fill in "https://api.namecheap.com/xml.response" directly, because the client won\'t attach "ClientIP" parameter and therefore will cause an error. ')])],1),a("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-4"},[a("v-toolbar",{attrs:{color:"primary"}},[a("v-toolbar-title",[e._v("API Configuration")])],1),a("v-card-text",[a("v-text-field",{attrs:{placeholder:"Proxy","prepend-icon":"link"},model:{value:e.api.url,callback:function(t){e.$set(e.api,"url",t)},expression:"api.url"}}),a("v-text-field",{attrs:{placeholder:"API User","prepend-icon":"account_circle"},model:{value:e.api.user,callback:function(t){e.$set(e.api,"user",t)},expression:"api.user"}}),a("v-text-field",{attrs:{placeholder:"API Key","prepend-icon":"lock",type:"password"},model:{value:e.api.key,callback:function(t){e.$set(e.api,"key",t)},expression:"api.key"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:""},on:{click:function(t){return e.saveApi()}}},[e._v(" Save ")])],1)],1)],1)],1)],1)},A=[],C={data:function(){return{api:{url:"",key:"",user:"",userName:""}}},mounted:function(){localStorage.api&&(this.api=JSON.parse(localStorage.api))},methods:{saveApi:function(){this.api.userName=this.api.user,localStorage.api=JSON.stringify(this.api)}}},V=C,P=a("0798"),$=a("8336"),N=a("b0af"),E=a("99d9"),O=a("a523"),I=a("0e8f"),L=a("a722"),D=a("9910"),M=a("2677"),R=Object(i["a"])(V,T,A,!1,null,null,null),j=R.exports;s()(R,{VAlert:P["a"],VBtn:$["a"],VCard:N["a"],VCardActions:E["a"],VCardText:E["b"],VContainer:O["a"],VFlex:I["a"],VLayout:L["a"],VSpacer:D["a"],VTextField:M["a"],VToolbar:b["a"],VToolbarTitle:g["a"]});var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"pa-3"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"mb-2 mx-2",attrs:{xs12:""}},[a("h2",[e._v("DNS Records")])]),a("v-flex",{attrs:{xs12:""}},[a("v-data-table",{staticClass:"elevation-2",attrs:{headers:e.headers,items:e.records,loading:e.loading,"no-data-text":null==e.error?"Loading...":e.error,"rows-per-page-items":[-1],"disable-initial-sort":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[a("v-edit-dialog",{attrs:{"return-value":t.item.type,lazy:""},scopedSlots:e._u([{key:"input",fn:function(){return[a("v-select",{attrs:{items:e.domainTypes,dense:""},on:{change:function(t){e.changed=!0}},model:{value:t.item.type,callback:function(a){e.$set(t.item,"type",a)},expression:"s.item.type"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.type)+" ")])],1),a("td",[a("v-edit-dialog",{attrs:{"return-value":t.item.name,lazy:""},on:{open:function(e){"Click Me"==t.item.host&&(t.item.host="")}},scopedSlots:e._u([{key:"input",fn:function(){return[a("v-text-field",{attrs:{label:"Host","single-line":""},on:{change:function(t){e.changed=!0}},model:{value:t.item.host,callback:function(a){e.$set(t.item,"host",a)},expression:"s.item.host"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.host)+" ")])],1),a("td",[a("v-edit-dialog",{attrs:{"return-value":t.item.value,lazy:""},on:{open:function(e){"Click Me"==t.item.value&&(t.item.value="")}},scopedSlots:e._u([{key:"input",fn:function(){return[a("v-text-field",{attrs:{label:"Value","single-line":""},on:{change:function(t){e.changed=!0}},model:{value:t.item.value,callback:function(a){e.$set(t.item,"value",a)},expression:"s.item.value"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.value)+" ")])],1),a("td",[a("v-edit-dialog",{attrs:{"return-value":t.item.ttl,lazy:""},scopedSlots:e._u([{key:"input",fn:function(){return[a("v-select",{attrs:{items:e.ttlPresets,dense:""},on:{change:function(t){e.changed=!0}},model:{value:t.item.ttl,callback:function(a){e.$set(t.item,"ttl",a)},expression:"s.item.ttl"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.ttl)+" ")])],1),a("td",[a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(a){return e.deleteRecord(t.item)}}},[a("v-icon",[e._v("delete")])],1)],1)]}},{key:"actions-append",fn:function(){return[a("v-btn",{attrs:{flat:"",color:"white"},on:{click:function(t){return e.newRecord()}}},[e._v("NEW")])]},proxy:!0}])})],1),a("v-flex",{staticClass:"ma-2",attrs:{xs12:""}},[a("h2",[e._v("Mail Settings")])]),a("v-flex",{attrs:{xs12:""}},[a("v-select",{staticClass:"mb-2",attrs:{items:e.emailTypes,"item-value":"key","item-text":"name",label:"Mail DNS Mode","hide-details":"",solo:""},on:{change:function(t){e.changed=!0}},model:{value:e.emailType,callback:function(t){e.emailType=t},expression:"emailType"}})],1),a("v-flex",{staticStyle:{"text-align":"end"},attrs:{xs12:""}},[a("v-btn",{staticClass:"mr-0 mt-2",attrs:{disabled:!e.changed},on:{click:function(t){return e.saveRecords()}}},[e._v("SAVE")])],1)],1)],1)},X=[],H=(a("c975"),a("a434"),a("ac1f"),a("1276"),{created:function(){this.reload()},data:function(){return{headers:[{text:"Type",value:"type"},{text:"Host",value:"host"},{text:"Value",value:"value"},{text:"TTL",value:"ttl"},{text:"Action",sortable:!1}],domainTypes:["A","AAAA","ALIAS","CAA","CNAME","MX","MXE","NS","TXT","URL","URL301","FRAME"],ttlPresets:["60","300","1200","1800","3600"],emailTypes:[{key:"NONE",name:"No Email Service"},{key:"MX",name:"Custom MX"},{key:"MXE",name:"MXE Record"},{key:"FWD",name:"Email Forwarding"},{key:"OX",name:"Private Email"},{key:"GMAIL",name:"Gmail"}],domain:"",sld:"",tld:"",records:[],emailType:"",changed:!1,loading:!1,error:null}},watch:{$route:"reload"},methods:{reload:function(){var e=this;this.domain=this.$route.params.domain,this.$root.title="Domain: "+this.domain.toUpperCase();var t=this.domain.split(".");this.sld=t.shift(),this.tld=t.join("."),this.records=[],this.changed=!1,this.loading=!0,this.$root.fetchAPI("namecheap.domains.dns.getHosts",{SLD:this.sld,TLD:this.tld}).then((function(t){t=t.querySelector("DomainDNSGetHostsResult"),t.attributes.Domain.value==e.sld+"."+e.tld&&(e.emailType=t.attributes.EmailType.value,t.querySelectorAll("host").forEach((function(t){t=t.attributes,t={id:t.HostId.value,ttl:t.TTL.value,type:t.Type.value,host:t.Name.value,value:t.Address.value,mx_preference:t.MXPref.value,ddns:"true"==t.IsDDNSEnabled.value},t.ddns,e.records.push(t)})),e.loading=!1)}))},newRecord:function(){this.records.push({id:-1,ddns:!1,ttl:"300",type:"A",host:"Click Me",value:"Click Me",mx_preference:"10"})},deleteRecord:function(e){var t=this.records.indexOf(e);-1!==t?this.records.splice(t,1):console.error("WTF")},saveRecords:function(){for(var e={SLD:this.sld,TLD:this.tld,EmailType:this.emailType},t=1;t<=this.records.length;t++){var a=this.records[t-1];e["HostName"+t]=a.host,e["RecordType"+t]=a.type,e["Address"+t]=a.value,e["MXPref"+t]=a.mx_preference,e["TTL"+t]=a.ttl}this.$root.fetchAPI("namecheap.domains.dns.setHosts",e).then((function(e){console.info(e)}))}}}),U=H,q=a("8fea"),J=a("7679"),G=a("b56d"),z=Object(i["a"])(U,F,X,!1,null,null,null),W=z.exports;s()(z,{VBtn:$["a"],VContainer:O["a"],VDataTable:q["a"],VEditDialog:J["a"],VFlex:I["a"],VIcon:d["a"],VLayout:L["a"],VSelect:G["a"],VTextField:M["a"]}),n["a"].use(S["a"]);var K=new S["a"]({base:"/",routes:[{path:"/",component:j},{path:"/domain/:domain",component:W},{path:"*",redirect:"/"}]});K.beforeEach((function(e,t,a){a()}));var B=K,Q=a("bb71");a("da64");n["a"].use(Q["a"],{iconfont:"md"}),n["a"].config.productionTip=!1,new n["a"]({data:{title:"Namecheap Panel",drawer:null,dark:!0,domains:[{domain:"Loading...",prevent:!0}],domains_expand:!0},methods:{fetchAPI:function(e,t){t||(t={});var a=JSON.parse(localStorage.api);return t.ApiKey=a.key,t.ApiUser=a.user,t.UserName=a.userName,t.Command=e,fetch(a.url,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")}).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){var t=e.querySelectorAll("Errors > Error");if(0!=t.length){var a="Request Failed";throw t.forEach((function(e){a+="\n"+e.innerHTML+" ("+e.attributes.Number.value+")"})),window.alert(a),new Error(a)}return e.querySelector("CommandResponse")}))},newWindow:function(e){window.open("/"+e)},changeLocation:function(e){location.href="/"+e}},watch:{$route:function(){this.title="Namecheap Panel"}},created:function(){var e=this;localStorage.api&&JSON.parse(localStorage.api).url?this.fetchAPI("namecheap.domains.getList").then((function(t){e.domains=[],t.querySelectorAll("DomainGetListResult > Domain").forEach((function(t){t=t.attributes;var a="",n="";"true"!=t.IsOurDNS.value&&(a="block",n="Domain isn't using Namecheap DNS."),"true"==t.IsExpired.value&&(a="warning",n="Domain is expired!"),e.domains.push({domain:t.Name.value,prevent:""!=a,icon:a,info:n})}))})).catch((function(){e.domains=[{domain:"Error",prevent:!0}]})):this.domains=[{domain:"Setup API First",prevent:!0}]},el:"#app",router:B,render:function(e){return e(k)}})}});
//# sourceMappingURL=app.6647bdda.js.map