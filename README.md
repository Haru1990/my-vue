### self-vue-data-reactive

实现vue数据的双向绑定，基于订阅发布设计模式。



### vue.js文件

### observe.js
> 将数据变成可以观测的，就是用Object.defineProperty进行数据的getter/setter劫持

### Dep.js
> Dep记录数据的发布者和订阅者关系，一个发布者同时会有很多个订阅者，需要对这个订阅者数组进行维护

### watcher.js
> 订阅者，在初始化的时候触发observe的getter将自己添加到订阅者数组中，仅添加一次（利用Dep.target缓存这个订阅者）
