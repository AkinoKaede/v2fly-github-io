(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{406:function(t,a,s){"use strict";s.r(a);var e=s(11),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"observatory-连接观测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#observatory-连接观测"}},[t._v("#")]),t._v(" Observatory 连接观测")]),t._v(" "),s("p",[t._v("连接观测组件通过定时通过指定的出站连接建立连接来确定出站代理的状态。 (v4.38.0+)\n连接观测组件的观测结果可以被其他组件使用，如负载均衡程序及API。")]),t._v(" "),s("p",[t._v("目前仅支持连接 "),s("code",[t._v("api.v2fly.org")]),t._v(" 进行连接状态检测。由于探测连接会定时发出，此功能可能会使处于特权网络路径的攻击者获得更多信息，请酌情使用。")]),t._v(" "),s("h2",{attrs:{id:"observatoryobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#observatoryobject"}},[t._v("#")]),t._v(" ObservatoryObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subjectSelector"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outbound"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("subjectSelector")]),t._v(": [string]")])]),t._v(" "),s("p",[t._v("一个字符串数组，其中每一个字符串将用于和出站协议标识的前缀匹配。在以下几个出站协议标识中："),s("code",[t._v('[ "a", "ab", "c", "ba" ]')]),t._v("，"),s("code",[t._v('"selector": ["a"]')]),t._v(" 将匹配到 "),s("code",[t._v('[ "a", "ab" ]')]),t._v("。")]),t._v(" "),s("p",[t._v("被匹配到的出站连接将被定时连接以确定是否可用。")])])}),[],!1,null,null,null);a.default=r.exports}}]);