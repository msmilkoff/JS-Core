class Repository {
    constructor(props) {
        this._count = 0;
        this.props = props;
        this._data = new Map(); // map of id => object{}
    }

    get count() {
        return this._count;
    }

    get data() {
        return this._data;
    }

    add(entity) {
        this._validate(entity);
        this._data.set(this._count, entity);
        this._count++;        
        return this._count - 1;
    }

    del(id) {
        if (this._data.has(id)) {
            this._data.delete(id);
        } else {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
    }

    update(id, newEntity) {
        if (this._data.has(id)) {
            this._validate(newEntity);
            this._data.set(id, newEntity);
        } else {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
    }

    get(id) {
        if (this._data.has(id)) {
            return this._data.get(id);
        } else {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
    }

    _validate(entity) {
        let entityPropNames = Object.keys(entity);
        let dataPropNames = Object.keys(this.props);

        for (let propName of entityPropNames) {
            if (!dataPropNames.includes(propName)) {
                throw new Error(`Property ${propName} is missing from the entity!`);
            }

            if (typeof entity[propName] !== this.props[propName]) {
                throw new TypeError(`Property ${propName} is of incorrect type!`);
            }
        }
    }
}
