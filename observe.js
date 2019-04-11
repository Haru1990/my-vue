function defineReactive(data, key, val) {
    var dep = new Dep();
    
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function(newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            dep.notify();
        }
    });
}
 
function observe(data) {
    if (Object.prototype.toString(data) !== '[object Object]') {
        return;
    }
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
};
