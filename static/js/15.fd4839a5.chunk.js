"use strict";(self.webpackChunkSlimMom=self.webpackChunkSlimMom||[]).push([[15],{1456:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(5043),s=a(579);class i extends r.Component{constructor(){super(...arguments),this.state={}}render(){let e="";return this.props.isLoginPage?e="-login":this.props.isCalculationPage&&(e="-calculation"),(0,s.jsxs)("section",{className:"decoration".concat(e),children:[(0,s.jsx)("div",{className:"dec-spot"}),(0,s.jsx)("div",{className:"dec-strawberry"}),(0,s.jsx)("div",{className:"dec-leaves"}),(0,s.jsx)("div",{className:"dec-banana"})]})}}const d=i},7439:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(5043),s=a(7508),i=a(478),d=a(830);const c={section__rightSideBar:"rightSideBar_section__rightSideBar__Sq5Is",scrollbar:"rightSideBar_scrollbar__WNalv",notAllowedProductsList:"rightSideBar_notAllowedProductsList__z7nta",title:"rightSideBar_title__u1mos",sideBar__list:"rightSideBar_sideBar__list__iHRXt",rightSideBar__lists:"rightSideBar_rightSideBar__lists__PQeWb",sideBar__BlocList:"rightSideBar_sideBar__BlocList__snhuL",backgroundSideBar:"rightSideBar_backgroundSideBar__QGY3B",sideBar__BlocDescription:"rightSideBar_sideBar__BlocDescription__W30ZF",rightSideBar:"rightSideBar_rightSideBar__-ai4p"};var l=a(7967),n=a(579);const o={kcalLeft:0,kcalConsumed:0,dailyRate:0,percentsOfDailyRate:0},u=()=>{const[e,t]=(0,r.useState)(o),a=(0,s.d4)(i.A.getSummaries),u=(0,s.d4)(i.A.getDaySummary),m=(0,s.d4)(i.A.getCurrentDay),h=(0,s.d4)(i.A.getCalories),_=(0,s.d4)(i.A.getUserDataDailyRate),p=(0,s.d4)(i.A.getnotAllowedProducts),g=(0,s.d4)(d.A.getLoading);return(0,r.useEffect)((()=>{(()=>{const e=m||(new Date).toJSON().slice(0,10);(h||_)&&u.dailyRate?a.length?t(a.find((t=>t.date===(u.date?u.date:e)))||{...u,date:e}):t({...u,date:e}):t({...o,date:e})})()}),[m,h,u,a,_]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:c.section__rightSideBar,children:(0,n.jsx)("div",{className:c.conteiner__rightSideBar,children:(0,n.jsxs)("div",{className:c.rightSideBar,children:[(0,n.jsxs)("div",{className:c.sideBar__BlocList,children:[(0,n.jsxs)("h2",{className:c.title,children:["Summary for ",e.date]}),g?(0,n.jsx)(l.A,{}):(0,n.jsxs)("div",{className:c.rightSideBar__lists,children:[(0,n.jsxs)("ul",{className:c.sideBar__list,children:[(0,n.jsx)("li",{children:"Remaining"}),(0,n.jsx)("li",{children:"Consumed"}),(0,n.jsx)("li",{children:"Daily rate"}),(0,n.jsx)("li",{children:"n% of normal"})]}),(0,n.jsxs)("ul",{className:c.sideBar__list,children:[(0,n.jsxs)("li",{children:[e.kcalLeft," kcal"]}),(0,n.jsxs)("li",{children:[Math.round(e.kcalConsumed)," kcal"]}),(0,n.jsxs)("li",{children:[e.dailyRate," kcal"]}),(0,n.jsxs)("li",{children:[Math.round(e.percentsOfDailyRate)," %"]})]})]})]}),(0,n.jsxs)("div",{className:c.sideBar__BlocDescription,children:[(0,n.jsx)("h2",{className:c.title,children:"Products that are not recommended"}),(0,n.jsx)("div",{className:"".concat(c.notAllowedProductsList," ").concat(c.scrollbar),children:null===p||void 0===p?void 0:p.map((e=>(0,n.jsxs)("span",{children:[e,", "]},e)))})]})]})})})})}},2443:(e,t,a)=>{a.d(t,{A:()=>i});a(5043);var r=a(579);const s=e=>{const{children:t,type:a,className:s,clickHandler:i}=e;return(0,r.jsx)("button",{type:a,className:s,onClick:i&&i,children:t})};s.defaultProps={className:"primary-button",clickHandler:null,type:"button"};const i=s},9802:(e,t,a)=>{a.d(t,{A:()=>i});a(5043);const r="IconClose_icon__tZWJ4";var s=a(579);const i=()=>(0,s.jsxs)("svg",{className:r,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M1 1L13 13",stroke:"#9B9FAA",strokeWidth:"2"}),(0,s.jsx)("path",{d:"M1 13L13 0.999999",stroke:"#9B9FAA",strokeWidth:"2"})]})},7967:(e,t,a)=>{a.d(t,{A:()=>c});a(5043);const r="SmallLoader_loader__wrap__EONpT",s="SmallLoader_loader__LFaum",i="SmallLoader_loader__sq__9QdKx";var d=a(579);const c=()=>(0,d.jsx)("div",{className:r,children:(0,d.jsx)("div",{className:r,role:"alertdialog","aria-busy":"true","aria-live":"polite","aria-label":"Loading\ufffd",children:(0,d.jsxs)("div",{className:s,"aria-hidden":"true",children:[(0,d.jsx)("div",{className:i}),(0,d.jsx)("div",{className:i})]})})})},3064:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var r=a(5043),s=a(7508),i=a(1688),d=a(5173),c=a.n(d);const l="DiaryProductsList_productList__-Bb4+",n="DiaryProductsList_scrollbar__zjmmD",o="DiaryProductsList_SmallLoaderContainer__CF1hA",u="DiaryProductListItem_list__qocx1",m="DiaryProductListItem_listName__mUMi9",h="DiaryProductListItem_listWeight__NzYsi",_="DiaryProductListItem_listCalories__iKzEP",p="DiaryProductListItem_ccal__Zq1w8",g="DiaryProductListItem_listButton__DHVvu";var x=a(788),j=a(9802),D=a(478),y=a(579);const v={deleteProduct:x.Mu},N=(0,s.Ng)((e=>({dayId:D.A.getCurrentDayId(e),date:D.A.getDaySummary(e).date})),v)((e=>{let{name:t,cal:a,weight:r,dayId:s,productId:i,deleteProduct:d,date:c}=e;return(0,y.jsxs)("li",{className:u,children:[(0,y.jsx)("span",{className:m,children:t}),(0,y.jsxs)("span",{className:h,children:[r," g"]}),(0,y.jsxs)("span",{className:_,children:[Math.round(a)," ",(0,y.jsx)("span",{className:p,children:"kcal"})]}),(0,y.jsx)("button",{className:g,onClick:()=>d({dayId:s,eatenProductId:i},c),children:(0,y.jsx)(j.A,{})})]})}));var A=a(830),S=a(7967);class B extends r.Component{componentDidUpdate(e,t){}render(){let{products:e}=this.props;return(0,y.jsxs)(y.Fragment,{children:[" ",this.props.isLoading&&(0,y.jsx)("div",{className:o,children:(0,y.jsx)(S.A,{})}),(0,y.jsx)("ul",{className:"".concat(l," ").concat(n),children:!!e.length&&e.map((e=>(0,y.jsx)(N,{name:e.title,weight:e.weight,cal:e.kcal,productId:e.id},e.id)))})]})}}B.props={getProducts:c().func.isRequired,date:c().string};const w=(0,s.Ng)((e=>({products:D.A.getProductsSelectors(e),isLoading:A.A.getLoading(e)})),{getProducts:x.d$})(B);var b=a(7439),P=a(3516),C=a(3033),F=a(446),L=a.n(F);const f={triggerButton:"DiaryAddProductForm_triggerButton__+ULNq",autocomplete:"DiaryAddProductForm_autocomplete__+03mX",autocompleteItem:"DiaryAddProductForm_autocompleteItem__SLZ1X",scrollbar:"DiaryAddProductForm_scrollbar__cFzJC",productListWrapper:"DiaryAddProductForm_productListWrapper__2eWkb",buttonWrapper:"DiaryAddProductForm_buttonWrapper__I9E-G",modal:"DiaryAddProductForm_modal__rjRxl",modalForm:"DiaryAddProductForm_modalForm__oytgh",gramms:"DiaryAddProductForm_gramms__kfWri",addButton:"DiaryAddProductForm_addButton__Iw9vh",addForm:"DiaryAddProductForm_addForm__5wgM9",plusButton:"DiaryAddProductForm_plusButton__wY+oa",triggerButtonWrapper:"DiaryAddProductForm_triggerButtonWrapper__Bfl0c",errorInput:"DiaryAddProductForm_errorInput__7e2Mz",errorMes:"DiaryAddProductForm_errorMes__pEK25",validField:"DiaryAddProductForm_validField__MU+Fi",formLabel:"DiaryAddProductForm_formLabel__gtiQ1"};var k=a(2443);const I=a.p+"static/media/back-arrow.24ce6b342eecfc3ce7e0b459a70fddbb.svg";var W=a(1274);const M=C.Ik().shape({product:C.Yj().required("Required field *"),weight:C.ai().required("Required field *")}),R=e=>{let{date:t,mobile:a}=e;const[i,d]=(0,r.useState)(!1),[c,l]=(0,r.useState)([]),[n,o]=(0,r.useState)(""),[u,m]=(0,r.useState)(null),h=(0,s.d4)(A.A.getLoading),_=(0,s.wA)(),p=()=>{d((e=>!e))},g=(0,r.useCallback)(L()((e=>{""!==e&&(o(""),W.A.searchProduct(e).then((e=>{let{data:t}=e;l(t),1===t.length&&o(t[0]._id)})).catch((e=>{var t;m((null===(t=e.response)||void 0===t?void 0:t.data.message)||e.message),l([])})))}),400),[W.A,o,l,m]),j=(0,y.jsx)(P.l1,{initialValues:{weight:"100",product:""},onSubmit:(e,a)=>{let{resetForm:r}=a;const s={date:t,productId:n,weight:e.weight};_((0,x.Bj)(s)),r()},validationSchema:M,children:e=>{let{setFieldValue:t,handleChange:a,handleBlur:r,errors:s,touched:i}=e;return(0,y.jsxs)(P.lV,{className:f.modalForm,children:[(0,y.jsx)("label",{className:f.formLabel,children:(0,y.jsx)(P.D0,{className:"".concat(f.DailyCaloriesFormInput," ").concat(s.product&&i.product?f.errorInput:""),onBlur:e=>{r(e),setTimeout((()=>{l([])}),300)},onChange:e=>{a(e),(e=>{let{target:t}=e;g(t.value),m(null)})(e)},name:"product",placeholder:"Enter the product name*",type:"text",autoComplete:"off"})}),(0,y.jsx)("div",{className:f.productListWrapper,children:c.length?(0,y.jsx)("ul",{className:"".concat(f.autocomplete,"  ").concat(f.scrollbar),children:c.map((e=>(0,y.jsx)("li",{className:f.autocompleteItem,onClick:()=>{t("product",e.title.en),l([]),o(e._id)},children:e.title.en},e._id)))}):u&&(0,y.jsx)("p",{className:f.errorMes,children:u})}),(0,y.jsx)("label",{className:f.formLabel,children:(0,y.jsx)(P.D0,{className:" ".concat(f.gramms," ").concat(f.DailyCaloriesFormInput," ").concat(s.weight&&i.weight?f.errorInput:""),name:"weight",placeholder:"Grams *",type:"number"})}),window.innerWidth<650?(0,y.jsx)(k.A,{type:"submit",className:f.secondaryButton,disabled:h,children:"Add"}):(0,y.jsx)(k.A,{type:"submit",className:f.plusButton,disabled:h,children:"+"})]})}});return a?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:f.triggerButtonWrapper,children:(0,y.jsx)("button",{type:"button",onClick:p,className:f.triggerButton,children:"+"})}),i&&(0,y.jsxs)("div",{className:f.modal,children:[(0,y.jsx)("div",{className:f.buttonWrapper,children:(0,y.jsx)("button",{onClick:p,type:"button",className:f.closeModal,children:(0,y.jsx)("img",{src:I,alt:"back-arrow"})})}),j]})]}):(0,y.jsx)(y.Fragment,{children:j})};var V=a(8336),E=a(2377);a(6097);class q extends r.Component{constructor(){super(...arguments),this.state={isShowCalendar:!1,currentDate:new Date,currentValue:new Date,outputValue:""},this.showCalendar=e=>{this.setState((e=>({isShowCalendar:!e.isShowCalendar})))},this.setDate=e=>{const t=e.getFullYear(),a=e.getMonth()<10?"0".concat(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0".concat(e.getDate()):e.getDate();this.setState((s=>({isShowCalendar:!s.isShowCalendar,currentValue:e,outputValue:"".concat(r,".").concat(a,".").concat(t)}))),this.props.value("".concat(t,"-").concat(a,"-").concat(r))}}componentDidMount(){const e=this.props.currentDate.split("-").reverse().join(".");this.setState((t=>({outputValue:e,currentValue:new Date(this.props.currentDate),currentDate:new Date(this.props.currentDate)})))}componentDidUpdate(e,t){if(e.currentDate!==this.props.currentDate){const e=this.props.currentDate.split("-").reverse().join(".");this.setState((t=>({outputValue:e,currentValue:new Date(this.props.currentDate),currentDate:new Date(this.props.currentDate)})))}}render(){return(0,y.jsxs)("div",{className:"setdate",children:[(0,y.jsx)("p",{className:"setdate-title",children:this.state.outputValue}),(0,y.jsx)("input",{className:"setdate-btn",type:"button",value:"",onClick:this.showCalendar}),(0,y.jsx)(V.A,{in:this.state.isShowCalendar,timeout:150,classNames:"react-calendar",unmountOnExit:!0,children:(0,y.jsx)(E.Ay,{onChange:this.setDate,value:this.state.currentValue})})]})}}const z=q;q.defaultProps={value(){},currentDate:(new Date).toJSON().slice(0,10)};var U=a(1456),H=a(1531);const O="DiaryPage_pageWrapper__ivXH7",Y="DiaryPage_diarypageWrapper__mpHM0",J=(0,s.Ng)((e=>({currentDate:D.A.getCurrentDay(e),dailyRate:D.A.getCalories(e),userDataDailyRate:D.A.getUserDataDailyRate(e)})),{getProducts:x.d$,setCurrentDay:H.A.setCurrentDay})((e=>{let{currentDate:t,dailyRate:a,userDataDailyRate:s,getProducts:d,setCurrentDay:c}=e;const[l,n]=(0,r.useState)(""),[o,u]=(0,r.useState)(window.innerWidth);(0,r.useEffect)((()=>{if(t)n(t);else{const e=m();n(e)}}),[t]),(0,r.useEffect)((()=>{l&&d({date:l})}),[l,d]),(0,r.useEffect)((()=>{const e=()=>{u(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const m=()=>{let e=new Date,t=String(e.getDate()).padStart(2,"0");t=1===t.length?"0".concat(t):"".concat(t);const a=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return"".concat(r,"-").concat(a,"-").concat(t)},h=e=>{n(String(e)),c(e)};return(0,y.jsx)(y.Fragment,{children:a||0!==s?o<650?(0,y.jsxs)(r.Fragment,{children:[(0,y.jsx)(U.A,{isCalculationPage:!0}),(0,y.jsx)("section",{className:"container",children:(0,y.jsxs)("div",{className:O,children:[(0,y.jsxs)("div",{className:Y,children:[(0,y.jsx)(z,{value:h,currentDate:l}),(0,y.jsx)(w,{}),(0,y.jsx)(R,{date:l,mobile:!0})]}),(0,y.jsx)(b.A,{})]})})]}):(0,y.jsxs)(r.Fragment,{children:[(0,y.jsx)(U.A,{isCalculationPage:!0}),(0,y.jsx)("section",{className:"container",children:(0,y.jsxs)("div",{className:O,children:[(0,y.jsxs)("div",{className:Y,children:[(0,y.jsx)(z,{value:h}),(0,y.jsx)(R,{date:l,mobile:!1}),(0,y.jsx)(w,{})]}),(0,y.jsx)(b.A,{})]})})]}):(0,y.jsx)(i.rd,{to:"/calculator"})})}))}}]);
//# sourceMappingURL=15.fd4839a5.chunk.js.map