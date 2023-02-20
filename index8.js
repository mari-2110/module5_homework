let person = new Map();
person.set("student 1", "level A");
person.set("student 2", "level B");
person.set("student 3", "level A");
person.set("student 4", "level B");
person.set("student 5", "level A");
person.set("student 6", "level C");
person.set("student 7", "level A");

for (let persons of person.keys()){
    console.log(persons + " is " + person.get(persons));
}