(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{679:function(t,a,e){"use strict";e.r(a);var s=e(9),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"micronaut-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#micronaut-configuration"}},[t._v("#")]),t._v(" Micronaut configuration")]),t._v(" "),e("p",[t._v("Since Kestra is a Java app base on micronaut, you can configure to fit your need."),e("br"),t._v("\nWe will not explain all the configuration values possible, there are available "),e("a",{attrs:{href:"https://docs.micronaut.io/1.3.7/guide/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),e("br"),t._v("\nbut we will provide some tips, and most useful to help you to configure micronaut to fit your need :")]),t._v(" "),e("h2",{attrs:{id:"configure-log-level"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-log-level"}},[t._v("#")]),t._v(" Configure log Level")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("io.kestra.runner")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("org.elasticsearch.client")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("org.elasticsearch.client.sniffer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("org.apache.kafka")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DEBUG\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("io.netty.handler.logging")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\n")])])]),e("h2",{attrs:{id:"configure-port-and-scheme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-port-and-scheme"}},[t._v("#")]),t._v(" Configure port and scheme")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("micronaut")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8086")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyStore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classpath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("server.p12\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mypassword\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PKCS12\n")])])]),e("h2",{attrs:{id:"configure-the-timeout-or-max-uploaded-file-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-timeout-or-max-uploaded-file-size"}},[t._v("#")]),t._v(" Configure the timeout or max uploaded file size")]),t._v(" "),e("p",[t._v("A lot of configuration affect these, here is the default configuration:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("micronaut")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-request-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10GB\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("multipart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-file-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10GB\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disk")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("read-idle-timeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60m\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("write-idle-timeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60m\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("idle-timeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60m\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("netty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-chunk-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10MB\n")])])]),e("h2",{attrs:{id:"changing-base-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-base-path"}},[t._v("#")]),t._v(" Changing base path")]),t._v(" "),e("p",[t._v("If behind a reverse proxy, change base path:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("micronaut")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context-path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kestra-prd"')]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);