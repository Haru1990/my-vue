### my-vue

> 简单实现vue数据的双向绑定（v-model），基于订阅发布设计模式。

> 本质就是通过指令 directives 实现的数据 data 和 DOM 关联的一个框架。



### myvue.js文件
> 创建Vue类，用于初始化数据

### observe.js
> 将数据变成可以观测的，就是用Object.defineProperty进行数据的getter/setter劫持

### Dep.js
> Dep记录数据的发布者和订阅者关系，一个发布者同时会有很多个订阅者，需要对这个订阅者数组进行维护

### watcher.js
> 订阅者，在初始化的时候触发observe的getter将自己添加到订阅者数组中，仅添加一次（利用Dep.target缓存这个订阅者）

### compile.js
> 复制对dom中指令进行编译的类，遍历dom节点，对指令建立watcher和observe之间的关系
