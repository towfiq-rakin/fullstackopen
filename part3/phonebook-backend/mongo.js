const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

//console.log(password, name, number);

const url = `mongodb+srv://towfiqomarrakin_db_user:${password}@phonebook.gfgxqhx.mongodb.net/Person?appName=phonebook`;

//console.log("url ", url);
mongoose.set("strictQuery", false);

try {
  mongoose.connect(url, { family: 4 });
} catch (error) {
  handleError(error);
}



//console.log("connected to MongoDB");
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: name,
  number: number,
});



if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(person.name, " ", person.number);
    });
    mongoose.connection.close();
  });

} else if (process.argv.length === 5) {
  person.save().then((result) => {
    console.log("person saved!");
    //console.log(result);
    mongoose.connection.close();
  });
}  




