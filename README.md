# 基于iview v4.1.3改造的组件库

> 注意：使用node v8.1.4运行打包
## 修改日志
### 4.1.3-yd.1
因为项目之前引入了iview 2.0.0版本有很多bug，但由于直接替换会有一些之前为了解决BUG的hack方法导致次生BUG，因此进行一些修改，以同时引入版本4和版本2，后期全面使用版本4后再移除版本2
- 将打包出来的包名由`iview`改为`iview4`
- 全局组件名前缀全部改为`I4ComponentName`，如I4Button
- 全局API由`$APIName`改名为`$I4APIName`，如$I4Message
- 全局iview由`$IVIEW`改为`$IVIEW4`
- 将类名前缀由`ivu4-`改为`ivu4-`、由`ivu4-icon`改为`ivu4-icon`，要使用icon的使用注意使用ivu4-icon，覆盖iview样式的时候也要注意类名(与原版的类名不一样了)
- Select组件中判断是否Option的正则改为`optionRegexp = /^i-option$|^Option$|^i4-option$|^I4Option$/i`

### 4.1.3-yd.2
- Select: showNotFoundLabel ignore remote prop

### 4.1.3-yd.3
- Switch&Circle: fix no import when install

> 以下是原文档

<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://file.iviewui.com/view-ui-logo-new.svg">
    </a>
</p>

<h1>
ViewUI
    <h3>A high quality UI Toolkit built on Vue.js.</h3>
</h1>

> 该项目即为原先的 iView。iView 作者将在此仓库继续开发 iView 4.0 和后续版本，以及维护工作。新的组件库命名为 ViewUI，原仓库 iView 作者不再提交内容。
> 
> This project is the original iView. The iView author will continue to develop iView 4.0 and subsequent releases, as well as maintenance work, in this repository. The new component library is named ViewUI, and the iView author will no longer continue to submit content in the original repository.

[![](https://img.shields.io/travis/iview/iview.svg?style=flat-square)](https://travis-ci.org/iview/iview)
[![View UI](https://img.shields.io/npm/v/view-design.svg?style=flat-square)](https://www.npmjs.org/package/view-design)
[![NPM downloads](http://img.shields.io/npm/dm/iview.svg?style=flat-square)](https://npmjs.org/package/view-design)
[![NPM downloads](https://img.shields.io/npm/dt/iview.svg?style=flat-square)](https://npmjs.org/package/view-design)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/iview/dist/iview.min.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/iview/dist/styles/iview.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)
[![Join the chat at https://gitter.im/iview/iview](https://img.shields.io/badge/chat-on_gitter-30b392.svg?style=flat-square)](https://gitter.im/iview/iview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Backers on Open Collective](https://opencollective.com/iview/tiers/backer/badge.svg?label=backer&color=brightgreen)](#backers)
[![Sponers on Open Collective](https://opencollective.com/iview/tiers/sponsor/badge.svg?label=sponsor&color=brightgreen)](#sponers)


## Docs

**[4.x](https://www.iviewui.com)** | [3.x](http://v3.iviewui.com) | [2.x](http://v2.iviewui.com) | [1.x](http://v1.iviewui.com)

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.
- Supports both Vue.js 2 and Vue.js 1.

## Who's using ViewUI

- [Alibaba 阿里巴巴](http://www.alibaba.com/)
- [Baidu 百度](https://www.baidu.com/)
- [Tencent 腾讯](https://www.tencent.com/)
- [Toutiao 今日头条](https://www.toutiao.com/)
- [JD 京东](http://www.jd.com/)
- [DiDi 滴滴](http://www.didichuxing.com/)
- [Meituan 美团](http://www.meituan.com/)
- [Sina 新浪](http://www.sina.com.cn/)
- [iFLYTEK 科大讯飞](http://www.iflytek.com/)
- [LY 同程艺龙](https://www.ly.com/)

## Install

We provide an [View UI plugin](https://github.com/iview-design/vue-cli-plugin-viewui) for Vue CLI 3, which you can use to quickly build an ViewUI-based project.

We also provide a starter kit [view-ui-project](https://github.com/iview-design/view-ui-project) for you.

### Install View UI

Using npm:
```
npm install view-design --save
```

Using a script tag for global use:

```html
<script type="text/javascript" src="iview.min.js"></script>
<link rel="stylesheet" href="dist/styles/iview.css">
```

You can find more info [on the website](https://www.iviewui.com/docs/guide/install-en).

## Usage

```vue
<template>
    <Slider v-model="value" range />
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
```

Using css via `import`:

```js
import 'view-design/dist/styles/iview.css';
```

## Compatibility

- Supports Vue.js 2.x
- Supports Vue.js 1.x - [visit 1.0 docs](http://v1.iviewui.com/)
- Supports SSR
- Supports [Nuxt.js](https://nuxtjs.org/)
- Supports TypeScript
- Supports [Electron](http://electron.atom.io/)
- Most components and features support IE9 and above browsers, some components and features do not support IE

## Community

If you want to contribute or have questions or bugs to report:

**Questions:** Find other users at the [Gitter chat](https://gitter.im/iview/iview) or post on [StackOverflow using `[iview-ui]` tag](https://stackoverflow.com/questions/tagged/iview-ui)  
**Bugs:** [File a issue here](https://github.com/iview-design/iview/issues) - please provide a example so we can help you better  
**Contribute:** Contact us in [Gitter chat](https://gitter.im/iview/iview), WeChat or via mail to `admin@aresn.com`. PRs welcome!

## Major Contributors
|Name|Avatar|Name|Avatar|Name|Avatar|
|---|---|---|---|---|---|
|[Aresn](https://github.com/icarusion) |  ![](https://avatars3.githubusercontent.com/u/5370542?v=3&s=60)  |[jingsam](https://github.com/jingsam) |  ![](https://avatars3.githubusercontent.com/u/1522494?v=3&s=60)  | [rijn](https://github.com/rijn)       |  ![](https://avatars2.githubusercontent.com/u/6976367?v=3&s=60)  |
|[lcx960324](https://github.com/lcx960324)           |  ![](https://avatars3.githubusercontent.com/u/9768245?v=3&s=60)  |[GITleonine1989](https://github.com/GITleonine1989) |  ![](https://avatars1.githubusercontent.com/u/7582490?v=3&s=60)  |[huixisheng](https://github.com/huixisheng)         |  ![](https://avatars1.githubusercontent.com/u/1518967?v=3&s=60)  |
|[Sergio Crisostomo](https://github.com/SergioCrisostomo)           |  ![](https://avatars3.githubusercontent.com/u/5614559?v=3&s=60)  |  [lison16](https://github.com/lison16)           |  ![](https://avatars3.githubusercontent.com/u/20942571?v=3&s=60) |  [Xotic750](https://github.com/Xotic750)    | ![](https://avatars3.githubusercontent.com/u/216041?v=3&s=60)   | 
[huanghong1125](https://github.com/huanghong1125) | ![](https://avatars3.githubusercontent.com/u/12794817?v=3&s=60) | [yangdan8](https://github.com/yangdan8) | ![](https://avatars2.githubusercontent.com/u/16515026?v=3&s=60) |


## Ecosystem Links

- [View UI Pro](https://pro.iviewui.com/pro)
- [View UI Admin Pro](https://pro.iviewui.com/admin-pro)
- [Developer](https://dev.iviewui.com)
- [Run](https://run.iviewui.com)
- [iView-Loader](https://github.com/iview/iview-loader)
- [ViewUI-Plugin](https://github.com/iview/vue-cli-plugin-iview)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, ViewDesign
