vue-viewer
==========

基于[Viewer.js](https://github.com/fengyuanchen/viewerjs)封装的vue图片预览插件

Install
-------
        npm install --save vue-viewer

Usage
-----
### 初始化
```js
import Vue from 'vue';
import viewer from 'vue-viewer';
Vue.use(viewer, options);
```
- **options**(可选)
    - 类型： `Object`
    - viewing的配置项. 查看可用[选项](https://github.com/fengyuanchen/viewerjs/blob/master/README.md#options).
### 以指令的方式调用
```html
<img v-viewer src="https://t1.hddhhn.com/uploads/tu/201612/98/st93.png" alt="">
```