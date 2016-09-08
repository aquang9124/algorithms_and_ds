function Friend(name, age) {
    var _data = {};
    _data['name'] = name;
    _data['age'] = age;
    this.set = function (objProp, data) {
        _data[objProp] = data;
        return true;
    };
    this.get = function (objProp) {
        return _data[objProp];
    };
}
Friend.prototype = {
    runTo: function (location) {
        var result = this.get('name') + " ran to " + location + ".";
        return result;
    }
};
var friend = new Friend("Xuan", 25);
console.log(friend.runTo('store'));
