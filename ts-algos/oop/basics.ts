interface FriendProperties {
    name: string;
    age: number;
}

function Friend (name: string, age: number): void {
    let _data: FriendProperties = {
        name: null,
        age: null
    };

    _data.name = name;
    _data.age = age;

    this.set = (objProp: string, data: any) => {
        _data[objProp] = data;

        return true;
    };

    this.get = (objProp: string) => {
        return _data[objProp];
    };
}

Friend.prototype = {
    runTo: function (location: string): string {
        let result: string = `${this.get('name')} ran to ${location}.`;
        return result;
    }
};

class Human {
    constructor(public name: string, public age: number) {}

    get(field: string): string | number {
        return this[field];
    }
}

interface Abilities {
    "programming"?: number;
    "problemSolving"?: number;
    "deepThoughts"?: number;
}

class Engineer extends Human {
    constructor(name: string, age: number, public skills: Abilities) {
        super(name, age);
    }

    build(task: string): boolean {
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
    }
}

let alex = new Engineer("Alex", 24, {
    "programming": 7,
    "problemSolving": 6,
    "deepThoughts": 6
});