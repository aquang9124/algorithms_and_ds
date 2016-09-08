function Friend (name: string, age: number): void {
    let _data = {};

    _data['name'] = name;
    _data['age'] = age;

    this.set = (objProp: string, data: any) => {
        _data[objProp] = data;

        return true;
    };

    this.get = (objProp: string) => {
        return _data[objProp];
    };
}

Friend.prototype = {
    runTo(location: string): string {
        let result = `${this.get('name')} ran to ${location}.`;
        return result;
    }
};