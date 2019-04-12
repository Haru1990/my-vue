function MyVue (options) {
    var self = this;
    var data = this._data = options.data;
    this.$options = options;
 
    Object.keys(data).forEach(function(key) {
        self._proxy(key);
    });
 
    observe(options.data);
    
    //  在这里手动添加watcher和observe的关系，实际在vue中是通过指令进行关联     
    // this.$options.el.innerHTML = this.name;
    // new Watcher(this, 'name', function(value) {
    //     this.$options.el.innerHTML = value;
    // });
    // 使用compile
    new Compile(this.$options.el, this);
}

MyVue.prototype._proxy = function (key) {
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
