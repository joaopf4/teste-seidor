(this.webpackJsonpseidor=this.webpackJsonpseidor||[]).push([[0],{28:function(e,n,t){"use strict";t.r(n);var r,c,o,d,i,a,s=t(1),l=t.n(s),j=t(15),b=t.n(j),h=(t(11),t(13)),x=(t(16),t(5)),p=t(2),u=t(9),O=t(3),m=t(4),f=Object(m.a)(r||(r=Object(O.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap');\n  body {\n    margin: 0;\n    padding:0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: 'Montserrat', sans-serif;\n    overflow-y: overlay;\n    width: 100vw; \n    padding-left: 0px !important;\n    }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n"]))),g="#fffffb",v="#185785",w="#dde3e6",y="#111010",B=m.b.div(c||(c=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: inherit;\n  padding-bottom: 40px;\n  background-color: white;\n  border-radius: 8px;\n  color: ",";\n  header {\n    height: 8vh;\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    display: flex;\n    @media(max-width: 540px) {\n      font-size: 2.5vw;\n      height: 10vh;\n      padding: 10px;\n    }\n    h1{\n        margin: auto;\n        width: fit-content;\n    }\n  }\n  h3 {\n      width: 70%;\n    }\n  form {\n    display: flex;\n    width: 70vw;\n    max-width: 600px; \n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    text-align: left;\n    box-shadow: 5px 5px 30px #ddd, 0px 10px 20px #ccc;\n    border-radius: 18px;\n    padding: 30px;\n    @media(max-width: 540px) {\n      height: fit-content;\n      width: 80vw;\n    }\n    label {\n        align-self: flex-start;\n        margin-bottom: 4px;\n        font-weight: 600;\n    }\n  }\n  "])),y,v,g),F=m.b.div(o||(o=Object(O.a)(["\n    padding-top: 70px;\n    display: flex;\n    justify-content: center;\n    @media(max-width: 540px) {\n      padding-top: 40px;\n  }\n"]))),S=m.b.div(d||(d=Object(O.a)(["\n  width: 100%;\n  height: 40px;\n  border: 2px solid ",";\n  box-shadow: "," 4px 4px;\n  padding: 0 10px;\n  margin: 0px 0px 22px 0px;\n  display: flex;\n  align-items: inherit;\n  background-color: white;\n  :last-of-type {\n      margin-bottom: 40px;\n    }\n  input {\n    border: none;\n    outline: none;\n    width: 100%;\n    font-size: 1.3rem; \n  }\n  p {\n    font-size:1.2rem;\n    cursor: pointer;\n  }\n"])),y,y),k=m.b.button(i||(i=Object(O.a)(["\n  width: fit-content;\n  height: 40px;\n  border: 2px solid #111010;\n  box-shadow: rgba(17, 16, 16, 1) 4px 4px;\n  outline: none;\n  padding: 0 20px;\n  display: flex;\n  align-items: inherit;\n  font-weight: 600;\n  background-color: white;\n  font-size: 1.3rem;\n  :hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n  :active {\n    transform: translateY(3px);\n    transition: .15s;\n    box-shadow: rgba(17, 16, 16, 1) 1px 1px ;\n  }\n"])),w),C=m.b.table(a||(a=Object(O.a)(["\n  border-collapse: collapse;\n  width: 60%;\n  th{\n    padding: 12px 6px;\n    text-align: left;\n    background-color: ",";\n    color: ",";\n    border: 1px solid #ddd;\n  }\n  tr:nth-child(even){\n    background-color: #f2f2f2;\n  }\n  tr:hover {\n    background-color: #ddd;\n  }\n  td {\n    padding: 10px 0 10px 6px;\n    border: 1px solid #ddd;\n  }\n"])),v,g),P=t(0);var D=function(){var e=Object(s.useState)({nome:"",cpf:"",salarioBruto:Number(""),descontoPrev:Number(""),dependentes:Number(""),descontoIR:"",salarioBase:""}),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(s.useState)(!1),o=Object(u.a)(c,2),d=o[0],i=o[1],a=Object(s.useState)([]),l=Object(u.a)(a,2),j=l[0],b=l[1],O=function(e){var n=e.target,t=n.id,c=n.value;r((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(x.a)({},t,c))}))};return Object(P.jsxs)(B,{children:[Object(P.jsx)("header",{children:Object(P.jsx)("h1",{children:"Seidor - Cadastro de Funcion\xe1rios"})}),Object(P.jsx)(F,{children:Object(P.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){i(!0);var n=e.salarioBruto-e.descontoPrev-164.56*e.dependentes;r((function(e){return Object(p.a)(Object(p.a)({},e),{},{salarioBase:n})}));var t=0,c=0;n<=1903.98?(t=0,c=0):n>1903.98&&n<=2826.65?(c=142.8,t=.075):n>2826.65&&n<=3751.05?(c=354.8,t=.15):n>3751.05&&n<=4664.68?(c=636.13,t=.225):n>4664.68&&(c=869.36,t=.275);var o=n*t-c;r((function(e){return Object(p.a)(Object(p.a)({},e),{},{descontoIR:o.toFixed(2)})})),console.log(o),console.log("chamada calculaIR",e),console.log("chamada calculaIR",j)}(t),b([].concat(Object(h.a)(j),[t])),console.log("chamada cadastro",t),console.log("chamada cadastro",j)},children:[Object(P.jsx)("label",{htmlFor:"nome",children:"Nome:"}),Object(P.jsx)(S,{children:Object(P.jsx)("input",{name:"nome",required:!0,type:"text",id:"nome",value:t.nome,onChange:O,placeholder:"Nome"})}),Object(P.jsx)("label",{htmlFor:"cpf",children:"CPF:"}),Object(P.jsx)(S,{children:Object(P.jsx)("input",{name:"cpf",required:!0,type:"text",id:"cpf",value:t.cpf,onChange:function(e){var n=e.target,t=n.id,c=n.value,o=c;(o=(o=(o=(o=o.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")).length<15&&r((function(e){var n;return Object(p.a)(Object(p.a)({},e),{},(n={},Object(x.a)(n,t,c),Object(x.a)(n,"cpf",o),n))}))},placeholder:"000.000.000-00"})}),Object(P.jsx)("label",{htmlFor:"salarioBruto",children:"Sal\xe1rio Bruto:"}),Object(P.jsx)(S,{children:Object(P.jsx)("input",{name:"salarioBruto",required:!0,type:"number",id:"salarioBruto",value:t.salarioBruto,onChange:O,placeholder:"S\xf3 numeros(0000.00)"})}),Object(P.jsx)("label",{htmlFor:"descontoPrev",children:"Desconto da previd\xeancia:"}),Object(P.jsx)(S,{children:Object(P.jsx)("input",{name:"descontoPrev",required:!0,type:"number",id:"descontoPrev",value:t.descontoPrev,onChange:O,placeholder:"S\xf3 numeros(0000.00)"})}),Object(P.jsx)("label",{htmlFor:"dependentes",children:"N\xfamero de dependentes:"}),Object(P.jsx)(S,{children:Object(P.jsx)("input",{name:"dependentes",required:!0,type:"number",id:"dependentes",value:t.dependentes,onChange:O,placeholder:"S\xf3 numeros"})}),Object(P.jsx)(k,{type:"submit",children:"Cadastrar"})]})}),Object(P.jsx)("h2",{children:"Seus funcion\xe1rios: "}),d?Object(P.jsxs)(C,{children:[Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{children:"Nome"}),Object(P.jsx)("th",{children:"CPF"}),Object(P.jsx)("th",{children:"Sal\xe1rio"}),Object(P.jsx)("th",{children:"Desconto"}),Object(P.jsx)("th",{children:"Dependentes"}),Object(P.jsx)("th",{children:"Base de c\xe1lculo"}),Object(P.jsx)("th",{children:"Desconto IRRF"}),Object(P.jsx)("th",{children:"Excluir"})]}),Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:t.nome}),Object(P.jsx)("td",{children:t.cpf}),Object(P.jsx)("td",{children:t.salarioBruto}),Object(P.jsx)("td",{children:t.descontoPrev}),Object(P.jsx)("td",{children:t.dependentes}),Object(P.jsx)("td",{children:t.salarioBase}),Object(P.jsx)("td",{children:t.descontoIR}),Object(P.jsx)("td",{children:Object(P.jsx)("button",{children:"X"})})]})]}):Object(P.jsx)(C,{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{children:"Nome"}),Object(P.jsx)("th",{children:"CPF"}),Object(P.jsx)("th",{children:"Sal\xe1rio"}),Object(P.jsx)("th",{children:"Desconto"}),Object(P.jsx)("th",{children:"Dependentes"}),Object(P.jsx)("th",{children:"Base de c\xe1lculo"}),Object(P.jsx)("th",{children:"Desconto IRRF"}),Object(P.jsx)("th",{children:"Excluir"})]})}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{})]})};var R=function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(D,{})})};b.a.render(Object(P.jsxs)(l.a.StrictMode,{children:[Object(P.jsx)(f,{}),Object(P.jsx)(R,{})]}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6f96251e.chunk.js.map