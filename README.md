# Labeling Factory Vue

<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

该应用通过多Agent联合解决数据标注的任务。各Agent拥有独立的prompt设置，通过更有目标性地微调实现专业任务，避免幻觉现象，使得模型效果更好。

前端使用`Vue`框架开发，使用`vite`作为脚手架搭建vue框架，组件库使用`Element-Plus`，组件之间路由使用`router`库，使用`pinia`实现全局数据存储。

## 部署

部署环境：

* [node]()：20.18.0
* [npm]()： 10.8.2
* [vue]()：3.4.35
* [vite]()：5.4.0
* [element-plus]()：2.8.0
* [vue-route]()：4.4.3
* [axios]()：1.7.7
* [pinia]()：2.2.5

保证需要的库都安装成功后，运行软件：

```bash
npm run dev
```

运行成功后在浏览器访问：[localhost:5555](localhost:5555) 即可成功部署。
