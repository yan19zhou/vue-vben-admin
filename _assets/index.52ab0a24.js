let e=document.createElement("style");e.innerHTML=".step-form-content[data-v-234603f7]{padding:24px;background:#fff}.step-form-form[data-v-234603f7]{width:750px;margin:0 auto}",document.head.appendChild(e);import{a as t,r as i,b as n,a9 as o,O as r,Q as s,i as a,o as p,j as d,k as m,ab as c,ac as f,m as u,R as l,p as j}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./index.e0e9ea26.js";import"./omit.3896c07b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f28ab15c.js";import"./CheckOutlined.252282ed.js";import"./index.c5b45e58.js";import"./index.11699fd0.js";import"./colors.ff6d95b7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.398fc43a.js";import"./index.bab9ff09.js";import"./UpOutlined.0ffab499.js";import"./DownOutlined.1102056e.js";import"./index.af91f443.js";import"./index.6dad0c9e.js";import"./index.d556317e.js";import"./CloseOutlined.0f7fb5e4.js";import"./index.c7a54259.js";import"./index.5c04e818.js";import"./LeftOutlined.7832c85b.js";import"./functional.1555bd27.js";import"./RightOutlined.9c709ff3.js";import"./useTimeout.a6f3b2be.js";import"./useDebounce.94ac03e4.js";import"./useEventListener.8c177df1.js";import"./useBreakpoint.593bdcb4.js";import"./resizeEvent.f9055435.js";import"./index.9fd3b762.js";import"./useWindowSizeFn.ffa6ba78.js";import"./uuid.40269c00.js";import"./download.c30c39aa.js";import"./useForm.c435b577.js";import"./data.459b676c.js";import b from"./Step1.cbc7e3bf.js";import S from"./Step2.c488276a.js";import x from"./Step3.a0ce86f4.js";var v=t({components:{Step1:b,Step2:S,Step3:x},setup(){const e=i(0),t=n({initSetp2:!1,initSetp3:!1});return{current:e,handleStep1Next:function(i){e.value++,t.initSetp2=!0},handleStep2Next:function(i){e.value++,t.initSetp3=!0},handleRedo:function(){e.value=0,t.initSetp2=!1,t.initSetp3=!1},handleStepPrev:function(){e.value--},...o(t)}}});const h=l("data-v-234603f7");r("data-v-234603f7");const N=j(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 "),O={class:"m-5 step-form-content"},g={class:"step-form-form"},k={class:"mt-5"};s();const R=h(((e,t,i,n,o,r)=>{const s=a("a-page-header"),l=a("a-step"),j=a("a-steps"),b=a("Step1"),S=a("Step2"),x=a("Step3");return p(),d("div",null,[m(s,{title:"分步表单",ghost:!1},{default:h((()=>[N])),_:1}),m("div",O,[m("div",g,[m(j,{current:e.current},{default:h((()=>[m(l,{title:"填写转账信息"}),m(l,{title:"确认转账信息"}),m(l,{title:"完成"})])),_:1},8,["current"])]),m("div",k,[c(m(b,{onNext:e.handleStep1Next},null,8,["onNext"]),[[f,0===e.current]]),e.initSetp2?c((p(),d(S,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[f,1===e.current]]):u("",!0),e.initSetp3?c((p(),d(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[f,2===e.current]]):u("",!0)])])])}));v.render=R,v.__scopeId="data-v-234603f7";export default v;