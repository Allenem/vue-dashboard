webpackJsonp([1],{"+7HE":function(t,e){},"2UK1":function(t,e){},"5jlc":function(t,e){},"7iN8":function(t,e){},"8SmS":function(t,e){},"Dz/B":function(t,e){},EScS:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("mtWM"),r=a.n(i),o=a("Rf8U"),n=a.n(o),l=a("ZZvs"),c=a.n(l),d=a("sUu7"),u=(a("SYh3"),a("K3J8"),a("+8+3")),p=a.n(u),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var v=a("VU/8")({name:"App"},m,!1,function(t){a("Dz/B")},null,null).exports,_=a("/ocq"),h={name:"Navbar",methods:{signout:function(){var t=this;this.$http.post("https://vue-course-api.herokuapp.com/logout").then(function(e){console.log("登出API",e.data),e.data.success&&t.$router.push("/login")})}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[e("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[this._v("Allenem购物网")]),this._v(" "),e("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),this._v(" "),e("ul",{staticClass:"navbar-nav px-3"},[e("li",{staticClass:"nav-item text-nowrap"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:this.signout}},[this._v("登出")])])])])])},staticRenderFns:[]};var g=a("VU/8")(h,f,!1,function(t){a("maWL")},"data-v-26184292",null).exports,b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[t._m(0),t._v(" "),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"/admin/products"===this.$route.path},attrs:{to:"/admin/products"}},[a("i",{staticClass:"fas fa-box-open"}),t._v(" 产品列表\n          ")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"/admin/orders"===this.$route.path},attrs:{to:"/admin/orders"}},[a("i",{staticClass:"fas fa-clipboard-list"}),t._v(" 订单列表\n          ")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"/admin/coupons"===this.$route.path},attrs:{to:"/admin/coupons"}},[a("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 优惠券\n          ")])],1)]),t._v(" "),t._m(1),t._v(" "),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"/customer_order"==this.$route.path},attrs:{to:"/customer_order"}},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 模拟订单\n          ")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("管理员")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("模拟功能")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])}]};var C=a("VU/8")({},b,!1,function(t){a("bHb6")},"data-v-42aec033",null).exports,x=a("162o"),y={name:"Navbar",data:function(){return{message:[]}},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.message.push({message:t,status:e,timestamp:a}),this.removeMessageWhithTiming(a)},removeMessage:function(t){this.message.splice(t,1)},removeMessageWhithTiming:function(t){var e=this;Object(x.setTimeout)(function(){e.message.forEach(function(a,s){a.timestamp===t&&e.message.splice(s,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("message:push",function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,a)})}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.message,function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v("\n        "+t._s(e.message)+"\n        "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},staticRenderFns:[]};var k={components:{Navbar:g,Sidebar:C,Alert:a("VU/8")(y,P,!1,function(t){a("QKkA")},"data-v-78c7f85a",null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("Alert"),this._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("Sidebar"),this._v(" "),e("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[e("router-view")],1)],1)])],1)},staticRenderFns:[]};var $=a("VU/8")(k,w,!1,function(t){a("8SmS")},"data-v-139fd14f",null).exports,N={name:"Login",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this;this.$http.post("https://vue-course-api.herokuapp.com/admin/signin",t.user).then(function(e){console.log("登录API",e.data),e.data.success&&t.$router.push("/admin/products")})}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[a("img",{staticClass:"mb-4",attrs:{src:"https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg",alt:"",width:"72",height:"72"}}),t._v(" "),a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("请登录")]),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email Address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2019")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),this._v(" Remember me\n      ")])])}]};var L=a("VU/8")(N,E,!1,function(t){a("5jlc")},"data-v-34be8c0a",null).exports,M=a("woOf"),A=a.n(M),I=a("7t+N"),U=a.n(I),q={data:function(){return{products:[],tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},pagination:{}}},methods:{getProducts:function(){var t="https://vue-course-api.herokuapp.com/api/allenem/admin/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1),e=this;e.isLoading=!0,this.$http.get(t).then(function(t){console.log("products",t.data),e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1})},openModel:function(t,e){U()("#productModal").modal("show"),t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=A()({},e),this.isNew=!1)},updateProduct:function(){var t="https://vue-course-api.herokuapp.com/api/allenem/admin/product",e="post",a=this;a.isNew||(t="https://vue-course-api.herokuapp.com/api/allenem/admin/product/"+a.tempProduct.id,e="put"),this.$http[e](t,{data:a.tempProduct}).then(function(t){t.data.success?(U()("#productModal").modal("hide"),a.getProducts()):(U()("#productModal").modal("hide"),a.getProducts(),console.log("新增失败"))})},openDelModel:function(t){U()("#deleteModal").modal("show"),this.tempProduct=A()({},t)},delProduct:function(){var t=this,e=this,a="https://vue-course-api.herokuapp.com/api/allenem/admin/product/"+e.tempProduct.id;this.$http.delete(a).then(function(a){console.log(a,e.tempProduct),U()("#deleteModal").modal("hide"),e.isLoading=!1,t.getProducts()})},uploadFile:function(){var t=this;console.log(this);var e=this.$refs.files.files[0],a=this,s=new FormData;s.append("file-to-upload",e);a.status.fileUploading=!0,this.$http.post("https://vue-course-api.herokuapp.com/api/allenem/admin/upload",s,{header:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),a.status.fileUploading=!1,e.data.success?a.$set(a.tempProduct,"image",e.data.imageUrl):t.$bus.$emit("message:push",e.data.message,"danger")})}},created:function(){this.getProducts()}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModel(!0)}}},[t._v("建立新产品")])]),t._v(" "),a("table",{staticClass:"table mt-4"},[t._m(0),t._v(" "),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(t._f("currency")(e.origin_price)))]),t._v(" "),a("td",[t._v(t._s(t._f("currency")(e.price)))]),t._v(" "),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("启用")]):a("span",[t._v("未启用")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModel(!1,e)}}},[t._v("编辑")]),t._v(" "),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openDelModel(e)}}},[t._v("删除")])])])}),0)]),t._v(" "),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[t._v(" "+t._s(e)+" ")])])}),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("输入图片网址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.image,expression:"tempProduct.image"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"请输入图片链接"},domProps:{value:t.tempProduct.image},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"image",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("\n                  或 上传图片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e()]),t._v(" "),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{img:"https://img.zcool.cn/community/0145185615dd766ac7255b14772555.jpg@1280w_1l_0o_100sh.jpg",src:t.tempProduct.image,alt:"示例"}})]),t._v(" "),a("div",{staticClass:"col-sm8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("标题")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"请输入标题"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分类")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"请输入分类"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("单位")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"请输入单位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin-price"}},[t._v("原价")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin-price",placeholder:"请输入原价"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售价")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"请输入售价"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"descript ion"}},[t._v("产品描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"请输入产品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("说明内容")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"请输入说明内容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,i=s.checked?1:0;if(Array.isArray(a)){var r=t._i(a,null);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([null])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否启用")])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.updateProduct()}}},[t._v("确认")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dia log","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),t._v(" "),a("div",{staticClass:"moda l-body"},[t._v("是否删除"),a("strong",{staticClass:"textdanger"},[t._v(" "+t._s(t.tempProduct.title)+" ")]),t._v(" 商品（删除后将无法恢复）")]),t._v(" "),a("div",{staticClass:"modal- footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.delProduct()}}},[t._v("确认")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("分类")]),t._v(" "),a("th",[t._v("产品名称")]),t._v(" "),a("th",{attrs:{width:"100"}},[t._v("原价")]),t._v(" "),a("th",{attrs:{width:"100"}},[t._v("售价")]),t._v(" "),a("th",{attrs:{width:"100"}},[t._v("是否启用")]),t._v(" "),a("th",{attrs:{width:"200"}},[t._v("编辑")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("新增或修改产品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("删除产品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var S=a("VU/8")(q,F,!1,function(t){a("EScS")},"data-v-2920154f",null).exports,D={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    orders\n")])},staticRenderFns:[]};var j=a("VU/8")({},D,!1,function(t){a("7iN8")},"data-v-64e7730f",null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    coupons\n")])},staticRenderFns:[]};var O=a("VU/8")({},R,!1,function(t){a("2UK1")},"data-v-a5f99512",null).exports,V={data:function(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1,cart:{},coupon_code:"",pagination:{}}},methods:{getProducts:function(){var t="https://vue-course-api.herokuapp.com/api/allenem/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1),e=this;e.isLoading=!0,this.$http.get(t).then(function(t){e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1})},getProduct:function(t){var e="https://vue-course-api.herokuapp.com/api/allenem/product/"+t,a=this;a.status.loadingItem=t,this.$http.get(e).then(function(t){a.product=t.data.product,U()("#productModel").modal("show"),a.status.loadingItem=""})},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this;a.status.loadingItem=t;var s={product_id:t,qty:e};this.$http.post("https://vue-course-api.herokuapp.com/api/allenem/cart",{data:s}).then(function(t){a.status.loadingItem="",a.getCart(),U()("#productModel").modal("hide")})},getCart:function(){var t=this;t.isLoading=!0,this.$http.get("https://vue-course-api.herokuapp.com/api/allenem/cart").then(function(e){t.cart=e.data.data,console.log(e),t.isLoading=!1})},removeCartItem:function(t){var e="https://vue-course-api.herokuapp.com/api/allenem/cart/"+t,a=this;a.isLoading=!0,this.$http.delete(e).then(function(){a.getCart(),a.isLoading=!1})},addCouponCode:function(){var t=this,e={code:t.coupon_code};t.isLoading=!0,this.$http.post("https://vue-course-api.herokuapp.com/api/allenem/coupon",{data:e}).then(function(){t.getCart(),t.isLoading=!1})},createOrder:function(){var t=this,e=this,a=e.form;this.$validator.validate().then(function(s){s?t.$http.post("https://vue-course-api.herokuapp.com/api/allenem/order",{data:a}).then(function(t){console.log("订单已建立",t),t.data.success&&e.$router.push("/customer_checkout/"+t.data.orderId),e.isLoading=!1}):console.log("栏位不完整")})}},created:function(){this.getProducts(),this.getCart()}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"row mt-4"},t._l(t.products,function(e){return a("div",{key:e.id,staticClass:"col-md-4 mb-4"},[a("div",{staticClass:"card border-0 shadow-sm"},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.image+")"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.unit))]),t._v(" "),a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price?t._e():a("div",{staticClass:"h5"},[t._v(t._s(e.origin_price))]),t._v(" "),e.price?a("del",{staticClass:"h6"},[t._v("原价 "+t._s(e.origin_price)+" 元")]):t._e(),t._v(" "),e.price?a("div",{staticClass:"h5"},[t._v("现在只要 "+t._s(e.price)+" 元")]):t._e()])]),t._v(" "),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.getProduct(e.id)}}},[t.status.loadingItem===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            查看更多\n          ")]),t._v(" "),a("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(e.id)}}},[t.status.loadingItem===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            加到购物车\n          ")])])])])}),0),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"productModel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("img",{staticClass:"img-fluid",attrs:{src:t.product.image,alt:""}}),t._v(" "),a("blockquote",{staticClass:"blockquote mt-3"},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),t._v(" "),a("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.product.description))])]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():a("div",{staticClass:"h4"},[t._v(t._s(t.product.origin_price)+" 元")]),t._v(" "),t.product.price?a("del",{staticClass:"h6"},[t._v("原价 "+t._s(t.product.origin_price)+" 元")]):t._e(),t._v(" "),t.product.price?a("div",{staticClass:"h4"},[t._v("现在只要 "+t._s(t.product.price)+" 元")]):t._e()]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.product,"num",e.target.multiple?a:a[0])}}},t._l(10,function(e){return a("option",{key:e,domProps:{value:e}},[t._v("选择 "+t._s(e)+" "+t._s(t.product.unit))])}),0)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n            小计\n            "),a("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元\n          ")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(t.product.id,t.product.num)}}},[t.product.id===t.status.loadingItem?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("加入购物车\n          ")])])])])]),t._v(" "),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[t._v(t._s(e))])])}),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]),t._v(" "),a("div",{staticClass:"my-5 row justify-content-center"},[a("div",{staticClass:"my-5 row justify-content-center"},[a("table",{staticClass:"table"},[t._m(1),t._v(" "),a("tbody",t._l(t.cart.carts,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeCartItem(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v("\n              "+t._s(e.product.title)+"\n              "),e.coupon?a("div",{staticClass:"text-success"},[t._v("已套用优惠券")]):t._e()]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("总计")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.cart.total))])]),t._v(" "),t.cart.final_total!==t.cart.total?a("tr",[a("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣价")]),t._v(" "),a("td",{staticClass:"text-right text-success"},[t._v(t._s(t.cart.final_total))])]):t._e()])]),t._v(" "),a("div",{staticClass:"input-group mb-3 input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入优惠券码"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("套用优惠码")])])])])]),t._v(" "),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"请输入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t._v(" "),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v("\n            "+t._s(t.errors.first("email"))+"\n        ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"请输入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t._v(" "),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("姓名必须输入")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人电话")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"digits:11",expression:"'digits:11'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"usertel",placeholder:"请输入电话"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t._v(" "),t.errors.has("tel")?a("span",{staticClass:"text-danger"},[t._v("电话必须输入正确")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"address",name:"address",id:"useraddress",placeholder:"请输入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t._v(" "),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址栏位不得留空")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("留言")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),t._m(2)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th"),this._v(" "),e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("数量")]),this._v(" "),e("th",[this._v("单价")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[this._v("送出订单")])])}]};var T=a("VU/8")(V,z,!1,function(t){a("+7HE")},"data-v-37935bcd",null).exports,H={data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,e="https://vue-course-api.herokuapp.com/api/allenem/order/"+t.orderId;t.isLoading=!0,this.$http.get(e).then(function(e){t.order=e.data.order,console.log(e),t.isLoading=!1})},payOrder:function(){var t=this,e="https://vue-course-api.herokuapp.com/api/allenem/pay/"+t.orderId;t.isLoading=!0,this.$http.post(e).then(function(e){console.log(e),e.data.success&&t.getOrder(),t.isLoading=!1})}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder(),console.log(this.orderId)}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.order.products,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+t._s(e.product.unit))]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total/e.qty))])])}),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("总计")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),t._v(" "),a("td",[t._v(t._s(t.order.user.email))])]),t._v(" "),a("tr",[a("th",[t._v("姓名")]),t._v(" "),a("td",[t._v(t._s(t.order.user.name))])]),t._v(" "),a("tr",[a("th",[t._v("收件人电话")]),t._v(" "),a("td",[t._v(t._s(t.order.user.tel))])]),t._v(" "),a("tr",[a("th",[t._v("收件人地址")]),t._v(" "),a("td",[t._v(t._s(t.order.user.address))])]),t._v(" "),a("tr",[a("th",[t._v("付款状态")]),t._v(" "),a("td",[t.order.is_paid?a("span",{staticClass:" text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])]),t._v(" "),!1===t.order.is_paid?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("确认付款去")])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("数量")]),this._v(" "),e("th",[this._v("单价")])])}]};var K=a("VU/8")(H,W,!1,function(t){a("UTzG")},"data-v-08feb1c0",null).exports;s.a.use(_.a);var B=new _.a({routes:[{path:"*",redirect:"/login"},{path:"/login",name:"Login",component:L},{path:"/admin",name:"Dashboard",component:$,children:[{path:"products",name:"Products",component:S,meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:j,meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:O,meta:{requiresAuth:!0}}]},{path:"/",name:"Dashboard2",component:$,children:[{path:"customer_order",name:"CustomerOrder",component:T},{path:"customer_checkout/:orderId",name:"CustomerCheckout",component:K}]}]});s.a.prototype.$bus=new s.a;s.a.config.productionTip=!1,s.a.use(n.a,r.a),s.a.use(d.a),d.a.Validator.localize("zh_CN",p.a),s.a.component("Loading",c.a),s.a.filter("currency",function(t){if(!t)return"0";var e=Number(t).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,");return 2==t.toString().split(".").length?"￥"+Number(t).toFixed(2):"￥"+e}),r.a.defaults.withCredentials=!0,new s.a({el:"#app",router:B,components:{App:v},template:"<App/>"}),B.beforeEach(function(t,e,a){if(console.log("to:",t,"from:",e,"next:",a),t.meta.requiresAuth){r.a.post("https://vue-course-api.herokuapp.com/api/user/check").then(function(t){console.log("验证用户API",t.data),t.data.success?a():(console.log("这里需要验证"),a({path:"/login"}))})}else a()})},QKkA:function(t,e){},SYh3:function(t,e){},UTzG:function(t,e){},bHb6:function(t,e){},maWL:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e507982b73fc2a4386b9.js.map