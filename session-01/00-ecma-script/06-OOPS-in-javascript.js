
// OOPS in JavaScript

var Person = function(){
	// name is private
	var name="-";
	this.getName = () => name;
	this.setName = (nameVal) => {name = nameVal};

	//email is public
	this.email = "email";
	this.getEmail = () => this.email;
	this.setEmail = (email) => {this.email = email};

}

var p = new Person();
console.log("name 1: "+ p.getName());
p.setName("Rama");
console.log("name direct: "+ p.name);
console.log("name 2: "+ p.getName());
console.log("email 1: "+ p.getEmail());

p.setEmail("rama@india.com");
console.log("email direct: "+ p.email);
console.log("email 2: "+ p.getEmail());