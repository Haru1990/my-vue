function MyVue (options) {
    var self = this;
    var data = this._data = options.data;
 
    Object.keys(data).forEach(function(key) {
        self._proxy(key);
    });
 
    observe(options.data);
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
