let a=document.createElement("style");a.innerHTML=".list-basic__top[data-v-2bd2a634]{padding:24px;margin:24px 24px 0;text-align:center;background:#fff}.list-basic__top-col[data-v-2bd2a634]:not(:last-child){border-right:1px dashed rgba(206,206,206,.4)}.list-basic__top-col div[data-v-2bd2a634]{margin-bottom:12px;font-size:14px;line-height:22px;color:rgba(0,0,0,.45)}.list-basic__top-col p[data-v-2bd2a634]{margin:0;font-size:24px;line-height:32px;color:rgba(0,0,0,.85)}.list-basic__content[data-v-2bd2a634]{padding:24px;margin:12px 24px;background:#fff}.list-basic__content .list[data-v-2bd2a634]{position:relative}.list-basic__content .icon[data-v-2bd2a634]{font-size:40px!important}.list-basic__content .extra[data-v-2bd2a634]{position:absolute;top:20px;right:15px;font-weight:400;color:#1890ff;cursor:pointer}.list-basic__content .description[data-v-2bd2a634]{display:inline-block;width:40%}.list-basic__content .info[data-v-2bd2a634]{display:inline-block;width:30%;text-align:center}.list-basic__content .info div[data-v-2bd2a634]{display:inline-block;padding:0 20px}.list-basic__content .info div span[data-v-2bd2a634]{display:block}.list-basic__content .progress[data-v-2bd2a634]{display:inline-block;width:15%;vertical-align:top}",document.head.appendChild(a);import{a as t,I as i,O as s,Q as l,i as n,o as e,j as o,k as d,U as c,V as p,R as r,m as _,n as b,p as v}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./CheckOutlined.252282ed.js";import{P as u}from"./index.6dad0c9e.js";import{cardList as x}from"./data.890383c3.js";var f=t({components:{Icon:i,Progress:u},setup:()=>({prefixCls:"list-basic",list:x,pagination:{show:!0,pageSize:3}})});const g=r("data-v-2bd2a634");s("data-v-2bd2a634");const m=d("div",null,"我的待办",-1),h=d("p",null,"8个任务",-1),k=d("div",null,"本周任务平均处理时间",-1),y=d("p",null,"32分钟",-1),C=d("div",null,"本周完成任务数",-1),w=d("p",null,"24个任务",-1),j={key:0,class:"extra"},$={class:"description"},z={class:"info"},I=d("span",null,"Owner",-1),O=d("span",null,"开始时间",-1),P={class:"progress"};l();const E=g(((a,t,i,s,l,r)=>{const u=n("a-page-header"),x=n("a-col"),f=n("a-row"),E=n("Icon"),H=n("Progress"),L=n("a-list-item-meta"),M=n("a-list-item"),Q=n("a-list");return e(),o("div",{class:a.prefixCls},[d(u,{title:"标准列表",ghost:!1}),d("div",{class:`${a.prefixCls}__top`},[d(f,{gutter:12},{default:g((()=>[d(x,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[m,h])),_:1},8,["class"]),d(x,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[k,y])),_:1},8,["class"]),d(x,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[C,w])),_:1},8,["class"])])),_:1})],2),d("div",{class:`${a.prefixCls}__content`},[d(Q,{pagination:a.pagination},{default:g((()=>[(e(!0),o(c,null,p(a.list,(a=>(e(),o(M,{key:a.id,class:"list"},{default:g((()=>[d(L,null,{avatar:g((()=>[a.icon?(e(),o(E,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):_("",!0)])),title:g((()=>[d("span",null,b(a.title),1),a.extra?(e(),o("div",j,b(a.extra),1)):_("",!0)])),description:g((()=>[d("div",$,b(a.description),1),d("div",z,[d("div",null,[I,v(b(a.author),1)]),d("div",null,[O,v(b(a.datetime),1)])]),d("div",P,[d(H,{percent:a.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)],2)}));f.render=E,f.__scopeId="data-v-2bd2a634";export default f;