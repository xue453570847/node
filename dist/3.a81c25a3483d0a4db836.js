webpackJsonp([3],{178:function(t,e,n){var i=n(186);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(27)(i,o);i.locals&&(t.exports=i.locals)},185:function(t,e,n){"use strict";var i=n(178),o=n.n(i);o.a},186:function(t,e,n){e=t.exports=n(26)(!1),e.push([t.i,".home {\n  width: 750px;\n  margin: 0 auto;\n  margin-top: 58px;\n}\n.home--div {\n    width: 100%;\n    float: left;\n}\n.home--div__left {\n      width: 70%;\n      margin-right: 2%;\n}\n.home--div__left--li {\n        padding: 30px 0;\n        border-bottom: 1px solid #e7e7e7;\n}\n.home--div__left--title {\n        font-size: 18px;\n        font-weight: 700;\n        line-height: 1.5;\n        color: #000;\n}\n.home--div__left--desc {\n        margin: 4px 0 12px;\n        font-size: 13px;\n        line-height: 24px;\n        color: #999;\n}\n.home--div__left--like {\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 20px;\n        color: #ea6f5a;\n}\n.home--div__left--like i {\n          color: #ea6f5a;\n}\n.home--div__right {\n      width: 28%;\n}\n",""])},193:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"home--div"},[n("ul",{staticClass:"home--div__left"},t._l(10,function(e,i){return n("li",{key:i,staticClass:"home--div__left--li"},[n("router-link",{attrs:{to:"/detail"}},[n("p",{staticClass:"home--div__left--title"},[t._v("相见欢")]),n("div",{staticClass:"home--div__left--desc"},[t._v("\n    当日她哭着乞求她，说她不想嫁与王爷。 “你真愿与那人过浪迹天涯的生活，也不愿嫁与王爷？” “是，我保证我永远不会回来”第二日，王爷迎娶舞家大小姐...\n        ")]),n("p",{staticClass:"home--div__left--like"},[n("i",{staticClass:"el-icon-star-on"}),t._v("\n            82人喜欢\n          ")])])],1)}),0),n("ul",{staticClass:"home--div__right"})])])},o=[],s=(n(77),n(74)),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l={asyncData:function(t){var e=t.store;t.route;return e.dispatch("getAllData")},name:"home",title:"Home",data:function(){return{introduction:"sssss"}},computed:r({},Object(s.b)(["totalRegister","topMouthActiver"]),{totalActiver:function(){return this.$store.getters.totalActiver},todayLogin:function(){return this.$store.getters.todayLogin}})},a=l,c=(n(185),n(15)),h=Object(c.a)(a,i,o,!1,null,null,null);e.default=h.exports}});