export class User {
    constructor(_id="", name="", birthday="", generation="") {
        this._id= _id;
        this.name = name;
        this.birthday = birthday;
        this.generation = generation;
    }

    _id: string;
    name: string;
    birthday: string;
    generation: string
}
 