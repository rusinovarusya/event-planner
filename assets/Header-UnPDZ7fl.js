import{h as u,u as l,a as x,j as t,g as j,b as y,r as b,s as N}from"./index-DBAE0IBT.js";import{T as _,I as o,i as h,B as i}from"./Button-CYZyihKH.js";const w="_h2_1weyk_1",z="_h3_1weyk_10",k="_h4_1weyk_19",g="_body_1weyk_28",M="_container_1weyk_37",v="_monthName_1weyk_44",W="_month_1weyk_44",$="_button_1weyk_51",n={h2:w,h3:z,h4:k,body:g,container:M,monthName:v,month:W,button:$},f=e=>{switch(e.month()){case 0:return"Январь";case 1:return"Февраль";case 2:return"Март";case 3:return"Апрель";case 4:return"Май";case 5:return"Июнь";case 6:return"Июль";case 7:return"Август";case 8:return"Сентябрь";case 9:return"Октябрь";case 10:return"Ноябрь";case 11:return"Декабрь"}},I=e=>{const s=e.year(),c=u().year(),r=f(e);return s===c?r:`${r} ${s}`},T=()=>{const e=l(),s=x(p=>p.calendar.dateId),c=u(s),r=I(c),d=()=>{e(j())},m=()=>{e(y())};return t.jsxs("div",{className:n.container,children:[t.jsx("div",{className:n.monthName,children:t.jsx(_,{styleName:"h3",className:n.month,children:r})}),t.jsx("button",{className:n.button,onClick:d,children:t.jsx(o,{name:"left-arrow",width:32,height:32})}),t.jsx("button",{className:n.button,onClick:m,children:t.jsx(o,{name:"right-arrow",width:32,height:32})})]})},C="_h2_zuha5_1",A="_h3_zuha5_10",D="_h4_zuha5_19",E="_body_zuha5_28",B="_container_zuha5_37",P="_titleWrapper_zuha5_43",F="_emphasized_zuha5_48",H="_buttonWrapper_zuha5_51",R="_icon_zuha5_57",a={h2:C,h3:A,h4:D,body:E,container:B,titleWrapper:P,emphasized:F,buttonWrapper:H,icon:R},V=()=>{const e=l();let s=h();return b.useEffect(()=>{s=h()}),t.jsxs("header",{className:a.container,children:[t.jsxs("div",{className:a.titleWrapper,children:[t.jsx(o,{name:"subheader",width:214,height:31}),t.jsxs(_,{styleName:"h2",children:["planner ",t.jsx("span",{className:a.emphasized,children:"event"})]})]}),t.jsx(T,{}),t.jsx("div",{className:a.buttonWrapper,children:s?t.jsxs(t.Fragment,{children:[t.jsx(i,{size:"small",onClick:()=>{},children:t.jsx(o,{name:"plus",width:22,height:22,className:a.icon})}),t.jsx(o,{name:"default-avatar",width:80,height:80})]}):t.jsx(i,{size:"small",onClick:()=>{e(N())},children:"Войти"})})]})};export{V as default};
