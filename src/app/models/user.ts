export class User {
    constructor(_id=0, name="", birthday="", generation="") {
        this._id= _id;
        this.name = name;
        this.birthday = birthday;
        this.generation = generation;
    }

    _id: number;
    name: string;
    birthday: string;
    generation: string
}
 