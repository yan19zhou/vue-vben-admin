import{a as e,h as t,i as n,o as i,j as s,k as o,w as l,p as a}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.398fc43a.js";import"./index.7c47310e.js";import{s as r}from"./index.de879313.js";import"./index.5c04e818.js";import"./RightOutlined.9c709ff3.js";import"./useTimeout.a6f3b2be.js";import"./resizeEvent.f9055435.js";import"./domUtils.55f014ea.js";import"./useExpose.71ee03b4.js";import"./animation.85d10296.js";import"./index.1dbdd6e1.js";import{u as p}from"./useContextMenu.8b086659.js";var c=e({components:{CollapseContainer:r},setup(){const[e]=p(),{createMessage:n}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const m={class:"p-4"},d=a("Right Click on me"),u=a("Right Click on me");c.render=function(e,t,a,r,p,c){const b=n("a-button"),x=n("CollapseContainer");return i(),s("div",m,[o(x,{title:"Simple"},{default:l((()=>[o(b,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[d])),_:1},8,["onContextmenu"])])),_:1}),o(x,{title:"Multiple",class:"mt-4"},{default:l((()=>[o(b,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])};export default c;