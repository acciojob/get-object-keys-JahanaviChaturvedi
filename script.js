//your JS code here. If required.
let student ={
	name:"Ram",
	age:"22",
	city:"Ayodhya"
};

let student2 ={
	name:"Shyam"
};

function getKeys(obj){
	return Object.keys(obj);
}
console.log(getKeys(student));
console.log(getKeys(student2));

window.getKeys = getKeys;