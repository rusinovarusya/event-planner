import{u as l,a as p,j as t,g as x,b as j,r as b,s as w}from"./index-CTzCtog2.js";import{T as u,I as o,i as h,B as i}from"./Button-DnX41o4c.js";const N="_h2_1weyk_1",y="_h3_1weyk_10",z="_h4_1weyk_19",g="_body_1weyk_28",k="_container_1weyk_37",M="_monthName_1weyk_44",v="_month_1weyk_44",W="_button_1weyk_51",s={h2:N,h3:y,h4:z,body:g,container:k,monthName:M,month:v,button:W},$=e=>{switch(e.getMonth()){case 0:return"Январь";case 1:return"Февраль";case 2:return"Март";case 3:return"Апрель";case 4:return"Май";case 5:return"Июнь";case 6:return"Июль";case 7:return"Август";case 8:return"Сентябрь";case 9:return"Октябрь";case 10:return"Ноябрь";case 11:return"Декабрь"}},f=e=>{const n=e.getFullYear(),c=new Date().getFullYear(),r=$(e);return n===c?r:`${r} ${n}`},I=()=>{const e=l(),n=p(m=>m.calendar.dateId),c=new Date(n),r=f(c),_=()=>{e(x())},d=()=>{e(j())};return t.jsxs("div",{className:s.container,children:[t.jsx("div",{className:s.monthName,children:t.jsx(u,{styleName:"h3",className:s.month,children:r})}),t.jsx("button",{className:s.button,onClick:_,children:t.jsx(o,{name:"left-arrow",width:32,height:32})}),t.jsx("button",{className:s.button,onClick:d,children:t.jsx(o,{name:"right-arrow",width:32,height:32})})]})},T="_h2_zuha5_1",C="_h3_zuha5_10",D="_h4_zuha5_19",A="_body_zuha5_28",E="_container_zuha5_37",F="_titleWrapper_zuha5_43",Y="_emphasized_zuha5_48",B="_buttonWrapper_zuha5_51",P="_icon_zuha5_57",a={h2:T,h3:C,h4:D,body:A,container:E,titleWrapper:F,emphasized:Y,buttonWrapper:B,icon:P},S=()=>{const e=l();let n=h();return b.useEffect(()=>{n=h()}),t.jsxs("header",{className:a.container,children:[t.jsxs("div",{className:a.titleWrapper,children:[t.jsx(o,{name:"subheader",width:214,height:31}),t.jsxs(u,{styleName:"h2",children:["planner ",t.jsx("span",{className:a.emphasized,children:"event"})]})]}),t.jsx(I,{}),t.jsx("div",{className:a.buttonWrapper,children:n?t.jsxs(t.Fragment,{children:[t.jsx(i,{size:"small",onClick:()=>{},children:t.jsx(o,{name:"plus",width:22,height:22,className:a.icon})}),t.jsx(o,{name:"default-avatar",width:80,height:80})]}):t.jsx(i,{size:"small",onClick:()=>{e(w())},children:"Войти"})})]})};export{S as default};