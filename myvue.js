function MyVue(options) {
    var self = this;
    var data = this._data = options.data;
    this.$options = options;
 
    Object.keys(data).forEach(function(key) {
        self.proxy(key);
    });
 
    // 劫持数据的get/set操作 添加订阅者以及变化时通知订阅者更新
    observe(options.data);
    
    // 使用compile编译dom中的指令 把watcher和observe关联
    new Compile(options.el, this);
}

// 将对this.xxx的访问代理到this._data.xxx上面来
MyVue.prototype.proxy = function(key) {
    var self = this;
    Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get: function proxyGetter() {
            return self._data[key];
        },
        set: function proxySetter(newVal) {
            self._data[key] = newVal;
        }
    });
}
