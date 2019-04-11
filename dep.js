function Dep() {
    this.subs = [];
}

Dep.target = null;

Dep.prototype.addSub = function(sub) {
    this.subs.push(sub);
}

Dep.prototype.notify = function(sub) {
    var subs = this.subs;
    this.subs.forEach(function(sub) {
        sub.update();
    });
}
