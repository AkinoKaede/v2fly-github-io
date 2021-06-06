(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{452:function(e,t,r){"use strict";r.r(t);var a=r(11),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"step-2-understand-the-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-understand-the-architecture"}},[e._v("#")]),e._v(" Step 2: Understand the architecture")]),e._v(" "),r("p",[e._v("This article describes the design ideas of the V2Ray core (v2ray-core).")]),e._v(" "),r("h2",{attrs:{id:"objectives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#objectives"}},[e._v("#")]),e._v(" Objectives")]),e._v(" "),r("ul",[r("li",[e._v("The V2Ray kernel provides a platform that supports the necessary network proxy functions, on top of which can be further developed to provide a better user experience;")]),e._v(" "),r("li",[e._v("Take cross-platform as the primary principle to reduce the cost of secondary development;")])]),e._v(" "),r("h2",{attrs:{id:"architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),r("p",[r("img",{attrs:{src:"/arch.svg",alt:"Architecture"}})]),e._v(" "),r("p",[e._v("The kernel is divided into three layers: application layer, agent layer and transport layer. Each layer contains several modules, which are independent of each other, and modules of the same type can be replaced seamlessly.")]),e._v(" "),r("h2",{attrs:{id:"application-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#application-layer"}},[e._v("#")]),e._v(" Application layer")]),e._v(" "),r("p",[e._v("The application layer contains some commonly used functions in the proxy layer, which are abstracted out for reuse in different proxy modules. The modules of the application layer should be realized by pure software, and have nothing to do with hardware or platform-related technology.")]),e._v(" "),r("p",[e._v("List of important modules:")]),e._v(" "),r("ul",[r("li",[e._v("Dispatcher: Used to transfer the data received by the inbound agent to the station agent;")]),e._v(" "),r("li",[e._v("Router: Built-in routing, see "),r("RouterLink",{attrs:{to:"/en_US/config/routing.html"}},[e._v("Routing Configuration")]),e._v(";")],1),e._v(" "),r("li",[e._v("DNS: built-in DNS cache;")]),e._v(" "),r("li",[e._v("Proxy Manager: Inbound proxy manager;")])]),e._v(" "),r("h2",{attrs:{id:"proxy-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy-layer"}},[e._v("#")]),e._v(" Proxy layer")]),e._v(" "),r("p",[e._v("The proxy layer is divided into two parts: Inbound Proxy and Outbound Proxy. The two parts are independent of each other, the inbound agent does not depend on a specific outbound agent, and vice versa.")]),e._v(" "),r("h3",{attrs:{id:"inbound-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inbound-proxy"}},[e._v("#")]),e._v(" Inbound proxy")]),e._v(" "),r("ul",[r("li",[e._v("Implement "),r("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/blob/master/proxy/proxy.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("proxy.Inbound"),r("OutboundLink")],1),e._v(" interface;")])]),e._v(" "),r("h3",{attrs:{id:"outbound-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#outbound-proxy"}},[e._v("#")]),e._v(" Outbound proxy")]),e._v(" "),r("ul",[r("li",[e._v("Realize the "),r("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/blob/master/proxy/proxy.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("proxy.Outbound"),r("OutboundLink")],1),e._v(" interface;")])]),e._v(" "),r("h2",{attrs:{id:"transport-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transport-layer"}},[e._v("#")]),e._v(" Transport layer")]),e._v(" "),r("p",[e._v("The transport layer provides some tool modules related to network data transmission.")])])}),[],!1,null,null,null);t.default=o.exports}}]);