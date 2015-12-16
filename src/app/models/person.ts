export class Person {
  constructor(
    public id:number,
    public name:string,
    public email:string,
    public city:string) { }

    toJSON() {
        return {
            'id': this.id,
            'name': this.name,
            'email': this.email,
            'city': this.city
        };
    }

    clone() {
        return new Person(this.id, this.name, this.email, this.city);
    }

    copyFrom(person: Person) {
        this.id = person.id;
        this.name = person.name;
        this.email = person.email;
        this.city = person.city;
    }
}
