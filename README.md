# vue-dashboard

> A Vue.js project: Webstore   

## 演示地址：

https://allenem.github.io/vue-dashboard/dist/index.html

### tips
* 1.产品列表、订单列表、优惠券部分 需要登录   
  ①可以自己注册添加商品：参考注册申请API网址：https://vue-course-api.herokuapp.com/   
  ②也可以使用我这个（Email Adress:1820988819@qq.com , Password:xys0806）
* 2.模拟订单 无需登录

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## used:
* Vue-cli
* vue-axios
* bootstrap4
* 参考注册申请API网址：https://vue-course-api.herokuapp.com/ （别人写的后台我只是拿来用，非常感谢）
* filter
* vee-validate

## data：   
```json
[
  {
    "category": "測試分類",
    "id": "-LREz8_3Df7aMDcFI8mU",
    "image": "https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=621e8231a4e714c2e85f5acbbcc6a730&auto=format&fit=crop&w=1352&q=80",
    "origin_price": 1000,
    "price": 500,
    "title": "測試的產品",
    "unit": "單位",
    "num": 1
  },
  {
    "category": "測試分類",
    "id": "-LREyEWgcMSrCSQ-elg3",
    "image": "https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=621e8231a4e714c2e85f5acbbcc6a730&auto=format&fit=crop&w=1352&q=80",
    "origin_price": 1000,
    "price": 500,
    "title": "測試的產品",
    "unit": "單位",
    "num": 2
  }
]
```

## 特别感谢
[【前端教程】——Vue 出一個電商網站（下）](https://www.bilibili.com/video/av35541119)

## 效果如下
* 1login2productspageone3productspageone4lazyloading
![1login2productspageone3productspageone4lazyloading](effectPictures/1login2productspageone3productspageone4lazyloading.png)   

* costermer_order
![costermer_order](effectPictures/costermer_order.png)   

* newOrEditOrDelProduct
![newOrEditOrDelProduct](effectPictures/newOrEditOrDelProduct.png)   

* payPageAndOthers
![payPageAndOthers](effectPictures/paypageAndOthers.png)   
