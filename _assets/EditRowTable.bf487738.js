import{a as e,r as i,i as t,o,j as n,k as s,w as a}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.01fc9e75.js";import"./index.e0e9ea26.js";import"./omit.3896c07b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f28ab15c.js";import"./CheckOutlined.252282ed.js";import{T as r}from"./index.c5b45e58.js";import"./index.11699fd0.js";import"./colors.ff6d95b7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.398fc43a.js";import"./index.bab9ff09.js";import"./UpOutlined.0ffab499.js";import"./LeftOutlined.3325f905.js";import"./DownOutlined.1102056e.js";import"./index.af91f443.js";import"./index.7c47310e.js";import"./index.936684d7.js";import"./zh_CN.0242bd16.js";import"./index.6dad0c9e.js";import"./index.d556317e.js";import"./CaretDownFilled.18c980ea.js";import"./CheckOutlined.6461e204.js";import"./CloseOutlined.0f7fb5e4.js";import{s as d,a as l,r as c}from"./EditTableHeaderIcon.987ce90c.js";import"./index.c7a54259.js";import"./index.5c04e818.js";import"./LeftOutlined.7832c85b.js";import"./functional.1555bd27.js";import"./RightOutlined.9c709ff3.js";import"./useTimeout.a6f3b2be.js";import"./useDebounce.94ac03e4.js";import"./useEventListener.8c177df1.js";import"./useBreakpoint.593bdcb4.js";import"./resizeEvent.f9055435.js";import"./domUtils.55f014ea.js";import"./useExpose.71ee03b4.js";import"./index.9fd3b762.js";import"./useWindowSizeFn.ffa6ba78.js";import"./uuid.40269c00.js";import"./download.c30c39aa.js";import"./useForm.c435b577.js";import"./useFullScreen.fac207f0.js";import"./index.70e30f17.js";import{u as m}from"./useTable.380dc255.js";import{d as p}from"./table.34280e9b.js";const u=[{title:"ID",dataIndex:"id",customRender:c({dataIndex:"id"})},{title:"姓名",dataIndex:"name",customRender:c({dataIndex:"name"})}];var j=e({components:{BasicTable:d,EditTableHeaderIcon:l,TableAction:r},setup(){const e=i(""),[t]=m({title:"可编辑行示例",api:p,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(i){e.value=i.key,i.editable=!0}function n(i){e.value="",i.editable=!1,i.onCancel&&i.onCancel()}function s(i){e.value="",i.editable=!1,i.onSubmit&&i.onSubmit()}return{registerTable:t,handleEdit:o,createActions:function(i,t){return i.editable?[{label:"保存",onClick:s.bind(null,i,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,i,t)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==i.key,onClick:o.bind(null,i)}]}}}});const b={class:"p-4"};j.render=function(e,i,r,d,l,c){const m=t("TableAction"),p=t("BasicTable");return o(),n("div",b,[s(p,{onRegister:e.registerTable},{action:a((({record:i,column:t})=>[s(m,{actions:e.createActions(i,t)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default j;