(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{695:function(t,e,s){"use strict";s.r(e);var a=s(9),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[s("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiCiAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDI0IDI0IgogICAgIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyI+CiAgICA8cGF0aCBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNWwtOC01VjZsOCA1bDgtNXYyeiIKICAgICAgICAgIGZpbGw9IiMzMzMiLz4KPC9zdmc+Cg==",alt:"MailSend"}}),t._v(" MailSend\n")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.notifications.mail.MailSend"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Generic task to send a mail.")])]),t._v(" "),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("h3",{attrs:{id:"cc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cc"}},[t._v("#")]),t._v(" "),s("code",[t._v("cc")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("One or more 'Cc' (carbon copy) optional recipient email address. Use semicolon as delimiter to provide several addresses")])]),t._v(" "),s("p",[t._v("Note that each email address must be an RFC2822 format compliant address.")]),t._v(" "),s("h3",{attrs:{id:"from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),s("code",[t._v("from")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The address of the sender of this email")])]),t._v(" "),s("h3",{attrs:{id:"host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" "),s("code",[t._v("host")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The mail server host")])]),t._v(" "),s("h3",{attrs:{id:"htmltextcontent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#htmltextcontent"}},[t._v("#")]),t._v(" "),s("code",[t._v("htmlTextContent")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The optional email message body in HTML text")])]),t._v(" "),s("p",[t._v("Both text and HTML can be provided, which will be offered to the email client as alternative content. Email clients that support it, will favor HTML over plain text and ignore the text body completely")]),t._v(" "),s("h3",{attrs:{id:"password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[t._v("#")]),t._v(" "),s("code",[t._v("password")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The mail server password")])]),t._v(" "),s("h3",{attrs:{id:"port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" "),s("code",[t._v("port")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("integer")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The mail server port")])]),t._v(" "),s("h3",{attrs:{id:"sessiontimeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessiontimeout"}},[t._v("#")]),t._v(" "),s("code",[t._v("sessionTimeout")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("integer")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("1000")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Controls the timeout to use when sending emails")])]),t._v(" "),s("p",[t._v("It affects socket connect-, read- and write timeouts")]),t._v(" "),s("h3",{attrs:{id:"subject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" "),s("code",[t._v("subject")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The optional subject of this email")])]),t._v(" "),s("h3",{attrs:{id:"to"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to"}},[t._v("#")]),t._v(" "),s("code",[t._v("to")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("One or more recipient email address. Use semicolon as delimiter to provide several addresses")])]),t._v(" "),s("p",[t._v("Note that each email address must be an RFC2822 format compliant address")]),t._v(" "),s("h3",{attrs:{id:"transportstrategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transportstrategy"}},[t._v("#")]),t._v(" "),s("code",[t._v("transportStrategy")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("SMTPS")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The optional transport strategy")])]),t._v(" "),s("p",[t._v("Will default to SMTPS if left empty.")]),t._v(" "),s("h3",{attrs:{id:"username"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[t._v("#")]),t._v(" "),s("code",[t._v("username")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The mail server username")])])])}),[],!1,null,null,null);e.default=v.exports}}]);