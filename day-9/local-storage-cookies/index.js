const firstName = "reza";
const age = 20;
localStorage.setItem("name", firstName); // add name to localstorage
localStorage.setItem("age", age); // add name to localstorage
console.log(localStorage.getItem("name")); // get name
// localStorage.removeItem('name') // remove item
console.log(localStorage.getItem("name")); // null
console.log(localStorage.key(0)); // age
console.log(localStorage.key(1)); // name
// localStorage.clear(); // clear items
console.log(localStorage.length); // name and age => 2

localStorage.test = "aflkdjaifks"; // set item
console.log(localStorage.test); // aflkdjaifks

delete localStorage.test; // remove test in localstorage

// looping over keys
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
}
// result => age: 20 -- name: reza

for (let key in localStorage) {
    console.log(key);
    // result => age - name - length - clear - getItem - key - removeItem - setItem
}

// string only to localstorage
localStorage.user = {
    name: "amirali",
};

console.log(localStorage.user); // [object Object]

localStorage.user1 = JSON.stringify({
    name: "jasem",
});
let user1 = JSON.parse(localStorage.user1);
console.log(user1.name);

// session storage
// triggers on updates made to the same storage from other documents
window.onstorage = (event) => {
    // can also use window.addEventListener('storage', event => {
    if (event.key != "now") return;
    alert(event.key + ":" + event.newValue + " at " + event.url);
};

localStorage.setItem("now", Date.now());

// task localstorage
area.value = localStorage.getItem("area");
area.oninput = () => {
    localStorage.setItem("area", area.value);
};
// result => user type => remove => example = hello => ... clear

// cookies
// special characters (spaces), need encoding
let name = "my name";
let value = "John Smith";

// encodes the cookie as my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

alert(document.cookie); // ...; my%20name=John%20Smith
