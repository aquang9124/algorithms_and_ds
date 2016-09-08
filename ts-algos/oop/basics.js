var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function Friend(name, age) {
    var _data = {
        name: null,
        age: null
    };
    _data.name = name;
    _data.age = age;
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
var Human = (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.get = function (field) {
        return this[field];
    };
    return Human;
}());
var Engineer = (function (_super) {
    __extends(Engineer, _super);
    function Engineer(name, age, skills) {
        _super.call(this, name, age);
        this.skills = skills;
    }
    Engineer.prototype.build = function (task) {
        if (task === "code") {
            this.skills.programming++;
        }
        else if (task === "algorithms") {
            this.skills.problemSolving++;
        }
        else if (task === "philosophize") {
            this.skills.deepThoughts++;
        }
        else {
            return false;
        }
        return true;
    };
    return Engineer;
}(Human));
var alex = new Engineer("Alex", 24, {
    "programming": 7,
    "problemSolving": 6,
    "deepThoughts": 6
});
console.log(alex.skills);
alex.build("code");
console.log(alex.skills);
