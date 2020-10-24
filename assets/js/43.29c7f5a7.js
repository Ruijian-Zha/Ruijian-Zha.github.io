(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{522:function(e,t,a){"use strict";a.r(t);var s=a(4),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"拓扑排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓扑排序"}},[e._v("#")]),e._v(" 拓扑排序")]),e._v(" "),a("h2",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[e._v("#")]),e._v(" 应用场景")]),e._v(" "),a("p",[e._v("拓扑排序的一个重要应用："),a("code",[e._v("判断AOV网中是否存在环")]),e._v("。对有向图构造拓扑排序，如果所有顶点都在它的拓扑序列中，则该AOV网必定不存在环。")]),e._v(" "),a("h2",{attrs:{id:"算法过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法过程"}},[e._v("#")]),e._v(" 算法过程")]),e._v(" "),a("ol",[a("li",[e._v("在图中找到一个入度为0的点，加入到维护的结果队列")]),e._v(" "),a("li",[e._v("对图进行拆点操作，拆掉这个点和所有相连的边")]),e._v(" "),a("li",[e._v("重复上面的两步，所有点都已拆除（拓扑序列中已经包含所有点）")])]),e._v(" "),a("p",[e._v("拓扑排序实际上是BFS的一种特殊情况，每次加入队列的点是"),a("code",[e._v("入度为0")]),e._v("的点，加入队列后拆掉相邻的边；记录已经拆掉的点")]),e._v(" "),a("h2",{attrs:{id:"练习题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习题目"}},[e._v("#")]),e._v(" 练习题目")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("LeetCode 207. Course Schedule (medium)")])]),e._v(" "),a("li",[a("p",[e._v("LeetCode 210. Course Schedule II (medium)")])]),e._v(" "),a("li",[a("p",[e._v("LeetCode 802. Find Eventual Safe States (medium)")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);